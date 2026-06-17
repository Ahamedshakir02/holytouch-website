import { Link } from 'react-router-dom'

// Placeholder logo: circular mark with a leaf/swoosh motif + wordmark.
// REPLACE the <svg> mark with the supplied Holytouch logo asset when available.
export default function Logo({ variant = 'dark', className = '' }) {
  // variant 'dark' = for light backgrounds; 'light' = for dark backgrounds
  const wordColor = variant === 'light' ? 'text-cream-100' : 'text-teal-900'
  const subColor = variant === 'light' ? 'text-brass-300' : 'text-brass-600'
  const ring = variant === 'light' ? '#F7F4ED' : '#0A211D'

  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Holytouch — home">
      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-900 ring-1 ring-brass-500/40 transition-transform duration-500 group-hover:rotate-[8deg]">
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill="none" stroke={ring === '#0A211D' ? '#C2A15A' : '#C2A15A'} strokeOpacity="0.0" />
          <path
            d="M24 11c-6 4.6-9 9-9 14a9 9 0 0 0 18 0c0-5-3-9.4-9-14Z"
            fill="none"
            stroke="#C2A15A"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M24 16c0 6.5 0 13 0 19" stroke="#C2A15A" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold tracking-tightest ${wordColor}`}>
          Holytouch
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${subColor}`}>
          Your Perfect Builder
        </span>
      </span>
    </Link>
  )
}
