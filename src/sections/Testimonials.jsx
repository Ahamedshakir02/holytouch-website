import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (dir) => setI((prev) => (prev + dir + testimonials.length) % testimonials.length)

  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="Client stories"
          title="Trusted by homeowners across Kerala"
          intro="Placeholder testimonials — replace with real client quotes and names."
          className="mx-auto"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Icon name="quote" className="mx-auto h-12 w-12 text-brass-300" />
          <div className="mt-6 min-h-[180px] text-center sm:min-h-[150px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-balance font-display text-xl font-medium leading-relaxed text-teal-900 sm:text-2xl">
                  "{t.quote}"
                </p>
                <footer className="mt-6">
                  <div className="flex items-center justify-center gap-1 text-brass-500">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-3 font-semibold text-teal-900">{t.name}</p>
                  <p className="text-sm text-teal-900/55">{t.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-300 text-teal-900 transition-colors hover:border-brass-500 hover:text-brass-600"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" strokeWidth={2} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, d) => (
                <button
                  key={d}
                  onClick={() => setI(d)}
                  aria-label={`Go to testimonial ${d + 1}`}
                  className={`h-2 rounded-full transition-all ${d === i ? 'w-6 bg-brass-500' : 'w-2 bg-cream-300'}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-300 text-teal-900 transition-colors hover:border-brass-500 hover:text-brass-600"
            >
              <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
