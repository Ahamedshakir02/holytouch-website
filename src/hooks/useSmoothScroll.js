import { useEffect } from 'react'
import Lenis from 'lenis'

// Shared Lenis instance so other modules (e.g. ScrollToTop) can drive scrolling.
let lenisInstance = null
export const getLenis = () => lenisInstance

// Initialise Lenis smooth scrolling once, at the app root.
// Disabled entirely when the user prefers reduced motion.
export default function useSmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    lenisInstance = lenis

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
