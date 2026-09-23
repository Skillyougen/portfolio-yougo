// Rendu du site en HTML au moment du build (voir scripts/prerender.mjs).
import { renderToString } from 'react-dom/server'
import App from './App'

export const render = () => renderToString(<App />)
