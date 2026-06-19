import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import GlowBlob from '../components/decor/GlowBlob'
import ContourLines from '../components/decor/ContourLines'
import CornerFrame from '../components/decor/CornerFrame'
import { whyChoose } from '../data/content'
import { site } from '../data/site'

// REPLACE with a real Holytouch site/team photo.
const IMG =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=80'

export default function WhyChoose() {
  return (
    <section className="section-y relative overflow-hidden bg-cream-100">
      <GlowBlob className="-left-32 top-1/3 h-80 w-80" />
      <div className="container-px relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image side */}
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={IMG}
              alt="Holytouch team reviewing plans on site"
              className="aspect-[4/3] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              loading="lazy"
            />
          </div>
          <CornerFrame />
          {/* Promise badge */}
          <div className="absolute -bottom-6 left-6 max-w-[15rem] rounded-2xl bg-teal-900 p-6 text-cream-100 shadow-card sm:left-auto sm:right-6">
            <Icon name="shield" className="h-8 w-8 text-brass-400" />
            <p className="mt-3 font-display text-lg font-semibold leading-snug">
              Built on Trust, Delivered with Pride.
            </p>
          </div>
        </Reveal>

        {/* Content side */}
        <div className="relative">
          <ContourLines className="-top-10 right-0 h-40 w-2/3" opacity={0.35} />
          <Reveal>
            <span className="eyebrow text-brass-600"><span className="tabular-nums opacity-60">(03)</span> Why choose Holytouch</span>
            <h2 className="mt-5 text-balance font-display text-display-lg font-bold text-teal-900">
              A partner you can build your future on
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-teal-900/60">
              We bring every discipline together so your project is simpler, safer and genuinely
              enjoyable to build — in {site.location} and beyond.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brass-500/10 text-brass-600">
                  <Icon name={w.icon} className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-teal-900">{w.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-teal-900/65">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <Link to="/about" className="btn-dark mt-10">
              More about us <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
