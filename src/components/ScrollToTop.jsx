import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis } from '../hooks/useSmoothScroll'

// Reset scroll on route change; scroll to #hash anchors when present.
// Uses the Lenis instance when smooth scrolling is active, else native scroll.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const lenis = getLenis()

    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        // small delay so the target section is mounted
        setTimeout(() => {
          if (lenis) lenis.scrollTo(el, { offset: -80 })
          else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 80)
        return
      }
    }

    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
