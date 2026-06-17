import Icon from './Icon'
import { whatsappLink } from '../data/site'

// Persistent WhatsApp quick-action (bottom-right).
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Holytouch on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#1f7a4d] py-3 pl-3 pr-4 text-cream-100 shadow-card transition-transform hover:-translate-y-0.5"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-100/15">
        <Icon name="whatsapp" className="h-5 w-5" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
      <span className="absolute right-3 top-3 h-2.5 w-2.5 animate-ping rounded-full bg-brass-300" />
    </a>
  )
}
