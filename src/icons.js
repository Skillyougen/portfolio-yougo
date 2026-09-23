// ─── ICÔNES (Google Material Symbols) ─────────────────────
// Registre unique des icônes du site. vite.config.js en tire le lien vers
// Google Fonts, limité à ces seules icônes : quelques Ko au lieu des 2,3 Mo
// de la police complète. Une icône absente de ce registre ne s'afficherait
// pas — elle doit être ajoutée ici.
//
// Fichier en JavaScript pur (sans JSX) : il est importé par vite.config.js.

export const CATEGORY_ICONS = {
  web: 'language',
  mobile: 'smartphone',
  desktop: 'desktop_windows',
  gaming: 'sports_esports',
}

/** Icône associée aux plateformes courantes des liens de contact. */
export const PLATFORM_ICONS = {
  email: 'mail',
  mail: 'mail',
  whatsapp: 'chat',
  github: 'code',
  gitlab: 'code',
  linkedin: 'work',
  twitter: 'alternate_email',
  x: 'alternate_email',
  instagram: 'photo_camera',
  facebook: 'group',
  youtube: 'smart_display',
  telegram: 'send',
  phone: 'call',
  telephone: 'call',
  website: 'language',
  site: 'language',
}

/**
 * Icônes proposées dans le back-office pour les liens de contact.
 * Doit rester alignée sur LINK_ICON_CHOICES de admin-yougo/src/icons.js.
 */
export const LINK_ICON_CHOICES = [
  'mail', 'alternate_email', 'chat', 'call', 'smartphone', 'send',
  'code', 'work', 'language', 'link', 'photo_camera', 'smart_display',
  'group', 'location_on', 'description', 'event',
]

/** Icônes de l'interface elle-même. */
const UI_ICONS = [
  'arrow_forward', 'north_east', 'download', 'check_circle', 'bolt',
  'location_on', 'school', 'mail', 'smartphone', 'auto_awesome',
]

export const ICON_NAMES = [...new Set([
  ...Object.values(CATEGORY_ICONS),
  ...Object.values(PLATFORM_ICONS),
  ...LINK_ICON_CHOICES,
  ...UI_ICONS,
])].sort()

const KNOWN = new Set(ICON_NAMES)

/**
 * Icône à afficher pour un lien de contact. Un nom inconnu — ou un ancien
 * emoji encore présent en base — est remplacé par l'icône de la plateforme.
 */
export function resolveLinkIcon(icon, platform) {
  if (icon && KNOWN.has(icon)) return icon
  return PLATFORM_ICONS[String(platform || '').toLowerCase()] || 'link'
}

/** Feuille de style Google Fonts limitée aux icônes du registre. */
export const googleFontsIconsUrl = () =>
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300..500,0..1,0'
  + `&icon_names=${ICON_NAMES.join(',')}&display=block`
