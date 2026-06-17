import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { valueProps, stats } from '../data/content'

export default function ValueProps() {
  return (
    <section className="relative z-10 bg-cream-100">
      <div className="container-px -mt-16 sm:-mt-20">
        {/* Floating value-prop card overlapping the hero */}
        <div className="overflow-hidden rounded-3xl border border-cream-300 bg-cream-50 shadow-card">
          <div className="grid grid-cols-1 divide-y divide-cream-300 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.08}
                className="group relative p-7 transition-colors hover:bg-cream-100 sm:p-8 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-cream-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-900 text-brass-400 transition-colors group-hover:bg-brass-500 group-hover:text-teal-950">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-teal-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-teal-900/60">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 py-14 sm:py-16 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center sm:text-left">
              <p className="font-display text-4xl font-bold text-brass-600 sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-teal-900/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
