import Seo from '../components/Seo'
import Hero from '../sections/Hero'
import ValueProps from '../sections/ValueProps'
import ServicesPreview from '../sections/ServicesPreview'
import ProcessSection from '../sections/ProcessSection'
import WhyChoose from '../sections/WhyChoose'
import FeaturedProjects from '../sections/FeaturedProjects'
import Testimonials from '../sections/Testimonials'
import Marquee from '../components/decor/Marquee'

const marqueeItems = [
  'Quality at Every Milestone',
  'One Accountable Team',
  'Transparent, Itemised Pricing',
  'On-Time, Snag-Free Handover',
  'Eight Disciplines · One Roof',
  'Concept to Handover',
  'Serving All of Kerala',
]

export default function Home() {
  return (
    <>
      <Seo
        title="Your Perfect Builder — Construction & Design in Kerala"
        description="Holytouch delivers end-to-end construction & design in Kerala — contracting, architecture, MEP, interiors, landscape, PMC & EPC. You Dream, We Deliver."
      />
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <section className="border-y border-cream-100/10 bg-teal-950 py-6">
        <Marquee items={marqueeItems} variant="dark" />
      </section>
      <ProcessSection />
      <WhyChoose />
      <FeaturedProjects />
      <Testimonials />
    </>
  )
}
