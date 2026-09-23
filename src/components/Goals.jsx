import { motion } from 'framer-motion'
import { GOALS } from '../data'
import Icon from './ui/Icon'
import SectionTitle from './ui/SectionTitle'
import { reveal } from '../motion'

const ROADMAP = [
  { when: '2026', label: 'DEC canadien obtenu', state: 'done' },
  { when: "Aujourd'hui", label: "Bachelor DEVIA à l'EPSI Paris", state: 'current' },
  { when: 'Demain', label: 'Expert IA reconnu', state: 'next' },
]

export default function Goals() {
  return (
    <section id="goals" className="relative py-20 md:py-24 bg-graphite overflow-hidden">
      {/* Grain du papier, en négatif */}
      <div aria-hidden="true" className="paper absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle index="05" kicker="Objectifs" meta="Cap sur l'IA" title="Objectifs" script="où je vais" dark />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-14 items-start">
          <motion.div {...reveal(0.1)}>
            <p className="font-sans text-white/60 text-lg leading-relaxed max-w-sm">
              Mon ambition : devenir un expert reconnu en intelligence artificielle et contribuer à façonner son avenir.
            </p>

            <ol className="mt-10">
              {ROADMAP.map((r, i) => (
                <motion.li
                  key={r.when}
                  {...reveal(0.2 + i * 0.1)}
                  className="flex items-center gap-5 py-4 border-b border-white/10"
                >
                  <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent w-24 shrink-0">{r.when}</span>
                  <span
                    className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center ${
                      r.state === 'done' ? 'bg-accent text-graphite' : r.state === 'current' ? 'border-2 border-accent' : 'border border-white/30'
                    }`}
                  >
                    {r.state === 'done' && <Icon name="check_circle" size={16} filled />}
                    {r.state === 'current' && <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
                  </span>
                  <span className={`font-sans text-sm ${r.state === 'next' ? 'text-white/50' : 'text-white'}`}>{r.label}</span>
                </motion.li>
              ))}
            </ol>
          </motion.div>

          <div className="flex flex-col gap-4">
            {GOALS.map((g, i) => (
              <motion.div
                key={g.num}
                {...reveal(0.15 + i * 0.1)}
                className="relative rounded-panel bg-white/[0.04] border border-white/10 p-7 pl-24 md:pl-28 hover:bg-white/[0.07] transition-colors"
              >
                <span className="absolute left-6 top-5 font-display text-6xl md:text-7xl text-white/15 leading-none">{g.num}</span>
                <h3 className="font-display uppercase text-2xl md:text-3xl text-white leading-none mb-3">{g.title}</h3>
                <p className="font-sans text-sm text-white/55 leading-relaxed">{g.desc}</p>
                <span className="absolute right-6 top-7 w-2.5 h-2.5 rounded-full" style={{ background: g.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
