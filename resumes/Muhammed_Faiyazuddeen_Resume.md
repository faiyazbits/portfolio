# Muhammed Faiyazuddeen

**Kochi, India** | m.faiyazuddeen@gmail.com | +91 9497284609
[linkedin.com/in/muhammed-faiyazuddeen-075237105](https://www.linkedin.com/in/muhammed-faiyazuddeen-075237105/) | [github.com/faiyazbits](https://github.com/faiyazbits)

---

## Professional Summary

Full-stack software engineer and solution architect with 10+ years of experience delivering high-performance, scalable applications across government, healthcare, fintech, and public transit sectors. Proven track record of diagnosing and resolving deep performance bottlenecks — consistently achieving 40–90% improvements in speed, reliability, and throughput. AWS Certified Solutions Architect with hands-on expertise across JavaScript/TypeScript, React, Angular, Kotlin, Node.js, and modern AI/ML tooling. 5+ years of fully remote delivery across distributed international teams in the US, Canada, Denmark, and Australia — experienced in async collaboration, cross-timezone communication, and independent ownership across the full software lifecycle. Currently building Upskillabs to train the next generation of AI-native developers.

---

## Skills

**Frontend:** React, Next.js, Angular, Ember.js, AngularJS, Svelte, TypeScript, JavaScript (ES2023+), Framer Motion, RxJS, Redux, Tailwind CSS
**Backend:** Node.js, Express.js, Kotlin, Spring Boot, Java, Python
**Databases:** MongoDB, PostgreSQL, MySQL, Firebase, Elasticsearch
**Cloud & Infrastructure:** AWS (Certified), Kafka, Docker, WebSockets, Service Workers, PWA, IndexedDB
**AI / ML:** LangChain.js, Vercel AI SDK, OpenAI Embeddings, ChromaDB, RAG Pipelines, DeepSeek LLM
**Architecture:** System Design, API Design, Microservices, Event-Driven Architecture
**Testing & Tools:** Cypress, Jest, Sequelize, Leaflet, ChartIQ, SurveyJS, Monaco Editor
**Collaboration & Project Tools:** Jira, Trello, Confluence, Remote Team Collaboration, Async Communication

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

### DocuTalk — AI Document Intelligence Chatbot *(Dec 2025 – Feb 2026)*
*Next.js, TypeScript, LangChain.js, Vercel AI SDK, ChromaDB, OpenAI Embeddings, DeepSeek LLM, Express.js, RAG, Vector Database, LLM Orchestration*

- Built a full RAG pipeline with vector database (ChromaDB) converting uploaded PDFs into a queryable knowledge base with semantically context-aware answers.
- Implemented token-by-token streaming responses via Vercel AI SDK and a custom Express backend for a live-conversation feel.
- Extended LLM orchestration with a tool-calling layer for active knowledge base inspection and on-demand topic summarization.
- Achieved ~14× cost reduction vs GPT-4 by integrating DeepSeek with a swappable LangChain model abstraction layer.
- [github.com/faiyazbits/docutalk](https://github.com/faiyazbits/docutalk)

### Averq — Unified Compliance & Audit Platform *(Nov 2023 – Jan 2024)*
*React, Node.js, Elasticsearch, SurveyJS, PWA, Service Workers, IndexedDB, WebSockets*

- Rebuilt SurveyJS expression evaluation engine for a 3,500-question compliance form using batched answer mutations, async microtask queue deferral, and expression result caching — reducing form load from 14s to 4s (71% reduction).
- Architected a Service Worker–based offline interceptor persisting all outbound requests to IndexedDB for ordered replay on reconnect, achieving 100% session continuity in air-gapped government environments.
- Implemented real-time WebSocket conflict detection surfacing live notifications when concurrent users attempt to modify the same audit record simultaneously.

### Nexum — Account Based Ticketing Platform *(Feb 2023 – Apr 2023)*
*Kotlin, Spring Boot, MySQL, Angular, Kafka, Cypress*

- Delivered Kotlin coroutine APIs with a Java in-memory GTFS cache layer enabling sub-millisecond route/schedule lookups and eliminating thread-blocking bottlenecks under high transit network load.
- Implemented configurable exponential backoff for Kafka consumer failure detection with automated Slack alerting via Datadog for real-time event-stream health visibility.
- Authored Cypress E2E test suites covering critical transit booking and account management flows across multiple transport networks.

### Interactive Travel Planner *(Apr 2022 – Jun 2022)*
*Angular, TypeScript, Leaflet, RxJS, Cypress, SCSS*

- Engineered a keyed diff strategy for Leaflet map layer updates issuing only minimal create/update/delete DOM operations — improving route render speed by 40% and eliminating visual flicker across a high-traffic public transit search interface.
- Built RxJS reactive data pipelines for geospatial queries with client-side caching, reducing redundant network calls.
- Authored comprehensive Cypress E2E test suite covering critical map interactions for a European public transit provider.

### AdeptIQ — Paratransit Dispatch Engine *(Jul 2021 – Sep 2021)*
*Ember.js, Node.js, PostgreSQL, WebSockets, Leaflet, Sequelize, React*

- Embedded a virtualized React data grid within an Ember.js paratransit dispatch platform, eliminating 3–5s UI freezes under 10,000-record load and improving render throughput by 120%.
- Designed the full relational data model for a paratransit booking service using Sequelize ORM over PostgreSQL with JSON:API-compliant REST endpoints for third-party transit system integration.
- Implemented real-time WebSocket driver location tracking for live dispatch visibility.

### SagaMath — Interactive Math Worksheet Platform *(Oct 2020 – Dec 2020)*
*Monaco Editor, JavaScript, Service Workers, KaTeX*

- Offloaded Monaco Editor IntelliSense autocompletion to a Service Worker thread, achieving zero main-thread blocking during heavy suggestion workloads.
- Engineered a sandboxed JavaScript execution engine for safe client-side evaluation of student math programs entirely in the browser.
- Built a live worksheet authoring system combining executable code blocks, rendered KaTeX math expressions, and interactive inputs.

### Tradeworks — Algorithmic Trading Automation Platform *(Jan 2020 – Mar 2020)*
*Angular, RxJS, ChartIQ, Canvas API, TypeScript*

- Eliminated browser memory crashes on 10-year backtesting datasets by replacing bulk data fetches with a debounced 5-chunk progressive rendering pipeline using ChartIQ's professional charting API.
- Developed reactive RxJS pipelines for live forex market data streaming with back-pressure management.
- Built trade entry/exit point visualization using the Canvas API overlaid on ChartIQ chart instances.

### Eform — Government E-Application Platform *(Mar 2019 – May 2019)*
*AngularJS, jQuery UI*

- Replaced a deeply-nested jQuery recursive tree with a flat linked-list structure (explicit parent/sibling pointers), cutting drag-and-drop node response from ~6s to under 1s — an 85%+ reduction in a Canadian government e-form builder.
- Built a no-code service designer enabling non-engineer government administrators to model and publish registration workflows (marriage, driving licences, birth registration) as reusable process blueprints.

### Choice Health Brokers — Internal CRM Platform *(May 2018 – Jul 2018)*
*React, Redux, Twilio Programmable Voice API*

- Integrated Twilio Programmable Voice API to deliver a fully in-browser softphone, enabling agents to place and receive calls without hardware and eliminating the need for external telephony clients.
- Architected Redux-driven real-time call state synchronization, keeping UI and live call events in lockstep across all agent sessions.
- Designed an interactive inline-editable data grid for broker/agent record management with real-time validation.

### BigZeta — Declarative Data Visualization Platform *(Aug 2017 – Oct 2017)*
*React, Redux, SVG*

- Built a no-code drag-and-drop filter designer for composing complex multi-condition dataset queries, enabling analysts to explore data without SQL.
- Engineered an SVG chart embed and export system for platform-agnostic sharing of interactive visualizations.
- Developed a reusable library of React components wrapping SVG primitives for consistent, declarative chart authoring.

### WeldQ — Welder Qualification Certification Platform *(Nov 2016 – Jan 2017)*
*MongoDB, Express.js, AngularJS, Node.js (MEAN Stack)*

- Engineered a full online exam engine from scratch for WTIA supporting timed certification exams with question bank randomization, auto-grading, and a drag-and-drop Certificate Designer.
- Built an Exam Schedule Editor and Result Dashboard with real-time performance metrics for managing certification sessions at scale.
- Designed a document verification and management module for regulatory standards compliance.

### WeldTrace — Smart Welding Job Management Platform *(Feb 2016 – Apr 2016)*
*AngularJS, jQuery, MongoDB, Node.js*

- Built the Weld Annotation Editor enabling engineers to mark up P&ID drawings with precise weld symbols and positional metadata in the browser.
- Designed and implemented the core relational data model for weld joints, WPS/PQR documents, welder qualifications, and job traceability supporting a multi-role collaboration platform (contractors, inspectors, project managers, welders).

---

## Education

**Bachelor of Technology** | Cochin University of Science and Technology (CUSAT) | 2010 – 2014
Relevant coursework: Data Structures and Algorithms, Electrical Engineering

---

## Certifications

**AWS Certified Solutions Architect – Associate** | Amazon Web Services | 2024
Validates expertise in designing distributed systems on AWS including compute, storage, networking, and security best practices.
