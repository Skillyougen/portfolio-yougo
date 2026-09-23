import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './ui/Icon'
import { CATEGORY_ICONS } from '../icons'
import SectionTitle from './ui/SectionTitle'
import { reveal } from '../motion'


/** Lien exploitable : les données de secours utilisent « # » comme marqueur. */
const isLink = (url) => !!url && url !== '#'
const CAT_LABELS = { web: 'Web', mobile: 'Mobile', desktop: 'Desktop', gaming: 'Gaming' }
const FILTERS = ['Tous', 'web', 'mobile', 'desktop', 'gaming']

export default function Projects({ projects, loading }) {
  const [filter, setFilter] = useState('Tous')

  const list = projects || []
  const displayed =
    filter === 'Tous' ? list : list.filter((p) => p.cat === filter)

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle index="04" kicker="Réalisations" meta="Mis à jour depuis le back-office" title="Projets" script="mes réalisations" align="right" />

        {/* Filtres */}
        <motion.div {...reveal(0.1)} className="flex flex-wrap gap-2 mb-6">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`font-sans text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                filter === f
                  ? 'bg-ink text-white border-ink'
                  : 'bg-white/50 border-white text-mid hover:text-ink hover:bg-white'
              }`}
            >
              {f === 'Tous' ? 'Tous' : CAT_LABELS[f]}
            </button>
          ))}
        </motion.div>

        {/* Grille projets */}
        {loading ? (
          <div className="panel p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-5" aria-busy="true" aria-label="Chargement des projets">
            {[0, 1].map((i) => (
              <div key={i} className="card overflow-hidden animate-pulse">
                <div className="h-52 bg-ink/5" />
                <div className="p-6 flex flex-col gap-3">
                  <div className="h-6 w-1/2 bg-ink/10 rounded" />
                  <div className="h-3 w-full bg-ink/5 rounded" />
                  <div className="h-3 w-4/5 bg-ink/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : displayed.length === 0 ? (
          <p className="panel text-center py-16 font-sans text-white/90">
            {list.length === 0 ? 'Projets à venir.' : 'Aucun projet dans cette catégorie pour le moment.'}
          </p>
        ) : (
          <div className="panel p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {displayed.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </AnimatePresence>
          </div>
        )}
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
      className="card group overflow-hidden flex flex-col"
    >
      {/* Thumb */}
      <div
        className="relative h-52 m-3 mb-0 rounded-[0.9rem] flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${p.color}1f, ${p.color}08), #EDECE8` }}
      >
        {p.image ? (
          <motion.img
            src={p.image}
            alt={p.title}
            loading="lazy"
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <motion.span
            animate={{ scale: hovered ? 1.15 : 1 }}
            transition={{ duration: 0.4 }}
            className="flex"
            style={{ color: p.color }}
          >
            <Icon name={CATEGORY_ICONS[p.cat] || 'auto_awesome'} size={64} />
          </motion.span>
        )}
        {/* Cat badge */}
        <span className="absolute top-3 left-3 font-sans text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/90 text-ink font-semibold inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          {CAT_LABELS[p.cat] || p.cat}
        </span>
        {/* Overlay hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center gap-4"
          style={{ background: 'rgba(38,38,38,0.6)' }}
        >
          {isLink(p.github) && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-xs bg-white text-ink px-4 py-2 rounded-full hover:bg-accent hover:text-white transition-colors inline-flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub <Icon name="north_east" size={14} />
            </a>
          )}
          {isLink(p.demo) && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-xs bg-white text-ink px-4 py-2 rounded-full hover:bg-accent hover:text-white transition-colors inline-flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              Démo <Icon name="north_east" size={14} />
            </a>
          )}
        </motion.div>
      </div>

      {/* Contenu */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display uppercase text-[1.7rem] leading-none text-ink mb-3 group-hover:text-accent transition-colors duration-300">
          {p.title}
        </h3>
        <p className="font-sans text-sm text-mid leading-relaxed mb-4">{p.desc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {(p.tags || []).map((t) => (
            <span
              key={t}
              className="font-sans text-xs text-ink bg-paper px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Liens toujours visibles : l'incrustation au survol n'existe pas
            sur un écran tactile. */}
        {(isLink(p.github) || isLink(p.demo)) && (
          <div className="flex gap-4 mt-auto pt-4 border-t border-ink/10">
            {isLink(p.github) && (
              <a href={p.github} target="_blank" rel="noreferrer"
                className="font-sans text-sm font-medium text-ink hover:text-accent transition-colors inline-flex items-center gap-1">
                GitHub <Icon name="north_east" size={14} />
              </a>
            )}
            {isLink(p.demo) && (
              <a href={p.demo} target="_blank" rel="noreferrer"
                className="font-sans text-sm font-medium text-ink hover:text-accent transition-colors inline-flex items-center gap-1">
                Démo <Icon name="north_east" size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}
