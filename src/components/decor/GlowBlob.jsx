// Soft, blurred radial accent — the brand's recurring "glow" motif, extracted so it
// can be reused for depth on flat sections. Purely decorative.
// Usage: <GlowBlob className="-right-24 top-10 h-72 w-72" />
export default function GlowBlob({ className = '', color = 'bg-brass-500/10' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${color} ${className}`}
    />
  )
}
