import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ProcessSteps from '../components/ProcessSteps'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-teal-950 py-20 text-cream-100 sm:py-28">
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-brass-500/10 blur-3xl" />
      <div className="container-px relative">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionHeading
            light
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

        <div className="mt-14">
          <ProcessSteps />
        </div>
      </div>
    </section>
  )
}
