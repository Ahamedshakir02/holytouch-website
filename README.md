# Holytouch — Website

> **Your Perfect Builder** — End-to-end construction & design, Kerala, India.
> _Built on Trust, Delivered with Pride._

A premium, multi-page marketing site built with **React + Vite + Tailwind CSS + Framer Motion**.

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
| Deep teal-green | `teal-900 #0A211D` / `teal-950 #071A17` | Primary dark surfaces, footer, hero |
| Brass / gold | `brass-500 #C2A15A` | Accent, CTAs, icons, highlights |
| Off-white / cream | `cream-100 #F7F4ED` | Primary light surface |
| Display font | **Outfit** (wide geometric) | Headings — echoes the logo's geometric mark |
| Body font | **Inter** | Body & UI |

Motion is intentionally restrained: scroll-reveal fades (`components/Reveal.jsx`),
subtle hero **parallax** (`sections/Hero.jsx`), and a `prefers-reduced-motion`
guard in `index.css`. No autoplay clutter.

## Project structure

```
src/
  components/   Header, Footer, Logo, Icon, Reveal, SectionHeading, PageHero, ProcessSteps, Seo, ...
  sections/     Home-page sections (Hero, ValueProps, ServicesPreview, ProcessSection, WhyChoose,
                FeaturedProjects, Testimonials, CtaBand)
  pages/        Home, About, Services, Projects, Process, Contact, NotFound
  data/         site.js, services.js, projects.js, content.js  ← edit content here
  App.jsx       Routes
```

## What to replace before launch (search for these)

- **Logo** — `components/Logo.jsx` has a placeholder SVG mark. Drop in the real circular leaf/swoosh logo.
- **Images** — every image marked `REPLACE` / `PLACEHOLDER` uses Unsplash. Swap for real project photos.
  Hero: `sections/Hero.jsx`. Projects: `data/projects.js`. Services: `pages/Services.jsx`.
- **Testimonials** — `data/content.js` (`testimonials`) are placeholders.
- **Contact** — `pages/Contact.jsx` form currently uses a `mailto:` fallback.
  Wire it to a real endpoint (Formspree / Netlify Forms / your API).
- **Map** — `pages/Contact.jsx` has a map placeholder; embed a Google Maps iframe.
- **Email / phones / socials** — `data/site.js`.
- **OG image** — add `public/og-image.jpg` (1200×630) for link previews.

## Accessibility & SEO

- Semantic landmarks, focus-visible rings, labelled controls, reduced-motion support.
- Per-page `<title>` + meta description via `components/Seo.jsx`; Open Graph / Twitter tags in `index.html`.
