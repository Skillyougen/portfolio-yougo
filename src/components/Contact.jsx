import { useState } from 'react'
import { motion } from 'framer-motion'
import { sendMessage, errorMessage } from '../api'
import Icon from './ui/Icon'
import SectionTitle from './ui/SectionTitle'
import { reveal as fadeUp } from '../motion'

const EMPTY = { name: '', email: '', msg: '', website: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Mêmes règles que l'API, vérifiées avant l'envoi pour répondre en français
 *  et sans attendre un aller-retour. */
function validate({ name, email, msg }) {
  if (!name.trim()) return 'Merci d\'indiquer votre nom.'
  if (!EMAIL_RE.test(email.trim())) return 'Merci d\'indiquer une adresse email valide, pour que je puisse vous répondre.'
  if (msg.trim().length < 10) return 'Votre message doit contenir au moins 10 caractères.'
  if (msg.length > 3000) return 'Votre message ne doit pas dépasser 3 000 caractères.'
  return ''
}

export default function Contact({ links, loading }) {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent'
  const [error, setError] = useState('')

  const send = async () => {
    const invalid = validate(form)
    if (invalid) { setError(invalid); return }

    setStatus('sending'); setError('')
    try {
      await sendMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.msg.trim(),
        website: form.website,
      })
      setStatus('sent')
    } catch (e) {
      setError(errorMessage(e))
      setStatus('idle')
    }
  }

  const reset = () => { setStatus('idle'); setError(''); setForm(EMPTY) }

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle index="06" kicker="Contact" meta="Réponse rapide" title="Contact" script="écrivez-moi" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* ── GAUCHE ── */}
          <motion.div {...fadeUp(0.1)}>
            <p className="font-sans text-2xl md:text-3xl font-light leading-snug text-ink mb-4">
              Parlons de <b className="font-semibold">votre projet</b>.
            </p>
            <p className="font-sans text-mid text-base leading-relaxed mb-8 max-w-md">
              Un projet, une alternance, une collaboration ou une question ? Je suis disponible. Écrivez-moi directement.
            </p>

            {/* Liens */}
            <div className="panel p-3 md:p-4 flex flex-col gap-3">
              {loading
                ? [0, 1, 2].map(i => (
                    <div key={i} className="card h-[72px] animate-pulse" />
                  ))
                : (links || []).map((l, i) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      {...fadeUp(0.15 + i * 0.06)}
                      whileHover={{ x: 6 }}
                      className="card flex items-center gap-4 group px-4 py-3.5"
                    >
                      <span className="w-11 h-11 rounded-full bg-paper flex items-center justify-center text-ink group-hover:bg-accent group-hover:text-white transition-colors shrink-0"><Icon name={l.icon} size={22} /></span>
                      <div className="flex-1 min-w-0">
                        <p className="kicker text-[10px] mb-0.5">{l.label}</p>
                        <p className="font-sans text-sm text-ink truncate">{l.value}</p>
                      </div>
                      <span className="text-soft group-hover:text-accent transition-colors ml-auto flex"><Icon name="north_east" size={18} /></span>
                    </motion.a>
                  ))}
            </div>
          </motion.div>

          {/* ── DROITE : Formulaire ── */}
          <motion.div {...fadeUp(0.2)} className="panel p-3 md:p-4">
            <div className="card p-7 md:p-10">
            {status === 'sent' ? (
              <div className="text-center py-12" role="status">
                <div className="mb-5 flex justify-center text-green-600"><Icon name="check_circle" size={56} filled /></div>
                <h3 className="font-display uppercase text-4xl text-ink mb-2">Message envoyé !</h3>
                <p className="font-sans text-mid text-sm mb-8">Merci, je vous réponds dès que possible.</p>
                <button
                  onClick={reset}
                  className="font-sans text-sm bg-ink text-white px-6 py-3 rounded-full hover:bg-accent transition-colors"
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); send() }} noValidate>
                <h3 className="font-display uppercase text-3xl text-ink mb-7">Envoyer un message</h3>

                {error && (
                  <div role="alert" className="bg-red-50 border border-red-200 text-red-700 text-sm font-sans px-4 py-3 mb-5 rounded-xl">
                    {error}
                  </div>
                )}

                <div className="flex flex-col gap-5">
                  <Field label="Votre nom *" name="name" autoComplete="name"
                    val={form.name} set={v => setForm(p => ({ ...p, name: v }))} />
                  <Field label="Votre email *" name="email" type="email" autoComplete="email"
                    val={form.email} set={v => setForm(p => ({ ...p, email: v }))} />

                  {/* Champ leurre : masqué aux visiteurs et aux lecteurs d'écran,
                      rempli par les robots. L'API rejette tout envoi qui le contient. */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
                    <label>
                      Site web
                      <input type="text" name="website" tabIndex={-1} autoComplete="off"
                        value={form.website} onChange={e => setForm(p => ({ ...p, website: e.target.value }))} />
                    </label>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-msg" className="kicker text-[10px]">Message *</label>
                    <textarea
                      id="contact-msg"
                      rows={5}
                      maxLength={3000}
                      value={form.msg}
                      onChange={e => setForm(p => ({ ...p, msg: e.target.value }))}
                      placeholder="Décrivez votre projet…"
                      className="font-sans text-sm text-ink bg-paper/70 border border-ink/10 rounded-xl px-4 py-3 focus:border-accent focus:bg-white outline-none resize-none transition-colors"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileTap={{ scale: 0.97 }}
                    className="font-sans font-medium text-sm bg-ink text-white px-6 py-4 rounded-full hover:bg-accent transition-colors duration-300 text-left flex items-center justify-between group disabled:opacity-60"
                  >
                    <span>{status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}</span>
                    <span className="group-hover:translate-x-1 transition-transform flex"><Icon name="arrow_forward" size={18} /></span>
                  </motion.button>
                </div>
              </form>
            )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, val, set, type = 'text', autoComplete }) {
  const id = `contact-${name}`
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="kicker text-[10px]">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={val}
        onChange={e => set(e.target.value)}
        className="font-sans text-sm text-ink bg-paper/70 border border-ink/10 rounded-xl px-4 py-3 focus:border-accent focus:bg-white outline-none transition-colors"
      />
    </div>
  )
}
