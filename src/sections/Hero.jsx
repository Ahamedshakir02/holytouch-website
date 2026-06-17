import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Icon from '../components/Icon'
import { site } from '../data/site'

// Hero image — REPLACE with a flagship Holytouch project photo (landscape, ~1920px).
const HERO_IMG =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80'

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // subtle parallax: image drifts up, slight zoom out as you scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, reduce ? 1.05 : 1.18])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-teal-950">
      {/* Parallax image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="A modern Holytouch villa in Kerala at dusk"
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
      </motion.div>

      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-950/70 to-teal-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-transparent to-teal-950/30" />

      <div className="container-px relative flex h-full flex-col justify-end pb-16 pt-[72px] sm:justify-center sm:pb-0">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-brass-300"
          >
            Construction & Design · {site.location}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-balance font-display text-[2.6rem] font-bold leading-[1.02] text-cream-100 sm:text-6xl lg:text-7xl"
          >
            You Dream,
            <br />
            <span className="text-brass-400">We Deliver.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream-100/80 sm:text-xl"
          >
            Holytouch is your one-stop construction & design partner in Kerala — taking your home
            from concept to handover, built on trust and delivered with pride.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link to="/contact" className="btn-primary text-base">
              Get a Free Consultation
              <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link to="/projects" className="btn-ghost-light text-base">
              View Our Work
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-cream-100/70"
          >
            {['We Design.', 'We Plan.', 'We Build.'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-brass-400" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream-100/50 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream-100/30 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-brass-400"
          />
        </span>
      </motion.div>
    </section>
  )
}
