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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/logo-mark-light.png"
            alt=""
            className="h-24 w-24 object-contain"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

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
