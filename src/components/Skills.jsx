import { motion } from 'framer-motion'
import { SKILL_GROUPS } from '../data'
import SectionTitle from './ui/SectionTitle'
import { reveal } from '../motion'

const LANGUAGES = [
  ['FR', 'Français', 'B2', 4],
  ['EN', 'Anglais', 'B1', 3],
]
const TOOLS = ['VS Code', 'Visual Studio', 'NetBeans', 'Git & GitHub', 'Docker', 'Claude', 'Suite Office']
const MARQUEE = ['React.js', 'Laravel', 'React Native', 'C# .NET', 'Java', 'Unity', 'PostgreSQL', 'Django', 'IA & ML']

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle index="03" kicker="Compétences" meta="Web · Mobile · Desktop · Jeu" title="Compétences" script="ce que je maîtrise" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-14 items-start">
          <motion.div {...reveal(0.1)}>
            <p className="font-sans text-mid text-lg leading-relaxed max-w-sm">
              Des technologies variées couvrant le web, le mobile, le desktop et le jeu vidéo — avec un objectif clair :
              <b className="text-ink font-semibold"> l'intelligence artificielle</b>.
            </p>

            <p className="kicker mt-10 mb-3">Langues</p>
            <div className="flex flex-wrap gap-3">
              {LANGUAGES.map(([code, lang, lvl, dots]) => (
                <div key={lang} className="flex items-center gap-3 rounded-card bg-white/60 border border-white px-4 py-3">
                  <span className="w-10 h-10 rounded-full bg-ink text-white font-display text-sm flex items-center justify-center">{code}</span>
                  <div>
                    <p className="font-sans font-semibold text-sm text-ink">{lang} <span className="text-accent">{lvl}</span></p>
                    <div className="flex gap-1 mt-1" aria-label={`Niveau ${lvl}`}>
                      {[0, 1, 2, 3, 4].map((d) => (
                        <span key={d} className={`w-2 h-2 rounded-full ${d < dots ? 'bg-ink' : 'bg-ink/15'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="kicker mt-8 mb-3">Outils</p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <span key={t} className="font-sans text-sm text-ink bg-white/60 border border-white px-3.5 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...reveal(0.15)} className="panel p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_GROUPS.map((g, i) => (
              <motion.div
                key={g.cat}
                {...reveal(0.15 + i * 0.06)}
                className={`card p-6 ${i === SKILL_GROUPS.length - 1 && SKILL_GROUPS.length % 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: g.color }} />
                  <h3 className="font-display uppercase text-2xl text-ink leading-none">{g.cat}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="font-sans text-xs text-ink bg-paper px-3 py-1.5 rounded-full hover:bg-ink hover:text-white transition-colors cursor-default"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bandeau défilant en lettres évidées */}
      <div className="mt-24 overflow-hidden border-y border-ink/15 py-6" aria-hidden="true">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex gap-10 whitespace-nowrap w-max"
        >
          {[0, 1].map((rep) =>
            MARQUEE.map((t) => (
              <span key={`${rep}-${t}`} className="font-display uppercase text-6xl md:text-7xl text-ink/35 outline-text select-none">
                {t} <span className="font-script normal-case text-accent [-webkit-text-stroke:0] text-5xl">&amp;</span>
              </span>
            ))
          )}
        </motion.div>
      </div>
    </section>
  )
}
