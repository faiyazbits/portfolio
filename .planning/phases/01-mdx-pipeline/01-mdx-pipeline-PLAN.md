---
phase: 01-mdx-pipeline
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - package.json
  - next.config.js
  - src/pages/blog/[slug].js
  - src/lib/mdx.js
  - content/posts/hello-world.mdx
autonomous: true
requirements:
  - REQ-01
must_haves:
  truths:
    - "User can view an MDX file rendered as HTML in the browser"
    - "next-mdx-remote processes MDX content without build errors"
    - "Basic markdown elements (headings, paragraphs, lists, links, images) render with styling"
  artifacts:
    - path: "next.config.js"
      provides: "MDX configuration for Next.js"
      contains: "@mdx-js/react"
    - path: "src/lib/mdx.js"
      provides: "MDX processing utility functions"
      exports: "getPostBySlug, getAllPosts"
    - path: "src/pages/blog/[slug].js"
      provides: "Dynamic blog post page that renders MDX"
      exports: "getStaticProps, getStaticPaths"
    - path: "content/posts/hello-world.mdx"
      provides: "Sample MDX post for testing"
      contains: "frontmatter, headings, paragraphs"
  key_links:
    - from: "src/pages/blog/[slug].js"
      to: "src/lib/mdx.js"
      via: "import getPostBySlug"
      pattern: "import.*getPostBySlug"
    - from: "src/lib/mdx.js"
      to: "content/posts/*.mdx"
      via: "fs.readFileSync"
      pattern: "fs.*\\.mdx"
---

<objective>
Setup MDX pipeline with next-mdx-remote so blog posts can be compiled and rendered.

Purpose: Enable MDX blog posts to be processed by Next.js and displayed with proper styling
Output: Working MDX pipeline with sample post rendering
</objective>

<execution_context>
@/Users/faiyaz/.config/opencode/get-shit-done/workflows/execute-plan.md
</execution_context>

<context>
@next.config.js
@src/pages/_app.js
@package.json

## Key Constraints from Context
- Pages Router (NOT App Router)
- Use next-mdx-remote per user decision
- Tailwind CSS already configured
- Dark mode theme already in place

## Dependencies Needed
- next-mdx-remote: MDX compiler for Next.js
- gray-matter: Frontmatter parsing
- @mdx-js/react: MDX React components
</context>

<tasks>

<task type="auto">
  <name>Task 1: Install MDX dependencies</name>
  <files>package.json</files>
  <action>
    Install the following packages via npm:
    - next-mdx-remote@4 (^4.4.1) - MDX compiler for Next.js
    - gray-matter@4 (^4.0.3) - Frontmatter parsing
    
    Run: npm install next-mdx-remote gray-matter
    
    Verify installation by checking package.json dependencies section.
  </action>
  <verify>
    <automated>grep -q "next-mdx-remote" package.json && grep -q "gray-matter" package.json && echo "Dependencies installed"</automated>
  </verify>
  <done>next-mdx-remote and gray-matter appear in package.json dependencies</done>
</task>

<task type="auto">
  <name>Task 2: Configure next.config.js for MDX</name>
  <files>next.config.js</files>
  <action>
    Update next.config.js to configure MDX support:

    ```javascript
    const withMDX = require('@next/mdx')({
      extension: /\.mdx?$/,
      options: {
        remarkPlugins: [],
        rehypePlugins: [],
        providerImportSource: '@mdx-js/react',
      },
    });

    /** @type {import('next').NextConfig} */
    const nextConfig = {
      reactStrictMode: true,
      pageExtensions: ['js', 'jsx', 'mdx'],
    };

    module.exports = withMDX(nextConfig);
    ```

    Note: The @next/mdx package is bundled with Next.js 13, no additional install needed.
  </action>
  <verify>
    <automated>grep -q "@next/mdx" next.config.js && echo "MDX config present"</automated>
  </verify>
  <done>next.config.js includes MDX configuration with @next/mdx</done>
</task>

<task type="auto">
  <name>Task 3: Create MDX processing utility</name>
  <files>src/lib/mdx.js</files>
  <action>
    Create src/lib/mdx.js with utility functions for loading and processing MDX posts:

    ```javascript
    import fs from 'fs';
    import path from 'path';
    import matter from 'gray-matter';
    import { serialize } from 'next-mdx-remote/serialize';

    const postsDirectory = path.join(process.cwd(), 'content/posts');

    export function getPostBySlug(slug) {
      const realSlug = slug.replace(/\.mdx$/, '');
      const filePath = path.join(postsDirectory, `${realSlug}.mdx`);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      return { slug: realSlug, meta: data, content };
    }

    export function getAllPosts() {
      const files = fs.readdirSync(postsDirectory);
      const posts = files
        .filter(filename => filename.endsWith('.mdx'))
        .map(filename => {
          const { meta } = getPostBySlug(filename);
          return { slug: filename.replace(/\.mdx$/, ''), meta };
        });
      return posts;
    }

    export async function serializeMDX(content) {
      return await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      });
    }
    ```

    Create the content/posts directory if it doesn't exist.
  </action>
  <verify>
    <automated>ls src/lib/mdx.js && node -e "require('./src/lib/mdx.js')" 2>&1 | head -5</automated>
  </verify>
  <done>src/lib/mdx.js exists with getPostBySlug, getAllPosts, and serializeMDX exports</done>
</task>

<task type="auto">
  <name>Task 4: Create sample MDX blog post</name>
  <files>content/posts/hello-world.mdx</files>
  <action>
    Create content/posts directory and hello-world.mdx with frontmatter and sample content:

    ```mdx
    ---
    title: "Hello World"
    date: "2026-04-26"
    description: "My first MDX blog post"
    ---

    # Welcome to My Blog

    This is a **bold** statement and this is *italic* text.

    ## Features

    - First list item
    - Second list item
    - Third list item

    ### Code Example

    ```javascript
    console.log('Hello from MDX!');
    ```

    ## Links and Images

    Check out [my portfolio](https://example.com) for more.

    > This is a blockquote for emphasis.

    That's all for now!
    ```

    Use proper MDX syntax with fenced code blocks, headings, lists, bold, italic, blockquotes, and links.
  </action>
  <verify>
    <automated>cat content/posts/hello-world.mdx | head -20</automated>
  </verify>
  <done>content/posts/hello-world.mdx exists with valid frontmatter and MDX content</done>
</task>

<task type="auto">
  <name>Task 5: Create dynamic blog post page</name>
  <files>src/pages/blog/[slug].js</files>
  <action>
    Create src/pages/blog/[slug].js - a dynamic page that renders MDX posts:

    ```jsx
    import { getPostBySlug, getAllPosts, serializeMDX } from '@/lib/mdx';
    import { MDXRemote } from 'next-mdx-remote';
    import Link from 'next/link';

    const components = {
      h1: props => <h1 className="text-3xl font-bold mb-4" {...props} />,
      h2: props => <h2 className="text-2xl font-semibold mb-3" {...props} />,
      h3: props => <h3 className="text-xl font-medium mb-2" {...props} />,
      p: props => <p className="mb-4 leading-relaxed" {...props} />,
      ul: props => <ul className="list-disc list-inside mb-4 space-y-1" {...props} />,
      ol: props => <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />,
      li: props => <li {...props} />,
      a: props => <a className="text-primary hover:underline" {...props} />,
      blockquote: props => <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />,
      code: props => <code className="bg-gray-200 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm" {...props} />,
      pre: props => <pre className="bg-gray-200 dark:bg-gray-800 rounded p-4 mb-4 overflow-x-auto" {...props} />,
    };

    export default function BlogPost({ source, meta }) {
      return (
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Link href="/blog" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <article>
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {meta.date} • {meta.description}
              </p>
            </header>
            <div className="prose dark:prose-invert max-w-none">
              <MDXRemote {...source} components={components} />
            </div>
          </article>
        </div>
      );
    }

    export async function getStaticPaths() {
      const posts = getAllPosts();
      return {
        paths: posts.map(post => ({ params: { slug: post.slug } })),
        fallback: false,
      };
    }

    export async function getStaticProps({ params }) {
      const { slug, meta, content } = getPostBySlug(params.slug);
      const source = await serializeMDX(content);
      return {
        props: {
          source,
          meta,
          slug,
        },
      };
    }
    ```

    Note: Uses Tailwind prose classes. The `prose` and `prose-invert` classes require @tailwindcss/typography plugin. If not installed, use custom component styles defined in the components object.
  </action>
  <verify>
    <automated>cat src/pages/blog/[slug].js | head -30</automated>
  </verify>
  <done>src/pages/blog/[slug].js exists with getStaticProps and getStaticPaths for SSG</done>
</task>

</tasks>

<verification>
1. Run `npm run build` - should complete without MDX errors
2. Run `npm run dev` - server starts on localhost:3000
3. Visit http://localhost:3000/blog/hello-world - should render MDX content
4. Verify headings, lists, bold text, links, and code blocks render with styling
</verification>

<success_criteria>
- npm run build completes without errors
- /blog/hello-world page renders sample MDX content
- Headings (h1, h2, h3), paragraphs, lists, links, blockquotes, and code blocks display correctly
- Back navigation to /blog works
</success_criteria>

<output>
After completion, create `.planning/phases/01-mdx-pipeline/01-mdx-pipeline-SUMMARY.md`
</output>
