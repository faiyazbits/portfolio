# Architecture

**Analysis Date:** 2026-04-26

## Pattern Overview

**Overall:** Next.js 13 Pages Router with Component-based UI

**Key Characteristics:**
- Pages Router architecture (not App Router)
- Custom dark mode via Tailwind `darkMode: 'class'`
- Framer Motion for animations and page transitions
- Responsive design with custom Tailwind breakpoints (max-width queries)

## Layers

### Pages Layer
- Purpose: Route handlers and page composition
- Location: `src/pages/`
- Contains: `index.js`, `about.js`, `work.js`, `impact.js`, `performance-optimization-sprint.js`
- Depends on: Components
- Entry points: Next.js file-based routing

### Components Layer
- Purpose: Reusable UI components
- Location: `src/components/`
- Contains: Layout, Navbar, Footer, AnimatedText, TransitionEffect, Icons, etc.
- Types: Standard React components, some with Framer Motion wrappers

### Hooks Layer
- Purpose: State and side-effect logic
- Location: `src/components/Hooks/`
- Contains: `useThemeSwitch.js` (theme state management)
- Used by: Navbar, any component needing theme access

### Data Layer
- Purpose: Static JSON data for projects and impact case studies
- Location: `src/data/`
- Contains: `projects.json`, `impact.json`

### Styles Layer
- Purpose: Global CSS and Tailwind
- Location: `src/styles/`
- Contains: `globals.css` (Tailwind directives)

## Data Flow

### Theme Initialization Flow:
1. `_document.js` executes inline script BEFORE hydration
2. Script checks `localStorage.getItem('theme')` or `prefers-color-scheme`
3. Adds/removes `'dark'` class on `document.documentElement`
4. `useThemeSwitch` hook manages state and localStorage sync

### Page Transition Flow:
1. `_app.js` wraps content with `AnimatePresence` (mode: "wait")
2. `TransitionEffect` renders animated overlay divs (3 layered)
3. Page change triggers exit/enter animations (0.8s total)

### Image Loading:
1. Static images imported at top of `work.js`
2. `imageMap` object maps JSON keys to imported images
3. `next/image` with `priority` on above-fold images

## Key Abstractions

### Theme System:
- Implementation: `src/components/Hooks/useThemeSwitch.js`
- Custom hook returns `[mode, setMode]`
- Mode: `"dark"` or `"light"`
- Storage key: `'theme'` in localStorage

### Page Layout:
- Component: `src/components/Layout.js`
- Provides consistent padding (p-32 down to sm:p-8)
- Wraps content in `div` with bg-light/dark

### Navigation:
- Desktop: Horizontal nav with CustomLink components
- Mobile: Hamburger menu with CustomMobileLink
- State: `isOpen` boolean toggles animated overlay

### Animated Components:
- `AnimatedText`: Typewriter/reveal text animation
- `TransitionEffect`: Page transition overlay
- `AnimatedNumberFramerMotion`: Counting number animation

## Entry Points

**Application Entry:**
- Location: `src/pages/_app.js`
- Responsibilities: Font loading, Navbar/Footer rendering, AnimatePresence wrapper

**Theme Entry:**
- Location: `src/pages/_document.js`
- Responsibilities: Inline script for flash-free theme init

**API Routes:**
- Location: `src/pages/api/`
- Contains: `hello.js`, `consulting-lead.js`

## Error Handling

**Strategy:** Not explicitly implemented; relies on Next.js defaults

**Patterns:**
- No try/catch visible in components
- No error boundaries detected
- API routes return basic JSON responses

## Cross-Cutting Concerns

**Theme/Appearance:** Custom dark mode via Tailwind class toggle
**Fonts:** Montserrat via next/font/google
**Page Transitions:** Framer Motion AnimatePresence
**Responsive:** Tailwind breakpoint utilities

---

*Architecture analysis: 2026-04-26*
