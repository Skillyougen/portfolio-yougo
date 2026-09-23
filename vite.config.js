import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { googleFontsIconsUrl } from './src/icons.js'

// Injecte dans index.html la feuille Google Fonts des icônes, générée à
// partir du registre src/icons.js : le lien ne peut pas diverger des icônes
// réellement utilisées.
const materialSymbols = () => ({
  name: 'material-symbols',
  transformIndexHtml: () => [
    { tag: 'link', attrs: { rel: 'stylesheet', href: googleFontsIconsUrl() }, injectTo: 'head' },
  ],
})

export default defineConfig({
  plugins: [react(), materialSymbols()],
})
