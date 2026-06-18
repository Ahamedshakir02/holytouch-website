import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis } from '../hooks/useSmoothScroll'

// Handles #hash anchor scrolling on navigation. The plain top-reset on route change is
// handled by App's AnimatePresence `onExitComplete` (after the outgoing page fades out),
// so this only chases hash targets — retrying for a short window because, with a "wait"
// page transition, the target section mounts a beat after the URL changes.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    let raf
    const start = performance.now()
    const tryScroll = () => {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        const lenis = getLenis()
        if (lenis) lenis.scrollTo(el, { offset: -80 })
        else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      // Keep looking until the incoming page has mounted (cap ~1s).
      if (performance.now() - start < 1000) raf = requestAnimationFrame(tryScroll)
    }
    raf = requestAnimationFrame(tryScroll)
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])

  return null
}
