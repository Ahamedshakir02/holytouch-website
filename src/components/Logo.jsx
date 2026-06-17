import { Link } from 'react-router-dom'

// Placeholder logo: refined leaf/swoosh inside a brass ring + wordmark.
// REPLACE the <svg> mark with the supplied Holytouch logo asset when available.
export default function Logo({ variant = 'dark', className = '' }) {
  // variant 'dark' = wordmark for light backgrounds; 'light' = for dark backgrounds
  const wordColor = variant === 'light' ? 'text-cream-100' : 'text-teal-900'
  const subColor = variant === 'light' ? 'text-brass-300' : 'text-brass-600'

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Holytouch — home"
    >
      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-900 ring-1 ring-brass-500/40 transition-transform duration-500 group-hover:scale-[1.04]">
        <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
          {/* thin brass ring */}
          <circle cx="24" cy="24" r="19.5" fill="none" stroke="#C2A15A" strokeOpacity="0.55" strokeWidth="1.2" />
          {/* leaf + vein — gently settles on hover */}
          <g
            className="origin-center transition-transform duration-700 ease-out group-hover:rotate-[10deg]"
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            transform="rotate(-12 24 24)"
          >
            <path
              d="M24 13c7 6 7 14 0 22-7-8-7-16 0-22Z"
              fill="none"
              stroke="#C2A15A"
              strokeWidth="2.1"
              strokeLinejoin="round"
            />
            <path d="M24 16c-.4 6-.4 12 0 18" stroke="#D9BE85" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M24 22.5c1.7-.9 3.1-2 4.1-3.4M24 27c1.7-.9 3.1-2 4.1-3.4" stroke="#C2A15A" strokeWidth="1.1" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold tracking-tightest ${wordColor}`}>
          Holytouch
        </span>
        <span className={`mt-1 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.22em] ${subColor}`}>
          Your Perfect Builder
        </span>
      </span>
    </Link>
  )
}
