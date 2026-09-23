// ─── NAVIGATION ───────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Goals', href: '#goals' },
  { label: 'Contact', href: '#contact' },
]

// ─── SKILLS ───────────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    cat: 'Frontend',
    color: '#E8533A',
    bg: '#FDF1EE',
    items: ['React.js', 'JavaScript', 'HTML / CSS', 'React Native'],
  },
  {
    cat: 'Backend',
    color: '#2563EB',
    bg: '#EEF3FD',
    items: ['Laravel', 'Django'],
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
    items: ['MySQL', 'SQL'],
  },
]

// ─── SERVICES (ABOUT) ─────────────────────────────────────
export const SERVICES = [
  {
    icon: 'language',
    title: 'Website Development',
    desc: 'Applications web modernes et performantes avec React.js, Laravel ou Django.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile App',
    desc: 'Applications cross-platform fluides avec React Native.',
  },
  {
    icon: 'desktop_windows',
    title: 'Desktop Development',
    desc: 'Applications desktop robustes en C# et Java avec architecture multi-couches.',
  },
  {
    icon: 'sports_esports',
    title: 'Game Development',
    desc: 'Jeux interactifs développés avec Unity et C# sous Visual Studio.',
  },
]

// ─── PROJECTS ─────────────────────────────────────────────
export const INITIAL_PROJECTS = [
  {
    id: 1,
    title: 'Portfolio Web',
    desc: 'Portfolio personnel développé en React.js avec Tailwind CSS et Framer Motion. Animations fluides, panel secret, design minimaliste premium.',
    tags: ['React.js', 'Tailwind', 'Framer Motion'],
    cat: 'web',
    github: '#',
    demo: '#',
    color: '#E8533A',
  },
  {
    id: 2,
    title: 'App Mobile Cross-Platform',
    desc: 'Application mobile développée avec React Native intégrant une base MySQL et une interface utilisateur élégante.',
    tags: ['React Native', 'MySQL', 'JavaScript'],
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
    value: '+237 678 99 30 41',
    href: 'https://wa.me/237678993041',
    icon: 'chat',
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
    desc: "Allier mes compétences FullStack, Desktop et Gaming avec l'IA pour bâtir la prochaine génération de produits numériques — des expériences qui transforment la vie des utilisateurs.",
    color: '#059669',
  },
]
