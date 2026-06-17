import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Icon from './Icon'
import { whatsappLink } from '../data/site'

// Persistent WhatsApp quick-action (bottom-right) — present from first paint,
// stays through scroll. Collapses to icon-only while scrolling down, expands
// (with label) at the top or when scrolling up.
export default function FloatingWhatsApp() {
  const reduce = useReducedMotion()
  const [expanded, setExpanded] = useState(true)

  useEffect(() => {
    if (reduce) return
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      // expand near the very top or when scrolling up; collapse when scrolling down
      if (y < 80 || y < lastY) setExpanded(true)
      else if (y > lastY + 4) setExpanded(false)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduce])

  const showLabel = reduce || expanded

  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Holytouch on WhatsApp"
      initial={reduce ? false : { opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group fixed bottom-5 right-5 z-50 flex items-center rounded-full bg-[#22a559] py-2.5 pl-2.5 pr-2.5 text-white shadow-[0_14px_34px_-8px_rgba(34,165,89,0.65)] ring-1 ring-white/25 transition-[padding] duration-300 hover:-translate-y-0.5 sm:data-[expanded=true]:pr-5"
      data-expanded={showLabel}
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <Icon name="whatsapp" className="h-5 w-5" />
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-brass-400 ring-2 ring-[#22a559]" />
      </span>
      <span
        className={`hidden overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 sm:block ${
          showLabel ? 'ml-3 max-w-[8rem] opacity-100' : 'ml-0 max-w-0 opacity-0'
        }`}
      >
        Chat with us
      </span>
    </motion.a>
  )
}
