import { useId } from 'react'

// Faint blueprint / drafting grid used as a background watermark to give flat sections
// some architectural texture. Decorative only; set opacity via the className utility
// (e.g. `opacity-[0.05]`). `variant` switches line colour for light vs. dark surfaces.
export default function BlueprintGrid({ className = '', variant = 'light', size = 34 }) {
  const id = useId().replace(/:/g, '')
  const stroke = variant === 'dark' ? '#F3E9CF' : '#0A211D'
  const minor = size / 4

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <pattern id={`${id}-minor`} width={minor} height={minor} patternUnits="userSpaceOnUse">
          <path d={`M${minor} 0H0V${minor}`} fill="none" stroke={stroke} strokeWidth="0.5" opacity="0.5" />
        </pattern>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <rect width={size} height={size} fill={`url(#${id}-minor)`} />
          <path d={`M${size} 0H0V${size}`} fill="none" stroke={stroke} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
