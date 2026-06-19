import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBand from '../sections/CtaBand'
import BlueprintGrid from '../components/decor/BlueprintGrid'
import GlowBlob from '../components/decor/GlowBlob'
import { projects, categories, statuses } from '../data/projects'

const HERO = 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80'

const STATUS_TABS = ['All', ...statuses]
const slugToStatus = { ongoing: 'Ongoing', completed: 'Completed', upcoming: 'Upcoming' }
const STATUS_DOT = {
  Ongoing: 'bg-brass-400',
  Completed: 'bg-emerald-400',
  Upcoming: 'bg-sky-400',
}

export default function Projects() {
  const { status: statusSlug } = useParams()
  const [status, setStatus] = useState('All')
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  // Seed the stage filter from the URL (e.g. /projects/ongoing from the nav dropdown)
  useEffect(() => {
    setStatus(statusSlug ? slugToStatus[statusSlug] || 'All' : 'All')
  }, [statusSlug])

  const filtered = projects.filter(
    (p) => (status === 'All' || p.status === status) && (filter === 'All' || p.category === filter),
  )

  return (
    <>
      <Seo
        title="Projects — Our Portfolio of Work in Kerala"
        description="Browse Holytouch's portfolio of residential, commercial, interior and landscape projects across Kerala. Filterable gallery with project details."
      />
      <PageHero
        breadcrumb="Projects"
        eyebrow="Our portfolio"
        title="Spaces we've brought to life"
        intro="A selection of our residential, commercial, interior and landscape work across Kerala. These are placeholders — swap in your real project photography."
        image={HERO}
      />

      <section className="bg-cream-100 py-16 sm:py-20 relative overflow-hidden">
        <BlueprintGrid className="opacity-[0.04]" />
        <GlowBlob className="-left-28 top-24 h-80 w-80" />
        <div className="container-px relative">
          {/* Filters */}
          <div className="space-y-4">
            {/* Stage */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="mr-1 w-12 text-xs font-semibold uppercase tracking-wider text-teal-900/40">Stage</span>
              {STATUS_TABS.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    status === s
                      ? 'bg-teal-900 text-cream-100'
                      : 'border border-cream-300 text-teal-900 hover:border-brass-500 hover:text-brass-600'
                  }`}
                >
                  {s === 'All' ? 'All Projects' : s}
                </button>
              ))}
            </div>
            {/* Type */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="mr-1 w-12 text-xs font-semibold uppercase tracking-wider text-teal-900/40">Type</span>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    filter === c
                      ? 'bg-teal-900 text-cream-100'
                      : 'border border-cream-300 text-teal-900 hover:border-brass-500 hover:text-brass-600'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.button
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setActive(p)}
                  className="group relative block overflow-hidden rounded-2xl text-left"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/10 to-transparent opacity-90" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-teal-950/70 px-3 py-1 text-[11px] font-semibold text-cream-100 backdrop-blur">
                    <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[p.status]}`} />
                    {p.status}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-flex rounded-full bg-brass-500/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-950">
                      {p.category}
                    </span>
                    <h3 className="mt-2.5 font-display text-lg font-bold text-cream-100">{p.title}</h3>
                    <p className="flex items-center gap-1.5 text-sm text-cream-100/70">
                      <Icon name="pin" className="h-4 w-4 text-brass-300" /> {p.location}
                    </p>
                  </div>
                  <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-cream-100 text-teal-900 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <Icon name="arrowUpRight" className="h-5 w-5" strokeWidth={2} />
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-12 rounded-2xl border border-cream-300 bg-cream-50 p-10 text-center text-sm text-teal-900/60">
              No projects in this view yet — check back soon.
            </p>
          )}
        </div>
      </section>

      {/* Detail modal */}
      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>

      <CtaBand />
    </>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-teal-950/80 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl bg-cream-50 md:grid-cols-2"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-teal-950/60 text-cream-100 backdrop-blur transition-colors hover:bg-teal-950"
        >
          <Icon name="close" className="h-5 w-5" strokeWidth={2} />
        </button>
        <img src={project.image} alt={project.title} className="h-56 w-full object-cover md:h-full" />
        <div className="overflow-y-auto p-8">
          <span className="inline-flex rounded-full bg-brass-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brass-700">
            {project.category}
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold text-teal-900">{project.title}</h3>
          <p className="mt-3 leading-relaxed text-teal-900/70">{project.summary}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-cream-300 pt-6 text-sm">
            {[
              ['Location', project.location],
              ['Stage', project.status],
              ['Year', project.year],
              ['Built-up area', project.area],
              ['Category', project.category],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-teal-900/65">{k}</dt>
                <dd className="mt-0.5 font-semibold text-teal-900">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 rounded-xl bg-cream-200 p-4 text-xs text-teal-900/60">
            Placeholder project detail. Replace with the real brief, scope, gallery and outcome.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
