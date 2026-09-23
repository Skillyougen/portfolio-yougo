// Pré-rendu : insère le HTML du site dans dist/index.html, pour que les
// moteurs de recherche et les aperçus de liens lisent le contenu sans
// exécuter de JavaScript. Lancé par « npm run build », après les deux builds
// de Vite (client dans dist/, rendu serveur dans dist-ssr/).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const { render } = await import(`${root}dist-ssr/entry-server.js`)

const file = `${root}dist/index.html`
const html = readFileSync(file, 'utf8')
const marker = '<div id="root"><!--app--></div>'
if (!html.includes(marker)) throw new Error(`Marqueur ${marker} introuvable dans dist/index.html`)

const app = render()
writeFileSync(file, html.replace(marker, `<div id="root">${app}</div>`))
rmSync(`${root}dist-ssr`, { recursive: true, force: true })
console.log(`Pré-rendu : ${Math.round(app.length / 1024)} Ko de HTML insérés dans dist/index.html`)
