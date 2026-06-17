import Seo from '../components/Seo'
import Hero from '../sections/Hero'
import ValueProps from '../sections/ValueProps'
import ServicesPreview from '../sections/ServicesPreview'
import ProcessSection from '../sections/ProcessSection'
import WhyChoose from '../sections/WhyChoose'
import FeaturedProjects from '../sections/FeaturedProjects'
import Testimonials from '../sections/Testimonials'
import CtaBand from '../sections/CtaBand'

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
      <ProcessSection />
      <WhyChoose />
      <FeaturedProjects />
      <Testimonials />
      <CtaBand />
    </>
  )
}
