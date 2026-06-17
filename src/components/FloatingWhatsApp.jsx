import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Icon from './Icon'
import { whatsappLink } from '../data/site'

// Persistent WhatsApp quick-action (bottom-right). Stays OFF the full-screen hero so
// it never blocks the imagery — it reveals only once the user scrolls past the first
// screen, and hides again at the top. Consistent on every page (all heroes are 100svh).
export default function FloatingWhatsApp() {
  const reduce = useReducedMotion()
  const [pastHero, setPastHero] = useState(false)
  const [atFooter, setAtFooter] = useState(false)

  // Reveal only after the full-screen hero is scrolled past.
  useEffect(() => {
    const update = () => setPastHero(window.scrollY > window.innerHeight * 0.85)
    update() // honour current scroll position (deep links / refresh)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Hide once the footer comes into view so it never overlaps footer text.
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return
    const io = new IntersectionObserver(
      ([entry]) => setAtFooter(entry.isIntersecting),
      { threshold: 0.01 },
    )
    io.observe(footer)
    return () => io.disconnect()
  }, [])

  const visible = pastHero && !atFooter

  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Holytouch on WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      initial={false}
      animate={
        reduce
          ? { opacity: visible ? 1 : 0 }
          : { opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8, y: visible ? 0 : 12 }
      }
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`group fixed bottom-5 right-5 z-50 flex items-center rounded-full bg-[#22a559] py-2.5 pl-2.5 pr-2.5 text-white shadow-[0_14px_34px_-8px_rgba(34,165,89,0.65)] ring-1 ring-white/25 transition-[padding] duration-300 hover:-translate-y-0.5 sm:pr-5 ${
        visible ? '' : 'pointer-events-none'
      }`}
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <Icon name="whatsapp" className="h-5 w-5" />
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-brass-400 ring-2 ring-[#22a559]" />
      </span>
      <span className="ml-3 hidden whitespace-nowrap text-sm font-semibold sm:inline">
        Chat with us
      </span>
    </motion.a>
  )
}
