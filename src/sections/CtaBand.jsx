import Reveal from '../components/Reveal'
import ContourLines from '../components/decor/ContourLines'
import GlowBlob from '../components/decor/GlowBlob'

// REPLACE with a wide architectural hero photo.
const IMG =
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80'

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <img src={IMG} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-teal-950/85" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" />
      <GlowBlob className="-right-24 -top-24 h-80 w-80" />
      <ContourLines variant="dark" className="bottom-0 left-0 h-44 w-full" opacity={0.22} />

      <div className="container-px section-y relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center text-brass-300">Let's begin</span>
          <h2 className="mt-5 text-balance font-display text-display-lg font-bold text-cream-100">
            Let's Build Something Extraordinary
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream-100/75">
            Book a free, no-obligation consultation. Tell us your vision and budget, and we'll show
            you exactly how Holytouch can bring it to life.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
