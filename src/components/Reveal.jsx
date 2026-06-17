import { motion, useReducedMotion } from 'framer-motion'

// Scroll-reveal wrapper. Tasteful fade + rise, fires once on enter.
// `delay` (s) lets you stagger siblings. Respects reduced-motion.
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  className = '',
  once = true,
  amount = 0.25,
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
