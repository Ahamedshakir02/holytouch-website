import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

// Brand intro shown once per browser session. A teal panel with the logo mark
// drawing in, then the panel wipes up to reveal the hero.
// Reduced-motion: skipped entirely.
export default function Preloader() {
  const reduce = useReducedMotion()
  const [done, setDone] = useState(
    () => typeof window === 'undefined' || sessionStorage.getItem('ht_preloaded') === '1',
  )

  useEffect(() => {
    if (done) return
    if (reduce) {
      sessionStorage.setItem('ht_preloaded', '1')
      setDone(true)
      return
    }
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      sessionStorage.setItem('ht_preloaded', '1')
      setDone(true)
    }, 1500)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [done, reduce])

  useEffect(() => {
    if (done) document.body.style.overflow = ''
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-teal-950"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <svg viewBox="0 0 96 96" className="h-24 w-24" aria-hidden="true">
            <motion.circle
              cx="48" cy="48" r="44"
              fill="none" stroke="#C2A15A" strokeWidth="1.6"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
            <motion.g
              transform="rotate(-12 48 48)"
              style={{ transformOrigin: 'center' }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <path d="M48 26c14 12 14 28 0 44-14-16-14-32 0-44Z" fill="none" stroke="#C2A15A" strokeWidth="2.4" strokeLinejoin="round" />
              <path d="M48 32c-.8 12-.8 24 0 36" stroke="#D9BE85" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M48 45c3.4-1.8 6.2-4 8.2-6.8M48 54c3.4-1.8 6.2-4 8.2-6.8" stroke="#C2A15A" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            </motion.g>
          </svg>

          <motion.div
            className="mt-7 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <p className="font-display text-2xl font-bold tracking-tightest text-cream-100">Holytouch</p>
            <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brass-300">
              Your Perfect Builder
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
