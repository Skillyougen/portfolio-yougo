// ─── RÉFÉRENCEMENT ────────────────────────────────────────
// Source unique des informations de référencement : vite.config.js en tire
// les balises <head>, les données structurées (JSON-LD), sitemap.xml et
// robots.txt au moment du build.
//
// Fichier en JavaScript pur (sans JSX) : il est importé par vite.config.js.

import { PROFILE, EDUCATION, CERTIFICATION, SKILL_GROUPS } from './data.js'

/** Adresse publique du site, sans barre finale. Surchargeable par VITE_SITE_URL. */
export const DEFAULT_SITE_URL = 'https://portfolio-yougo-qfli.vercel.app'

export const siteUrl = (env = {}) =>
  String(env.VITE_SITE_URL || DEFAULT_SITE_URL).trim().replace(/\/+$/, '')

export const SEO = {
  // ~60 caractères : au-delà, Google tronque le titre dans ses résultats.
  title: 'Yohann FOMO NGANKAMG (Yougo) — Développeur IA · Portfolio',
  // ~155 caractères.
  description:
    "Portfolio de Pascal Yohann Saurel FOMO NGANKAMG (Yougo), étudiant en Bachelor Développeur en IA (DEVIA) "
    + "à l'EPSI Paris : projets web, mobile, desktop et IA.",
  author: 'Pascal Yohann Saurel FOMO NGANKAMG',
  locale: 'fr_FR',
  image: '/og-image.jpg',
  imageAlt: "Yougo — Développeur en intelligence artificielle, Bachelor DEVIA à l'EPSI Paris",
  sameAs: ['https://github.com/skillyougen'],
}

const escapeAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Balises <head> de référencement, au format de transformIndexHtml de Vite. */
export function headTags(env = {}) {
  const url = siteUrl(env)
  const image = url + SEO.image
  const meta = (attrs) => ({ tag: 'meta', attrs, injectTo: 'head' })

  const tags = [
    meta({ name: 'description', content: SEO.description }),
    meta({ name: 'author', content: SEO.author }),
    meta({ name: 'robots', content: 'index, follow, max-image-preview:large' }),
    { tag: 'link', attrs: { rel: 'canonical', href: url + '/' }, injectTo: 'head' },

    // Aperçu lors d'un partage (LinkedIn, WhatsApp, Facebook, Discord…).
    meta({ property: 'og:type', content: 'profile' }),
    meta({ property: 'og:site_name', content: 'Yougo — Portfolio' }),
    meta({ property: 'og:locale', content: SEO.locale }),
    meta({ property: 'og:url', content: url + '/' }),
    meta({ property: 'og:title', content: SEO.title }),
    meta({ property: 'og:description', content: SEO.description }),
    meta({ property: 'og:image', content: image }),
    meta({ property: 'og:image:width', content: '1200' }),
    meta({ property: 'og:image:height', content: '630' }),
    meta({ property: 'og:image:alt', content: SEO.imageAlt }),
    meta({ property: 'profile:first_name', content: 'Pascal Yohann Saurel' }),
    meta({ property: 'profile:last_name', content: 'FOMO NGANKAMG' }),
    meta({ property: 'profile:username', content: 'Yougo' }),
    meta({ name: 'twitter:card', content: 'summary_large_image' }),
    meta({ name: 'twitter:title', content: SEO.title }),
    meta({ name: 'twitter:description', content: SEO.description }),
    meta({ name: 'twitter:image', content: image }),
    meta({ name: 'twitter:image:alt', content: SEO.imageAlt }),

    {
      tag: 'script',
      attrs: { type: 'application/ld+json' },
      // « </ » échappé : le JSON ne peut pas refermer la balise <script>.
      children: JSON.stringify(structuredData(url)).replace(/<\//g, '<\\/'),
      injectTo: 'head',
    },
  ]

  // Codes de validation Search Console / Bing Webmaster Tools, à renseigner
  // dans les variables d'environnement Vercel une fois obtenus.
  if (env.VITE_GOOGLE_SITE_VERIFICATION) {
    tags.push(meta({ name: 'google-site-verification', content: env.VITE_GOOGLE_SITE_VERIFICATION }))
  }
  if (env.VITE_BING_SITE_VERIFICATION) {
    tags.push(meta({ name: 'msvalidate.01', content: env.VITE_BING_SITE_VERIFICATION }))
  }
  return tags
}

/** Données structurées schema.org : la page de profil d'une personne. */
export function structuredData(url) {
  const person = {
    '@type': 'Person',
    '@id': `${url}/#person`,
    name: 'Pascal Yohann Saurel FOMO NGANKAMG',
    alternateName: 'Yougo',
    givenName: 'Pascal Yohann Saurel',
    familyName: 'FOMO NGANKAMG',
    jobTitle: 'Étudiant développeur en intelligence artificielle',
    description: SEO.description,
    url: url + '/',
    image: url + '/photo.png',
    email: `mailto:${PROFILE.email}`,
    telephone: PROFILE.phoneHref.replace('tel:', ''),
    address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'EPSI Paris',
      alternateName: "EPSI — l'École d'ingénierie informatique",
      url: 'https://www.epsi.fr',
    },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'CCNB — Collège communautaire du Nouveau-Brunswick' },
      { '@type': 'HighSchool', name: EDUCATION.find((e) => e.diploma.startsWith('Baccalauréat'))?.school },
    ],
    hasCredential: [
      ...EDUCATION.filter((e) => !e.current).map((e) => ({
        '@type': 'EducationalOccupationalCredential',
        name: `${e.diploma} — ${e.detail}`,
        credentialCategory: 'diplôme',
        dateCreated: e.years.slice(-4),
      })),
      {
        '@type': 'EducationalOccupationalCredential',
        name: CERTIFICATION.title,
        credentialCategory: 'certification',
        url: CERTIFICATION.url,
        recognizedBy: { '@type': 'Organization', name: CERTIFICATION.issuer },
      },
    ],
    knowsAbout: ['Intelligence artificielle', ...SKILL_GROUPS.flatMap((g) => g.items)],
    knowsLanguage: ['fr', 'en'],
    sameAs: SEO.sameAs,
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${url}/#page`,
        url: url + '/',
        name: SEO.title,
        description: SEO.description,
        inLanguage: 'fr-FR',
        mainEntity: { '@id': `${url}/#person` },
        primaryImageOfPage: { '@type': 'ImageObject', url: url + SEO.image, width: 1200, height: 630 },
      },
      person,
    ],
  }
}

export function robotsTxt(url) {
  return `# Portfolio de Pascal Yohann Saurel FOMO NGANKAMG (Yougo)\nUser-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`
}

export function sitemapXml(url, lastmod = new Date().toISOString().slice(0, 10)) {
  const entry = (loc, priority) =>
    `  <url>\n    <loc>${escapeAttr(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
    entry(`${url}/`, '1.0'),
    entry(`${url}${PROFILE.cv}`, '0.6'),
  ].join('\n')}\n</urlset>\n`
}
