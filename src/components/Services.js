import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "End-to-End Application Development",
    description:
      "I help founders and product teams launch production-ready web applications in weeks — without the chaos of coordinating separate frontend, backend, and DevOps contractors.",
    cta: "Start Your Build",
    href: "mailto:m.faiyazuddeen@gmail.com?subject=End-to-End Development Enquiry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    title: "Performance Auditing & Optimization",
    description:
      "I help engineering teams fix sluggish apps and recover lost conversions fast — without guesswork — by pinpointing the exact bottlenecks killing your Core Web Vitals.",
    cta: "Get a Performance Audit",
    href: "mailto:m.faiyazuddeen@gmail.com?subject=Performance Audit Enquiry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
        <line x1="12" y1="2" x2="12" y2="4" />
      </svg>
    ),
  },
  /*{
    title: "AI Automation in Business Workflows",
    description:
      "I help businesses reduce manual work and scale operations — by integrating AI into their existing workflows — without disrupting the processes their teams already rely on.",
    cta: "Automate My Workflow",
    href: "mailto:m.faiyazuddeen@gmail.com?subject=AI Workflow Automation Enquiry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h2a2 2 0 0 1 2 2v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v-1a2 2 0 0 1 2-2h2V9.5A4 4 0 0 1 8 6a4 4 0 0 1 4-4z" />
        <circle cx="9" cy="15" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="15" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },*/
  {
    title: "AI-Assisted Engineering Training",
    description:
      "I help dev teams ship significantly more in the same sprint — without falling into hallucination traps or accumulating AI-generated technical debt.",
    cta: "Train My Team",
    href: "mailto:m.faiyazuddeen@gmail.com?subject=AI Engineering Training Enquiry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
      </svg>
    ),
  },
  /*{
    title: "Web Technologies Training",
    description:
      "I help developers and teams go from confused to confident in modern web tech — through hands-on workshops — without sitting through bloated courses that never reach production.",
    cta: "Book a Workshop",
    href: "mailto:m.faiyazuddeen@gmail.com?subject=Web Technologies Training Enquiry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "AWS Solution Architecture Consulting",
    description:
      "I help startups and scale-ups design cloud infrastructure that stays cost-efficient as they grow — without over-engineering or waking up to a surprise AWS bill.",
    cta: "Review My Architecture",
    href: "mailto:m.faiyazuddeen@gmail.com?subject=AWS Architecture Consulting Enquiry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: "Vibe-Coded App to Production",
    description:
      "I help non-technical founders take their Cursor-, Lovable-, or Bolt-built prototype to a stable, maintainable product — without starting from scratch or hiring a full team.",
    cta: "Let's Make It Real",
    href: "mailto:m.faiyazuddeen@gmail.com?subject=Vibe to Production Consultation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2L8.09 8.26 2 9.27l5 4.87-1.18 6.88L12 17.77l6.18 3.25L17 14.14l5-4.87-6.09-1.01z" />
        <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83" />
      </svg>
    ),
  },*/
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { y: 40 },
  visible: { y: 0, transition: { duration: 0.5, type: "spring" } },
};

const ServiceCard = ({ title, description, cta, href, icon }) => (
  <motion.div variants={cardVariants} className="relative group">
    <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[1.5rem] bg-dark dark:bg-light" />
    <div className="relative flex flex-col h-full rounded-2xl border-2 border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark">
      <div className="mb-4 w-10 h-10 text-primary dark:text-primaryDark">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-3 lg:text-lg">{title}</h3>
      <p className="font-medium text-sm text-dark/80 dark:text-light/80 flex-1 mb-6">
        {description}
      </p>
      <Link
        href={href}
        className="mt-auto self-start text-sm font-semibold capitalize border-b-2 border-primary dark:border-primaryDark text-primary dark:text-primaryDark hover:tracking-wide transition-all duration-300"
      >
        {cta} →
      </Link>
    </div>
  </motion.div>
);

const Services = () => (
  <section className="w-full bg-light dark:bg-dark text-dark dark:text-light p-0">
    <Layout className="!pt-0">
      <h2 className="font-bold text-8xl mb-4 w-full text-center md:text-6xl xs:text-4xl">
        What I Do
      </h2>
      <p className="text-center text-dark/75 dark:text-light/75 mb-20 text-lg md:text-base md:mb-12">
        A decade of experience, three ways to put it to work for you.
      </p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1"
      >
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </motion.div>
    </Layout>
  </section>
);

export default Services;
