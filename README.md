# Holytouch — Website

> **Your Perfect Builder** — End-to-end construction & design, Kerala, India.
> _Built on Trust, Delivered with Pride._

A premium, multi-page marketing site built with **React + Vite + Tailwind CSS + Framer Motion + Lenis**.

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production build -> /dist
npm run preview  # preview the production build
```

## Design system

| Token | Value | Use |
| --- | --- | --- |
| Deep teal-green | `teal-900 #0A211D` / `teal-950 #071A17` | Primary dark surfaces, footer, all heroes |
| Brass / gold | `brass-500 #C2A15A` (+ `brass-300 #D9BE85`) | Accent, CTAs, icons, hairlines, indices |
| Off-white / cream | `cream-100 #F7F4ED` (+ `cream-200` bands) | Primary light surface |
| Display font | **Outfit** (wide geometric) | Headings — echoes the logo's geometric mark |
| Body font | **Inter** | Body & UI |

**Minimal/architectural language:**
- **Fluid typography** — display sizes use `clamp()` (`text-display-xl/lg/md/sm` in
  `tailwind.config.js`) so headings scale smoothly on every device, no breakpoint jumps.
- **Consistent rhythm** — one `.section-y` utility drives vertical spacing everywhere.
- **Hairline detailing** — `1px` dividers (`gap-px` technique + `.hairline`), numeric
  section indices `(01)–(05)`, and light brass-tint round icon chips.
- Helpers live in `src/index.css` (`.btn*`, `.eyebrow`, `.section-y`, `.hairline`).

## Motion

Intentionally restrained but premium. Every effect is gated by the
`prefers-reduced-motion` guard in `index.css` (and Lenis/preloader/parallax are
skipped entirely when reduced motion is requested).

- **Brand intro preloader** — `components/Preloader.jsx`, once per session.
- **Smooth scrolling (Lenis)** — `hooks/useSmoothScroll.js`, driven from `App.jsx`.
- **Full-screen hero parallax on every page** — `sections/Hero.jsx` (home) +
  `components/PageHero.jsx` (inner pages), both `min-h-[100svh]`.
- **Scroll-reveal fades** — `components/Reveal.jsx`.
- **Count-up stats** — `components/CountUp.jsx` (home + About).
- **Scroll-aware WhatsApp button** — `components/FloatingWhatsApp.jsx`.

## Project structure

```
src/
  components/   Header, Footer, Logo, Icon, Reveal, SectionHeading, PageHero (full-screen),
                ProcessSteps, Seo, ScrollToTop, FloatingWhatsApp, Preloader, CountUp
  sections/     Home-page sections (Hero, ValueProps, ServicesPreview, ProcessSection,
                WhyChoose, FeaturedProjects, Testimonials, CtaBand)
  pages/        Home, About, Services, Projects, Process, Contact, NotFound
  hooks/        useSmoothScroll.js (Lenis init + shared instance accessor)
  data/         site.js, services.js, projects.js, content.js  ← edit content here
  App.jsx       Routes + Preloader + smooth scroll
```

## What to replace before launch (search for these)

- **Logo** — `components/Logo.jsx` is a refined leaf-in-ring **placeholder**.
  Drop in the real supplied asset (and update `public/favicon.svg` to match).
- **Images** — every image marked `REPLACE` / `PLACEHOLDER` uses Unsplash. Swap for real photos.
  Hero: `sections/Hero.jsx`. Page heroes: each `pages/*.jsx` `HERO` const. Projects:
  `data/projects.js`. Services: `pages/Services.jsx`.
- **Testimonials** — `data/content.js` (`testimonials`) are placeholders.
- **Contact** — `pages/Contact.jsx` form currently uses a `mailto:` fallback.
  Wire it to a real endpoint (Formspree / Netlify Forms / your API).
- **Map** — `pages/Contact.jsx` has a map placeholder; embed a Google Maps iframe.
- **Email / phones / socials** — `data/site.js`.
- **OG image** — add `public/og-image.jpg` (1200×630) for link previews.

## Accessibility & SEO

- Semantic landmarks, focus-visible rings, labelled controls, `aria-expanded` on toggles.
- Full `prefers-reduced-motion` support (preloader, Lenis, parallax, count-ups all respect it).
- Per-page `<title>` + meta description via `components/Seo.jsx`; Open Graph / Twitter tags in `index.html`.
- Responsive, mobile-first; `overflow-x` guarded; hero image `fetchpriority="high"`, others lazy-loaded.
