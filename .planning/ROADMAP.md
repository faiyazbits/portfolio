# Blog Roadmap

## Project
Portfolio Blog - MDX-based interactive blogging

## Phases

- [ ] **Phase 1: MDX Pipeline Setup** - Install dependencies and configure next-mdx-remote for SSG/SSR
- [ ] **Phase 2: Blog Infrastructure** - Create blog post layout component and blog listing page
- [ ] **Phase 3: Blog Capabilities** - Support interactive React components in MDX and create sample post

---

## Phase Details

### Phase 1: MDX Pipeline Setup

**Goal:** MDX blog posts can be compiled and rendered

**Depends on:** Nothing (first phase)

**Requirements:** REQ-01

**Success Criteria** (what must be TRUE):
1. User can view an MDX file rendered as HTML in the browser
2. next-mdx-remote processes MDX content without build errors
3. Basic markdown elements (headings, paragraphs, lists, links, images) render with styling

**Plans:** 1 plan

Plans:
- [ ] 01-mdx-pipeline-PLAN.md — Install MDX dependencies, configure next.config.js, create blog post page

---

### Phase 2: Blog Infrastructure

**Goal:** Blog posts display with consistent layout and listing page exists

**Depends on:** Phase 1

**Requirements:** REQ-02, REQ-05

**Success Criteria** (what must be TRUE):
1. User can navigate to `/blog` and see a list of available posts
2. Blog listing shows post title, date, and description metadata for each post
3. Individual blog posts render with consistent header, footer, and content styling
4. Navigation from blog listing to individual post works correctly

**Plans:** TBD

---

### Phase 3: Blog Capabilities

**Goal:** Blog supports interactive React components with a demonstration post

**Depends on:** Phase 2

**Requirements:** REQ-03, REQ-04

**Success Criteria** (what must be TRUE):
1. User can embed interactive React components within MDX posts
2. Interactive components render and function correctly within blog posts
3. Sample blog post demonstrates text, images, and embedded interactive components
4. Sample blog post is accessible via the blog listing page

**Plans:** TBD

---

## Traceability

| Phase | Requirements | Status |
|-------|--------------|--------|
| 1. MDX Pipeline Setup | REQ-01 | Pending |
| 2. Blog Infrastructure | REQ-02, REQ-05 | Pending |
| 3. Blog Capabilities | REQ-03, REQ-04 | Pending |

**Coverage:** 5/5 requirements mapped ✓

---

*Last updated: 2026-04-26*
