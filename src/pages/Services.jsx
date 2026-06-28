import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CornerFrame from '../components/decor/CornerFrame'
import { services } from '../data/services'

// REPLACE with a real Holytouch project/site banner photo.
const HERO = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=80'

// Per-service imagery — REPLACE with real photos per service.
const serviceImages = {
  contractor: '1504307651254-35680f356dfd',
  'design-consultancy': '1581674662583-5e89b374fae6',
  'structural-architectural-design': '1542621334-a254cf47733d',
  mep: '1545193329-4a052e14eb8f',
  'interior-design': '1600210492493-0946911123ea',
  'landscape-design': '1558904541-efa843a96f01',
  pmc: '1524758631624-e2822e304c36',
  epc: '1517248135467-4c7edcad34c4',
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
        eyebrow="Our services"
        title="End-to-end construction & design, under one roof"
        intro="Eight integrated services that cover every stage of your project — from the first concept sketch to the keys in your hand."
        image={HERO}
      />

      {/* Quick jump nav — anchors to each service section below */}
      <section className="bg-cream-100 pt-12 sm:pt-16">
        <div className="container-px">
          <div className="flex flex-wrap justify-center gap-2.5">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-cream-300 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-900/80 transition-colors hover:border-brass-500 hover:text-brass-600"
              >
                {s.title.split(' (')[0]}
              </a>
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
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={img(serviceImages[s.slug])}
                      alt={s.title}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                    <CornerFrame />
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={flip ? 'lg:order-1' : ''}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brass-100 text-brass-600">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="eyebrow mt-5 text-brass-600">{`0${i + 1} — Service`}</span>
                  <h2 className="mt-3 font-display text-display-md font-bold text-teal-900">
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
    </>
  )
}
