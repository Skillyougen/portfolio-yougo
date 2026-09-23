# ⚡ YOUGO Portfolio — Guide d'installation complet

## Structure du projet

```
portfolio-yougo/
├── public/
│   └── photo.png          ← Ta photo sans fond (à placer ici)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Goals.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 1. Prérequis

Installe **Node.js LTS** depuis : https://nodejs.org

Vérifie l'installation :
```bash
node -v   # doit afficher v18+ ou v20+
npm -v    # doit afficher 9+ ou 10+
```

---

## 2. Installation

Ouvre un terminal dans le dossier `portfolio-yougo/` :

```bash
npm install
```

Cela installe : React, Vite, Tailwind CSS, Framer Motion, React Icons.

---

## 3. Lancer en développement

```bash
npm run dev
```

Ouvre : **http://localhost:5173**

La page se recharge automatiquement à chaque modification. 🎉

---

## 4. Ajouter ta photo

### Étape A — Supprimer le fond
1. Va sur **https://remove.bg**
2. Upload ta photo
3. Télécharge le fichier **.PNG** (fond transparent)

### Étape B — Placer la photo
Copie le fichier PNG dans `public/` et renomme-le `photo.png`.

### Étape C — L'intégrer dans le Hero
Ouvre `src/components/Hero.jsx`, trouve ce bloc :

```jsx
{/* Photo — remplace ce bloc par <img src="/photo.png" ... /> */}
<div className="absolute inset-0 flex flex-col items-center justify-center">
  <span className="font-serif text-8xl font-black text-dark/10 select-none">YG</span>
  ...
</div>
```

Remplace-le par :

```jsx
<img
  src="/photo.png"
  alt="YOUGO — Pascal Yohann Saurel"
  className="absolute inset-0 w-full h-full object-cover object-top"
  style={{ mixBlendMode: 'multiply' }}
/>
```

---

## 5. Ajouter ton vrai CV

Le CV actuel est `public/cv-yohann-fomo-ngankamg.pdf`, référencé par `PROFILE.cv`
dans `src/data.js` (boutons « Mon CV », sitemap).

Pour une nouvelle version : dépose le PDF dans `public/` **sous un nouveau nom**,
mets à jour `PROFILE.cv`, et fais pointer la redirection de `vercel.json` vers ce
nouveau nom. Changer de nom garantit qu'aucun navigateur ni cache ne resservira
l'ancienne version ; l'ancienne adresse `/cv-yougo.pdf` redirige vers la nouvelle.

---

## 6. Personnaliser les projets

Modifie le tableau `INITIAL_PROJECTS` dans `src/data.js` :

```js
{
  id: 1,
  title: 'Nom de ton projet',
  desc: 'Description courte et claire.',
  tags: ['React', 'Firebase'],
  cat: 'web',          // web | mobile | desktop | gaming
  github: 'https://github.com/ton-repo',
  demo: 'https://ton-site.vercel.app',
  color: '#E8533A',
}
```

---

## 7. Panel secret

Clique **5 fois rapidement** sur le footer pour ouvrir le panel secret.

Tu peux y ajouter des projets dynamiquement (sans modifier le code).

Les dots rouges s'allument au fur et à mesure des clics.

---

## 8. Mettre en ligne — Vercel (gratuit, recommandé)

### Option A — Interface web
1. `npm run build` → génère le dossier `dist/`
2. Va sur **https://vercel.com**
3. "Add New Project" → glisse le dossier `dist/`
4. Ton site est en ligne en 30 secondes !

### Option B — CLI
```bash
npm install -g vercel
vercel
```
Suis les instructions. Ton URL sera `portfolio-yougo.vercel.app`.

### Option B — Netlify (drag & drop)
1. `npm run build`
2. Va sur **https://netlify.com**
3. Glisse le dossier `dist/` sur la page
4. En ligne !

---

## 9. Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Développement local (hot reload) |
| `npm run build` | Compile pour la production |
| `npm run preview` | Prévisualise la version compilée |

---

## 10. Technologies utilisées

| Technologie | Rôle |
|-------------|------|
| React.js 18 | Framework UI |
| Vite | Bundler ultra-rapide |
| Tailwind CSS 3 | Styles utilitaires |
| Framer Motion | Animations fluides |
| React Icons | Icônes |

---

## Rappel design

- Fond **crème** (#F5F3EE) — style Madison minimaliste
- Typographie **Playfair Display** (serif) + **DM Sans**
- Accent : **rouge** #E8533A
- Animations : **Framer Motion** au scroll et au hover

Made with ❤️ — YOUGO ⚡⚡
# portfolio-yougo

---

## 11. Référencement (SEO)

Tout est généré au build à partir de **`src/seo.js`** (titre, description, données) :

| Élément | Rôle |
|---|---|
| Contenu pré-rendu (`scripts/prerender.mjs`) | Le HTML servi contient déjà tout le texte du site : lisible par Google, Bing et les aperçus de liens sans JavaScript. |
| Titre, description, balise canonique | Ce qu'affiche Google dans ses résultats. |
| Open Graph / Twitter + `public/og-image.jpg` | Aperçu (image 1200 × 630) quand le lien est partagé sur LinkedIn, WhatsApp, Facebook, Discord… |
| Données structurées JSON-LD (`Person`, `ProfilePage`) | Nom, formation (EPSI Paris), diplômes, certification Claude 101, compétences — pour le panneau de connaissances Google. |
| `robots.txt` et `sitemap.xml` | Générés dans `dist/` avec l'adresse de `VITE_SITE_URL`. |
| Icônes, `site.webmanifest`, photo WebP | Icône sur mobile, chargement plus rapide (critère de classement). |

### Déclarer le site à Google (une seule fois)

1. Ouvrir <https://search.google.com/search-console> → **Ajouter une propriété** → **Préfixe de l'URL** → `https://portfolio-yougo-qfli.vercel.app/`.
2. Choisir la méthode **Balise HTML**, copier la valeur de `content="…"`.
3. Sur Vercel → projet portfolio → **Settings → Environment Variables** : `VITE_GOOGLE_SITE_VERIFICATION` = cette valeur, puis **redéployer**.
4. Revenir dans Search Console → **Valider**, puis **Sitemaps** → soumettre `sitemap.xml`.
5. **Inspection de l'URL** → saisir l'adresse du site → **Demander l'indexation**.

Même principe pour Bing (<https://www.bing.com/webmasters>) avec `VITE_BING_SITE_VERIFICATION` — Bing peut aussi importer directement la propriété depuis Search Console.

Le back-office et l'API sont, eux, **exclus** des moteurs de recherche (`noindex`).
