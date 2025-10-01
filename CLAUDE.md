# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 portfolio website built with React 18, Tailwind CSS, and Framer Motion. The site features a dark/light theme toggle, animated components, and responsive design.

## Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server (runs on localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Theme System
The application uses a custom dark mode implementation:
- Theme preference persists in `localStorage` with key `'theme'`
- Initial theme is set via inline script in `_document.js` to prevent flash
- `useThemeSwitch` hook (src/components/Hooks/useThemeSwitch.js) manages theme state and localStorage
- Dark mode is toggled by adding/removing `'dark'` class to `document.documentElement`
- Tailwind's `darkMode: 'class'` configuration enables dark mode styling

### Layout Structure
- **_app.js**: Global app wrapper with Montserrat font, Navbar, Footer, and AnimatePresence for page transitions
- **_document.js**: Contains critical inline script for theme initialization
- **Layout component**: Provides consistent page padding/margins across pages
- **TransitionEffect component**: Handles page transition animations via Framer Motion

### Pages
- **index.js** (Home): Hero section with profile image, animated text, and HireMe component
- **about.js**: Biography, animated statistics, Skills, Experience, and Education sections
- **projects.js**: Grid layout with FeaturedProject and Project components
- **articles.js**: Currently commented out in navigation

### Responsive Design
Tailwind config uses custom breakpoint utilities with max-width queries:
- `2xl`: max-width 1535px
- `xl`: max-width 1279px
- `lg`: max-width 1023px
- `md`: max-width 767px
- `sm`: max-width 639px
- `xs`: max-width 479px

### Custom Tailwind Configuration
- **Custom colors**: `primary` (#B63E96), `primaryDark` (#58E6D9), `dark` (#1b1b1b), `light` (#f5f5f5)
- **Custom animations**: `spin-slow` for 8-second spin
- **Background images**: Multiple circular gradient variants for light/dark modes at different breakpoints
- **Custom variants**: `child` and `child-hover` for direct child selectors
- **Font**: Montserrat variable font loaded via Next.js Google Fonts

### Navigation
- Desktop: Horizontal navigation with links and social icons
- Mobile: Hamburger menu with animated overlay (opens at `lg` breakpoint and below)
- Mobile menu uses Framer Motion with scale/opacity animations
