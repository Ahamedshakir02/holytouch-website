import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { valueProps, stats } from '../data/content'

export default function ValueProps() {
  return (
    <section className="relative z-10 bg-cream-100">
      <div className="container-px -mt-14 sm:-mt-20">
        {/* Floating value-prop card overlapping the hero */}
        <div className="overflow-hidden rounded-2xl border border-teal-900/10 shadow-card">
          <div className="grid grid-cols-1 gap-px bg-teal-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.08}
                className="group relative bg-cream-50 p-8 transition-colors duration-500 hover:bg-cream-100"
              >
                <span className="font-display text-xs font-semibold tracking-widest text-brass-500/70">
                  0{i + 1}
                </span>
                <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-brass-500/10 text-brass-600 transition-colors duration-500 group-hover:bg-brass-500 group-hover:text-teal-950">
                  <Icon name={v.icon} className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-teal-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-teal-900/55">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-16 sm:py-20 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="border-l border-teal-900/10 pl-5">
              <p className="font-display text-4xl font-bold tracking-tightest text-teal-900 sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-teal-900/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
