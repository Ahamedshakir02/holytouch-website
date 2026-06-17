import Reveal from './Reveal'
import Icon from './Icon'
import { process } from '../data/content'

// Reusable 4-step process. Dark band by default; pass `detailed` for the
// expanded Process page treatment.
export default function ProcessSteps({ detailed = false }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-cream-100/10 sm:grid-cols-2 lg:grid-cols-4">
      {process.map((p, i) => (
        <Reveal
          key={p.step}
          delay={i * 0.1}
          className="group relative flex flex-col bg-teal-900 p-7 transition-colors hover:bg-teal-800 sm:p-8"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-5xl font-bold text-cream-100/10 transition-colors group-hover:text-brass-500/30">
              {p.step}
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-950 text-brass-400 transition-colors group-hover:bg-brass-500 group-hover:text-teal-950">
              <Icon name={p.icon} className="h-6 w-6" />
            </span>
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold text-cream-100">{p.title}</h3>
          <p className="mt-1 text-sm font-medium text-brass-300">{p.short}</p>
          {detailed && (
            <p className="mt-4 text-sm leading-relaxed text-cream-100/65">{p.text}</p>
          )}

          {/* connector arrow (desktop) */}
          {i < process.length - 1 && (
            <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-brass-500 text-teal-950 lg:flex">
              <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
          )}
        </Reveal>
      ))}
    </div>
  )
}
