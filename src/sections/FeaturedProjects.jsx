import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import GlowBlob from '../components/decor/GlowBlob'
import { projects } from '../data/projects'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 5)
  return (
    <section className="section-y relative overflow-hidden bg-cream-200">
      <GlowBlob className="-right-32 top-20 h-80 w-80" />
      <div className="container-px relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="(04)"
            eyebrow="Featured work"
            title="Proof of work, not just promises"
            intro="A glimpse of homes and spaces we've brought to life across Kerala."
          />
          <Reveal>
            <Link to="/projects" className="btn-ghost shrink-0">
              View all projects <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Asymmetric feature grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-3">
          {/* Large first card */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <FeatureCard project={featured[0]} large />
          </Reveal>
          {featured.slice(1, 5).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <FeatureCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ project, large = false }) {
  return (
    <Link
      to="/projects"
      className={`group relative block h-full overflow-hidden rounded-2xl ${large ? 'min-h-[320px] md:min-h-[520px]' : 'min-h-[240px]'}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent" />
      <span className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-cream-100 text-teal-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Icon name="arrowUpRight" className="h-5 w-5" strokeWidth={2} />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="inline-flex rounded-full bg-brass-500/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-950">
          {project.category}
        </span>
        <h3 className={`mt-3 font-display font-bold text-cream-100 ${large ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
          {project.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-cream-100/70">
          <Icon name="pin" className="h-4 w-4 text-brass-300" /> {project.location}
        </p>
      </div>
    </Link>
  )
}
