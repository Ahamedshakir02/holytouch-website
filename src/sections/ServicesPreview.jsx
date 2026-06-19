import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import BlueprintGrid from '../components/decor/BlueprintGrid'
import GlowBlob from '../components/decor/GlowBlob'
import { services } from '../data/services'

export default function ServicesPreview() {
  return (
    <section className="section-y relative overflow-hidden bg-cream-100">
      <BlueprintGrid className="opacity-[0.04]" />
      <GlowBlob className="-left-28 bottom-10 h-80 w-80" />
      <div className="container-px relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="(01)"
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

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-teal-900/10 bg-teal-900/10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <Link
                to={`/services#${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden bg-cream-50 p-6 transition-colors duration-500 hover:bg-cream-100 sm:p-7"
              >
                <span className="absolute left-0 top-0 h-0.5 w-0 bg-brass-500 transition-all duration-500 group-hover:w-full" />
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brass-500/10 text-brass-600 transition-colors duration-500 group-hover:bg-brass-500 group-hover:text-teal-950">
                    <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-xs font-semibold tracking-widest text-teal-900/30">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-teal-900">
                  {s.title.split(' (')[0]}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-teal-900/65">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-600">
                  Learn more
                  <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
