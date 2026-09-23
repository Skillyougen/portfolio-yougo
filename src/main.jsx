import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// En production, index.html contient déjà le site pré-rendu : React s'y
// rattache (hydratation) au lieu de tout reconstruire. En développement, la
// racine est vide et le rendu se fait normalement.
if (root.firstElementChild) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)
