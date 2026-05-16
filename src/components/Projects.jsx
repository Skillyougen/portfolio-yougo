import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { INITIAL_PROJECTS } from '../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const CAT_ICONS = { web: '🌐', mobile: '📱', desktop: '🖥️', gaming: '🎮' }
const CAT_LABELS = { web: 'Web', mobile: 'Mobile', desktop: 'Desktop', gaming: 'Gaming' }
const FILTERS = ['Tous', 'web', 'mobile', 'desktop', 'gaming']

export default function Projects({ projects, setProjects }) {
  const [filter, setFilter] = useState('Tous')

  const displayed =
    filter === 'Tous' ? projects : projects.filter((p) => p.cat === filter)

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p {...fadeUp(0)} className="font-mono text-xs text-accent tracking-[4px] uppercase mb-3">
              Projets récents
            </motion.p>
            <motion.h2 {...fadeUp(0.08)} className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-tight text-dark">
              Mes réalisations
            </motion.h2>
          </div>
          {/* Filtres */}
          <motion.div {...fadeUp(0.12)} className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-sans text-xs px-4 py-2 border transition-all duration-200 ${
                  filter === f
                    ? 'bg-dark text-cream border-dark'
                    : 'border-dark/15 text-mid hover:border-dark/40 hover:text-dark'
                }`}
              >
                {f === 'Tous' ? 'Tous' : CAT_LABELS[f]}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grille projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group border border-dark/8 hover:border-dark/20 bg-cream hover:bg-white transition-all duration-400 overflow-hidden"
    >
      {/* Thumb */}
      <div
        className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{ background: p.color + '12' }}
      >
        <motion.span
          animate={{ scale: hovered ? 1.15 : 1 }}
          transition={{ duration: 0.4 }}
          className="text-6xl select-none"
        >
          {CAT_ICONS[p.cat]}
        </motion.span>
        {/* Cat badge */}
        <span
          className="absolute top-4 left-4 font-mono text-xs px-3 py-1 font-medium"
          style={{ background: p.color + '20', color: p.color }}
        >
          {p.cat}
        </span>
        {/* Overlay hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center gap-4"
          style={{ background: 'rgba(17,17,17,0.6)' }}
        >
          {p.github && p.github !== '#' && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-xs bg-cream text-dark px-4 py-2 hover:bg-accent hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub ↗
            </a>
          )}
          {p.demo && p.demo !== '#' && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-xs bg-white text-dark px-4 py-2 hover:bg-accent hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Demo ↗
            </a>
          )}
        </motion.div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="font-serif font-bold text-xl text-dark mb-2 group-hover:text-accent transition-colors duration-300">
          {p.title}
        </h3>
        <p className="font-sans text-sm text-mid leading-relaxed mb-4">{p.desc}</p>
        <div className="flex flex-wrap gap-2">
          {(p.tags || []).map((t) => (
            <span
              key={t}
              className="font-mono text-xs text-mid border border-dark/10 px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
