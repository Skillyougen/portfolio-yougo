import { useState } from 'react'
import { motion } from 'framer-motion'
import { CONTACT_LINKS } from '../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)

  const send = () => {
    if (!form.name || !form.msg) return
    const sub = encodeURIComponent('Message de ' + form.name)
    const body = encodeURIComponent(form.msg)
    window.location.href = `mailto:yohannngankamg@gmail.com?subject=${sub}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <motion.p {...fadeUp(0)} className="font-mono text-xs text-accent tracking-[4px] uppercase whitespace-nowrap">
            Contact
          </motion.p>
          <div className="flex-1 h-px bg-dark/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── GAUCHE ── */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-tight text-dark mb-6">
              Parlons de<br />votre projet
            </h2>
            <p className="font-sans text-mid text-base leading-relaxed mb-10 max-w-sm">
              Un projet, une collaboration ou une question ? Je suis disponible. Écrivez-moi directement.
            </p>

            {/* Liens */}
            <div className="flex flex-col gap-4">
              {CONTACT_LINKS.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  {...fadeUp(0.15 + i * 0.06)}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 group border border-dark/8 px-5 py-4 bg-white hover:border-dark/20 transition-all duration-300"
                >
                  <span className="text-xl w-8 text-center">{l.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-xs text-soft uppercase tracking-widest mb-0.5">{l.label}</p>
                    <p className="font-sans text-sm text-dark truncate">{l.value}</p>
                  </div>
                  <span className="text-soft group-hover:text-dark transition-colors ml-auto">↗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── DROITE : Formulaire ── */}
          <motion.div {...fadeUp(0.2)} className="bg-white border border-dark/8 p-8 md:p-10">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-5">✅</div>
                <h3 className="font-serif text-2xl font-bold text-dark mb-2">Message préparé !</h3>
                <p className="font-sans text-mid text-sm mb-8">Votre client email va s'ouvrir.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', msg: '' }) }}
                  className="font-sans text-sm bg-dark text-cream px-6 py-3 hover:bg-accent transition-colors"
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-xl font-bold text-dark mb-7">Envoyer un message</h3>
                <div className="flex flex-col gap-5">
                  <Field label="Votre nom *" val={form.name} set={v => setForm(p => ({ ...p, name: v }))} />
                  <Field label="Votre email" val={form.email} set={v => setForm(p => ({ ...p, email: v }))} type="email" />
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-soft tracking-widest uppercase">Message *</label>
                    <textarea
                      rows={5}
                      value={form.msg}
                      onChange={e => setForm(p => ({ ...p, msg: e.target.value }))}
                      placeholder="Décrivez votre projet…"
                      className="font-sans text-sm text-dark bg-cream border border-dark/10 px-4 py-3 focus:border-dark/30 outline-none resize-none transition-colors"
                    />
                  </div>
                  <motion.button
                    whileHover={{ backgroundColor: '#E8533A' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={send}
                    className="font-sans font-medium text-sm bg-dark text-cream px-6 py-4 transition-colors duration-300 text-left flex items-center justify-between group"
                  >
                    <span>Envoyer le message</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </motion.button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, val, set, type = 'text' }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-xs text-soft tracking-widest uppercase">{label}</label>
      <input
        type={type}
        value={val}
        onChange={e => set(e.target.value)}
        className="font-sans text-sm text-dark bg-cream border border-dark/10 px-4 py-3 focus:border-dark/30 outline-none transition-colors"
      />
    </div>
  )
}
