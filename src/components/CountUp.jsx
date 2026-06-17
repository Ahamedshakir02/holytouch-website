import { useEffect, useRef } from 'react'
import { animate, useInView, useMotionValue, useReducedMotion } from 'framer-motion'

// Animates a numeric stat from 0 → target when scrolled into view.
// Parses strings like "150+", "12+", "100%", "8" into prefix + number + suffix.
// Reduced-motion: renders the final value immediately.
export default function CountUp({ value, duration = 1.6, className = '' }) {
  const match = String(value).match(/^(\D*)([\d.,]+)(.*)$/)
  const prefix = match ? match[1] : ''
  const target = match ? parseFloat(match[2].replace(/,/g, '')) : 0
  const suffix = match ? match[3] : ''

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const mv = useMotionValue(0)

  useEffect(() => {
    if (!ref.current) return
    if (reduce || !match) {
      ref.current.textContent = String(value)
      return
    }
    if (!inView) return
    const controls = animate(mv, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = prefix + Math.round(v).toLocaleString('en-IN') + suffix
        }
      },
    })
    return () => controls.stop()
  }, [inView, reduce, match, target, duration, prefix, suffix, value, mv])

  return (
    <span ref={ref} className={className}>
      {match ? `${prefix}0${suffix}` : String(value)}
    </span>
  )
}
