// Slim decorative divider — a fading brass hairline with a centred diamond motif.
// Adds breathing room and an architectural beat between content bands.
export default function SectionDivider({ className = '', variant = 'light' }) {
  const line = variant === 'dark' ? 'via-cream-100/25' : 'via-brass-500/40'
  const dot = variant === 'dark' ? 'bg-brass-400/80' : 'bg-brass-500/70'

  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-4 ${className}`}>
      <span className={`h-px w-20 bg-gradient-to-r from-transparent ${line}`} />
      <span className={`h-1.5 w-1.5 rotate-45 ${dot}`} />
      <span className={`h-px w-20 bg-gradient-to-l from-transparent ${line}`} />
    </div>
  )
}
