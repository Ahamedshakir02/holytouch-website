import { motion } from 'framer-motion'
import Icon from './Icon'
import { whatsappLink } from '../data/site'

// Persistent WhatsApp quick-action (bottom-right) — visible on every screen,
// including over the dark hero, from first paint.
export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Holytouch on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#22a559] py-2.5 pl-2.5 pr-5 text-white shadow-[0_14px_34px_-8px_rgba(34,165,89,0.65)] ring-1 ring-white/25 transition-transform duration-300 hover:-translate-y-0.5"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <Icon name="whatsapp" className="h-5 w-5" />
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-brass-400 ring-2 ring-[#22a559]" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </motion.a>
  )
}
