import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { services } from '../data/services'

export default function ServicesPreview() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionHeading
            eyebrow="What we do"
            title="Eight services, one accountable team"
            intro="From the first sketch to the final handover, every discipline your project needs lives under one roof — so nothing falls through the cracks."
          />
          <Reveal>
            <Link to="/services" className="btn-ghost shrink-0">
              All Services <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <Link
                to={`/services#${s.slug}`}
                className="card-hover group flex h-full flex-col rounded-2xl border border-cream-300 bg-cream-50 p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-900 text-brass-400 transition-colors group-hover:bg-brass-500 group-hover:text-teal-950">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-teal-900">
                  {s.title.split(' (')[0]}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-teal-900/60">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-600 transition-colors group-hover:text-brass-700">
                  Learn more
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
