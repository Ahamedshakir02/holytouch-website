import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBand from '../sections/CtaBand'
import BlueprintGrid from '../components/decor/BlueprintGrid'
import GlowBlob from '../components/decor/GlowBlob'
import { projects } from '../data/projects'

const HERO = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <>
      <Seo
        title="Gallery — Our Work in Pictures"
        description="A visual gallery of Holytouch's residential, commercial, interior and landscape projects across Kerala. Tap any image to view it larger."
      />
      <PageHero
        breadcrumb="Gallery"
        eyebrow="Our work in pictures"
        title="A closer look at the craft"
        intro="Textures, details and finished spaces from across our portfolio. Tap any image to view it larger. These are placeholders — swap in your real project photography."
        image={HERO}
      />

      <section className="bg-cream-100 section-y relative overflow-hidden">
        <BlueprintGrid className="opacity-[0.04]" />
        <GlowBlob className="-left-28 top-24 h-80 w-80" />
        <div className="container-px relative">
          {/* Masonry via CSS columns — organic, photo-led layout */}
          <div className="columns-2 gap-4 sm:gap-5 lg:columns-3">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.05} className="mb-4 block break-inside-avoid sm:mb-5">
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className="group relative block w-full overflow-hidden rounded-2xl text-left"
                  aria-label={`View ${p.title}`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-teal-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-sm font-semibold text-cream-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Icon name="pin" className="h-4 w-4 shrink-0 text-brass-300" />
                    <span className="truncate">{p.title}</span>
                  </span>
                  <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-1.5 items-center justify-center rounded-full bg-cream-100 text-teal-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Icon name="plus" className="h-4 w-4" strokeWidth={2} />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && <Lightbox project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>

      <CtaBand />
    </>
  )
}

function Lightbox({ project, onClose }) {
  const reduce = useReducedMotion()

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-teal-950/85 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-teal-950/60 text-cream-100 backdrop-blur transition-colors hover:bg-teal-950"
      >
        <Icon name="close" className="h-5 w-5" strokeWidth={2} />
      </button>
      <motion.figure
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] max-w-5xl overflow-hidden rounded-2xl"
      >
        <img
          src={project.image.replace(/w=\d+/, 'w=1600')}
          alt={project.title}
          className="max-h-[88vh] w-full object-contain"
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-teal-950/90 to-transparent px-5 pb-4 pt-10 text-cream-100">
          <Icon name="pin" className="h-4 w-4 shrink-0 text-brass-300" />
          <span className="font-display text-base font-semibold">{project.title}</span>
          <span className="text-sm text-cream-100/70">· {project.location}</span>
        </figcaption>
      </motion.figure>
    </motion.div>
  )
}
