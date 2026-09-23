import { motion } from 'framer-motion'
import Icon from './ui/Icon'
import { enter } from '../motion'
import { PROFILE, CERTIFICATION } from '../data'

// Temps forts du parcours, posés sur le plateau gris en bas de l'accueil.
const HIGHLIGHTS = [
  {
    key: 'epsi',
    kicker: 'Actuellement',
    title: 'Bachelor Bac+3 DEVIA',
    text: "Développeur en intelligence artificielle — EPSI Paris",
    logo: '/epsi.png',
    href: '#parcours',
  },
  {
    key: 'dec',
    kicker: 'Diplômé 2026',
    title: 'DEC canadien',
    text: 'Programmation et applications mobiles — CCNB',
    icon: 'workspace_premium',
    href: '#parcours',
  },
  {
    key: 'claude',
    kicker: 'Certification',
    title: CERTIFICATION.title,
    text: `Certifié par ${CERTIFICATION.issuer}`,
    icon: 'verified',
    href: CERTIFICATION.url,
    external: true,
  },
]

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative overflow-hidden pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* Filet de une, comme la couverture d'un magazine */}
        <motion.div {...enter(0.1, 10)} className="flex items-center justify-between border-y border-ink/15 py-2.5 mt-4 font-sans text-xs md:text-sm text-mid">
          <span><b className="text-ink font-semibold">Construit</b> pour inspirer</span>
          <span className="hidden md:block text-[11px] uppercase tracking-[0.35em]">Portfolio · Développeur IA</span>
          <span>Mis à jour <b className="text-ink font-semibold">2026</b></span>
        </motion.div>

        {/* ── Titre géant + photo détourée ── */}
        <div className="relative mt-6 md:mt-4">
          <motion.span
            initial={{ opacity: 0, x: -30, rotate: -12 }}
            animate={{ opacity: 1, x: 0, rotate: -8 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
            className="font-script text-accent absolute z-30 left-[2%] md:left-[7%] top-[0.05em] text-[clamp(3.2rem,10vw,9rem)] leading-none pointer-events-none drop-shadow-[0_2px_0_rgba(255,255,255,0.5)]"
          >
            Pascal Yohann
          </motion.span>

          <motion.h1
            {...enter(0.2, 40)}
            className="font-display uppercase emboss text-center leading-[0.8] tracking-[0.005em] text-[clamp(7rem,30vw,25rem)] select-none"
          >
            Yougo
            <span className="sr-only"> — Pascal Yohann Saurel FOMO NGANKAMG, développeur en intelligence artificielle</span>
          </motion.h1>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,400px)_1fr] items-end gap-6 lg:gap-8 -mt-[16vw] lg:-mt-[12rem]">

            {/* Gauche : accroche + actions */}
            <motion.div {...enter(0.7)} className="order-2 lg:order-1 pb-6 lg:pb-4">
              <span className="inline-flex items-center gap-2 bg-white/70 border border-white rounded-full px-4 py-1.5 text-xs font-sans text-mid shadow-sm backdrop-blur">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Ouvert aux opportunités
              </span>
              <p className="mt-5 font-sans text-xl md:text-2xl leading-snug text-mid font-light max-w-xs">
                Code propre. <b className="font-semibold text-ink">Objectif clair.</b> Un aperçu de mon parcours,
                de mes projets et de ma passion pour l'IA.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo('#projects')}
                  className="bg-ink text-white font-sans text-sm font-medium px-6 py-3 rounded-full hover:bg-accent transition-colors duration-300"
                >
                  Voir mes projets
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={PROFILE.cv}
                  download
                  className="border border-ink/70 text-ink font-sans text-sm font-medium px-6 py-3 rounded-full hover:bg-ink hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Icon name="download" size={18} /> Mon CV
                </motion.a>
              </div>
            </motion.div>

            {/* Centre : photo, pieds dans le plateau (écran large) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 relative z-20 mx-auto w-[min(78vw,400px)] lg:-mb-28"
            >
              {/* WebP (17 Ko) pour les navigateurs récents, PNG sinon :
                  c'est la plus grande image de la page, affichée en premier. */}
              <picture>
                <source srcSet="/photo.webp" type="image/webp" />
                <img
                  src="/photo.png"
                  alt="Pascal Yohann Saurel FOMO NGANKAMG, diplôme en main"
                  width="408"
                  height="612"
                  fetchpriority="high"
                  className="w-full h-auto drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)]"
                />
              </picture>
            </motion.div>

            {/* Droite : intitulé du poste, façon « D03 showcase » */}
            <motion.div {...enter(0.85)} className="order-3 hidden lg:flex flex-col items-end text-right pb-4">
              <p className="font-sans uppercase tracking-[0.3em] text-sm text-mid leading-relaxed">
                Développeur<br />en intelligence<br />artificielle
              </p>
              <p className="font-display uppercase emboss text-[7rem] leading-[0.85] mt-3">B3</p>
              <p className="font-sans uppercase tracking-[0.3em] text-sm text-mid">DEVIA · EPSI Paris</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Plateau des temps forts ── */}
      <motion.div {...enter(1, 40)} className="relative z-30 max-w-7xl mx-auto px-3 md:px-10 pb-16">
        <div className="panel p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {HIGHLIGHTS.map((h) => (
            <a
              key={h.key}
              href={h.href}
              target={h.external ? '_blank' : undefined}
              rel={h.external ? 'noreferrer' : undefined}
              onClick={h.external ? undefined : (e) => { e.preventDefault(); scrollTo(h.href) }}
              className="card group p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="shrink-0 w-16 h-16 rounded-2xl bg-white border border-ink/5 flex items-center justify-center overflow-hidden">
                {h.logo
                  ? <img src={h.logo} alt="EPSI" className="w-14 h-auto" />
                  : <Icon name={h.icon} size={32} className="text-accent" />}
              </span>
              <span className="min-w-0">
                <span className="kicker block text-[10px]">{h.kicker}</span>
                <span className="block font-display uppercase text-2xl text-ink leading-tight mt-0.5">{h.title}</span>
                <span className="block font-sans text-sm text-mid leading-snug">{h.text}</span>
              </span>
              <Icon name="north_east" size={18} className="ml-auto self-start text-soft group-hover:text-accent transition-colors" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
