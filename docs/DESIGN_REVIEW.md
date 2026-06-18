# Holytouch Website — Senior Design & Development Review

_Reviewer perspective: senior web designer + front-end engineer. Reviewed: codebase (`src/`, build config) and the live home page._
_Date: 18 Jun 2026_

## Verdict

The build quality is high. Architecture is clean (data/presentation split, reusable primitives), the design language is restrained and premium, and the basics that most agencies skip are present: reduced-motion guards, semantic landmarks, `focus-visible`, per-page titles, SPA routing rewrites. As a *visual* product it's already at a strong bar.

What's missing is everything that converts a homeowner into an enquiry and gets the site found on Google. Right now it's a beautiful brochure that **can't reliably capture a lead and is nearly invisible to local search.** Those two things are the priority — not the design.

---

## Tier 1 — Fix before launch (business-critical)

**1. The contact form doesn't actually submit anything.**
It builds a `mailto:` link. On a phone with no mail app configured, or for the many users on webmail, clicking "Send enquiry" does nothing visible — the lead is lost, and you never know it happened. For a business whose entire goal is enquiries, this is the single biggest risk.
→ Wire it to a real endpoint: Web3Forms or Formspree (zero backend, ~15 min) or Netlify Forms. Add a hidden honeypot field for spam, an `aria-live` success state, and inline validation. Keep the WhatsApp/phone fallback.

**2. No local SEO infrastructure.** You're targeting "construction company Kerala" but the site can't rank for it:
- No `robots.txt`, no `sitemap.xml`.
- No JSON-LD structured data. A `LocalBusiness` / `GeneralContractor` schema (name, address, phone, geo, hours, areaServed) is what feeds Google's local pack and the business knowledge panel. This is the highest-leverage SEO addition for a regional contractor.
- `og-image.jpg` is referenced in `index.html` but the file doesn't exist — link previews on WhatsApp/Facebook will be broken (and WhatsApp sharing is huge in Kerala).
- No canonical tags per route.

**3. Client-side rendering is hurting SEO more than you think.** This is a Vite SPA — the HTML Google first receives is an empty `<div id="root">`. Google can render JS, but slowly and unreliably, and other crawlers (and WhatsApp/FB link unfurlers) often can't. For a marketing site whose job is discovery, this matters.
→ Add static prerendering (e.g. `vite-react-ssg` or `vite-plugin-prerender`) so each route ships real HTML. Low effort, large payoff.

**4. Placeholder content everywhere.** 18 projects, all Unsplash stock; testimonials, email (`info@holytouch.in` is a guess), and all four social links (`#`) are placeholders. A construction firm sells on *proof*. Real project photography and named testimonials aren't polish — they're the product. Nothing should launch until these are real.

---

## Tier 2 — High-impact features (lead generation & trust)

**Trust signals.** Add a credentials strip and an "About"/"Why us" proof block: years in business, projects delivered, licenses/registrations, certifications, awards, and a Google Reviews embed. Construction is a high-trust, high-value purchase — buyers scan for legitimacy first.

**Project detail pages (`/projects/:slug`).** The modal is fine for browsing, but real per-project pages give you indexable SEO content ("villa construction Thrissur"), shareable links, and room for a photo gallery + spec sheet + the story. The data is already structured for this.

**A "Get an estimate" / cost calculator.** For homeowners, a simple interactive estimator (plot size × build type × finish level → ballpark range + "talk to us") is one of the highest-engagement, highest-conversion tools a contractor site can have. It also captures the lead's parameters before they even fill the form.

**FAQ section + FAQ schema.** Answer the real questions (cost per sq.ft, timeline, EPC vs PMC, approvals). Doubles as SEO via `FAQPage` structured data that can win rich results.

**Google Maps embed.** Currently a placeholder. Embedding the real office location adds trust and feeds local SEO.

**Downloadable brochure / lead magnet.** A "Download our project portfolio (PDF)" gated behind name + phone is a softer conversion than the contact form and captures top-of-funnel leads.

**Before/after slider.** Renovation and interior work is sold visually — a draggable before/after comparison is memorable and shareable.

**Malayalam option (consider).** The audience is Kerala homeowners. A genuine EN/ML toggle (not the browser's Google Translate bar I saw in your screenshot) could be a real differentiator — but only worth it if you'll maintain both.

---

## Tier 3 — Measurement, performance, polish

**Analytics — you have none.** Add GA4 or Plausible, and fire conversion events on form submit, WhatsApp clicks, and phone-tap. You cannot improve conversion you don't measure; this should go in on day one.

**Performance once real images land.** The bundle is ~387 kB JS (~121 kB gzip) — framer-motion is the bulk. Two easy wins: route-level code-splitting with `React.lazy`, and `LazyMotion` to load only the framer features you use. For images, serve responsive `srcset` + AVIF/WebP at correct sizes (Unsplash URLs are full-res now); this dominates real-world load time.

**Accessibility polish.** Some low-opacity text (e.g. `text-cream-100/55`, `/35` placeholders) likely fails WCAG AA contrast — worth an axe/Lighthouse pass. The form needs visible error states and an `aria-live` region on success.

**Spam protection** on the form (honeypot at minimum; reCAPTCHA/Turnstile if it gets abused).

**Add a blog / insights section.** Steady local-intent content ("cost to build a villa in Kerala 2026", "BMC approvals explained") is the durable way to grow organic traffic for a regional firm.

---

## Suggested sequencing

1. **Launch blockers (days):** wire the form + spam guard, add `robots.txt` + `sitemap.xml` + `LocalBusiness` JSON-LD, generate the OG image, fix social/email placeholders, add analytics.
2. **First iteration (1–2 weeks):** real project photos + testimonials, prerendering, project detail pages, Google Map embed, FAQ + schema, credentials/trust block.
3. **Growth (ongoing):** cost estimator, brochure lead magnet, blog, before/after slider, performance pass, Malayalam.
