import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Icon from '../components/Icon'
import { site } from '../data/site'

// Hero image — REPLACE with a flagship Holytouch project photo (landscape, ~1920px).
const HERO_IMG =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80'

const meta = [
  { k: '01', label: 'We Design' },
  { k: '02', label: 'We Plan' },
  { k: '03', label: 'We Build' },
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

  return (
    <section ref={ref} className="relative flex h-[100svh] min-h-[600px] flex-col overflow-hidden bg-teal-950">
      {/* Parallax image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="A modern Holytouch villa in Kerala at dusk"
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
      </motion.div>

      {/* Single, restrained overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-950 via-teal-950/70 to-teal-950/25" />

      {/* Main content */}
      <div className="container-px relative flex flex-1 items-end pb-10 pt-[72px] sm:items-center sm:pb-0">
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/75 sm:text-lg"
          >
            Your one-stop construction &amp; design partner in Kerala — taking your home from concept
            to handover, built on trust and delivered with pride.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28 }}
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

      {/* Bottom hairline meta bar — architectural detail, fluid + responsive */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative border-t border-cream-100/15"
      >
        <div className="container-px flex items-center justify-between py-5">
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-1 sm:gap-x-10">
            {meta.map((m) => (
              <li key={m.k} className="flex items-baseline gap-2.5">
                <span className="font-display text-xs font-semibold text-brass-400">{m.k}</span>
                <span className="text-sm font-medium text-cream-100/80">{m.label}</span>
              </li>
            ))}
          </ul>

          {/* Scroll cue (desktop) */}
          <div className="hidden items-center gap-3 text-cream-100/45 md:flex">
            <span className="text-[0.7rem] uppercase tracking-[0.3em]">Scroll</span>
            <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream-100/25 p-1">
              <motion.span
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 1.7, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-brass-400"
              />
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
