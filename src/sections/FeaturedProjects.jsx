import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { projects } from '../data/projects'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 5)
  return (
    <section className="section-y bg-cream-200">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="(04)"
            eyebrow="Featured work"
            title="Proof of work, not just promises"
            intro="A glimpse of homes and spaces we've brought to life across Kerala. Swap these placeholders for your real project photography."
          />
          <Reveal>
            <Link to="/projects" className="btn-ghost shrink-0">
              View all projects <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Asymmetric feature grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
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
