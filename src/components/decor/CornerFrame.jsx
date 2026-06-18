// Four L-shaped corner brackets that frame an image — a drafting/blueprint detail.
// Render inside a `relative` container (e.g. an image wrapper). Decorative only.
export default function CornerFrame({ color = 'border-brass-400/80', inset = '0.75rem', size = 'h-6 w-6' }) {
  const base = `pointer-events-none absolute ${size} ${color}`
  return (
    <>
      <span className={`${base} border-l-2 border-t-2`} style={{ left: inset, top: inset }} />
      <span className={`${base} border-r-2 border-t-2`} style={{ right: inset, top: inset }} />
      <span className={`${base} border-b-2 border-l-2`} style={{ left: inset, bottom: inset }} />
      <span className={`${base} border-b-2 border-r-2`} style={{ right: inset, bottom: inset }} />
    </>
  )
}
