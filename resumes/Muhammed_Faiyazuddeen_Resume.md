# Muhammed Faiyazuddeen

**Kochi, India** | m.faiyazuddeen@gmail.com | +91 9497284609
[linkedin.com/in/muhammed-faiyazuddeen-075237105](https://www.linkedin.com/in/muhammed-faiyazuddeen-075237105/) | [github.com/faiyazbits](https://github.com/faiyazbits)

---

## Professional Summary

Full-stack software engineer and solution architect with 10+ years of experience delivering high-performance, scalable applications across government, healthcare, fintech, and public transit sectors. Proven track record of diagnosing and resolving deep performance bottlenecks — consistently achieving 40–90% improvements in speed, reliability, and throughput. AWS Certified Solutions Architect with hands-on expertise across JavaScript/TypeScript, React, Angular, Kotlin, Node.js, and modern AI/ML tooling. Currently building Upskillabs to train the next generation of AI-native developers.

---

## Skills

**Frontend:** React, Next.js, Angular, Ember.js, AngularJS, Svelte, TypeScript, JavaScript (ES2023+), Framer Motion, RxJS, Redux, Tailwind CSS
**Backend:** Node.js, Express.js, Kotlin, Spring Boot, Java, Python
**Databases:** MongoDB, PostgreSQL, MySQL, Firebase, Elasticsearch
**Cloud & Infrastructure:** AWS (Certified), Kafka, Docker, WebSockets, Service Workers, PWA, IndexedDB
**AI / ML:** LangChain.js, Vercel AI SDK, OpenAI Embeddings, ChromaDB, RAG Pipelines, DeepSeek LLM
**Architecture:** System Design, API Design, Microservices, Event-Driven Architecture
**Testing & Tools:** Cypress, Jest, Sequelize, Leaflet, ChartIQ, SurveyJS, Monaco Editor

---

## Professional Experience

### Founder
**Upskillabs** | Kochi, India | 2025 – Present

- Founded Upskillabs to train a new generation of AI-native developers, leading product vision, curriculum design, and organizational growth from inception.
- Designed and launched a virtualized React data grid embedded inside an Ember.js paratransit dispatch platform, eliminating 3–5s UI freezes under 10,000-record load and improving render throughput by 120%.
- Built DocuTalk, a production-ready AI document intelligence platform using LangChain.js, ChromaDB, and DeepSeek — achieving 14× cost reduction vs GPT-4 while maintaining response quality.

### Solution Architect
**Provility** | Chennai, India | Jan 2024 – 2025

- Architected a Service Worker–based offline interceptor for a US compliance audit platform operating in air-gapped government environments — persisting all outbound requests to IndexedDB for ordered replay on reconnect with zero lines of existing API code changed and 100% session continuity.
- Rebuilt the SurveyJS expression evaluation engine for a 3,500-question compliance form: batched answer mutations, deferred re-evaluation via async microtask queue, and cached expression results — reducing form load time from 14s to 4s (71% reduction).
- Led migration of 50+ legacy data grid components to modern React with Syncfusion, improving rendering performance, accessibility, and long-term maintainability across the platform.
- Implemented real-time WebSocket-based conflict detection for concurrent multi-user audit editing, surfacing live notifications when multiple users attempt to modify the same record simultaneously.
- Delivered full PWA capabilities including service-worker response caching, persistent offline state, and automatic action syncing on reconnect across a high-security compliance platform.

### Technical Lead
**Provility** | Chennai, India | Apr 2019 – Jan 2024

- Led technical delivery across 8+ international client engagements spanning government, public transit, healthcare, algorithmic trading, and fintech sectors.
- Replaced a nested jQuery recursive tree structure with a flat linked list (explicit parent/sibling pointers), reducing drag-and-drop node response from ~6s to <1s (>85% reduction) in a Canadian government e-form builder.
- Engineered reactive Kotlin coroutine API endpoints and a Java in-memory GTFS cache layer for a public transit Account Based Ticketing platform (Denmark), enabling sub-millisecond route/schedule lookups at scale and eliminating thread-blocking bottlenecks under high load.
- Reduced patient GDS dataset upload time from 300 minutes to 30 minutes (90% reduction) by replacing single-request Firebase uploads with a Node.js streaming pipeline featuring chunk-level exponential backoff and a dead-letter queue for targeted retry.
- Built a keyed diff layer for Leaflet map rendering (European public transit provider), comparing incoming route data against live map state and issuing only minimal create/update/delete operations — improving render speed by 40% and eliminating visual flicker.
- Integrated the ChartIQ professional charting library into an Angular algorithmic trading platform; eliminated browser memory crashes on 10-year backtesting data by replacing bulk fetches with a debounced 5-chunk progressive rendering pipeline.
- Engineered a custom JavaScript execution engine for a browser-based math worksheet platform (SagaMath), offloading IntelliSense autocompletion to a Service Worker for zero main-thread blocking during heavy suggestion workloads.
- Architected the full data model for a paratransit booking service using Sequelize ORM over PostgreSQL, and built a suite of JSON:API-compliant REST endpoints for third-party transit system integration (AdeptIQ).
- Implemented configurable exponential backoff for Kafka consumer failure detection with automated Slack alerting via Datadog for real-time event-stream health visibility.

### Senior Engineer
**Provility** | Chennai, India | Jun 2016 – Apr 2019

- Engineered a full online exam engine from scratch for WTIA's welder qualification certification platform (WeldQ) — supporting timed exams with question banks, randomization, auto-grading, and a drag-and-drop Certificate Designer.
- Integrated the Twilio Programmable Voice API to build a fully in-browser softphone for a US health insurance CRM, enabling agents to place and receive calls without hardware, synchronized with Redux-driven live call state.
- Built a no-code drag-and-drop data visualization platform (BigZeta) with a filter designer for composing complex dataset conditions and an SVG chart embed/export system for platform-agnostic sharing.
- Developed a government e-application form builder (Eform) with a service designer for modelling registration workflows as reusable process blueprints (marriage, driving licences, birth registration), enabling non-engineer administrators to publish regulatory forms.
- Designed an interactive editable data grid for a brokerage CRM supporting inline cell editing, column sorting, and real-time validation without leaving the table view.

### Junior Engineer
**Provility** | Chennai, India | Sep 2014 – Jun 2016

- Built the Weld Annotation Editor for WeldTrace — a cloud-based welding job management platform — enabling engineers to mark up P&ID drawings with precise weld symbols and positional metadata.
- Designed and implemented the core data model for weld joints, WPS/PQR documents, welder qualifications, and job traceability for a multi-role collaboration platform serving contractors, project managers, inspectors, and welders.
- Contributed to multi-role access architecture and foundational MEAN stack application scaffolding.

---

## Selected Projects

### DocuTalk — AI Document Intelligence Chatbot *(2025–2026)*
*Next.js, TypeScript, LangChain.js, Vercel AI SDK, ChromaDB, OpenAI Embeddings, DeepSeek LLM, Express.js*

- Built a full RAG pipeline converting uploaded PDFs into a queryable knowledge base with context-aware answers.
- Implemented token-by-token streaming responses via Vercel AI SDK and a custom backend for a live-conversation feel.
- Extended AI with a tool-calling layer for active knowledge base inspection and on-demand topic summarization.
- Achieved ~14× cost reduction vs GPT-4 by integrating DeepSeek with a swappable LangChain model layer.
- [github.com/faiyazbits/docutalk](https://github.com/faiyazbits/docutalk)

### Nexum — Account Based Ticketing Platform *(2023)*
*Kotlin, Spring Boot, MySQL, Angular, Kafka, Cypress*

Enterprise ABT platform for public transit agencies across multiple transport networks. Delivered Kotlin coroutine APIs, GTFS cache layer with sub-millisecond lookups, and Kafka consumer resilience with automated alerting.

### AdeptIQ — Paratransit Dispatch Engine *(2021)*
*Ember.js, Node.js, PostgreSQL, WebSockets, Leaflet, Sequelize*

Cloud platform for ADA-compliant paratransit operations. Embedded a virtualized React data grid within Ember.js (120% render improvement), added real-time WebSocket driver tracking, and designed the full booking service data model with JSON:API REST endpoints.

### Averq — Unified Compliance & Audit Platform *(2023–2024)*
*React, Node.js, Elasticsearch, SurveyJS, PWA*

Enterprise compliance, risk, and audit management platform with full offline PWA support, real-time conflict detection, deep document bookmark navigation, and a rebuilt expression engine for complex conditional audit forms.

---

## Education

**Bachelor of Technology** | Cochin University of Science and Technology (CUSAT) | 2010 – 2014
Relevant coursework: Data Structures and Algorithms, Electrical Engineering

---

## Certifications

**AWS Certified Solutions Architect – Associate** | Amazon Web Services | 2024
Validates expertise in designing distributed systems on AWS including compute, storage, networking, and security best practices.
