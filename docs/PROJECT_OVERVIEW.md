# Holytouch Website — Project Overview & Build Notes

A record of **what was built, why, and how it fits together**. Read the
[README](../README.md) for setup/run commands; read this for the reasoning and a
map of the codebase.

- **Client:** Holytouch — _Your Perfect Builder_
- **What it is:** A premium, multi-page marketing website for an end-to-end
  construction & design firm in Kerala, India.
- **Brand promise:** _Built on Trust, Delivered with Pride._
- **Status:** All pages built; production build verified. Content/assets are
  placeholders pending real material (see [Handover checklist](#handover-checklist)).

---

## 1. Goal

Make a homeowner or developer feel **inspired and confident the moment they land** —
aspirational, polished and trustworthy, at the quality bar of a top-tier
architecture firm's site. Not a generic template.

Audience: homeowners building a villa/home, plus small developers and commercial
clients in Kerala — who care about **trust, quality, transparent pricing and proof
of work**.

---

## 2. Decisions we made (and why)

The brief delegated several open choices. Here is what we locked and the reasoning.

| Decision | Choice | Why |
| --- | --- | --- |
| **Colour scheme** | (A) Brass/gold accent on deep teal-green + off-white | The teal ties to the leaf/swoosh logo and reads "premium villa"; brass is reserved strictly for accents/CTAs so it stays luxurious, not loud |
| **Stack** | React + Vite + Tailwind CSS + Framer Motion | The user's default; best fit for the scroll-reveal + parallax motion brief |
| **Output** | Real multi-file buildable codebase | Production-ready, not a throwaway demo |
| **Routing** | Multi-page via React Router | True multi-page sitemap as specified |
| **Typography** | **Outfit** (headings) + **Inter** (body) | Outfit is a wide geometric face that echoes a geometric logo wordmark; Inter is a highly readable workhorse for body/UI |
| **Motion philosophy** | Restrained: fades, one real parallax, hover micro-interactions | "Inspiring but not gimmicky. No autoplay clutter." Plus a `prefers-reduced-motion` guard |
| **Contact form** | Front-end with `mailto:` fallback | Works today with zero backend; ready to wire to a real endpoint |
| **Projects** | Filterable gallery + detail **modal** | Fastest path to a rich portfolio without per-project content; easy to promote to `/projects/:id` routes later |

### Design language

- **Colour tokens** (in `tailwind.config.js`):
  - `teal-900 #0A211D` / `teal-950 #071A17` — primary dark surfaces, hero, footer
  - `brass-500 #C2A15A` — accent, CTAs, icons, highlights
  - `cream-100 #F7F4ED` — primary light surface; `cream-200` for alternating bands
- **Whitespace-forward** layouts with large photography, consistent section rhythm.
- **Reusable primitives** keep every page visually consistent (see §4).

---

## 3. Sitemap & page contents

| Route | Page | Key sections |
| --- | --- | --- |
| `/` | **Home** | Hero (parallax + tagline) → floating value-prop card + stats → services grid → Process band → Why Choose → featured projects → testimonials carousel → CTA band |
| `/about` | **About** | Story, mission & vision, stats, values, trust differentiators, CTA |
| `/services` | **Services** | Overview grid + 8 anchored service sections (alternating image/text) + Process + CTA |
| `/projects` | **Projects** | Category filter (All / Residential / Commercial / Interior / Landscape) + animated grid + detail modal |
| `/process` | **Process** | Expanded 4-step vertical timeline + "what this means for you" |
| `/contact` | **Contact** | Form (name, phone, email, service, message) + 3 phones + WhatsApp + hours + map placeholder |
| `*` | **404** | On-brand not-found |

### The 8 services
Contractor · Design Consultancy · Structural/Architectural Design · MEP ·
Interior Design · Landscape Design · PMC · EPC.
Defined once in `src/data/services.js`; consumed by the header dropdown, footer,
home preview and the Services page.

### Reusable content blocks (single source of truth — `src/data/content.js`)
- **Process:** Consult → Plan → Execute → Deliver
- **Why choose us:** One-Stop Solution · Transparent & Reliable · Innovative Designs · Safety & Quality
- **Value props:** Experienced Team · Quality Assured · On-Time Delivery · Cost Effective

---

## 4. Codebase map

```
holytouch-website/
├── index.html                 SEO meta, Open Graph/Twitter tags, Google Fonts
├── tailwind.config.js          Brand colour tokens, fonts, shadows, keyframes
├── public/favicon.svg          Placeholder leaf-mark favicon
└── src/
    ├── main.jsx                React + Router bootstrap
    ├── App.jsx                 Routes, shared Header/Footer/WhatsApp/ScrollToTop
    ├── index.css               Tailwind layers + component classes (.btn, .eyebrow…) + reduced-motion guard
    ├── components/             Reusable, page-agnostic building blocks
    │   ├── Header.jsx          Sticky nav, services mega-dropdown, mobile menu
    │   ├── Footer.jsx          CTA strip + links + contact
    │   ├── Logo.jsx            Placeholder circular leaf/swoosh mark + wordmark
    │   ├── Icon.jsx            Dependency-free inline-SVG icon set
    │   ├── Reveal.jsx          Scroll-reveal wrapper (respects reduced-motion)
    │   ├── SectionHeading.jsx  Eyebrow + title + intro
    │   ├── PageHero.jsx        Inner-page hero band w/ breadcrumb
    │   ├── ProcessSteps.jsx    Reusable 4-step process (Home + Process page)
    │   ├── Seo.jsx             Per-page <title> + meta description
    │   ├── ScrollToTop.jsx     Reset scroll / smooth-scroll to #anchors
    │   └── FloatingWhatsApp.jsx
    ├── sections/               Home-page sections
    │   ├── Hero.jsx            Parallax hero (useScroll/useTransform)
    │   ├── ValueProps.jsx      Floating card overlapping hero + stats
    │   ├── ServicesPreview.jsx
    │   ├── ProcessSection.jsx
    │   ├── WhyChoose.jsx
    │   ├── FeaturedProjects.jsx Asymmetric feature grid
    │   ├── Testimonials.jsx    Carousel
    │   └── CtaBand.jsx         Photographic CTA
    ├── pages/                  Home, About, Services, Projects, Process, Contact, NotFound
    └── data/                   site.js · services.js · projects.js · content.js  ← EDIT CONTENT HERE
```

**Design principle:** content lives in `src/data/`, presentation in
`components/` & `sections/`. Updating a phone number, service or testimonial is a
one-line data edit, not a hunt through markup.

---

## 5. Motion & interaction

| Effect | Where | Notes |
| --- | --- | --- |
| Hero parallax + slow zoom | `sections/Hero.jsx` | `useScroll` + `useTransform`; disabled under reduced-motion |
| Scroll-reveal fade/rise | `components/Reveal.jsx` | Fires once on enter; `delay` prop staggers siblings |
| Services mega-dropdown | `components/Header.jsx` | Animated open/close via `AnimatePresence` |
| Project filter + modal | `pages/Projects.jsx` | `layout` animations + popLayout exit |
| Testimonial carousel | `sections/Testimonials.jsx` | Manual controls, no autoplay |
| Hover micro-interactions | throughout | Card lift, icon colour swap, arrow nudge |

All of it is gated by the `@media (prefers-reduced-motion: reduce)` rule in
`index.css`, which collapses animations/transitions to near-zero.

---

## 6. Accessibility & SEO

- Semantic landmarks (`header`/`main`/`footer`/`nav`), `focus-visible` rings,
  labelled form controls and icon buttons (`aria-label`), `aria-expanded` on the
  mobile toggle.
- Reduced-motion support (above).
- Per-page `<title>` + meta description via `components/Seo.jsx`.
- Open Graph + Twitter card tags and keywords in `index.html`.
- Responsive, mobile-first throughout; images lazy-loaded below the fold,
  hero image `fetchpriority="high"`.

---

## 7. Build verification

- `npm install` — 137 packages, clean.
- `npm run build` — **420 modules transformed, built in ~7.7s.** No errors.
  Output ≈ 358 kB JS (111 kB gzip), 36 kB CSS (6.4 kB gzip).
- `npm run dev` — boots in <1s, serves HTTP 200.

---

## 8. Handover checklist

Everything below is a **placeholder** clearly marked in-code (`REPLACE` /
`PLACEHOLDER` / `TODO`). Swap before launch:

- [ ] **Logo** — replace the SVG mark in `components/Logo.jsx` with the real asset.
- [ ] **Images** — hero (`sections/Hero.jsx`), projects (`data/projects.js`),
      services (`pages/Services.jsx`), and the various section photos. All currently Unsplash.
- [ ] **Projects** — real titles, locations, areas, photos, summaries in `data/projects.js`.
- [ ] **Testimonials** — real client quotes in `data/content.js`.
- [ ] **Contact form** — wire to a real endpoint (Formspree / Netlify Forms / API)
      in `pages/Contact.jsx`; currently a `mailto:` fallback.
- [ ] **Map** — embed a Google Maps iframe in `pages/Contact.jsx`.
- [ ] **Email / socials** — confirm in `data/site.js` (`info@holytouch.in` is a guess).
- [ ] **OG image** — add `public/og-image.jpg` (1200×630) for link previews.
- [ ] **Stats** — confirm real numbers in `data/content.js` (years, projects).

---

## 9. Possible next steps

- Promote project modal to real `/projects/:slug` routes when content is ready.
- Add a blog / insights section for SEO.
- Wire the form to a backend + spam protection (honeypot / captcha).
- Add structured data (JSON-LD `LocalBusiness`) for richer search results.
- Lighthouse/axe audit pass once real images are in.
