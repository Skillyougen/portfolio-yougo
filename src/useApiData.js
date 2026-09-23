import { useEffect, useState } from 'react'

/**
 * Charge une donnée de l'API en gardant le site affichable en toutes
 * circonstances.
 *
 * - Pendant un court délai de grâce, on attend l'API sans rien afficher
 *   (`loading`) pour éviter de montrer des données de secours qui seraient
 *   remplacées une fraction de seconde plus tard.
 * - Passé ce délai — typiquement au réveil du service sur Render — les
 *   données de secours s'affichent, puis sont remplacées dès que l'API répond.
 * - En cas d'échec, les données de secours restent en place.
 */
export default function useApiData(fetcher, fallback, graceMs = 2500) {
  const [data, setData] = useState(null)
  const [source, setSource] = useState('loading') // 'loading' | 'api' | 'fallback'

  useEffect(() => {
    let settled = false
    let active = true

    const grace = setTimeout(() => {
      if (active && !settled) { setData(fallback); setSource('fallback') }
    }, graceMs)

    fetcher()
      .then((result) => {
        if (!active) return
        settled = true
        setData(result)
        setSource('api')
      })
      .catch((err) => {
        if (!active) return
        settled = true
        setData(fallback)
        setSource('fallback')
        // Invisible pour les visiteurs, mais indispensable pour comprendre
        // pourquoi le contenu du back-office n'apparaît pas : sans ce message,
        // le repli sur les données statiques est totalement silencieux.
        // Un échec « Failed to fetch » sans code HTTP signale le plus souvent
        // une origine refusée par le CORS de l'API.
        console.warn(
          `[YOUGO] API injoignable (${err?.status ? 'HTTP ' + err.status : err?.message || err}) : `
          + 'données de secours affichées à la place du contenu du back-office.'
        )
      })
      .finally(() => clearTimeout(grace))

    return () => { active = false; clearTimeout(grace) }
    // fetcher et fallback sont des références stables définies au niveau module.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, source, loading: source === 'loading' }
}
