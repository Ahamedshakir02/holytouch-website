import { motion, useReducedMotion } from 'framer-motion'

// Decorative topographic / elevation contour lines that draw themselves in on scroll
// (framer-motion pathLength). Sits behind headings or as an ambient divider. Brass
// stroke, very low opacity. Honours reduced-motion (renders fully drawn, no animation).
const LINES = [
  'M0 150 C 130 100 270 100 400 150 S 660 200 800 150',
  'M0 120 C 140 74 280 74 410 120 S 670 166 800 120',
  'M0 186 C 120 142 280 142 400 186 S 660 230 800 186',
  'M0 92 C 150 52 280 52 420 92 S 680 132 800 92',
]

export default function ContourLines({ className = '', variant = 'light', opacity = 0.5 }) {
  const reduce = useReducedMotion()
  const stroke = variant === 'dark' ? '#C2A15A' : '#A8853F'

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 260"
      preserveAspectRatio="none"
      fill="none"
      className={`pointer-events-none absolute ${className}`}
    >
      {LINES.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          initial={reduce ? { pathLength: 1, opacity } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </svg>
  )
}
