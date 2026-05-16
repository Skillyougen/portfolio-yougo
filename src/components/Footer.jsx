import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Footer({ setProjects }) {
  const [clicks, setClicks] = useState(0)
  const [panelOpen, setPanelOpen] = useState(false)
  const [form, setForm] = useState({ title: '', desc: '', cat: 'web', tags: '', github: '', demo: '' })
  const timerRef = useRef(null)
  const countRef = useRef(0)

  const CAT_COLORS = { web: '#E8533A', mobile: '#2563EB', desktop: '#7C3AED', gaming: '#059669' }

  const handleFooterClick = () => {
    countRef.current += 1
    setClicks(countRef.current)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => { countRef.current = 0; setClicks(0) }, 3000)
    if (countRef.current >= 5) {
      setPanelOpen(true)
      countRef.current = 0
      setClicks(0)
    }
  }

  const addProject = () => {
    if (!form.title || !form.desc) return
    const newP = {
      id: Date.now(),
      title: form.title,
      desc: form.desc,
      cat: form.cat,
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
      github: form.github || '#',
      demo: form.demo || '#',
      color: CAT_COLORS[form.cat],
    }
    setProjects(prev => [newP, ...prev])
    setForm({ title: '', desc: '', cat: 'web', tags: '', github: '', demo: '' })
    setPanelOpen(false)
  }

  return (
    <>
      {/* ── FOOTER ── */}
      <footer
        onClick={handleFooterClick}
        className="bg-dark border-t border-white/6 py-8 cursor-pointer select-none"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg font-bold text-white">
            YOUGO<span className="text-accent">.</span>
          </span>

          {/* Indicateur secret (5 dots) */}
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3, 4].map(i => (
              <motion.span
                key={i}
                animate={{
                  backgroundColor: i < clicks ? '#E8533A' : 'rgba(255,255,255,0.15)',
                  scale: i < clicks ? 1.3 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="block w-2 h-2 rounded-full"
              />
            ))}
          </div>

          <span className="font-sans text-xs text-white/30">
            {clicks > 0
              ? `${5 - clicks} clic(s) restants…`
              : '© 2026 FOMO NGANKAMG Pascal Yohann Saurel'}
          </span>
        </div>
      </footer>

      {/* ── SECRET PANEL ── */}
      <AnimatePresence>
        {panelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={e => e.target === e.currentTarget && setPanelOpen(false)}
            className="fixed inset-0 z-50 bg-dark/70 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 relative"
            >
              <button
                onClick={() => setPanelOpen(false)}
                className="absolute top-4 right-4 text-soft hover:text-dark transition-colors text-lg"
              >
                ✕
              </button>

              <p className="font-mono text-xs text-accent tracking-[4px] uppercase mb-2">Secret Panel ⚡</p>
              <h3 className="font-serif text-2xl font-bold text-dark mb-1">Ajouter un projet</h3>
              <p className="font-sans text-xs text-soft mb-7">Panel débloqué — 5 clics footer</p>

              <div className="flex flex-col gap-4">
                <PField label="Titre *" val={form.title} set={v => setForm(p => ({ ...p, title: v }))} />
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-soft tracking-widest uppercase">Description *</label>
                  <textarea
                    rows={3}
                    value={form.desc}
                    onChange={e => setForm(p => ({ ...p, desc: e.target.value }))}
                    className="font-sans text-sm text-dark bg-cream border border-dark/10 px-4 py-3 focus:border-dark/30 outline-none resize-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-soft tracking-widest uppercase">Catégorie</label>
                  <select
                    value={form.cat}
                    onChange={e => setForm(p => ({ ...p, cat: e.target.value }))}
                    className="font-sans text-sm text-dark bg-cream border border-dark/10 px-4 py-3 focus:border-dark/30 outline-none"
                  >
                    {['web', 'mobile', 'desktop', 'gaming'].map(c => (
                      <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                    ))}
                  </select>
                </div>
                <PField label="Tags (virgule)" val={form.tags} set={v => setForm(p => ({ ...p, tags: v }))} placeholder="React, Firebase, …" />
                <PField label="Lien GitHub" val={form.github} set={v => setForm(p => ({ ...p, github: v }))} placeholder="https://github.com/…" />
                <PField label="Lien Demo" val={form.demo} set={v => setForm(p => ({ ...p, demo: v }))} placeholder="https://…" />

                <motion.button
                  whileHover={{ backgroundColor: '#E8533A' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={addProject}
                  className="font-sans font-medium text-sm bg-dark text-cream px-6 py-4 mt-2 transition-colors duration-300 flex items-center justify-between group"
                >
                  <span>Ajouter le projet ⚡</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function PField({ label, val, set, placeholder, type = 'text' }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-xs text-soft tracking-widest uppercase">{label}</label>
      <input
        type={type}
        value={val}
        onChange={e => set(e.target.value)}
        placeholder={placeholder || ''}
        className="font-sans text-sm text-dark bg-cream border border-dark/10 px-4 py-3 focus:border-dark/30 outline-none transition-colors"
      />
    </div>
  )
}
