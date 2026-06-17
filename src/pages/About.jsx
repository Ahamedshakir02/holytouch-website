import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBand from '../sections/CtaBand'
import CountUp from '../components/CountUp'
import { whyChoose, stats } from '../data/content'
import { site } from '../data/site'

const HERO = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80'
const STORY_IMG = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1100&q=80'

const values = [
  { title: 'Integrity', text: 'Honest estimates and straight answers — always.', icon: 'shield' },
  { title: 'Craftsmanship', text: 'A relentless attention to detail and finish.', icon: 'spark' },
  { title: 'Accountability', text: 'One team that owns the outcome end-to-end.', icon: 'check' },
  { title: 'Client-first', text: 'Your vision and comfort guide every decision.', icon: 'team' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us — Built on Trust, Delivered with Pride"
        description="Holytouch is an end-to-end construction & design firm in Kerala. Learn our story, mission and the trust differentiators that set us apart."
      />
      <PageHero
        breadcrumb="About"
        eyebrow="About Holytouch"
        title="Built on Trust, Delivered with Pride"
        intro="We're a one-stop construction and design firm in Kerala, bringing every discipline together to take your project from a first idea to a finished home you're proud of."
        image={HERO}
      />

      {/* Story */}
      <section className="bg-cream-100 section-y">
        <div className="container-px grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <span className="eyebrow text-brass-600">Our story</span>
            <h2 className="mt-5 font-display text-display-lg font-bold text-teal-900">
              One firm, every stage of your build
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-teal-900/70">
              <p>
                Holytouch was founded on a simple belief: building a home should feel inspiring, not
                stressful. Too many projects stall because design, engineering, interiors and
                construction are scattered across disconnected vendors.
              </p>
              <p>
                So we built a different kind of firm — one that brings architecture, structure, MEP,
                interiors, landscape and project management together under a single, accountable
                roof. From the first consultation to the final handover, you deal with one team that
                owns the outcome.
              </p>
              <p>
                Based in {site.location}, we design and build climate-responsive homes and spaces
                that balance beauty, function and lasting value — delivered transparently, and always
                on our word.
              </p>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img src={STORY_IMG} alt="Holytouch project in progress" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-brass-500 p-6 text-teal-950 shadow-card sm:-left-6">
                <p className="font-display text-4xl font-bold">150+</p>
                <p className="text-sm font-semibold">Projects delivered</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-y bg-teal-950 text-cream-100">
        <div className="container-px grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              k: 'Our Mission',
              t: 'To make building a home simple, transparent and genuinely enjoyable — delivering quality construction and design that exceeds expectations, on time and on budget.',
              icon: 'compass',
            },
            {
              k: 'Our Vision',
              t: "To be Kerala's most trusted one-stop construction and design partner — known for craftsmanship, integrity and homes that stand proudly for generations.",
              icon: 'spark',
            },
          ].map((m, i) => (
            <Reveal key={m.k} delay={i * 0.1} className="rounded-3xl border border-cream-100/10 bg-teal-900 p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brass-500 text-teal-950">
                <Icon name={m.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold">{m.k}</h3>
              <p className="mt-3 leading-relaxed text-cream-100/70">{m.t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream-200 py-16">
        <div className="container-px grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl font-bold text-brass-600 sm:text-5xl">
                <CountUp value={s.value} />
              </p>
              <p className="mt-2 text-sm text-teal-900/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-100 section-y">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="The values behind every project"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="card-hover rounded-2xl border border-cream-300 bg-cream-50 p-7 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brass-100 text-brass-600">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-teal-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-teal-900/60">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust differentiators */}
      <section className="bg-cream-200 section-y">
        <div className="container-px">
          <SectionHeading
            eyebrow="The trust difference"
            title="Why clients choose to build with us"
            intro="Four reasons homeowners and developers across Kerala put their trust in Holytouch."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06} className="flex gap-4 rounded-2xl bg-cream-50 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-900 text-brass-400">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-teal-900">{w.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-teal-900/60">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
