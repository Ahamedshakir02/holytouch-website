import Reveal from './Reveal'

// Consistent section header: optional index + eyebrow + title + optional intro.
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  index,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignCls} ${className}`}>
      {(eyebrow || index) && (
        <span className={`eyebrow ${light ? 'text-brass-300' : 'text-brass-600'}`}>
          {index && <span className="tabular-nums opacity-60">{index}</span>}
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-5 text-balance font-display text-display-lg font-bold ${
          light ? 'text-cream-100' : 'text-teal-900'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-cream-100/70' : 'text-teal-900/60'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}
