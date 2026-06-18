import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import ContourLines from '../components/decor/ContourLines'
import GlowBlob from '../components/decor/GlowBlob'
import { site, whatsappLink } from '../data/site'

// REPLACE with a wide architectural hero photo.
const IMG =
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80'

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <img src={IMG} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-teal-950/85" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" />
      <GlowBlob className="-right-24 -top-24 h-80 w-80" />
      <ContourLines variant="dark" className="bottom-0 left-0 h-44 w-full" opacity={0.22} />

      <div className="container-px section-y relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center text-brass-300">Let's begin</span>
          <h2 className="mt-5 text-balance font-display text-display-lg font-bold text-cream-100">
            Let's Build Something Extraordinary
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream-100/75">
            Book a free, no-obligation consultation. Tell us your vision and budget, and we'll show
            you exactly how Holytouch can bring it to life.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base">
              Get a Free Consultation <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
            </Link>
            <a href={`tel:${site.phones[0].value}`} className="btn-ghost-light text-base">
              <Icon name="phone" className="h-4 w-4" /> {site.phones[0].label}
            </a>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-300 hover:text-brass-200"
          >
            <Icon name="whatsapp" className="h-4 w-4" /> Or message us on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
