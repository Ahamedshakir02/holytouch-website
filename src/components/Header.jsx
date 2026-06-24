import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import Icon from './Icon'
import { services } from '../data/services'
import { site, whatsappLink } from '../data/site'
import { getLenis } from '../hooks/useSmoothScroll'

const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', dropdown: 'services' },
  { label: 'Projects', to: '/projects', dropdown: 'projects' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

const projectMenu = [
  { label: 'All Projects', to: '/projects', icon: 'layers', desc: 'Browse the full portfolio' },
  { label: 'Ongoing Projects', to: '/projects/ongoing', icon: 'hammer', desc: 'Currently under construction' },
  { label: 'Completed Projects', to: '/projects/completed', icon: 'check', desc: 'Delivered & handed over' },
  { label: 'Upcoming Projects', to: '/projects/upcoming', icon: 'clock', desc: 'In planning & design' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null) // desktop hover dropdown ('services' | 'projects')
  const [mobileSub, setMobileSub] = useState(null) // mobile accordion ('services' | 'projects')
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
    setOpenMenu(null)
    setMobileSub(null)
  }, [location.pathname])

  // Lock scroll (and pause Lenis) while the mobile menu is open
  useEffect(() => {
    const lenis = getLenis()
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      lenis?.stop()
    } else {
      document.body.style.overflow = ''
      lenis?.start()
    }
    return () => {
      document.body.style.overflow = ''
      lenis?.start()
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 transition-all duration-500 ${
        mobileOpen ? 'z-[70]' : 'z-50'
      } ${scrolled ? 'bg-cream-100/90 shadow-soft backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="container-px">
        <div className="flex h-[72px] items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
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
                  onMouseEnter={() => setOpenMenu(item.dropdown)}
                  onMouseLeave={() => setOpenMenu(null)}
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
                    {openMenu === item.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 ${
                          item.dropdown === 'services' ? 'w-[min(520px,92vw)]' : 'w-[min(320px,90vw)]'
                        }`}
                      >
                        <div
                          className={`gap-1 rounded-2xl border border-cream-300 bg-cream-50 p-3 shadow-card ${
                            item.dropdown === 'services' ? 'grid grid-cols-2' : 'flex flex-col'
                          }`}
                        >
                          {item.dropdown === 'services'
                            ? services.map((s) => (
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
                              ))
                            : projectMenu.map((m) => (
                                <Link
                                  key={m.to}
                                  to={m.to}
                                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-cream-200"
                                >
                                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-900 text-brass-400 transition-colors group-hover:bg-brass-500 group-hover:text-teal-950">
                                    <Icon name={m.icon} className="h-5 w-5" />
                                  </span>
                                  <span>
                                    <span className="block text-sm font-semibold text-teal-900">{m.label}</span>
                                    <span className="mt-0.5 block text-xs leading-snug text-teal-900/60">
                                      {m.desc}
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

      {/* Mobile menu — full-screen overlay (scroll-independent: inset-0 + explicit 100dvh) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[70] flex h-[100dvh] flex-col bg-teal-950 text-cream-100 lg:hidden"
          >
            {/* Menu top bar */}
            <div className="container-px flex h-[72px] shrink-0 items-center justify-between border-b border-cream-100/10">
              <Logo variant="light" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/15 text-cream-100 transition-colors hover:border-brass-500 hover:text-brass-300"
              >
                <Icon name="close" className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            {/* Scrollable nav — data-lenis-prevent lets the inner list scroll past Lenis */}
            <nav data-lenis-prevent className="container-px flex-1 overflow-y-auto overscroll-contain py-3">
              {nav.map((item) =>
                item.dropdown ? (
                  <div key={item.to} className="border-b border-cream-100/10">
                    <button
                      type="button"
                      onClick={() => setMobileSub((v) => (v === item.dropdown ? null : item.dropdown))}
                      aria-expanded={mobileSub === item.dropdown}
                      className="flex w-full items-center justify-between py-3.5 text-left font-display text-lg font-medium tracking-tight text-cream-100/90 transition-colors hover:text-brass-300"
                    >
                      {item.label}
                      <Icon
                        name="arrow"
                        className={`h-4 w-4 text-brass-300 transition-transform duration-300 ${
                          mobileSub === item.dropdown ? '-rotate-90' : 'rotate-90'
                        }`}
                        strokeWidth={2}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileSub === item.dropdown && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col pb-3">
                            {item.dropdown === 'services' ? (
                              <>
                                <Link
                                  to="/services"
                                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-brass-300 hover:bg-cream-100/5"
                                >
                                  <Icon name="arrowUpRight" className="h-4 w-4" /> All Services
                                </Link>
                                {services.map((s) => (
                                  <Link
                                    key={s.slug}
                                    to={`/services#${s.slug}`}
                                    className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-cream-100/70 hover:bg-cream-100/5"
                                  >
                                    <Icon name={s.icon} className="h-5 w-5 shrink-0 text-brass-400/90" strokeWidth={1.6} />
                                    {s.title.split(' (')[0]}
                                  </Link>
                                ))}
                              </>
                            ) : (
                              projectMenu.map((m) => (
                                <Link
                                  key={m.to}
                                  to={m.to}
                                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-cream-100/70 hover:bg-cream-100/5"
                                >
                                  <Icon name={m.icon} className="h-5 w-5 shrink-0 text-brass-400/90" strokeWidth={1.6} />
                                  {m.label}
                                </Link>
                              ))
                            )}
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
                      `block border-b border-cream-100/10 py-3.5 font-display text-lg font-medium tracking-tight transition-colors ${
                        isActive ? 'text-brass-300' : 'text-cream-100/90 hover:text-brass-300'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </nav>

            {/* Pinned CTA footer */}
            <div className="container-px shrink-0 border-t border-cream-100/10 bg-teal-900/40 py-5">
              <div className="flex flex-col gap-3">
                <Link to="/contact" className="btn-primary w-full">
                  Get a Free Consultation
                </Link>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-ghost-light w-full">
                  <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
              <div className="mt-4">
                <a
                  href={`tel:${site.phones[0].value}`}
                  className="flex items-center gap-2 text-sm font-medium text-cream-100/85"
                >
                  <Icon name="phone" className="h-4 w-4 text-brass-400" /> {site.phones[0].label}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
