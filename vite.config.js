import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { googleFontsIconsUrl } from './src/icons.js'
import { SEO, headTags, siteUrl, robotsTxt, sitemapXml } from './src/seo.js'

// Injecte dans index.html la feuille Google Fonts des icônes, générée à
// partir du registre src/icons.js : le lien ne peut pas diverger des icônes
// réellement utilisées.
const materialSymbols = () => ({
  name: 'material-symbols',
  transformIndexHtml: () => [
    { tag: 'link', attrs: { rel: 'stylesheet', href: googleFontsIconsUrl() }, injectTo: 'head' },
  ],
})

// Référencement : balises <head>, JSON-LD, robots.txt et sitemap.xml, tous
// tirés de src/seo.js et de l'adresse du site (VITE_SITE_URL).
const seo = (env) => {
  let ssr = false
  return {
    name: 'seo',
    configResolved: (config) => { ssr = !!config.build.ssr },
    transformIndexHtml: (html) => ({
      html: html.replace(/<title>[^<]*<\/title>/, `<title>${SEO.title}</title>`),
      tags: headTags(env),
    }),
    generateBundle() {
      if (ssr) return
      const url = siteUrl(env)
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robotsTxt(url) })
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemapXml(url) })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return {
    plugins: [react(), materialSymbols(), seo(env)],
  }
})
