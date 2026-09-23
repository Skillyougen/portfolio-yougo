import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-3 md:px-6 pt-3"
      >
        <div
          className={`max-w-7xl mx-auto h-14 pl-5 pr-2 flex items-center justify-between rounded-full transition-all duration-300 ${
            scrolled ? 'bg-paper/85 backdrop-blur-md shadow-[0_10px_30px_-18px_rgba(0,0,0,0.5)] border border-white/60' : 'bg-transparent border border-transparent'
          }`}
        >
          <button
            onClick={() => scrollTo('#hero')}
            className="font-display text-xl uppercase tracking-wide text-ink hover:text-accent transition-colors"
          >
            Yougo<span className="text-accent">.</span>
          </button>

          <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href) }}
                className="text-[13px] text-mid hover:text-ink transition-colors font-sans tracking-wide relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            onClick={() => scrollTo('#contact')}
            className="hidden lg:block bg-ink text-white text-[13px] font-sans font-medium px-5 py-2.5 rounded-full hover:bg-accent transition-colors duration-300"
          >
            Me contacter
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-3"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-ink origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5 bg-ink" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-ink origin-center" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 inset-x-3 z-40 paper rounded-panel border border-white/60 shadow-2xl lg:hidden"
          >
            <nav aria-label="Navigation principale" className="flex flex-col px-6 py-6 gap-4">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={(e) => { e.preventDefault(); scrollTo(l.href) }}
                  className="text-left font-display uppercase text-2xl text-ink hover:text-accent transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="mt-2 bg-ink text-white text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-accent transition-colors"
              >
                Me contacter
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
