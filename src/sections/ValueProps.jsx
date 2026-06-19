import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CountUp from '../components/CountUp'
import BlueprintGrid from '../components/decor/BlueprintGrid'
import GlowBlob from '../components/decor/GlowBlob'
import { valueProps, stats } from '../data/content'

export default function ValueProps() {
  return (
    <section className="relative z-10 overflow-hidden bg-cream-100">
      <BlueprintGrid className="opacity-[0.04]" />
      <GlowBlob className="-right-28 top-24 h-80 w-80" />
      <div className="container-px section-y relative">
        {/* Value-prop card */}
        <div className="overflow-hidden rounded-2xl border border-teal-900/10 shadow-card">
          <div className="grid grid-cols-1 gap-px bg-teal-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.08}
                className="group relative overflow-hidden bg-cream-50 p-6 transition-colors duration-500 hover:bg-cream-100 sm:p-8"
              >
                <span className="absolute left-0 top-0 h-0.5 w-0 bg-brass-500 transition-all duration-500 group-hover:w-full" />
                <span className="font-display text-xs font-semibold tracking-widest text-brass-500/70">
                  0{i + 1}
                </span>
                <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-brass-500/10 text-brass-600 transition-colors duration-500 group-hover:bg-brass-500 group-hover:text-teal-950">
                  <Icon name={v.icon} className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-teal-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-teal-900/65">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-20 sm:gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="border-l border-teal-900/10 pl-5">
              <p className="font-display text-4xl font-bold tracking-tightest text-teal-900 sm:text-5xl">
                <CountUp value={s.value} />
              </p>
              <p className="mt-2 text-sm text-teal-900/65">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
