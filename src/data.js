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
  cv: '/cv-yohann-fomo-ngankamg-v3.pdf',
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
    items: ['React', 'Next.js', 'NestJS', 'Laravel', 'Tailwind CSS', 'React Native'],
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
    note: 'Les bases.',
    items: ['Unity (C#)'],
  },
  {
    cat: 'Base de données',
    color: '#D97706',
    bg: '#FFFBEB',
    note: 'Niveau moyen.',
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
    desc: 'Premiers prototypes de jeux sous Unity (C#) : les bases du moteur et du gameplay.',
  },
]

// ─── PROJECTS ─────────────────────────────────────────────
export const INITIAL_PROJECTS = [
  {
    id: 1,
    title: 'Portfolio personnel',
    desc: "Portfolio avec back-office d'administration des projets, des liens et des messages.",
    tags: ['Front : React', 'Back : Laravel', 'Back-office'],
    cat: 'web',
    github: 'https://github.com/Skillyougen/portfolio-yougo',
    demo: '#',
    color: '#E8533A',
  },
  {
    id: 2,
    title: 'Yougo Worlds',
    desc: 'Plateforme de publication de projets numériques (manga/BD, jeux, films), avec back-office.',
    tags: ['Front : React', 'Back : Laravel', 'Back-office'],
    cat: 'web',
    github: '#',
    demo: '#',
    color: '#7C3AED',
  },
  {
    id: 3,
    title: 'YouFolio Creator',
    desc: 'Générateur de CV et de portfolios.',
    tags: ['Front : Next.js', 'Back : NestJS'],
    cat: 'web',
    github: '#',
    demo: '#',
    color: '#2563EB',
  },
  {
    id: 4,
    title: 'Gest F',
    desc: 'Gestion de comptes bancaires et de budget mensuel.',
    tags: ['Front : Next.js', 'Back : NestJS'],
    cat: 'web',
    github: '#',
    demo: '#',
    color: '#059669',
  },
  {
    id: 5,
    title: 'SEDJA Peinture',
    desc: "Site vitrine d'une entreprise de peinture.",
    tags: ['Front : HTML / CSS / JavaScript'],
    cat: 'web',
    github: '#',
    demo: '#',
    color: '#D97706',
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
