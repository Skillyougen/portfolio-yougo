import { motion } from 'framer-motion'
import { SKILL_GROUPS } from '../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <motion.p {...fadeUp(0)} className="font-mono text-xs text-accent tracking-[4px] uppercase whitespace-nowrap">
            Compétences
          </motion.p>
          <div className="flex-1 h-px bg-dark/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Titre gauche */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-tight text-dark mb-6">
              Ce que<br />je maîtrise
            </h2>
            <p className="font-sans text-mid text-base leading-relaxed max-w-sm">
              Des technologies variées couvrant le web, le mobile, le desktop et le gaming — avec un objectif clair : l'IA.
            </p>

            {/* Langues */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[['🇫🇷', 'Français', 'B2', '#E8533A'], ['🇬🇧', 'Anglais', 'B1', '#2563EB']].map(([flag, lang, lvl, col]) => (
                <motion.div
                  key={lang}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 bg-white border border-dark/8 px-4 py-3 shadow-sm"
                >
                  <span className="text-xl">{flag}</span>
                  <div>
                    <p className="font-sans font-semibold text-sm text-dark">{lang}</p>
                    <p className="font-mono text-xs" style={{ color: col }}>{lvl}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Outils */}
            <div className="mt-8">
              <p className="font-mono text-xs text-soft tracking-widest uppercase mb-3">Outils</p>
              <div className="flex flex-wrap gap-2">
                {['VS Code', 'Visual Studio', 'NetBeans', 'Git', 'Office'].map((t) => (
                  <span key={t} className="font-sans text-xs text-mid border border-dark/10 px-3 py-1.5 hover:border-dark/30 transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cards compétences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_GROUPS.map((g, i) => (
              <motion.div
                key={g.cat}
                {...fadeUp(0.1 + i * 0.07)}
                whileHover={{ y: -5, shadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                className="bg-white border border-dark/6 p-6 hover:border-dark/15 transition-all duration-300 group"
                style={{ borderTop: `3px solid ${g.color}` }}
              >
                <h3
                  className="font-sans font-semibold text-xs uppercase tracking-widest mb-4"
                  style={{ color: g.color }}
                >
                  {g.cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <motion.span
                      key={it}
                      whileHover={{ scale: 1.05 }}
                      className="font-sans text-xs text-dark border border-dark/10 px-3 py-1.5 rounded-full hover:bg-dark hover:text-cream transition-all duration-200 cursor-default"
                    >
                      {it}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bande défilante */}
        <div className="mt-20 overflow-hidden border-t border-b border-dark/8 py-5">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...Array(2)].map((_, rep) => (
              ['React.js', 'JavaScript', 'Laravel', 'Django', 'Unity', 'C#', 'Java', 'MySQL', 'React Native', 'IA & ML'].map((t) => (
                <span key={`${rep}-${t}`} className="font-serif italic text-2xl text-dark/15 select-none">
                  {t} ·
                </span>
              ))
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
