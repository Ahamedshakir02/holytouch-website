import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { services } from '../data/services'
import { site, whatsappLink } from '../data/site'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Our Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-teal-950 text-cream-100/80">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brass-500/10 blur-3xl" />

      {/* CTA strip */}
      <div className="border-b border-cream-100/10">
        <div className="container-px flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brass-300">Let's build together</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold text-cream-100 sm:text-4xl">
              Ready to start your project with Kerala's perfect builder?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Get a Free Consultation</Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-ghost-light">
              <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-px grid grid-cols-1 gap-x-10 gap-y-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed lg:max-w-none">
            End-to-end construction & design solutions in {site.location}. From concept to handover —
            built on trust, delivered with pride.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              ['instagram', site.social.instagram],
              ['facebook', site.social.facebook],
              ['linkedin', site.social.linkedin],
              ['youtube', site.social.youtube],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100/70 transition-colors hover:border-brass-500 hover:text-brass-300"
              >
                <span className="text-[11px] font-semibold uppercase">{label[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-100">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-brass-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-100">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services#${s.slug}`} className="transition-colors hover:text-brass-300">
                  {s.title.split(' (')[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-100">Get in touch</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {site.phones.map((p) => (
              <li key={p.value} className="flex items-center gap-2.5">
                <Icon name={p.whatsapp ? 'whatsapp' : 'phone'} className="h-4 w-4 text-brass-400" />
                <a href={`tel:${p.value}`} className="transition-colors hover:text-brass-300">
                  {p.label}
                </a>
                {p.whatsapp && <span className="text-[10px] uppercase tracking-wide text-brass-300/70">WhatsApp</span>}
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Icon name="mail" className="h-4 w-4 text-brass-400" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-brass-300">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-100/50 sm:flex-row">
          <p>© {year} {site.name}. {site.promise}</p>
          <p>
            {site.website} · Designed for <span className="text-brass-300">{site.name}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
