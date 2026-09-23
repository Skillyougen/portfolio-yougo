import { motion } from 'framer-motion'
import { GOALS } from '../data'
import Icon from './ui/Icon'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Goals() {
  return (
    <section id="goals" className="py-24 md:py-32 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <motion.p {...fadeUp(0)} className="font-mono text-xs text-accent tracking-[4px] uppercase whitespace-nowrap">
            Objectifs
          </motion.p>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Titre */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-white">
              Où je<br />
              <em className="not-italic text-accent">vais</em>
            </h2>
            <p className="mt-6 font-sans text-white/50 text-base leading-relaxed max-w-sm">
              Mon ambition : devenir un expert reconnu en Intelligence Artificielle et contribuer à façonner son avenir.
            </p>

            {/* Roadmap */}
            <div className="mt-12 flex flex-col gap-0">
              {[
                { year: '2026', label: 'Diplôme DEC obtenu' },
                { year: '2026–27', label: 'Spécialisation IA & ML' },
                { year: '2027+', label: 'Expert IA reconnu' },
              ].map((rm, i) => (
                <motion.div
                  key={rm.year}
                  {...fadeUp(0.2 + i * 0.1)}
                  className="flex items-center gap-5 py-4 border-b border-white/8 group"
                >
                  <span className="font-mono text-xs text-accent tracking-widest w-20 shrink-0">{rm.year}</span>
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors">{rm.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cards objectifs */}
          <div className="flex flex-col gap-5">
            {GOALS.map((g, i) => (
              <motion.div
                key={g.num}
                {...fadeUp(0.15 + i * 0.1)}
                whileHover={{ x: 6 }}
                className="border border-white/8 p-7 hover:border-white/20 transition-all duration-300 group"
                style={{ borderLeft: `3px solid ${g.color}` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs tracking-widest" style={{ color: g.color }}>
                    {g.num}
                  </span>
                  <span className="text-white/10 group-hover:text-white/20 transition-colors flex"><Icon name="arrow_forward" size={18} /></span>
                </div>
                <h3 className="font-serif font-bold text-lg text-white mb-3">{g.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
