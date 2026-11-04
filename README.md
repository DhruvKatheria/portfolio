# Dhruv Katheria — Developer Portfolio

Personal portfolio of **Dhruv Katheria**, a B.E. Information Technology student at PICT (SPPU, 2024–2028) building full-stack and AI-powered applications.

The visual identity, **"Tactical Matchday"**, is a premium engineering portfolio with a football-inspired language: Blaugrana-inspired colours, tactics-board diagrams, matchday labels and a scoreboard. The professional content always comes first. See [`DESIGN.md`](./DESIGN.md) for the full design system.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, fully static output)
- React 19 + TypeScript (strict)
- Tailwind CSS v4
- Lucide React (icons)
- `next/font` (Archivo, Geist, Geist Mono, all self-hosted at build time)

There's no backend, database or analytics, and no environment secrets.

## Design philosophy

- **Projects are the main attraction.** The flagship project gets the largest card; the others sit in a two-up grid, and each has a full case study.
- **Football as grammar, not decoration.** Formations, pitch thirds, squad numbers and match reports map naturally onto stacks, roadmaps and case studies.
- **Restraint.** About 85% dark neutrals, blue and garnet as accents, gold almost never.
- **Accurate content only.** Nothing invented: no metrics, links, stats or experience that aren't confirmed.
- **Works without motion or JS.** Animations are progressive enhancement and respect `prefers-reduced-motion`.

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, nav, footer
  page.tsx              Homepage (composes the sections)
  globals.css           Tailwind theme tokens + small component layer
  projects/page.tsx     All projects
  projects/[slug]/      Case-study template (statically generated)
  opengraph-image.tsx   Generated social card (also used for Twitter/X)
  icon.svg              Favicon (DK monogram)
  sitemap.ts, robots.ts, not-found.tsx
components/
  layout/ navigation/ hero/ achievements/ projects/ about/
  skills/ education/ contact/ ui/
data/                   All content: site, projects, skills, education, achievements
lib/resume.ts           Shows the resume CTA only if the PDF exists
types/index.ts          Shared content types + case-study section registry
public/resume/          Put the resume PDF here
```

Content is fully separate from presentation. To edit the site, edit the files in `data/`.

### Common edits

- **Add or replace a project:** add an entry to `data/projects.ts`. Move `flagship: true` to whichever project should lead.
- **Case-study sections:** add any key from `CASE_STUDY_SECTIONS` in `types/index.ts` (e.g. `challenges`, `tradeoffs`, `future`). Sections without content are never rendered.
- **Project links:** set `links: { repo, demo }`. The buttons only appear when a URL is present.
- **Resume:** add `public/resume/Dhruv_Katheria_Resume.pdf`. The Resume buttons (nav, hero, contact) appear automatically on the next build. The path is configured in `data/site.ts`.
- **Journey entries** (internships, hackathons, open source…): add them to `journey` in `data/education.ts`.

## Local development

Requires Node.js 20.9+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
npm run start      # serve the production build
npm run typecheck  # TypeScript only
```

## Deployment (Vercel)

1. Import the repository in Vercel. The framework is detected automatically.
2. Build command `npm run build`, output handled by Next.js.
3. Optional: set `NEXT_PUBLIC_SITE_URL` to a custom domain (e.g. `https://example.com`) for canonical URLs, the sitemap and OG tags. Without it, the Vercel production URL is used automatically.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL. Falls back to `VERCEL_PROJECT_PRODUCTION_URL`, then `http://localhost:3000`. |
