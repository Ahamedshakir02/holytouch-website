import { useReducedMotion } from 'framer-motion'

// Infinite horizontal marquee built on the Tailwind `animate-marquee` keyframe.
// The track is rendered twice and translated -50% for a seamless loop; pauses on hover.
// Under reduced-motion it renders as a static strip (no animation).
// `variant` controls text/separator colour for light vs. dark surfaces.
export default function Marquee({ items, variant = 'light', className = '' }) {
  const reduce = useReducedMotion()
  const text = variant === 'dark' ? 'text-cream-100/70' : 'text-teal-900/55'
  const dot = variant === 'dark' ? 'bg-brass-400/80' : 'bg-brass-500/70'

  const Track = ({ hidden = false }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className={`whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] ${text}`}>
            {it}
          </span>
          <span className={`mx-7 h-1.5 w-1.5 shrink-0 rotate-45 ${dot}`} />
        </span>
      ))}
    </div>
  )

  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div className={`flex w-max ${reduce ? '' : 'animate-marquee group-hover:[animation-play-state:paused]'}`}>
        <Track />
        <Track hidden />
      </div>
    </div>
  )
}
