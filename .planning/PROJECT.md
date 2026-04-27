# Portfolio Blog

## What This Is

Interactive blogging platform embedded in the portfolio. Blog posts support MDX with rich content: text, images, videos, interactive React components, SVG, and canvas elements.

## Core Value

Enable rich, interactive blog posts that go beyond static content — readers experience embedded live components, animations, and custom visualizations.

## Requirements

### Active

- [ ] Setup MDX pipeline with next-mdx-remote
- [ ] Create blog post layout component with consistent styling
- [ ] Support interactive React components in MDX
- [ ] Create sample blog post demonstrating capabilities
- [ ] Add blog listing page with post metadata

### Out of Scope

- CMS or admin panel — posts are MDX files in repository
- Comments or user interaction
- Search functionality
- Categories/tags system

## Context

- Portfolio at `/Users/faiyaz/workspace/me/portfolio`
- Next.js 13 Pages Router
- Existing dark mode theme system
- React 18.2.0, Tailwind 3.2.7, Framer Motion 10.0.1

## Constraints

- **Tech Stack**: Must work with existing Next.js 13 Pages Router
- **MDX Solution**: next-mdx-remote (supports components, works with Pages Router)
- **Styling**: Tailwind existing setup

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use next-mdx-remote | App Router has built-in MDX support, but Pages Router needs custom solution | — Pending |
| Posts as local MDX files | Simple, version-controlled, no external CMS needed | — Pending |

---
*Last updated: 2026-04-26 after initialization*