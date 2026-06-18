import { motion } from 'framer-motion'

// Branded "dip to teal" curtain shown during route changes. It covers the screen while
// the incoming page mounts — so the swap is never a flash of the cream background — and
// echoes the intro/preloader look. Driven by AnimatePresence in App: the outgoing route's
// curtain fades up to full teal (cover), content is swapped underneath, then the incoming
// route's curtain fades back out (reveal). Purely decorative; never blocks clicks.
export default function PageCurtain({ reduce = false }) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-teal-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: reduce ? 0.18 : 0.5, ease: [0.45, 0, 0.55, 1] }}
    >
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brass-500/10 blur-3xl" />
      <motion.img
        src="/logo-mark-light.png"
        alt=""
        className="relative h-16 w-16 object-contain"
        initial={reduce ? false : { scale: 0.88, opacity: 0.45 }}
        animate={reduce ? false : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}
