# Soft Step — Company Portfolio

Trilingual (English / Bahasa Indonesia / Arabic) portfolio for **Soft Step (PT Softstep Inovasi Sistem)**, built with Next.js 14 (App Router), TypeScript, Tailwind CSS and `next-intl`.

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom brand tokens (cyan/navy on near-black, derived from the Soft Step logo)
- **i18n:** `next-intl` — locales `en` (default), `id`, `ar` (RTL)
- **Icons:** `lucide-react`
- **Motion:** `framer-motion` (subtle scroll reveals only, respects `prefers-reduced-motion`)

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`. English is served at `/`, Indonesian at `/id`, Arabic at `/ar` (with `dir="rtl"` applied automatically).

```bash
npm run build   # production build (also type-checks and lints)
npm run start   # serve the production build
npm run lint    # lint only
```

## Project structure

```
app/
  layout.tsx              Root passthrough layout (metadataBase only)
  not-found.tsx           Global 404 fallback (has its own <html>/<body>)
  sitemap.ts / robots.ts  SEO metadata routes
  icon.jpg / opengraph-image.jpg   Brand-derived favicon & social preview
  [locale]/
    layout.tsx             Locale shell: fonts, dir="rtl"/"ltr", header/footer
    page.tsx                Home (Hero, About, Services, Featured Projects, Contact)
    projects/page.tsx       All projects with filters
    projects/[slug]/page.tsx  Project detail page

components/
  layout/     Header, Footer, LanguageSwitcher
  sections/   Hero, About, Services, FeaturedProjects, Contact, ContactForm
  projects/   ProjectCard, ProjectFilters, StatusBadge
  ui/         Button, Chip, Container, SectionHeading, Reveal
  brand/      LogoMark (SVG), Wordmark, LinkedinIcon

lib/
  projects.ts     Typed catalog of the 5 real Soft Step projects (facts only)
  categories.ts   Project filter categories
  utils.ts

i18n/
  routing.ts, navigation.ts, request.ts   next-intl configuration

messages/
  en.json, id.json, ar.json    All UI copy, per locale
```

## Content policy

All company, project, and technology facts come directly from the brief provided by Soft Step. Nothing was invented:

- The 5 projects (Valley Order, Boma Platform, Gia, Digital Arabic Platforms, Adam Events) and their statuses, URLs, stacks and feature lists are stored verbatim in [`lib/projects.ts`](lib/projects.ts) and translated (not altered) in `messages/*.json`.
- No performance metrics, client counts, or years-of-experience claims are shown anywhere, since none were provided.
- Any field Soft Step has not yet supplied is rendered literally as **`[NEEDS USER INPUT]`** (kept untranslated across all three locales so it stays unmistakably a placeholder).

## Remaining `[NEEDS USER INPUT]` items

These currently show as visible placeholders in the Contact section and footer:

- [ ] Company email address
- [ ] WhatsApp number
- [ ] LinkedIn URL
- [ ] GitHub URL (if Soft Step wants it shown — no repos were listed in the brief, so none are linked yet)
- [ ] Exact office address (currently shows "Indonesia" only)
- [ ] Final positioning label (currently "Software Development Company")
- [ ] Confirmation of hero/tagline wording
- [ ] Contact form destination — the form in [`components/sections/ContactForm.tsx`](components/sections/ContactForm.tsx) is **not wired to any email service**. There's a `TODO` comment there for hooking up Formspree, EmailJS, or a custom API route once a destination is chosen.
- [ ] Real `metadataBase` domain — currently a placeholder `https://softstep.example.com` in [`app/layout.tsx`](app/layout.tsx), [`app/[locale]/layout.tsx`](app/[locale]/layout.tsx), [`app/sitemap.ts`](app/sitemap.ts) and [`app/robots.ts`](app/robots.ts). Replace with the production domain once available.

## Editing translations

All UI copy lives in `messages/en.json`, `messages/id.json`, and `messages/ar.json`, mirroring the same key structure. Edit the matching key in each file when changing copy so the three languages stay in sync. Project facts (URLs, stack, status) are locale-independent and live only in `lib/projects.ts`; only the descriptive text (`name`, `tagline`, `desc`, `role`, `features`) is translated per locale under `projects.items.<key>` in the message files.

## Adding a new project

1. Add an entry to the `projects` array in [`lib/projects.ts`](lib/projects.ts) with a unique `slug` and `key`.
2. Add a matching `projects.items.<key>` block to all three `messages/*.json` files (name, category, tagline, desc, role, features).
3. Set `featured: true` if it should appear on the homepage (keep the featured count to 3 for the "scannable" homepage goal).
