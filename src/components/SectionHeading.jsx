import Reveal from './Reveal'

// Consistent section header: eyebrow + title + optional intro.
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? 'text-brass-300' : 'text-brass-600'}`}>{eyebrow}</span>
      )}
      <h2
        className={`mt-4 text-balance font-display text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-cream-100' : 'text-teal-900'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-cream-100/70' : 'text-teal-900/65'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}
