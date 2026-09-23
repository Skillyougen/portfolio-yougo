import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || 'https://admin-yougo.vercel.app'

export default function Footer() {
  const [clicks, setClicks] = useState(0)
  const timerRef = useRef(null)
  const countRef = useRef(0)

  // Accès discret au back-office : cinq clics sur le pied de page en moins de
  // trois secondes. Les projets s'y gèrent de façon durable ; l'ancien panneau
  // ne les ajoutait que dans le navigateur du visiteur, jusqu'au rechargement.
  const handleFooterClick = () => {
    countRef.current += 1
    setClicks(countRef.current)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => { countRef.current = 0; setClicks(0) }, 3000)
    if (countRef.current >= 5) {
      countRef.current = 0
      setClicks(0)
      window.location.href = ADMIN_URL
    }
  }

  return (
    <footer
      onClick={handleFooterClick}
      className="relative bg-graphite pt-16 pb-8 cursor-pointer select-none overflow-hidden"
    >
      <p aria-hidden="true" className="font-display uppercase text-center leading-[0.8] text-[clamp(5rem,22vw,20rem)] text-white/[0.07]">
        Yougo
      </p>
      <div className="max-w-7xl mx-auto px-5 md:px-10 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
        <span className="font-script text-accent text-3xl leading-none">Built with heart</span>

        {/* Indicateur secret (5 points) */}
        <div className="flex items-center gap-2">
          {[0, 1, 2, 3, 4].map(i => (
            <motion.span
              key={i}
              animate={{
                backgroundColor: i < clicks ? '#DD8A16' : 'rgba(255,255,255,0.15)',
                scale: i < clicks ? 1.3 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="block w-2 h-2 rounded-full"
            />
          ))}
        </div>

        <span className="font-sans text-xs text-white/40">
          {clicks > 0
            ? `${5 - clicks} clic(s) restants…`
            : `© ${new Date().getFullYear()} Pascal Yohann Saurel FOMO NGANKAMG`}
        </span>
      </div>
    </footer>
  )
}
