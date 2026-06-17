import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBand from '../sections/CtaBand'
import { process, valueProps } from '../data/content'

const HERO = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80'

// Extra detail bullets per stage (placeholder copy — refine as needed).
const stageDetails = {
  Consult: ['Discovery meeting & site visit', 'Understand needs, lifestyle & budget', 'Feasibility & rough budget range'],
  Plan: ['Concept & architectural design', 'Structural & MEP coordination', 'Transparent, itemised estimate'],
  Execute: ['Mobilisation & site setup', 'Quality-supervised construction', 'Regular progress updates'],
  Deliver: ['Snagging & quality walkthrough', 'On-time, snag-free handover', 'After-care & support'],
}

export default function Process() {
  return (
    <>
      <Seo
        title="Our Process — From Dream to Doorstep"
        description="The Holytouch 4-step journey: Consult, Plan, Execute, Deliver. A transparent, milestone-driven process that keeps your project on time and stress-free."
      />
      <PageHero
        breadcrumb="Process"
        eyebrow="How we work"
        title="A clear path from dream to doorstep"
        intro="Every Holytouch project follows the same deliberate four-step journey — so you always know what's happening now, and what comes next."
        image={HERO}
      />

      {/* Vertical timeline */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-px">
          <div className="relative mx-auto max-w-3xl">
            {/* center line */}
            <div className="absolute left-[27px] top-2 h-full w-px bg-cream-300 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />

            <div className="space-y-12">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={0.05} className="relative">
                  <div className={`flex flex-col gap-6 sm:flex-row sm:items-center ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}>
                    {/* node */}
                    <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border-4 border-cream-100 bg-teal-900 text-brass-400 sm:left-1/2 sm:-translate-x-1/2">
                      <Icon name={p.icon} className="h-6 w-6" />
                    </div>

                    {/* card */}
                    <div className={`ml-20 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${i % 2 === 1 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                      <span className="font-display text-sm font-bold text-brass-600">STEP {p.step}</span>
                      <h3 className="mt-1 font-display text-2xl font-bold text-teal-900">{p.title}</h3>
                      <p className="mt-1 text-sm font-medium text-teal-900/50">{p.short}</p>
                      <p className="mt-3 text-base leading-relaxed text-teal-900/70">{p.text}</p>
                      <ul className={`mt-4 space-y-2 ${i % 2 === 1 ? 'sm:flex sm:flex-col sm:items-end' : ''}`}>
                        {stageDetails[p.title].map((d) => (
                          <li key={d} className="flex items-center gap-2 text-sm text-teal-900/75">
                            <Icon name="check" className="h-4 w-4 shrink-0 text-brass-500" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you get / value props */}
      <section className="bg-teal-950 py-20 text-cream-100 sm:py-28">
        <div className="container-px">
          <SectionHeading
            light
            align="center"
            eyebrow="What this means for you"
            title="A build experience designed around your peace of mind"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="rounded-2xl border border-cream-100/10 bg-teal-900 p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brass-500 text-teal-950">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/65">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
