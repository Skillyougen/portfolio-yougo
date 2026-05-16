import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cream overflow-hidden flex flex-col"
    >
      {/* Gradient blob de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-60"
          style={{
            background: 'radial-gradient(ellipse, #f0e8d8 0%, #F5F3EE 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* ─── CONTENU PRINCIPAL ─── */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 md:px-10 pt-24 pb-0">

        {/* Badge dispo */}
        <motion.div {...fadeUp(0.2)} className="mt-4 mb-6">
          <span className="inline-flex items-center gap-2 bg-white border border-dark/10 rounded-full px-4 py-1.5 text-xs font-sans text-mid shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponible pour de nouvelles opportunités
          </span>
        </motion.div>

        {/* Grid hero : texte gauche + photo centre/droite */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">

          {/* ── COLONNE GAUCHE ── */}
          <div className="flex flex-col justify-end pb-12 lg:pb-16 z-10">

            {/* Headline italic grande — style "Hey, there" */}
            <motion.p
              {...fadeUp(0.3)}
              className="font-serif italic text-4xl md:text-6xl text-dark/30 leading-none mb-2 select-none"
            >
              Hey, je suis
            </motion.p>

            {/* Grand nom */}
            <motion.h1
              {...fadeUp(0.4)}
              className="font-serif font-black text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-dark uppercase tracking-tight"
            >
              FOMO
              <br />
              <span className="text-accent">PASCAL</span>
              <br />
              YOHANN
            </motion.h1>

            {/* Pseudo */}
            <motion.p
              {...fadeUp(0.5)}
              className="mt-3 font-mono text-sm tracking-[4px] text-mid uppercase"
            >
              YOUGO ⚡⚡
            </motion.p>

            {/* Quote */}
            <motion.p
              {...fadeUp(0.6)}
              className="mt-5 text-sm md:text-base font-sans text-mid max-w-xs leading-relaxed border-l-2 border-accent pl-4"
            >
              "Je transforme des idées en expériences numériques performantes."
            </motion.p>

            {/* CTA */}
            <motion.div {...fadeUp(0.7)} className="mt-8 flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: '#E8533A' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#projects')}
                className="bg-dark text-cream font-sans text-sm font-medium px-6 py-3 transition-colors duration-300"
              >
                Voir mes projets
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/cv-yougo.pdf"
                download
                className="border border-dark text-dark font-sans text-sm font-medium px-6 py-3 hover:bg-dark hover:text-cream transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>↓</span> Mon CV
              </motion.a>
            </motion.div>
          </div>

          {/* ── COLONNE DROITE — PHOTO ── */}
          <div className="relative flex items-end justify-center lg:justify-end">

            {/* Titre flottant droit — style "DIGITAL PRODUCT DESIGNER" */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-1/3 -translate-y-1/2 text-right hidden lg:block"
            >
              <p className="font-serif font-black text-2xl md:text-3xl uppercase leading-tight text-dark">
                FULLSTACK<br />
                <span className="text-accent">DEVELOPER</span><br />
                & GAME DEV
              </p>
            </motion.div>

            {/* Conteneur photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[280px] md:w-[360px] lg:w-[420px]"
            >
              {/* Zone photo — remplacer src par ta vraie photo */}
              <div
                className="w-full aspect-[3/4] bg-beige overflow-hidden relative"
                style={{
                  borderRadius: '50% 50% 0 0 / 40% 40% 0 0',
                  background: 'linear-gradient(180deg, #EDE9E0 0%, #ddd8ce 100%)',
                }}
              >
                {/* Photo — remplace ce bloc par <img src="/photo.png" ... /> */}
                <img src="/photo.png" 
                  alt="YOUGO — Pascal Yohann Saurel"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  style={{ mixBlendMode: 'multiply' }}
                />

                {/* Overlay gradient bas */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, #F5F3EE 0%, transparent 100%)' }}
                />
              </div>

              {/* Carte flottante stats */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute -left-10 top-1/3 bg-white shadow-xl border border-dark/6 px-5 py-4 min-w-[130px]"
              >
                <p className="font-serif text-3xl font-black text-dark">Bac+2</p>
                <p className="font-sans text-xs text-mid mt-1 tracking-wide">Niveau actuel</p>
              </motion.div>

              {/* Carte flottante langages */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -right-6 md:-right-10 top-1/2 bg-white shadow-xl border border-dark/6 px-5 py-4"
              >
                <p className="font-serif text-3xl font-black text-accent">5+</p>
                <p className="font-sans text-xs text-mid mt-1 tracking-wide">Langages</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── BANDE STATS BAS ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-10 border-t border-dark/10 bg-cream/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['Douala', 'Cameroun'],
            ['IUC', 'Formation 2024–2026'],
            ['∞', 'Passion du code'],
            ['IA', 'Objectif majeur'],
          ].map(([val, lbl]) => (
            <div key={lbl} className="flex flex-col gap-1">
              <span className="font-serif text-2xl font-bold text-dark">{val}</span>
              <span className="font-sans text-xs text-soft uppercase tracking-widest">{lbl}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
