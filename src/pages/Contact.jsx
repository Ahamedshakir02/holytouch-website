import { useState } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { site, whatsappLink } from '../data/site'
import { services } from '../data/services'

const HERO = 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet — open a pre-filled email as a graceful fallback.
    // TODO: wire to a real form endpoint (Formspree, Netlify Forms, or API).
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0A%0A${form.message}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      'Website enquiry — ' + (form.service || 'General'),
    )}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <Seo
        title="Contact — Get a Free Consultation"
        description="Get in touch with Holytouch for a free construction & design consultation in Kerala. Call, WhatsApp or send us your project details."
      />
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in touch"
        title="Let's talk about your project"
        intro="Book a free, no-obligation consultation. Tell us your vision and budget — we usually respond within one business day."
        image={HERO}
      />

      <section className="bg-cream-100 py-20 sm:py-24">
        <div className="container-px grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-cream-300 bg-cream-50 p-7 shadow-soft sm:p-10">
              <h2 className="font-display text-2xl font-bold text-teal-900">Request a free consultation</h2>
              <p className="mt-2 text-sm text-teal-900/60">Fields marked * are required.</p>

              {sent ? (
                <div className="mt-8 rounded-2xl bg-brass-100 p-8 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brass-500 text-teal-950">
                    <Icon name="check" className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-teal-900">Thank you!</h3>
                  <p className="mt-2 text-sm text-teal-900/70">
                    Your email app should have opened with your enquiry. If not, reach us directly on{' '}
                    <a href={`tel:${site.phones[0].value}`} className="font-semibold text-brass-700">
                      {site.phones[0].label}
                    </a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full name *" name="name" value={form.name} onChange={update} required placeholder="Your name" />
                  <Field label="Phone *" name="phone" type="tel" value={form.phone} onChange={update} required placeholder="+91 ..." />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={update} placeholder="you@email.com" className="sm:col-span-2" />

                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-teal-900">
                      Service of interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={update}
                      className="w-full rounded-xl border border-cream-300 bg-cream-100 px-4 py-3 text-sm text-teal-900 outline-none transition-colors focus:border-brass-500 focus:ring-2 focus:ring-brass-500/30"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title.split(' (')[0]}>
                          {s.title.split(' (')[0]}
                        </option>
                      ))}
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-teal-900">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={update}
                      placeholder="Tell us about your plot, vision, timeline and budget…"
                      className="w-full rounded-xl border border-cream-300 bg-cream-100 px-4 py-3 text-sm text-teal-900 outline-none transition-colors focus:border-brass-500 focus:ring-2 focus:ring-brass-500/30"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Send enquiry <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-5">
              {/* Phones */}
              <div className="rounded-3xl bg-teal-950 p-7 text-cream-100">
                <h3 className="font-display text-lg font-semibold">Call or WhatsApp</h3>
                <ul className="mt-4 space-y-3">
                  {site.phones.map((p) => (
                    <li key={p.value} className="flex items-center justify-between gap-3">
                      <a href={`tel:${p.value}`} className="flex items-center gap-2.5 font-medium transition-colors hover:text-brass-300">
                        <Icon name="phone" className="h-4 w-4 text-brass-400" /> {p.label}
                      </a>
                      {p.whatsapp && (
                        <a
                          href={whatsappLink(p.value.replace('+', ''))}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#1f7a4d] px-3 py-1.5 text-xs font-semibold"
                        >
                          <Icon name="whatsapp" className="h-3.5 w-3.5" /> Chat
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                <a href={`mailto:${site.email}`} className="mt-5 flex items-center gap-2.5 border-t border-cream-100/10 pt-5 text-sm font-medium transition-colors hover:text-brass-300">
                  <Icon name="mail" className="h-4 w-4 text-brass-400" /> {site.email}
                </a>
              </div>

              {/* Hours + location */}
              <div className="rounded-3xl border border-cream-300 bg-cream-50 p-7">
                <h3 className="font-display text-lg font-semibold text-teal-900">Business hours</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 text-teal-900/70">
                      <span>{h.day}</span>
                      <span className="font-semibold text-teal-900">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-start gap-2.5 border-t border-cream-300 pt-5 text-sm text-teal-900/70">
                  <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brass-600" />
                  <span>{site.location} — serving clients across the state.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Map placeholder */}
        <div className="container-px mt-12">
          <Reveal>
            <div className="relative flex aspect-[16/7] w-full items-center justify-center overflow-hidden rounded-3xl border border-cream-300 bg-cream-200">
              {/* MAP PLACEHOLDER — replace with an embedded Google Map iframe of your office location. */}
              <div className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-900 text-brass-400">
                  <Icon name="pin" className="h-7 w-7" />
                </span>
                <p className="mt-3 font-display text-lg font-semibold text-teal-900">Map placeholder — {site.location}</p>
                <p className="mt-1 text-sm text-teal-900/55">Embed your Google Maps location iframe here.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', value, onChange, required, placeholder, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-teal-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-cream-300 bg-cream-100 px-4 py-3 text-sm text-teal-900 outline-none transition-colors placeholder:text-teal-900/35 focus:border-brass-500 focus:ring-2 focus:ring-brass-500/30"
      />
    </div>
  )
}
