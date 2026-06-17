# Holytouch Website — Project Overview & Build Notes

A record of **what was built, why, and how it fits together**. Read the
[README](../README.md) for setup/run commands; read this for the reasoning and a
map of the codebase.

- **Client:** Holytouch — _Your Perfect Builder_
- **What it is:** A premium, multi-page marketing website for an end-to-end
  construction & design firm in Kerala, India.
- **Brand promise:** _Built on Trust, Delivered with Pride._
- **Status:** All pages built and refined; production build verified. Content/assets
  are placeholders pending real material (see [Handover checklist](#8-handover-checklist)).

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

| Decision | Choice | Why |
| --- | --- | --- |
| **Colour scheme** | (A) Brass/gold accent on deep teal-green + off-white | Teal ties to the leaf/swoosh logo and reads "premium villa"; brass is reserved for accents/CTAs so it stays luxurious, not loud |
| **Stack** | React + Vite + Tailwind CSS + Framer Motion + Lenis | User's default; best fit for the scroll-reveal/parallax brief. Lenis added for premium smooth scroll |
| **Output** | Real multi-file buildable codebase | Production-ready, not a throwaway demo |
| **Routing** | Multi-page via React Router | True multi-page sitemap as specified |
| **Typography** | **Outfit** (headings) + **Inter** (body), **fluid `clamp()` scale** | Outfit echoes a geometric logo wordmark; Inter for body/UI. Fluid sizes scale smoothly on every device |
| **Design language** | Minimal/architectural: fluid type, hairlines, numeric indices, lighter cards | User asked to push more minimal after v1; whitespace-forward, restrained |
| **Heroes** | **Full-screen `100svh` on every page** (home + inner) | User wanted every page to open identically to home |
| **Motion philosophy** | Restrained but premium; full reduced-motion support | "Inspiring but not gimmicky. No autoplay clutter." |
| **Contact form** | Front-end with `mailto:` fallback | Works today with zero backend; ready to wire to a real endpoint |
| **Projects** | Filterable gallery + detail **modal** | Fastest path to a rich portfolio; easy to promote to `/projects/:slug` later |

### Design language (current)

- **Colour tokens** (`tailwind.config.js`): `teal-900 #0A211D` / `teal-950 #071A17`
  (dark surfaces, all heroes, footer); `brass-500 #C2A15A` (+ `brass-300 #D9BE85`)
  for accents, CTAs, icons, hairlines, indices; `cream-100 #F7F4ED` (+ `cream-200`).
- **Fluid display sizes**: `text-display-xl/lg/md/sm` use `clamp()` — no breakpoint jumps.
- **Vertical rhythm**: one `.section-y` utility used site-wide.
- **Hairline detailing**: `1px` dividers via the `gap-px` technique + `.hairline`,
  numeric section indices `(01)–(05)`, light brass-tint round icon chips.
- **Reusable primitives** keep every page consistent (see §4).

---

## 3. Sitemap & page contents

| Route | Page | Key sections |
| --- | --- | --- |
| `/` | **Home** | Full-screen hero (parallax + hairline meta bar) → value-prop card + count-up stats → services grid → Process band → Why Choose → featured projects → testimonials carousel → CTA band |
| `/about` | **About** | Full-screen hero → story, mission & vision, count-up stats, values, trust differentiators, CTA |
| `/services` | **Services** | Full-screen hero → overview grid + 8 anchored service sections (alternating) + Process + CTA |
| `/projects` | **Projects** | Full-screen hero → category filter + animated grid + detail modal |
| `/process` | **Process** | Full-screen hero → expanded 4-step vertical timeline + "what this means for you" |
| `/contact` | **Contact** | Full-screen hero → form + 3 phones + WhatsApp + hours + map placeholder |
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
├── tailwind.config.js          Tokens, fonts, fluid display sizes, shadows, keyframes
├── public/favicon.svg          Leaf-in-ring mark (matches the logo)
└── src/
    ├── main.jsx                React + Router bootstrap
    ├── App.jsx                 Routes + Preloader + useSmoothScroll + Header/Footer/WhatsApp
    ├── index.css               Tailwind layers, component classes, Lenis CSS, reduced-motion guard
    ├── components/             Reusable, page-agnostic building blocks
    │   ├── Header.jsx          Sticky nav (scroll-state light/dark), services mega-dropdown, mobile menu
    │   ├── Footer.jsx          CTA strip + links + contact
    │   ├── Logo.jsx            Refined leaf-in-brass-ring placeholder + wordmark (hover settle)
    │   ├── Icon.jsx            Dependency-free inline-SVG icon set
    │   ├── Reveal.jsx          Scroll-reveal wrapper (respects reduced-motion)
    │   ├── SectionHeading.jsx  Optional index + eyebrow + fluid title + intro
    │   ├── PageHero.jsx        FULL-SCREEN inner-page hero (parallax + meta bar) — mirrors home
    │   ├── ProcessSteps.jsx    Reusable 4-step process (Home + Process page)
    │   ├── Seo.jsx             Per-page <title> + meta description
    │   ├── ScrollToTop.jsx     Route scroll reset / #anchor jumps (via Lenis when active)
    │   ├── FloatingWhatsApp.jsx Scroll-aware WhatsApp button (collapses on scroll-down)
    │   ├── Preloader.jsx       Brand intro, once per session
    │   └── CountUp.jsx         Animated count-up for stats
    ├── hooks/
    │   └── useSmoothScroll.js  Lenis init + RAF loop + shared instance accessor (getLenis)
    ├── sections/               Home-page sections
    │   ├── Hero.jsx            Full-screen parallax hero + hairline meta bar
    │   ├── ValueProps.jsx      Value-prop card (hairline grid) + count-up stats
    │   ├── ServicesPreview.jsx Hairline services grid w/ indices
    │   ├── ProcessSection.jsx
    │   ├── WhyChoose.jsx
    │   ├── FeaturedProjects.jsx Asymmetric feature grid
    │   ├── Testimonials.jsx    Carousel (manual, no autoplay)
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
| Brand intro preloader | `components/Preloader.jsx` | Logo ring draws in, wordmark fades, panel wipes up. Once per session (`sessionStorage`) |
| Smooth scrolling (Lenis) | `hooks/useSmoothScroll.js` | RAF loop; shared instance via `getLenis()`. Disabled under reduced-motion |
| Full-screen hero parallax | `sections/Hero.jsx`, `components/PageHero.jsx` | `useScroll` + `useTransform`; both `min-h-[100svh]`; static under reduced-motion |
| Scroll-reveal fade/rise | `components/Reveal.jsx` | Fires once on enter; `delay` prop staggers siblings |
| Count-up stats | `components/CountUp.jsx` | `useInView` + motion value; parses `150+`/`100%`/`8`; final value under reduced-motion |
| Scroll-aware WhatsApp | `components/FloatingWhatsApp.jsx` | Present from first paint; collapses to icon on scroll-down, expands at top/scroll-up |
| Services mega-dropdown | `components/Header.jsx` | Animated open/close via `AnimatePresence` |
| Project filter + modal | `pages/Projects.jsx` | `layout` animations + popLayout exit |
| Testimonial carousel | `sections/Testimonials.jsx` | Manual controls, no autoplay |
| Hover micro-interactions | throughout | Card lift, icon chip fill, arrow nudge, logo leaf settle |

All gated by the `@media (prefers-reduced-motion: reduce)` rule in `index.css`
(collapses transitions/animations) **plus** explicit guards: the preloader and Lenis
are skipped, and parallax/count-ups resolve to their final state.

---

## 6. Accessibility & SEO

- Semantic landmarks (`header`/`main`/`footer`/`nav`), `focus-visible` rings,
  labelled form controls and icon buttons (`aria-label`), `aria-expanded` on the
  mobile toggle.
- Full reduced-motion support (above).
- Per-page `<title>` + meta description via `components/Seo.jsx`.
- Open Graph + Twitter card tags and keywords in `index.html`.
- Responsive, mobile-first; `overflow-x` guarded on `body` against off-canvas
  decorative elements; hero image `fetchpriority="high"`, others lazy-loaded.

---

## 7. Build verification

- `npm install` — clean (adds `lenis`).
- `npm run build` — **424 modules transformed, no errors.**
  Output ≈ 387 kB JS (≈121 kB gzip), ≈37.5 kB CSS (≈6.7 kB gzip).
- `npm run dev` — boots in ~1s, serves HTTP 200.

---

## 8. Handover checklist

Everything below is a **placeholder** clearly marked in-code (`REPLACE` /
`PLACEHOLDER` / `TODO`). Swap before launch:

- [ ] **Logo** — replace the refined leaf-in-ring placeholder in `components/Logo.jsx`
      with the real asset; update `public/favicon.svg` to match.
- [ ] **Images** — home hero (`sections/Hero.jsx`), each page hero (`HERO` const in
      `pages/*.jsx`), projects (`data/projects.js`), services (`pages/Services.jsx`).
- [ ] **Projects** — real titles, locations, areas, photos, summaries in `data/projects.js`.
- [ ] **Testimonials** — real client quotes in `data/content.js`.
- [ ] **Contact form** — wire to a real endpoint (Formspree / Netlify Forms / API)
      in `pages/Contact.jsx`; currently a `mailto:` fallback.
- [ ] **Map** — embed a Google Maps iframe in `pages/Contact.jsx`.
- [ ] **Email / socials** — confirm in `data/site.js` (`info@holytouch.in` is a guess).
- [ ] **OG image** — add `public/og-image.jpg` (1200×630) for link previews.
- [ ] **Stats** — confirm real numbers in `data/content.js` (years, projects).

---

## 9. Iteration log

A short history of the design passes (most recent last):

1. **v1 — full build.** All 6 pages + 404, shared header/footer, home as the
   showcase. Brass-on-teal scheme, Outfit/Inter, restrained motion.
2. **Header contrast fix.** The transparent-over-hero header had dark-on-dark logo
   and nav links; made them switch light↔dark with scroll state.
3. **Minimal redesign pass.** Pushed more architectural: fluid `clamp()` type scale,
   `.section-y` rhythm, hairline dividers + numeric indices, lighter brass-tint icon
   chips, softer shadows, `overflow-x` guard. Hero gained a hairline meta bar.
4. **Hero + WhatsApp fixes.** Removed the value-prop overlap so the hero fully owns
   the first screen; made the WhatsApp button high-contrast and always visible.
5. **Hero parity + logo + premium motion.** Inner-page heroes rebuilt to full-screen
   `100svh` (parallax + meta bar) matching home; logo redrawn as a refined
   leaf-in-brass-ring (+ favicon); added the **brand intro preloader**, **Lenis smooth
   scrolling**, and **count-up stats**. WhatsApp button made scroll-aware (collapse/expand).

---

## 10. Possible next steps

- Promote project modal to real `/projects/:slug` routes when content is ready.
- Add a blog / insights section for SEO.
- Wire the form to a backend + spam protection (honeypot / captcha).
- Add structured data (JSON-LD `LocalBusiness`) for richer search results.
- Lighthouse/axe audit pass once real images are in.
