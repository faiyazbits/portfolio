---
phase: 03-blog-capabilities
plan: 01
type: execute
wave: 1
depends_on: [02-blog-infrastructure]
files_modified:
  - src/lib/mdx.js
  - src/pages/blog/[slug].js
autonomous: true
requirements:
  - REQ-03
  - REQ-04
must_haves:
  truths:
    - "User can embed interactive React components within MDX posts"
    - "Interactive components render and function correctly within blog posts"
    - "Sample blog post demonstrates text, images, and embedded interactive components"
    - "Sample blog post is accessible via the blog listing page"
  artifacts:
    - path: "src/components/blog/MDXComponents.js"
      provides: "Interactive React components for MDX embedding"
      exports: ["Counter", "ColorPicker", "InteractiveDemo"]
    - path: "content/posts/interactive-demo.mdx"
      provides: "Sample blog post demonstrating capabilities"
      contains: "import statements for interactive components"
    - path: "src/pages/blog/[slug].js"
      provides: "Updated blog post page with interactive components"
      imports: "MDXComponents.js"
  key_links:
    - from: "src/pages/blog/[slug].js"
      to: "src/components/blog/MDXComponents.js"
      via: "import and pass to MDXRemote components prop"
      pattern: "MDXRemote.*components.*MDXComponents"
    - from: "content/posts/interactive-demo.mdx"
      to: "src/components/blog/MDXComponents.js"
      via: "import statement in MDX"
      pattern: "import.*Counter.*from.*MDXComponents"
---

<objective>
Enable interactive React components in MDX blog posts and create a demo post showcasing the capability.
</objective>

<context>
@src/pages/blog/[slug].js
@src/lib/mdx.js
@src/components/BlogLayout.js

**What exists:**
- MDX pipeline using next-mdx-remote/serialize (Phase 1)
- BlogLayout with header/footer components (Phase 2)
- Blog listing at /blog and post pages at /blog/[slug] (Phase 2)
- Basic MDX components (h1, h2, p, ul, etc.) already passed to MDXRemote

**What needs to be added:**
- Interactive React components that can be embedded in MDX
- Components passed to MDXRemote so MDX files can use them
- Sample post using these components

**Interface contract:**
MDXRemote accepts a `components` prop. Any components passed there are available in MDX as JSX elements.
</context>

<tasks>

<task type="auto">
  <name>Task 1: Create MDX interactive components file</name>
  <files>src/components/blog/MDXComponents.js</files>
  <action>
Create interactive React components that can be embedded in MDX posts.

**File:** `src/components/blog/MDXComponents.js`

Create the following interactive components:

1. **Counter** - Simple interactive counter with increment/decrement buttons and current count display
   - Props: `initialCount` (default: 0)
   - State: `count` initialized from props
   - UI: Display count, + button, - button styled with Tailwind
   - Dark mode support via `dark:` classes

2. **ColorPicker** - Interactive color selection demo
   - Props: `label` (default: "Pick a color")
   - State: `selectedColor`
   - UI: Grid of color buttons (red, blue, green, yellow, purple), display selected color name
   - Dark mode support

3. **InteractiveDemo** - Compound component demonstrating multiple interactive elements
   - Props: `title` (default: "Interactive Demo")
   - Contains: Counter + ColorPicker + text explaining the component
   - Wrapped in a bordered card with padding

4. **Callout** - Styled callout box for highlighting content
   - Props: `type` (info, warning, tip)
   - Different border colors and icons per type
   - Dark mode support

All components must:
- Be proper React functional components with hooks where needed
- Use Tailwind classes for styling (matching existing dark mode patterns)
- Use existing color palette (primary: #B63E96, primaryDark: #58E6D9)
- Export individually for direct import in MDX
</action>
  <verify>
    <automated>node -e "const c = require('./src/components/blog/MDXComponents.js'); console.log(Object.keys(c).join(', '))"</automated>
  </verify>
  <done>MDXComponents.js exists with Counter, ColorPicker, InteractiveDemo, Callout exports</done>
</task>

<task type="auto">
  <name>Task 2: Update blog post page to pass interactive components</name>
  <files>src/pages/blog/[slug].js</files>
  <action>
Update `src/pages/blog/[slug].js` to import and pass the interactive components to MDXRemote.

Changes:
1. Import MDXComponents at the top: `import MDXComponents from '@/components/blog/MDXComponents'`
2. Merge MDXComponents into the existing components object passed to MDXRemote

The existing components object (h1, h2, p, ul, etc.) should be spread alongside the interactive components:
```javascript
const components = {
  ...MDXComponents,
  // existing overrides
  h1: props => <h1 className="text-3xl font-bold mb-4" {...props} />,
  // etc.
};
```

This makes all interactive components available in MDX without overriding existing styling.
</action>
  <verify>
    <automated>npm run build 2>&1 | grep -E "(error|Error|Blog)" | head -20</automated>
  </verify>
  <done>Build succeeds and [slug].js imports MDXComponents</done>
</task>

<task type="auto">
  <name>Task 3: Create sample interactive blog post</name>
  <files>content/posts/interactive-demo.mdx</files>
  <action>
Create a sample MDX blog post at `content/posts/interactive-demo.mdx` that demonstrates the interactive capabilities.

**Post structure:**
1. Frontmatter with title, date, description
2. Introduction paragraph explaining what the demo covers
3. Embedded **Counter** component with explanation
4. Embedded **ColorPicker** component with explanation
5. Embedded **InteractiveDemo** component showing compound usage
6. **Callout** examples (info, warning, tip types)
7. Closing paragraph

**Example content:**
```mdx
---
title: "Interactive Components Demo"
date: "2026-04-26"
description: "A demonstration of interactive React components embedded in MDX"
---

Welcome to this interactive demo! Below you'll find several React components embedded directly in this MDX post.

## Counter Component

This Counter uses React useState to track a number. Try clicking the buttons:

import Counter from '@/components/blog/MDXComponents';

<Counter initialCount={5} />

## Color Picker

Select from the colors below:

import ColorPicker from '@/components/blog/MDXComponents';

<ColorPicker label="Choose your favorite" />

## Interactive Demo

A compound component combining multiple interactive elements:

import InteractiveDemo from '@/components/blog/MDXComponents';

<InteractiveDemo title="Full Demo" />

## Callout Boxes

import Callout from '@/components/blog/MDXComponents';

<Callout type="info">
This is an info callout - great for providing helpful context.
</Callout>

<Callout type="warning">
This is a warning callout - use for important notices.
</Callout>

<Callout type="tip">
This is a tip callout - useful for sharing helpful suggestions.
</Callout>

---

That's it! Interactive React components work seamlessly in MDX.
```

**Note:** The MDX imports and components should work without explicit import statements if the components are passed to MDXRemote. If import statements are needed in MDX, include them at the top of the file. Test by building and visiting the post.
</action>
  <verify>
    <automated>ls content/posts/ && npm run build 2>&1 | grep -E "(interactive-demo|✓|error)" | head -10</automated>
  </verify>
  <done>interactive-demo.mdx exists in content/posts, post appears in build output</done>
</task>

</tasks>

<verification>
- MDXComponents.js exports Counter, ColorPicker, InteractiveDemo, Callout
- Blog post page imports MDXComponents and passes to MDXRemote
- Build succeeds with no errors
- /blog shows interactive-demo post in listing
</verification>

<success_criteria>
- [ ] Interactive components can be used in MDX posts
- [ ] Counter increments/decrements on click
- [ ] ColorPicker responds to color selection
- [ ] InteractiveDemo renders with multiple components
- [ ] Callout boxes display with correct styling
- [ ] Sample post accessible at /blog/interactive-demo
- [ ] Build succeeds
</success_criteria>

<output>
After completion, create `.planning/phases/03-blog-capabilities/03-blog-capabilities-SUMMARY.md`
</output>