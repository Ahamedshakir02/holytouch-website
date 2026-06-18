import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ProcessSteps from '../components/ProcessSteps'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import BlueprintGrid from '../components/decor/BlueprintGrid'

export default function ProcessSection() {
  return (
    <section className="section-y relative overflow-hidden bg-teal-950 text-cream-100">
      <BlueprintGrid variant="dark" className="opacity-[0.05]" />
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-brass-500/10 blur-3xl" />
      <div className="container-px relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            light
            index="(02)"
            eyebrow="Our process"
            title="A clear path from dream to doorstep"
            intro="Four deliberate stages keep your project transparent, on schedule and stress-free — you always know what's happening and what's next."
          />
          <Reveal>
            <Link to="/process" className="btn-ghost-light shrink-0">
              Explore the journey <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16">
          <ProcessSteps />
        </div>
      </div>
    </section>
  )
}
