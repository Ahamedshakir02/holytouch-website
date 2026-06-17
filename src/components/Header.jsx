import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import Icon from './Icon'
import { services } from '../data/services'
import { site, whatsappLink } from '../data/site'

const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', dropdown: true },
  { label: 'Projects', to: '/projects' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/90 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-px">
        <div className="grid h-[72px] grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="justify-self-start">
            <Logo variant={scrolled ? 'dark' : 'light'} />
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 justify-self-center lg:flex">
            {nav.map((item) =>
              item.dropdown ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? scrolled ? 'text-brass-600' : 'text-brass-300'
                          : scrolled
                            ? 'text-teal-900 hover:text-brass-600'
                            : 'text-cream-100 hover:text-brass-300'
                      }`
                    }
                  >
                    {item.label}
                    <Icon name="arrow" className="h-3.5 w-3.5 rotate-90" strokeWidth={2} />
                  </NavLink>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-3"
                      >
                        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-cream-300 bg-cream-50 p-3 shadow-card">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services#${s.slug}`}
                              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-cream-200"
                            >
                              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-900 text-brass-400 transition-colors group-hover:bg-brass-500 group-hover:text-teal-950">
                                <Icon name={s.icon} className="h-5 w-5" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-teal-900">
                                  {s.title.split(' (')[0]}
                                </span>
                                <span className="mt-0.5 block text-xs leading-snug text-teal-900/60">
                                  {s.short}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? scrolled ? 'text-brass-600' : 'text-brass-300'
                        : scrolled
                          ? 'text-teal-900 hover:text-brass-600'
                          : 'text-cream-100 hover:text-brass-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3 justify-self-end">
            <a
              href={`tel:${site.phones[0].value}`}
              className={`hidden items-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors xl:flex ${
                scrolled ? 'text-teal-900 hover:text-brass-600' : 'text-cream-100 hover:text-brass-300'
              }`}
            >
              <Icon name="phone" className={`h-4 w-4 ${scrolled ? 'text-brass-600' : 'text-brass-300'}`} />
              {site.phones[0].label}
            </a>
            <Link to="/contact" className="btn-primary hidden sm:inline-flex">
              Get a Free Consultation
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-900 text-cream-100 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <Icon name={mobileOpen ? 'close' : 'menu'} className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[72px] z-40 flex flex-col bg-cream-100 lg:hidden"
          >
            {/* Scrollable nav */}
            <nav className="container-px flex-1 overflow-y-auto py-2">
              {nav.map((item) =>
                item.dropdown ? (
                  <div key={item.to} className="border-b border-cream-300/70">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      className="flex w-full items-center justify-between py-4 font-display text-xl font-semibold text-teal-900"
                    >
                      Services
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full bg-cream-200 text-teal-900 transition-transform duration-300 ${
                          mobileServicesOpen ? 'rotate-90' : ''
                        }`}
                      >
                        <Icon name="arrow" className="h-4 w-4 rotate-90" strokeWidth={2} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-0.5 pb-3">
                            <Link
                              to="/services"
                              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-brass-600 hover:bg-cream-200"
                            >
                              <Icon name="arrowUpRight" className="h-4 w-4" /> All Services
                            </Link>
                            {services.map((s) => (
                              <Link
                                key={s.slug}
                                to={`/services#${s.slug}`}
                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-teal-900/75 hover:bg-cream-200"
                              >
                                <Icon name={s.icon} className="h-5 w-5 shrink-0 text-brass-600" strokeWidth={1.6} />
                                {s.title.split(' (')[0]}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-cream-300/70 py-4 font-display text-xl font-semibold transition-colors ${
                        isActive ? 'text-brass-600' : 'text-teal-900'
                      }`
                    }
                  >
                    {item.label}
                    <Icon name="arrow" className="h-4 w-4 text-teal-900/25" strokeWidth={2} />
                  </NavLink>
                ),
              )}
            </nav>

            {/* Pinned CTA footer */}
            <div className="container-px shrink-0 border-t border-cream-300 bg-cream-50 py-5">
              <div className="flex flex-col gap-3">
                <Link to="/contact" className="btn-primary w-full">
                  Get a Free Consultation
                </Link>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-ghost w-full">
                  <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                {site.phones.map((p) => (
                  <a
                    key={p.value}
                    href={`tel:${p.value}`}
                    className="flex items-center gap-2 text-sm font-medium text-teal-900"
                  >
                    <Icon name="phone" className="h-4 w-4 text-brass-600" /> {p.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
