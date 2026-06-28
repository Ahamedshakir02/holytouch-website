import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

// Full-screen inner-page hero — mirrors the home hero (sections/Hero.jsx) so every
// page opens with the same 100svh, image + parallax + hairline meta-bar treatment.
export default function PageHero({ eyebrow, title, intro, image, breadcrumb }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '16%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.16])

  return (
    <section ref={ref} className="relative flex min-h-screen min-h-[100svh] flex-col overflow-hidden bg-teal-950 text-cream-100">
      {/* Parallax image — covers the full first screen */}
      {image && (
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover" loading="eager" />
        </motion.div>
      )}

      {/* Restrained overlay for legibility (matches home) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-950 via-teal-950/70 to-teal-950/25" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brass-500/10 blur-3xl" />

      {/* Content */}
      <div className="container-px relative flex flex-1 items-center pb-8 pt-28 sm:pb-0 sm:pt-[72px]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {breadcrumb && (
            <nav className="mb-5 flex items-center gap-2 text-xs font-medium text-cream-100/55">
              <Link to="/" className="transition-colors hover:text-brass-300">Home</Link>
              <span>/</span>
              <span className="text-brass-300">{breadcrumb}</span>
            </nav>
          )}
          {eyebrow && <span className="eyebrow text-brass-300">{eyebrow}</span>}
          <h1 className="mt-5 text-balance font-display text-display-xl font-bold">{title}</h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/75">{intro}</p>
          )}
        </motion.div>
      </div>

      {/* Bottom hairline meta bar — identical detail to the home hero */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative border-t border-cream-100/15"
      >
        <div className="container-px flex items-center justify-between gap-6 py-5">
          <span className="flex items-center gap-2.5 text-sm font-medium text-cream-100/80">
            <span className="font-display text-xs font-semibold text-brass-400">HT</span>
            {breadcrumb || 'Holytouch'}
          </span>
        </div>
      </motion.div>
    </section>
  )
}
