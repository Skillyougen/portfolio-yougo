/**
 * Icône Google Material Symbols.
 *
 * La taille est fixée en style en ligne : la feuille de Google impose 24 px à
 * la classe .material-symbols-outlined, qui l'emporterait sinon sur les
 * classes de taille Tailwind selon l'ordre de chargement.
 *
 * Sans `label`, l'icône est décorative et masquée aux lecteurs d'écran.
 */
export default function Icon({ name, size = 20, filled = false, label, className = '', style }) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}`,
        ...style,
      }}
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      {name}
    </span>
  )
}
