import { motion } from 'framer-motion'
import { EDUCATION, CERTIFICATION, PROFILE } from '../data'
import Icon from './ui/Icon'
import SectionTitle from './ui/SectionTitle'
import { reveal } from '../motion'

// Hauteur des marches (écran large) : le cursus se lit comme un escalier.
const STEP_HEIGHTS = ['h-20', 'h-36', 'h-52', 'h-72']
const EPSI_STRIPES = 'linear-gradient(90deg,#5b2a5f 0 14%,#e5233d 14% 28%,#fcd90f 28% 43%,#ef7d22 43% 57%,#4fae45 57% 71%,#0aa3c2 71% 86%,#8a3e8f 86% 100%)'

export default function Education() {
  return (
    <section id="parcours" className="py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle index="02" kicker="Cursus scolaire" meta="2021 → aujourd'hui" title="Parcours" script="mon cursus" align="right" />

        {/* Escalier du cursus */}
        <ol className="relative grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-4 items-end">
          {/* Frise verticale (mobile) */}
          <span aria-hidden="true" className="lg:hidden absolute left-[1.35rem] top-4 bottom-4 w-px bg-ink/20" />

          {EDUCATION.map((e, i) => (
            <motion.li
              key={e.diploma}
              {...reveal(0.1 + i * 0.12, 40)}
              className="relative pl-12 lg:pl-0 flex flex-col"
            >
              {/* Pastille de la frise (mobile) */}
              <span
                aria-hidden="true"
                className={`lg:hidden absolute left-3 top-6 w-5 h-5 rounded-full border-4 ${e.current ? 'bg-accent border-accent/30' : 'bg-paper border-ink/40'}`}
              />

              <article
                className={`card p-5 lg:mb-4 relative overflow-hidden ${e.current ? 'ring-2 ring-accent shadow-[0_20px_40px_-20px_rgba(221,138,22,0.7)]' : ''}`}
              >
                {e.current && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5" style={{ background: EPSI_STRIPES }} />}
                <div className="flex items-start justify-between gap-3">
                  <span className="kicker text-[10px]">{e.years}<span className="lg:hidden"> · {e.level}</span></span>
                  {e.current ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> En cours
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-paper text-mid text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
                      <Icon name="check_circle" size={14} filled className="text-green-600" /> Obtenu
                    </span>
                  )}
                </div>

                {e.current ? (
                  <img src="/epsi.png" alt="EPSI — l'École d'ingénierie informatique" className="mt-4 h-16 w-auto" />
                ) : (
                  <span className="mt-4 w-12 h-12 rounded-2xl bg-paper flex items-center justify-center text-ink">
                    <Icon name={e.icon} size={26} />
                  </span>
                )}

                <h3 className="mt-4 font-display uppercase text-[1.7rem] leading-none text-ink">{e.diploma}</h3>
                <p className="mt-2 font-sans text-sm text-mid leading-snug">{e.detail}</p>
                <p className="mt-3 font-sans text-sm font-semibold text-ink flex items-center gap-1.5">
                  <Icon name="location_on" size={16} className="text-accent" /> {e.school}
                </p>
              </article>

              {/* La marche */}
              <div
                aria-hidden="true"
                className={`hidden lg:flex panel !rounded-b-none !rounded-t-[1.5rem] ${STEP_HEIGHTS[i]} items-start justify-center pt-4`}
                style={e.current ? { backgroundColor: '#DD8A16' } : undefined}
              >
                <span className="font-display uppercase text-5xl text-white/90 drop-shadow-[0_2px_0_rgba(0,0,0,0.15)]">{e.level}</span>
              </div>
            </motion.li>
          ))}
        </ol>
        <div aria-hidden="true" className="hidden lg:block h-3 rounded-b-2xl bg-ink/80" />

        {/* Certification */}
        <motion.div {...reveal(0.15)} className="panel mt-14 p-4 md:p-6">
          <div className="card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
            <span className="w-20 h-20 rounded-3xl bg-[#D97757] text-white flex items-center justify-center shrink-0 shadow-lg">
              <Icon name="verified" size={44} filled />
            </span>
            <div className="flex-1">
              <p className="kicker">Certification · {CERTIFICATION.issuer}</p>
              <h3 className="font-display uppercase text-4xl md:text-5xl text-ink leading-none mt-1">{CERTIFICATION.title}</h3>
              <p className="font-sans text-mid mt-2 max-w-xl">{CERTIFICATION.desc}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={CERTIFICATION.url}
                target="_blank"
                rel="noreferrer"
                className="bg-ink text-white font-sans text-sm font-medium px-5 py-3 rounded-full hover:bg-accent transition-colors inline-flex items-center gap-2"
              >
                Vérifier la certification <Icon name="north_east" size={16} />
              </a>
              <a
                href={PROFILE.cv}
                download
                className="border border-ink/70 text-ink font-sans text-sm font-medium px-5 py-3 rounded-full hover:bg-ink hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <Icon name="download" size={16} /> Mon CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
