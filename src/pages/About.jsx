import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBand from '../sections/CtaBand'
import CountUp from '../components/CountUp'
import BlueprintGrid from '../components/decor/BlueprintGrid'
import GlowBlob from '../components/decor/GlowBlob'
import CornerFrame from '../components/decor/CornerFrame'
import { whyChoose, stats, orgStructure } from '../data/content'

// Construction site — building under construction (swap for a real Holytouch site photo).
const HERO = 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1920&q=80'
const STORY_IMG = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1100&q=80'

const values = [
  { title: 'Integrity', text: 'Honest estimates and straight answers at every stage.', icon: 'shield' },
  { title: 'Quality', text: 'Rigorous standards and finishes built to last.', icon: 'check' },
  { title: 'Innovation', text: 'Smarter, future-ready design and engineering.', icon: 'spark' },
  { title: 'Sustainability', text: 'Climate-responsive, resource-conscious building.', icon: 'leaf' },
  { title: 'Client Satisfaction', text: 'Your vision and comfort guide every decision.', icon: 'chat' },
  { title: 'Safety', text: 'Sound engineering and safe, disciplined sites.', icon: 'hardhat' },
  { title: 'Teamwork', text: 'One accountable team, working as one.', icon: 'team' },
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
                Holytouch — Your Perfect Builder is a multidisciplinary construction and design
                company delivering innovative, sustainable and high-quality buildings. From
                architecture, interiors, structural and MEP design to landscaping, project management
                and construction, we provide complete turnkey solutions tailored to each client.
              </p>
              <p>
                Our architects, engineers, designers and project managers work as one team to turn
                ideas into exceptional spaces — ensuring precision, quality and client satisfaction
                from first concept to final handover.
              </p>
              <p>
                We work across residential, commercial, institutional and infrastructure projects,
                pairing modern design with advanced construction to create spaces that are
                functional, beautiful and built to last.
              </p>
              <p>
                At Holytouch, every project is more than a structure — it reflects our commitment to
                excellence, innovation and trust.
              </p>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img src={STORY_IMG} alt="Holytouch project in progress" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
              <CornerFrame />
              <div className="absolute -bottom-5 -left-2 rounded-2xl bg-brass-500 p-5 text-teal-950 shadow-card sm:-bottom-6 sm:-left-6 sm:p-6">
                <p className="font-display text-3xl font-bold sm:text-4xl">150+</p>
                <p className="text-sm font-semibold">Projects delivered</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-y relative overflow-hidden bg-teal-950 text-cream-100">
        <BlueprintGrid variant="dark" className="opacity-[0.05]" />
        <GlowBlob className="-right-24 top-10 h-80 w-80" />
        <div className="container-px relative grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              k: 'Our Mission',
              t: 'To deliver integrated architectural, engineering, and construction solutions with excellence, integrity, and innovation — ensuring quality, safety, and value at every stage of the project lifecycle.',
              icon: 'compass',
            },
            {
              k: 'Our Vision',
              t: 'To be a trusted leader in design, engineering, and construction by creating innovative, sustainable, and high-quality spaces that inspire communities and exceed client expectations.',
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

      {/* Company structure */}
      <section className="bg-cream-100 section-y relative overflow-hidden">
        <BlueprintGrid className="opacity-[0.04]" />
        <GlowBlob className="-right-28 top-10 h-80 w-80" />
        <div className="container-px relative">
          <SectionHeading
            align="center"
            eyebrow="How we're organised"
            title="One team, four disciplines"
            intro="Led by our Managing Directors and Partners, every project draws on four in-house departments — so design, execution, business and administration stay accountable to one team."
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {orgStructure.map((d, i) => (
              <Reveal
                key={d.title}
                delay={i * 0.08}
                className="card-hover flex flex-col rounded-2xl border border-cream-300 bg-cream-50 p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brass-100 text-brass-600">
                  <Icon name={d.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-teal-900">{d.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {d.roles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-sm text-teal-900/70">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-brass-500" />
                      {role}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
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
      <section className="bg-cream-100 section-y relative overflow-hidden">
        <BlueprintGrid className="opacity-[0.04]" />
        <GlowBlob className="-left-28 bottom-10 h-80 w-80" />
        <div className="container-px relative">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="The values behind every project"
            className="mx-auto"
          />
          <div className="mt-14 flex flex-wrap justify-center gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="card-hover w-full rounded-2xl border border-cream-300 bg-cream-50 p-7 text-center sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]">
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
