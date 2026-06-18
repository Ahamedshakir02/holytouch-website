import { Link } from 'react-router-dom'

// Brand mark (real Holytouch disc) + wordmark. The mark PNGs are tinted, transparent
// derivations of the supplied logo (see scripts/process_logo.py):
//   variant 'dark'  → teal mark, for light backgrounds
//   variant 'light' → cream mark, for dark backgrounds
const MARK = {
  dark: '/logo-mark-dark.png',
  light: '/logo-mark-light.png',
}

export default function Logo({ variant = 'dark', className = '' }) {
  const wordColor = variant === 'light' ? 'text-cream-100' : 'text-teal-900'
  const subColor = variant === 'light' ? 'text-brass-300' : 'text-brass-600'

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Holytouch — home"
    >
      <img
        src={MARK[variant] || MARK.dark}
        alt=""
        width="36"
        height="36"
        className="h-9 w-9 shrink-0 object-contain transition-transform duration-500 group-hover:scale-[1.05]"
      />
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
