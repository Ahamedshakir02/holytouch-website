import { useRef } from 'react'
import { motion, useScroll, useReducedMotion } from 'framer-motion'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { executionFlow } from '../data/content'

const HERO = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80'

export default function Process() {
  const timelineRef = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 60%'],
  })

  return (
    <>
      <Seo
        title="Our Process — From Dream to Doorstep"
        description="The Holytouch project journey — from client requirement through design, approval, procurement, execution and quality checks to a snag-free handover. A transparent, milestone-driven process."
      />
      <PageHero
        breadcrumb="Process"
        eyebrow="How we work"
        title="A clear path from dream to doorstep"
        intro="Every Holytouch project follows the same clear, milestone-driven journey — so you always know what's happening now, and what comes next."
        image={HERO}
      />

      {/* Vertical timeline */}
      <section className="bg-cream-100 section-y">
        <div className="container-px">
          <div ref={timelineRef} className="relative mx-auto max-w-3xl">
            {/* center line — faint track + a brass progress line that draws in on scroll */}
            <div className="absolute left-[27px] top-2 h-full w-px bg-cream-300 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />
            <motion.div
              aria-hidden="true"
              className="absolute left-[27px] top-2 h-full w-px origin-top bg-brass-500 sm:left-1/2 sm:-translate-x-1/2"
              style={{ scaleY: reduce ? 1 : scrollYProgress }}
            />

            <div className="space-y-12">
              {executionFlow.map((s, i) => (
                <Reveal key={s.title} delay={0.05} className="relative">
                  <div className={`flex flex-col gap-6 sm:flex-row sm:items-center ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}>
                    {/* node */}
                    <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border-4 border-cream-100 bg-teal-900 text-brass-400 sm:left-1/2 sm:-translate-x-1/2">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </div>

                    {/* card */}
                    <div className={`ml-20 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${i % 2 === 1 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                      <span className="font-display text-sm font-bold text-brass-600">STEP {String(i + 1).padStart(2, '0')}</span>
                      <h3 className="mt-1 font-display text-2xl font-bold text-teal-900">{s.title}</h3>
                      <p className="mt-1 text-sm font-medium text-teal-900/65">{s.caption}</p>
                      <p className="mt-3 text-base leading-relaxed text-teal-900/70">{s.text}</p>
                    </div>
                    <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
