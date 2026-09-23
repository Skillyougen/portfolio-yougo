// Animations communes : apparition au défilement et à l'arrivée sur la page.
const EASE = [0.22, 1, 0.36, 1]

export const reveal = (delay = 0, y = 28) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, ease: EASE, delay },
})

export const enter = (delay = 0, y = 30) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: EASE, delay },
})
