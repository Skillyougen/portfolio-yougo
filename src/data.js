// ─── NAVIGATION ───────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Objectifs', href: '#goals' },
]

// ─── PROFIL ───────────────────────────────────────────────
export const PROFILE = {
  phone: '+33 6 63 78 86 67',
  phoneHref: 'tel:+33663788667',
  email: 'yohannngankamg@gmail.com',
  location: 'Paris, France',
  // Nom de fichier changé à chaque nouvelle version du CV : aucun navigateur
  // ni cache ne peut resservir l'ancienne (l'ancienne adresse redirige ici).
  cv: '/cv-yohann-fomo-ngankamg-v2.pdf',
  cvFileName: 'CV - Yohann FOMO NGANKAMG.pdf',
}

// ─── CURSUS SCOLAIRE ──────────────────────────────────────
// Du plus ancien au plus récent : la frise se lit comme un escalier.
export const EDUCATION = [
  {
    years: '2021 – 2022',
    level: 'Première',
    diploma: 'Probatoire',
    detail: 'Série D — mathématiques et sciences de la vie',
    school: 'Cameroun',
    icon: 'menu_book',
  },
  {
    years: '2022 – 2023',
    level: 'Bac',
    diploma: 'Baccalauréat général',
    detail: 'Série D — mathématiques et sciences de la vie',
    school: 'Lycée bilingue de Ngodi Bakoko',
    icon: 'school',
  },
  {
    years: '2024 – 2026',
    level: 'Bac+2',
    diploma: 'DEC canadien',
    detail: 'Programmation et applications mobiles',
    school: 'CCNB (Canada) · IUC Douala',
    icon: 'workspace_premium',
  },
  {
    years: '2026 – en cours',
    level: 'Bac+3',
    diploma: 'Bachelor DEVIA',
    detail: 'Développeur en intelligence artificielle',
    school: 'EPSI Paris',
    current: true,
  },
]

export const CERTIFICATION = {
  title: 'Claude 101',
  issuer: 'Anthropic Academy',
  desc: "Fondamentaux de Claude, l'assistant IA d'Anthropic, et de son usage au quotidien.",
  url: 'https://academy.claude.com/verify/61fba659898d01e4801e399e9b8ceb07',
}

// ─── SKILLS ───────────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    // Honnêteté avant tout : le web et le mobile avancés sont réalisés avec
    // l'IA, qui écrit le code que je conçois, pilote, teste et corrige.
    cat: 'Vibe coding — web & mobile',
    color: '#2563EB',
    bg: '#EEF3FD',
    note: "Réalisé avec l'IA (Claude) : je conçois, je pilote, je teste et je corrige — l'IA écrit le code.",
    items: ['React.js', 'JavaScript', 'Tailwind CSS', 'Laravel (PHP)', 'API REST', 'React Native'],
    wide: true,
  },
  {
    cat: 'Web — les bases',
    color: '#E8533A',
    bg: '#FDF1EE',
    note: 'Ce que je code moi-même.',
    items: ['HTML', 'CSS'],
  },
  {
    cat: 'Desktop',
    color: '#7C3AED',
    bg: '#F3EEFF',
    items: ['C# (.NET)', 'Java'],
  },
  {
    cat: 'Gaming',
    color: '#059669',
    bg: '#EDFAF4',
    items: ['Unity (C#)', 'Visual Studio'],
  },
  {
    cat: 'Base de données',
    color: '#D97706',
    bg: '#FFFBEB',
    items: ['SQL', 'MySQL', 'PostgreSQL'],
  },
]

// ─── SERVICES (ABOUT) ─────────────────────────────────────
export const SERVICES = [
  {
    icon: 'language',
    title: 'Développement web',
    desc: "Sites et applications web en vibe coding : je conçois et pilote l'IA (Claude), sur une base HTML/CSS que je maîtrise.",
  },
  {
    icon: 'smartphone',
    title: 'Applications mobiles',
    desc: "Applications React Native réalisées en vibe coding, avec l'IA comme co-développeur.",
  },
  {
    icon: 'desktop_windows',
    title: 'Logiciels desktop',
    desc: 'Applications desktop robustes en C# et Java avec architecture multi-couches.',
  },
  {
    icon: 'sports_esports',
    title: 'Jeu vidéo',
    desc: 'Jeux interactifs développés avec Unity et C# sous Visual Studio.',
  },
]

// ─── PROJECTS ─────────────────────────────────────────────
export const INITIAL_PROJECTS = [
  {
    id: 1,
    title: 'Portfolio Web',
    desc: 'Portfolio personnel réalisé en vibe coding avec Claude (React.js, Tailwind CSS, Framer Motion) : animations fluides, back-office, design éditorial.',
    tags: ['Vibe coding', 'React.js', 'Tailwind'],
    cat: 'web',
    github: '#',
    demo: '#',
    color: '#E8533A',
  },
  {
    id: 2,
    title: 'App Mobile Cross-Platform',
    desc: 'Application mobile réalisée en vibe coding avec React Native, intégrant une base MySQL et une interface soignée.',
    tags: ['Vibe coding', 'React Native', 'MySQL'],
    cat: 'mobile',
    github: '#',
    demo: '#',
    color: '#2563EB',
  },
  {
    id: 3,
    title: 'Système Desktop 3 Tiers',
    desc: "Application desktop C# avec architecture multicouche (présentation, logique, données) et interface WinForms.",
    tags: ['C#', 'SQL Server', 'WinForms'],
    cat: 'desktop',
    github: '#',
    demo: '#',
    color: '#7C3AED',
  },
  {
    id: 4,
    title: 'Mini-Jeu Unity',
    desc: 'Prototype de jeu 2D développé avec Unity et C# — exploration des mécaniques de gameplay et du moteur Unity.',
    tags: ['Unity', 'C#', 'Visual Studio'],
    cat: 'gaming',
    github: '#',
    demo: '#',
    color: '#059669',
  },
]

// ─── CONTACT LINKS ────────────────────────────────────────
// Données de secours : en fonctionnement normal, projets et liens viennent du
// back-office via l'API. Ceux-ci ne s'affichent que si l'API est injoignable.
export const CONTACT_LINKS = [
  {
    platform: 'email',
    label: 'Email',
    value: 'yohannngankamg@gmail.com',
    href: 'mailto:yohannngankamg@gmail.com',
    icon: 'mail',
  },
  {
    platform: 'whatsapp',
    label: 'WhatsApp',
    value: '+33 6 63 78 86 67',
    href: 'https://wa.me/33663788667',
    icon: 'chat',
  },
  {
    platform: 'phone',
    label: 'Téléphone',
    value: '+33 6 63 78 86 67',
    href: 'tel:+33663788667',
    icon: 'call',
  },
  {
    platform: 'github',
    label: 'GitHub',
    value: 'github.com/skillyougen',
    href: 'https://github.com/skillyougen',
    icon: 'code',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/yougo',
    href: 'https://linkedin.com',
    icon: 'work',
  },
]

// ─── GOALS ────────────────────────────────────────────────
export const GOALS = [
  {
    num: '01',
    title: 'Expert en Intelligence Artificielle',
    desc: "Devenir un développeur spécialisé en IA — maîtriser le machine learning, le deep learning et les architectures modernes pour concevoir des systèmes intelligents qui changent le monde.",
    color: '#E8533A',
  },
  {
    num: '02',
    title: 'Acteur du marché IA',
    desc: "M'investir profondément sur le marché de l'intelligence artificielle, comprendre ses mécanismes, ses acteurs et ses opportunités, pour devenir un expert reconnu dans la création de solutions IA à fort impact.",
    color: '#2563EB',
  },
  {
    num: '03',
    title: 'Innovation & Impact',
    desc: "Allier le vibe coding, le développement desktop et le jeu vidéo avec l'IA pour bâtir la prochaine génération de produits numériques — des expériences qui transforment la vie des utilisateurs.",
    color: '#059669',
  },
]
