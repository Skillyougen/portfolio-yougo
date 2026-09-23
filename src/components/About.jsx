import { motion } from 'framer-motion'
import { SERVICES, PROFILE } from '../data'
import Icon from './ui/Icon'
import SectionTitle from './ui/SectionTitle'
import { reveal } from '../motion'

const INFOS = [
  ['location_on', 'Localisation', PROFILE.location],
  ['school', 'Formation', 'EPSI Paris · Bachelor DEVIA'],
  ['mail', 'Email', PROFILE.email, `mailto:${PROFILE.email}`],
  ['call', 'Téléphone', PROFILE.phone, PROFILE.phoneHref],
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle index="01" kicker="À propos" meta="Paris, France" title="À propos" script="qui suis-je ?" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-start">
          <div>
            <motion.p {...reveal(0.1)} className="font-sans text-2xl md:text-3xl font-light leading-snug text-ink">
              Je m'appelle <b className="font-semibold">Pascal Yohann Saurel FOMO NGANKAMG</b> — <span className="text-accent font-medium">Yougo</span> pour les intimes.
            </motion.p>

            <motion.p {...reveal(0.15)} className="mt-6 font-sans text-mid text-base md:text-lg leading-relaxed">
              Diplômé d'un <b className="text-ink font-medium">DEC canadien en programmation et applications mobiles</b> (CCNB),
              je poursuis aujourd'hui un <b className="text-ink font-medium">Bachelor Bac+3 Développeur en Intelligence Artificielle (DEVIA)
              à l'EPSI Paris</b>.
            </motion.p>
            <motion.p {...reveal(0.2)} className="mt-4 font-sans text-mid text-base md:text-lg leading-relaxed">
              Passionné par le développement web, mobile, desktop et le jeu vidéo, je construis des produits qui allient
              technique et créativité — avec un cap : l'intelligence artificielle. Je suis aussi certifié <b className="text-ink font-medium">Claude 101</b> par Anthropic.
            </motion.p>

            <motion.blockquote {...reveal(0.25)} className="my-10 pl-6 border-l-2 border-accent">
              <p className="font-script text-accent text-4xl md:text-5xl leading-tight">
                Chaque projet est une occasion de créer quelque chose d'utile.
              </p>
            </motion.blockquote>

            <motion.div {...reveal(0.3)} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INFOS.map(([ic, lbl, val, href]) => {
                const Tag = href ? 'a' : 'div'
                return (
                  <Tag key={lbl} href={href} className="flex gap-3 items-center rounded-card bg-white/55 border border-white px-4 py-3 hover:bg-white transition-colors">
                    <span className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center shrink-0"><Icon name={ic} size={20} /></span>
                    <span className="min-w-0">
                      <span className="kicker block text-[10px]">{lbl}</span>
                      <span className="block font-sans text-sm text-ink truncate">{val}</span>
                    </span>
                  </Tag>
                )
              })}
            </motion.div>
          </div>

          {/* Services, sur le plateau */}
          <motion.div {...reveal(0.15)} className="panel p-4 md:p-6">
            <p className="kicker text-white/80 px-2 pb-4 pt-1">Ce que je fais</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.title}
                  {...reveal(0.2 + i * 0.07)}
                  className="card p-6 group hover:-translate-y-1 transition-transform duration-300"
                >
                  <span className="w-12 h-12 rounded-2xl bg-paper flex items-center justify-center text-ink group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <h3 className="mt-5 font-display uppercase text-2xl text-ink leading-none">{s.title}</h3>
                  <p className="mt-2 font-sans text-mid text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
