import { motion } from 'framer-motion'
import { reveal } from '../../motion'

/**
 * En-tête de section « magazine » : filet avec numéro et rubrique, grand
 * titre condensé imprimé dans le papier, mot manuscrit orange en surimpression.
 */
export default function SectionTitle({ index, kicker, meta, title, script, dark = false, align = 'left' }) {
  const rule = dark ? 'border-white/15 text-white/50' : 'border-ink/15 text-mid'
  return (
    <div className="mb-12 md:mb-16">
      <motion.div {...reveal(0)} className={`flex items-center justify-between border-y py-2.5 ${rule}`}>
        <span className="font-sans text-[11px] uppercase tracking-[0.32em]">
          <b className={dark ? 'text-white font-semibold' : 'text-ink font-semibold'}>{index}</b> — {kicker}
        </span>
        {meta && <span className="font-sans text-[11px] uppercase tracking-[0.32em] hidden sm:block">{meta}</span>}
      </motion.div>

      <div className={`relative mt-8 md:mt-10 ${align === 'right' ? 'text-right' : ''}`}>
        <motion.span
          {...reveal(0.15, 12)}
          aria-hidden="true"
          className={`font-script text-accent absolute z-10 -top-[0.45em] text-[clamp(2.6rem,6.5vw,5.5rem)] leading-none -rotate-[7deg] pointer-events-none
            ${align === 'right' ? 'right-2 md:right-8' : 'left-1 md:left-6'}`}
        >
          {script}
        </motion.span>
        <motion.h2
          {...reveal(0.05)}
          className={`font-display uppercase leading-[0.86] tracking-[0.01em] text-[clamp(3.6rem,11vw,9rem)]
            ${dark ? 'text-white/85' : 'emboss'}`}
        >
          {title}
        </motion.h2>
      </div>
    </div>
  )
}
