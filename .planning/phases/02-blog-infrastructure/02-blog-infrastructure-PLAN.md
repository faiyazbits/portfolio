---
phase: 02-blog-infrastructure
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - src/components/BlogLayout.js
  - src/pages/blog/index.js
autonomous: true
requirements:
  - REQ-02
  - REQ-05

must_haves:
  truths:
    - "User visiting /blog sees a list of all available posts"
    - "Each post in the list shows title, date, and description"
    - "User can click a post title to navigate to that post"
    - "Individual blog posts render with consistent layout (header, content, footer)"
    - "Blog posts respect the site's dark/light theme"
  artifacts:
    - path: "src/components/BlogLayout.js"
      provides: "Reusable layout wrapper for blog posts"
      min_lines: 30
      exports: ["BlogLayout", "BlogPostHeader", "BlogPostFooter"]
    - path: "src/pages/blog/index.js"
      provides: "Blog listing page at /blog"
      exports: ["default", "getStaticProps"]
    - path: "src/pages/blog/[slug].js"
      provides: "Updated to use BlogLayout component"
      pattern: "import BlogLayout|from.*BlogLayout"
  key_links:
    - from: "src/pages/blog/index.js"
      to: "src/lib/mdx.js"
      via: "getAllPosts()"
      pattern: "getAllPosts"
    - from: "src/pages/blog/index.js"
      to: "/blog/\\[slug\\]"
      via: "Link component"
      pattern: "Link.*href.*blog"
---

<objective>
Create blog infrastructure: consistent post layout component and blog listing page
</objective>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/phases/01-mdx-pipeline/01-mdx-pipeline-SUMMARY.md

**Interface contracts from existing code:**

From src/lib/mdx.js:
```javascript
export function getPostBySlug(slug) // Returns { slug, meta, content }
export function getAllPosts() // Returns [{ slug, meta }]
export async function serializeMDX(content) // Returns serialized MDX
```

From src/pages/blog/[slug].js (existing blog post page):
```javascript
// Current structure provides meta with: title, date, description
// MDXRemote renders content with components object
```

**Existing patterns to follow:**
- Layout uses `max-w-3xl mx-auto px-4 py-8` container
- Tailwind dark mode: `dark:bg-dark`, `dark:text-light`
- Link styled with `text-primary hover:underline`
- getStaticProps/getStaticPaths for SSG

**Requirements to implement:**
- REQ-02: Create blog post layout component with consistent styling
- REQ-05: Add blog listing page with post metadata
</context>

<tasks>

<task type="auto">
  <name>Task 1: Create BlogLayout component</name>
  <files>src/components/BlogLayout.js</files>
  <action>
Create src/components/BlogLayout.js with three exports:

**BlogLayout** (main wrapper):
- Props: children (rendered MDX content)
- Wraps content in max-w-3xl container with centered padding
- Provides consistent page chrome (background, spacing)
- Dark mode support via Tailwind dark: prefix

**BlogPostHeader** (post header):
- Props: meta (object with title, date, description)
- Renders post title as h1 (text-4xl, bold, mb-2)
- Renders date and description below (text-gray-600 dark:text-gray-400)
- Include back link to /blog with left arrow (← Back to Blog)
- Back link styled with text-primary hover:underline

**BlogPostFooter** (optional footer for future use):
- Props: none
- Simple divider and "Thanks for reading" text
- Can be extended later

Example structure:
```javascript
export const BlogLayout = ({ children }) => (
  <div className="max-w-3xl mx-auto px-4 py-8 dark:bg-dark">
    {children}
  </div>
)

export const BlogPostHeader = ({ meta }) => (
  <header className="mb-8">
    <Link href="/blog" className="text-primary hover:underline mb-4 inline-block">
      ← Back to Blog
    </Link>
    <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
    <p className="text-gray-600 dark:text-gray-400">
      {meta.date} • {meta.description}
    </p>
  </header>
)

export const BlogPostFooter = () => (
  <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
    <p className="text-center text-gray-500 dark:text-gray-400">Thanks for reading</p>
  </footer>
)
```
</action>
  <verify>grep -l "BlogLayout\|BlogPostHeader\|BlogPostFooter" src/components/BlogLayout.js && echo "Component exists"</verify>
  <done>BlogLayout component exists with BlogLayout, BlogPostHeader, and BlogPostFooter exports</done>
</task>

<task type="auto">
  <name>Task 2: Create blog listing page at /blog</name>
  <files>src/pages/blog/index.js</files>
  <action>
Create src/pages/blog/index.js - the blog listing page at /blog:

**Page structure:**
1. Import getAllPosts from @/lib/mdx
2. Import Link from next/link
3. Import BlogLayout, BlogPostHeader, BlogPostFooter from @/components/BlogLayout

**Default export (BlogIndex):**
- Wrap entire page in BlogLayout
- Add page title "Blog" as h1 (text-3xl font-bold mb-8)
- Map over posts array to render each post card
- Each card: Link to /blog/${post.slug}
- Card shows: title (text-2xl font-semibold mb-2), date and description below
- Card styled with border, rounded-lg, p-4, hover:shadow-lg transition
- Dark mode: dark:border-gray-700, dark:bg-gray-800/50

**getStaticProps:**
- Call getAllPosts() to get all posts
- Sort posts by date descending (newest first)
- Return { props: { posts } }

**Post card styling example:**
```jsx
<Link href={`/blog/${post.slug}`} className="block">
  <article className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 
                     hover:shadow-lg transition-shadow dark:bg-gray-800/50">
    <h2 className="text-2xl font-semibold mb-2 dark:text-light">{post.meta.title}</h2>
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      {post.meta.date} — {post.meta.description}
    </p>
  </article>
</Link>
```

**Page header (before list):**
- h1 "Blog" (text-3xl font-bold mb-8)
- Optional: brief intro text "Thoughts on software, engineering, and building things."
</action>
  <verify>grep -q "getAllPosts\|posts.map" src/pages/blog/index.js && echo "Blog listing page imports and renders posts"</verify>
  <done>Blog listing page exists at /blog showing all posts sorted by date with title, date, and description</done>
</task>

<task type="auto">
  <name>Task 3: Update blog post page to use BlogLayout</name>
  <files>src/pages/blog/[slug].js</files>
  <action>
Update src/pages/blog/[slug].js to use the new BlogLayout component:

1. Add import for BlogLayout, BlogPostHeader, BlogPostFooter:
   ```javascript
   import { BlogLayout, BlogPostHeader, BlogPostFooter } from '@/components/BlogLayout';
   ```

2. Replace existing inline structure with:
   ```jsx
   <BlogLayout>
     <BlogPostHeader meta={meta} />
     <div className="prose dark:prose-invert max-w-none">
       <MDXRemote {...source} components={components} />
     </div>
     <BlogPostFooter />
   </BlogLayout>
   ```

3. Remove the old inline JSX (the max-w-3xl div, back link, article header with h1, etc.)

4. Keep existing: MDXRemote import, components object, getStaticPaths, getStaticProps
</action>
  <verify>grep -c "BlogLayout\|BlogPostHeader\|BlogPostFooter" src/pages/blog/[slug].js && echo "Uses BlogLayout components"</verify>
  <done>Blog post page at /blog/[slug] uses BlogLayout with consistent header/footer styling</done>
</task>

</tasks>

<verification>
1. Run `npm run build` to verify no build errors
2. Check /blog renders listing page (build output confirms page generation)
3. Check /blog/hello-world still renders correctly (uses updated BlogLayout)
</verification>

<success_criteria>
- [ ] Blog listing page exists at /blog
- [ ] Listing shows all posts with title, date, description
- [ ] Posts sorted by date (newest first)
- [ ] Clicking a post navigates to /blog/[slug]
- [ ] Blog post page uses BlogLayout component
- [ ] Dark mode works on both pages
- [ ] Build succeeds with no errors
</success_criteria>

<output>
After completion, create .planning/phases/02-blog-infrastructure/02-blog-infrastructure-SUMMARY.md
</output>