import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import ProcessSection from '../sections/ProcessSection'
import CtaBand from '../sections/CtaBand'
import { services } from '../data/services'

const HERO = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80'

// Per-service imagery — REPLACE with real photos per service.
const serviceImages = {
  contractor: '1504307651254-35680f356dfd',
  'design-consultancy': '1581092160562-40aa08e78837',
  'structural-architectural-design': '1503387762-592deb58ef4e',
  mep: '1581092918056-0c4c3acd3789',
  'interior-design': '1600210492493-0946911123ea',
  'landscape-design': '1558904541-efa843a96f01',
  pmc: '1454165804606-c3d57bc86b40',
  epc: '1486406146926-c627a92ad1ab',
}
const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=80`

export default function Services() {
  return (
    <>
      <Seo
        title="Our Services — End-to-End Construction & Design"
        description="Eight integrated services: Contractor, Design Consultancy, Structural & Architectural Design, MEP, Interior Design, Landscape Design, PMC and EPC — all under one roof in Kerala."
      />
      <PageHero
        breadcrumb="Services"
        eyebrow="What we do"
        title="End-to-end construction & design, under one roof"
        intro="Eight integrated services that cover every stage of your project — from the first concept sketch to the keys in your hand."
        image={HERO}
      />

      {/* Overview grid */}
      <section className="bg-cream-100 py-20 sm:py-24">
        <div className="container-px">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.05}>
                <a
                  href={`#${s.slug}`}
                  className="card-hover group flex h-full flex-col rounded-2xl border border-cream-300 bg-cream-50 p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-900 text-brass-400 transition-colors group-hover:bg-brass-500 group-hover:text-teal-950">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold leading-snug text-teal-900">
                    {s.title.split(' (')[0]}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brass-600">
                    Details <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Per-service alternating sections */}
      <div className="bg-cream-100">
        {services.map((s, i) => {
          const flip = i % 2 === 1
          return (
            <section
              key={s.slug}
              id={s.slug}
              className={`scroll-mt-24 py-16 sm:py-20 ${i % 2 === 1 ? 'bg-cream-200' : 'bg-cream-100'}`}
            >
              <div className="container-px grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className={flip ? 'lg:order-2' : ''}>
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src={img(serviceImages[s.slug])}
                      alt={s.title}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={flip ? 'lg:order-1' : ''}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brass-100 text-brass-600">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="eyebrow mt-5 text-brass-600">{`0${i + 1} — Service`}</span>
                  <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] text-teal-900 sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-teal-900/70">{s.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-teal-900">
                        <Icon name="check" className="h-5 w-5 shrink-0 text-brass-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-dark mt-8">
                    Enquire about this service <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
                  </Link>
                </Reveal>
              </div>
            </section>
          )
        })}
      </div>

      <ProcessSection />
      <CtaBand />
    </>
  )
}
