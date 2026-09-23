import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SERVICES } from '../data'
import Icon from './ui/Icon'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
})

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-end gap-6 mb-16 md:mb-20">
          <motion.p {...fadeUp(0)} className="font-mono text-xs text-accent tracking-[4px] uppercase mb-1">
            À propos
          </motion.p>
          <div className="flex-1 h-px bg-dark/8" />
        </div>

        {/* Grid principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── GAUCHE : texte ── */}
          <div>
            <motion.h2 {...fadeUp(0.1)} className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] text-dark mb-8">
              Je m'appelle<br />
              <em className="not-italic text-accent">Pascal Yohann</em>
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="font-sans text-mid text-base md:text-lg leading-relaxed mb-5">
              Étudiant en informatique Bac+2, je prépare un Diplôme DEC en Programmation et Applications Mobiles à l'<strong className="text-dark font-medium">Institut Universitaire de la Côte à Douala</strong> (2024–2026).
            </motion.p>

            <motion.p {...fadeUp(0.25)} className="font-sans text-mid text-base md:text-lg leading-relaxed mb-5">
              Passionné par le développement FullStack, le Desktop, le Game Development et l'Intelligence Artificielle, je construis des produits qui allient technique et créativité.
            </motion.p>

            <motion.blockquote
              {...fadeUp(0.3)}
              className="border-l-2 border-accent pl-5 my-8 font-serif italic text-xl text-dark/70"
            >
              "Chaque projet est une occasion de créer quelque chose d'utile."
            </motion.blockquote>

            {/* Infos */}
            <motion.div {...fadeUp(0.35)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                ['location_on', 'Localisation', 'Douala, Cameroun'],
                ['school', 'Formation', 'IUC Douala · 2024–2026'],
                ['mail', 'Email', 'yohannngankamg@gmail.com'],
                ['smartphone', 'WhatsApp', '+237 678 99 30 41'],
              ].map(([ic, lbl, val]) => (
                <div key={lbl} className="flex gap-3 items-start">
                  <span className="mt-0.5 text-accent flex"><Icon name={ic} size={20} /></span>
                  <div>
                    <p className="font-mono text-xs text-soft tracking-widest uppercase mb-0.5">{lbl}</p>
                    <p className="font-sans text-sm text-dark">{val}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── DROITE : services ── */}
          <div className="flex flex-col gap-4">
            <motion.p {...fadeUp(0.1)} className="font-sans text-xs text-soft uppercase tracking-widest mb-2">
              Ce que je fais
            </motion.p>
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp(0.15 + i * 0.08)}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-5 border border-dark/8 hover:border-dark/20 bg-cream hover:bg-white transition-all duration-300 group cursor-default"
              >
                <span className="mt-0.5 flex text-dark group-hover:text-accent group-hover:scale-110 transition-all duration-200">
                  <Icon name={s.icon} size={28} />
                </span>
                <div>
                  <h3 className="font-sans font-semibold text-dark text-sm mb-1">{s.title}</h3>
                  <p className="font-sans text-mid text-sm leading-relaxed">{s.desc}</p>
                </div>
                <span className="ml-auto text-soft group-hover:text-dark transition-colors flex"><Icon name="arrow_forward" size={18} /></span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
