import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Reusable inner-page hero (dark band with breadcrumb + title).
export default function PageHero({ eyebrow, title, intro, image, breadcrumb }) {
  return (
    <section className="relative overflow-hidden bg-teal-950 pt-[72px] text-cream-100">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/80 to-teal-950/50" />
        </div>
      )}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brass-500/10 blur-3xl" />

      <div className="container-px relative py-20 sm:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {breadcrumb && (
            <nav className="mb-5 flex items-center gap-2 text-xs font-medium text-cream-100/50">
              <Link to="/" className="hover:text-brass-300">Home</Link>
              <span>/</span>
              <span className="text-brass-300">{breadcrumb}</span>
            </nav>
          )}
          {eyebrow && <span className="eyebrow text-brass-300">{eyebrow}</span>}
          <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/75">{intro}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
