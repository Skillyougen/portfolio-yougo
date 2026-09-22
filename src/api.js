// ─── CLIENT API ───────────────────────────────────────────
// Accès en lecture aux données publiques du portfolio, et envoi du
// formulaire de contact. fetch suffit : pas de dépendance supplémentaire.

// VITE_API_URL prime si elle est définie (sur Vercel ou dans un .env).
// Sinon : l'API de production pour un build, le serveur local en développement.
const API_URL = (
  import.meta.env.VITE_API_URL
  || (import.meta.env.DEV ? 'http://localhost:8000/api' : 'https://backend-yougo.onrender.com/api')
).replace(/\/+$/, '')

// L'offre gratuite de Render met le service en veille après 15 minutes sans
// trafic : le premier appel peut prendre jusqu'à une minute.
const TIMEOUT_MS = 70000

async function request(path, options = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const res = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: { Accept: 'application/json', ...(options.headers || {}) },
      signal: controller.signal,
    })
    const data = await res.json().catch(() => null)
    if (!res.ok) {
      const error = new Error(data?.message || `Erreur ${res.status}`)
      error.status = res.status
      error.errors = data?.errors || null
      throw error
    }
    return data
  } finally {
    clearTimeout(timer)
  }
}

// ── Adaptateurs ──────────────────────────────────────────
// L'API renvoie les noms de champs de la base ; les composants utilisent des
// noms courts hérités de la version statique. La conversion est faite ici,
// une seule fois.

export const CAT_COLORS = { web: '#E8533A', mobile: '#2563EB', desktop: '#7C3AED', gaming: '#059669' }

const toProject = (p) => ({
  id: p.id,
  title: p.title,
  desc: p.description,
  tags: Array.isArray(p.tags) ? p.tags : [],
  cat: p.category,
  github: p.github_url || '',
  demo: p.demo_url || '',
  image: p.image_url || '',
  color: CAT_COLORS[p.category] || '#111111',
})

/** Texte affiché sous le libellé : l'adresse sans son schéma. */
const displayValue = (url) =>
  url.replace(/^mailto:/i, '').replace(/^https?:\/\/(www\.)?/i, '').replace(/\/+$/, '')

const toContactLink = (l) => ({
  label: l.label,
  value: displayValue(l.url),
  href: l.url,
  icon: l.icon || '🔗',
})

// ── Appels ───────────────────────────────────────────────

export const fetchProjects = async () => (await request('/public/projects')).map(toProject)

export const fetchContactLinks = async () => (await request('/public/contact-links')).map(toContactLink)

export const sendMessage = ({ name, email, message, website }) =>
  request('/public/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message, website }),
  })

/**
 * Message lisible à partir d'une erreur de l'API.
 * Une réponse 422 détaille l'erreur par champ ; 429 signale la limite anti-spam.
 */
export function errorMessage(err) {
  if (err.name === 'AbortError') {
    return 'Le serveur met trop de temps à répondre. Réessayez dans un instant.'
  }
  if (err.status === 429) {
    return 'Trop de messages envoyés depuis votre connexion. Réessayez dans quelques minutes.'
  }
  if (err.errors) {
    return Object.values(err.errors).flat().join(' ')
  }
  if (!err.status) {
    return 'Impossible de joindre le serveur. Vérifiez votre connexion.'
  }
  return err.message
}
