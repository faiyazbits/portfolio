# Technology Stack

**Analysis Date:** 2026-04-26

## Languages

**Primary:**
- JavaScript (ES6+) - Main language for all components and pages
- TypeScript - Not detected (plain .js files)

## Runtime

**Environment:**
- Node.js (version not specified in package.json)

**Package Manager:**
- npm (package-lock.json present)
- pnpm (pnpm-lock.yaml present - alternative usage)

## Frameworks

**Core:**
- Next.js 13.2.1 - Pages Router, React full-stack framework
- React 18.2.0 - UI library

**Animation:**
- Framer Motion 10.0.1 - Animations, page transitions, gesture handling
- React Rough Notation 1.0.8 - Hand-drawn text highlighting

**Styling:**
- Tailwind CSS 3.2.7 - Utility-first CSS framework
- PostCSS 8.4.21 - CSS transformation tool
- Autoprefixer 10.4.13 - Vendor prefix automation

**API/Data:**
- react-rough-notation 1.0.8 - Text annotation animations

## Dev Dependencies

**Linting:**
- ESLint 8.35.0 - JavaScript linting
- eslint-config-next 13.2.1 - Next.js ESLint config

**Build:**
- Next.js 13.2.1 (via dependencies)

## Configuration

**Environment:**
- `.env.local` present - local environment variables
- `.env.example` present - template for env vars
- `NEXT_PUBLIC_WHATSAPP_URL` referenced in components

**Build:**
- `next.config.js` - reactStrictMode: true
- `tailwind.config.js` - Custom colors, animations, breakpoints
- `postcss.config.js` - PostCSS with Tailwind
- `jsconfig.json` - Path aliases (@/)
- `.eslintrc.json` - ESLint configuration

## Platform Requirements

**Development:**
- Node.js
- npm/pnpm

**Production:**
- Node.js server (for `next start`)
- Static export possible with `next export`

---

*Stack analysis: 2026-04-26*
