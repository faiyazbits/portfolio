import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const expertise = [
  {
    title: "RAG & Knowledge Systems",
    description:
      "Designing production RAG pipelines that reduce hallucinations and improve answer quality — from embedding strategies and chunking to retrieval optimization, re-ranking, and grounding.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    title: "Agentic Workflows & Orchestration",
    description:
      "Building agent architectures, tool-calling systems, and multi-step reasoning workflows that connect LLMs to real business operations — APIs, retrieval pipelines, and autonomous task execution.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    title: "Real-Time AI & Performance Engineering",
    description:
      "Engineering low-latency LLM streaming systems via SSE, optimising token throughput and caching, and building real-time AI experiences that perform under production load — not just benchmarks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Full-Stack AI Product Engineering",
    description:
      "End-to-end delivery of AI-powered products — scalable backend systems, well-designed APIs, and the frontend experiences that make AI genuinely usable. From architecture decisions to production deployment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { y: 40 },
  visible: { y: 0, transition: { duration: 0.5, type: "spring" } },
};

const ExpertiseCard = ({ title, description, icon }) => (
  <motion.div variants={cardVariants} className="relative group">
    <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[1.5rem] bg-dark dark:bg-light sm:-right-1.5 sm:h-[101.5%]" />
    <div className="relative flex flex-col h-full rounded-2xl border-2 border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark">
      <div className="mb-4 w-10 h-10 text-primary dark:text-primaryDark">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-3 lg:text-lg">{title}</h3>
      <p className="font-medium text-sm text-dark/80 dark:text-light/80">
        {description}
      </p>
    </div>
  </motion.div>
);

const CoreExpertise = () => (
  <section className="w-full bg-light dark:bg-dark text-dark dark:text-light p-0">
    <Layout className="!pt-0">
      <h2 className="font-bold text-8xl mb-4 w-full text-center md:text-6xl xs:text-4xl">
        Core Expertise
      </h2>
      <p className="text-center text-dark/75 dark:text-light/75 mb-20 text-lg md:text-base md:mb-12">
        10+ years of production engineering, applied to the full stack of AI product development.
      </p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-8 sm:grid-cols-1"
      >
        {expertise.map((e) => (
          <ExpertiseCard key={e.title} {...e} />
        ))}
      </motion.div>
    </Layout>
  </section>
);

export default CoreExpertise;
