import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Icon from '../components/Icon'
import { site } from '../data/site'
import { stats } from '../data/content'

// Hero slideshow — REPLACE with flagship Holytouch project photos (landscape, ~1920px).
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80',
]

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '16%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.16])

  // Slow cross-fade through the hero images (paused under reduced-motion)
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_IMAGES.length), 5000)
    return () => clearInterval(id)
  }, [reduce])

  // Rotating tagline beneath the headline
  const [line, setLine] = useState(0)
  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setLine((l) => (l + 1) % site.taglines.length), 3200)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-teal-950">
      {/* Parallax cross-fade slideshow — covers the full first screen */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {reduce ? (
          <img
            src={HERO_IMAGES[0]}
            alt="A modern Holytouch villa in Kerala"
            className="h-full w-full object-cover"
            fetchpriority="high"
          />
        ) : (
          <AnimatePresence>
            <motion.img
              key={slide}
              src={HERO_IMAGES[slide]}
              alt="A modern Holytouch project in Kerala"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-full object-cover"
              fetchpriority={slide === 0 ? 'high' : undefined}
            />
          </AnimatePresence>
        )}
      </motion.div>

      {/* Single, restrained overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-950 via-teal-950/70 to-teal-950/25" />

      {/* Main content */}
      <div className="container-px relative flex flex-1 items-center pb-8 pt-28 sm:pb-0 sm:pt-[72px]">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-brass-300"
          >
            Construction &amp; Design · {site.location}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance font-display text-display-xl font-bold text-cream-100"
          >
            You Dream,
            <br />
            <span className="text-brass-400">We Deliver.</span>
          </motion.h1>

          {/* Rotating tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.14 }}
            className="mt-4 min-h-[1.5rem] overflow-hidden sm:mt-5"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={reduce ? 'static' : line}
                initial={reduce ? false : { y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduce ? undefined : { y: -24, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-brass-300/90 sm:text-lg"
              >
                {site.taglines[reduce ? 0 : line]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/75 sm:text-lg"
          >
            Your one-stop construction &amp; design partner in Kerala — taking your home from concept
            to handover, built on trust and delivered with pride.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Get a Free Consultation
              <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link to="/projects" className="btn-ghost-light">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom trust-stats bar — credibility at a glance, anchors the hero base */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative border-t border-cream-100/15"
      >
        <div className="container-px grid grid-cols-2 gap-y-4 py-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-display text-2xl font-bold text-brass-400 sm:text-3xl">{s.value}</span>
              <span className="mt-0.5 text-xs leading-snug text-cream-100/65 sm:text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
