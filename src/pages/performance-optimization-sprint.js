import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import LiIcon from "@/components/LiIcon";
import ConsultingLeadForm from "@/components/ConsultingLeadForm";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useThemeSwitch } from "@/components/Hooks/useThemeSwitch";
import impactData from "@/data/impact.json";

// ── Animation Variants ────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { y: 40 },
  visible: { y: 0, transition: { duration: 0.5, type: "spring" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" } },
};

// ── Animated Number (mirrors about.js pattern) ────────────────────────────

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.round(latest)
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

// ── Static Data ───────────────────────────────────────────────────────────

const painCards = [
  {
    title: "Slow APIs with no clear cause",
    description:
      "Your profiling tools show nothing obvious. Users keep complaining. Your team investigates and comes back with nothing actionable.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Infrastructure costs keep climbing",
    description:
      "The cloud bill grows every month but no single service is clearly responsible. You scale up, it helps briefly, then costs rise again.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Every debug session takes days",
    description:
      "The team digs in, finds a possible cause, ships a fix — and the slowness returns a week later. The real problem stays hidden.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    week: "Week 1",
    title: "Visibility",
    description:
      "We map where your system actually spends its time. You'll see your performance landscape clearly — most teams are surprised by where the time is actually going.",
    outcome: "You know where the slow is.",
  },
  {
    week: "Week 2",
    title: "Diagnosis",
    description:
      "We trace bottlenecks to their root cause — not the symptoms your monitoring surfaces, but the actual source your team has been unable to pinpoint.",
    outcome: "You know why it's slow.",
  },
  {
    week: "Week 3",
    title: "Strategy",
    description:
      "We rank the fixes by business impact and build a roadmap your team can act on immediately — quick wins first, structural changes second.",
    outcome: "You know what to fix first.",
  },
  {
    week: "Week 4",
    title: "Validation",
    description:
      "We review the priority fixes together and confirm the improvements with before/after measurements. You leave with proof, not promises.",
    outcome: "You have the numbers to show it worked.",
  },
];

const deliverables = [
  {
    title: "Performance Bottleneck Report",
    description:
      "A clear map of every identified bottleneck, ranked by business impact. No guesswork — just a prioritised list of what's costing you.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Root Cause Analysis",
    description:
      "A plain-language document explaining why each issue exists — written for your leadership team, not just your engineers.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Prioritised Optimisation Roadmap",
    description:
      "A ranked action list your team can start executing the day the sprint ends. Ordered by impact-to-effort ratio.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Metrics Baseline & Targets",
    description:
      "Before and after benchmarks so progress is objective and undeniable — to your team, your board, and your users.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Guided Fix Review Sessions",
    description:
      "Live or async reviews as your team implements the changes. I stay on hand so nothing gets lost in translation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

// ── Results — plain-language translations of impact.json ──────────────────

const resultsMap = {
  "survey-expression-engine-averq": {
    industry: "Compliance & Audit",
    metricValue: 71,
    metricSuffix: "%",
    metricLabel: "faster",
    problem:
      "Auditors waited 14 seconds just to open a form — before they'd entered a single answer. Every session started with frustration.",
    outcome:
      "Load time cut to 4 seconds. Auditors start work immediately, every time. The fix became the standard for every new form on the platform.",
  },
  "firebase-streaming-pipeline-healthcare": {
    industry: "Healthcare",
    metricValue: 90,
    metricSuffix: "%",
    metricLabel: "time saved",
    problem:
      "5-hour data uploads were failing midway through. The only recovery was starting from zero — meaning a failure at hour 4 cost the team an entire day.",
    outcome:
      "30-minute uploads. Failed steps retry automatically — no full restarts, no lost progress. The team stopped dreading upload day.",
  },
  "paratransit-ember-react-windowing": {
    industry: "Transport & Dispatch",
    metricValue: 120,
    metricSuffix: "%",
    metricLabel: "throughput gain",
    problem:
      "Dispatchers couldn't do their jobs during peak hours — the screen froze for 3–5 seconds on every click. Rides were being missed.",
    outcome:
      "Dashboard runs without interruption under full peak load. Operators dispatch confidently during the busiest windows of the day.",
  },
  "linked-list-tree-eform": {
    industry: "Government",
    metricValue: 85,
    metricSuffix: "%",
    metricLabel: "faster",
    problem:
      "Every drag-and-drop froze the screen for 6 seconds. Editors had stopped using the tool on large documents — they were working around it.",
    outcome:
      "Under 1 second. Editors work without interruption, even on the most complex government form templates in the system.",
  },
};

const highlightedResults = impactData
  .filter((item) => item.highlight)
  .slice(0, 4)
  .map((item) => ({ ...item, ...resultsMap[item.id] }))
  .filter((item) => item.industry);

// ── ProcessStep Component ─────────────────────────────────────────────────

function ProcessStep({ week, title, description, outcome, reference }) {
  return (
    <li
      ref={reference}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%] sm:w-full"
    >
      <LiIcon reference={reference} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary dark:text-primaryDark mb-1 block">
          {week}
        </span>
        <h3 className="font-bold text-2xl sm:text-xl xs:text-lg mb-2">{title}</h3>
        <p className="font-medium text-dark/70 dark:text-light/70 mb-3 md:text-sm leading-relaxed">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-dark/50 dark:text-light/50">
          <svg
            className="w-4 h-4 text-primary dark:text-primaryDark flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {outcome}
        </span>
      </motion.div>
    </li>
  );
}

// ── Main Page Component ───────────────────────────────────────────────────

export default function Consulting() {
  const router = useRouter();
  const [mode] = useThemeSwitch();
  const [utmParams, setUtmParams] = useState({});
  const [mounted, setMounted] = useState(false);

  // Refs for timeline steps — must be declared at top level, not in loops
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const stepRefs = [step1Ref, step2Ref, step3Ref, step4Ref];

  const beliefRef = useRef(null);
  const beliefInView = useInView(beliefRef, { once: true });

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "center start"],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const { utm_source, utm_medium, utm_campaign } = router.query;
    if (utm_source || utm_medium || utm_campaign) {
      const params = {
        utmSource: utm_source,
        utmMedium: utm_medium,
        utmCampaign: utm_campaign,
      };
      setUtmParams(params);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("consulting_utm", JSON.stringify(params));
      }
    } else if (typeof window !== "undefined") {
      try {
        const stored = sessionStorage.getItem("consulting_utm");
        if (stored) setUtmParams(JSON.parse(stored));
      } catch (_e) {
        // ignore sessionStorage parse errors
      }
    }
  }, [router.query]);

  const baseCalendly =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/placeholder/30min";
  const calendlyUrl = `${baseCalendly}?utm_source=${utmParams.utmSource || "direct"
    }&utm_medium=${utmParams.utmMedium || "organic"}&utm_campaign=${utmParams.utmCampaign || "consulting_page"
    }`;

  const annotationColor = mode === "dark" ? "#58E6D9" : "#B63E96";

  return (
    <>
      <Head>
        <title>Performance Optimization Sprint | Fix Slow APIs in 30 Days — Muhammed Faiyaz</title>
        <meta
          name="description"
          content="I help SaaS teams with 5–30 engineers fix slow APIs and rising infrastructure costs in 30 days — without rewriting their system. Fixed price. No surprises."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mfayaz.live/consulting" />
        <meta
          property="og:title"
          content="Fix Your Slow APIs in 30 Days — Performance Optimization Sprint"
        />
        <meta
          property="og:description"
          content="SaaS teams with 5–30 engineers: identify and fix your biggest performance bottleneck without a rewrite. Starting at $1,200. Technical Lead with 11+ years of experience."
        />
        <meta
          property="og:image"
          content="https://www.mfayaz.live/images/og/consulting-og.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Muhammed Faiyaz | Technical Consulting" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fix Your Slow APIs in 30 Days — Performance Optimization Sprint"
        />
        <meta
          name="twitter:description"
          content="SaaS teams: identify and fix your biggest API bottleneck without a rewrite. Fixed price, 30 days."
        />
        <meta
          name="twitter:image"
          content="https://www.mfayaz.live/images/og/consulting-og.png"
        />
      </Head>

      <TransitionEffect />

      <main className="w-full text-dark dark:text-light">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="w-full bg-light dark:bg-dark">
          <Layout className="min-h-[calc(100vh-4rem)] flex flex-col justify-center !pb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-primary dark:text-primaryDark mb-6 block"
            >
              Performance Consulting
            </motion.span>

            <AnimatedText
              text="I help SaaS teams fix slow APIs and rising infra costs in 15 days."
              className="!text-6xl xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-2xl !text-left mb-4"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-3xl xl:text-2xl lg:text-xl sm:text-lg font-bold text-primary dark:text-primaryDark mb-5"
            >
              Without rewriting your system.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-lg lg:text-base text-dark/65 dark:text-light/65 max-w-2xl mb-8 leading-relaxed"
            >
              Every month you wait, the bottleneck compounds — slower user
              experience, higher infrastructure spend, and a team that&apos;s
              debugging in circles with no clear answer in sight.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-dark px-8 py-4 text-base font-semibold text-light
                  dark:bg-light dark:text-dark hover:scale-105 active:scale-95
                  transition-transform duration-200 sm:px-6 sm:py-3 sm:text-sm"
              >
                Book a Free 30-min Call
              </Link>
              <Link
                href="https://www.linkedin.com/in/faiyazbits/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-dark px-8 py-4 text-base font-semibold text-dark
                  dark:border-light dark:text-light hover:bg-dark hover:text-light
                  dark:hover:bg-light dark:hover:text-dark transition-all duration-200
                  sm:px-6 sm:py-3 sm:text-sm"
              >
                DM &quot;PERFORMANCE&quot; on LinkedIn
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="text-sm text-dark/40 dark:text-light/40 mb-16"
            >
              11+ years · Technical Lead · SaaS · FinTech · HealthTech · Government
            </motion.p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="self-start"
            >
              <svg
                className="w-6 h-6 text-dark/30 dark:text-light/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </Layout>
        </section>

        {/* ── PAIN AGITATION (inverted) ──────────────────────────────────── */}
        <section className="w-full bg-dark dark:bg-light text-light dark:text-dark px-32 py-24 xl:px-24 xl:py-20 lg:px-16 lg:py-16 md:px-12 md:py-12 sm:px-8 sm:py-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary dark:text-primaryDark mb-4 block"
          >
            Sound Familiar?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-5xl xl:text-4xl lg:text-3xl sm:text-2xl mb-14 lg:mb-10"
          >
            The Invisible Bottleneck Trap
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-3 gap-8 lg:grid-cols-1 mb-14 lg:mb-10"
          >
            {painCards.map((card) => (
              <motion.div
                key={card.title}
                variants={cardReveal}
                className="rounded-2xl border border-light/15 dark:border-dark/15 p-8 sm:p-6"
              >
                <div className="w-10 h-10 mb-5 text-primary dark:text-primaryDark">
                  {card.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 sm:text-lg">{card.title}</h3>
                <p className="text-light/70 dark:text-dark/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-2xl sm:text-xl italic text-center text-primary dark:text-primaryDark max-w-3xl mx-auto bg-light dark:bg-dark px-8 py-6 rounded-2xl border border-light/15 dark:border-dark/15"
          >
            &ldquo;What if the problem isn&apos;t your team&apos;s skill — it&apos;s that
            you&apos;re looking in the wrong place?&rdquo;
          </motion.p>
        </section>

        {/* ── KEY BELIEF / REFRAME ──────────────────────────────────────── */}
        <section className="w-full bg-light dark:bg-dark">
          <Layout className="text-center !py-24 lg:!py-16">
            <p
              className="font-bold leading-none text-primary/15 dark:text-primaryDark/15 select-none -mb-6 sm:-mb-4"
              style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
              aria-hidden="true"
            >
              &ldquo;
            </p>
            <motion.p
              ref={beliefRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl xl:text-3xl lg:text-2xl sm:text-xl font-bold text-dark dark:text-light max-w-3xl mx-auto leading-snug"
            >
              Most performance problems are caused by{" "}
              {mounted ? (
                <RoughNotation
                  type="underline"
                  show={beliefInView}
                  color={annotationColor}
                  strokeWidth={3}
                  animationDuration={800}
                  animationDelay={400}
                >
                  lack of clarity
                </RoughNotation>
              ) : (
                <span>lack of clarity</span>
              )}{" "}
              — not lack of resources.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-dark/35 dark:text-light/35 text-xs mt-6 uppercase tracking-widest"
            >
              — The core principle behind every engagement
            </motion.p>
          </Layout>
        </section>

        {/* ── OFFER REVEAL ──────────────────────────────────────────────── */}
        <section className="w-full bg-light dark:bg-dark border-t border-dark/10 dark:border-light/10">
          <Layout>
            <div className="grid grid-cols-2 gap-16 lg:grid-cols-1 lg:gap-10 items-center">
              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary dark:text-primaryDark mb-4 block">
                  The Engagement
                </span>
                <h2 className="font-bold text-5xl xl:text-4xl lg:text-3xl sm:text-2xl mb-4">
                  Performance Optimization Sprint
                </h2>
                <p className="text-dark/50 dark:text-light/50 mb-6 text-sm uppercase tracking-widest font-medium">
                  30 business days · Remote · Fixed scope
                </p>
                <p className="text-dark/70 dark:text-light/70 text-lg lg:text-base mb-8 leading-relaxed">
                  A structured 30-day engagement where I work directly with your
                  team to identify, diagnose, and plan the fix for the bottlenecks
                  slowing your system down — and costing you money every day they
                  go unresolved.
                </p>
                <p className="text-sm font-semibold text-dark/50 dark:text-light/50 uppercase tracking-wider mb-4">
                  Built for teams that are:
                </p>
                <div className="space-y-3">
                  {[
                    "5–30 engineers, post-MVP and scaling",
                    "Experiencing slow APIs or rising infrastructure costs",
                    "Ready to find the root cause — not just treat symptoms",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 mt-0.5 text-primary dark:text-primaryDark flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-dark/75 dark:text-light/75 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[1.5rem] bg-dark dark:bg-light sm:-right-1.5 sm:h-[101.5%]" />
                <div className="relative rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-10 lg:p-8 sm:p-6">
                  <div className="space-y-3 mb-8">
                    {[
                      "Fixed price. No hourly billing surprises.",
                      "30-day sprint. Not an open-ended retainer.",
                      "Full IP transfer. You own everything.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 mt-0.5 text-primary dark:text-primaryDark flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-dark/75 dark:text-light/75 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-dark/10 dark:border-light/10 pt-5">
                    <p className="text-sm text-dark/50 dark:text-light/50 leading-relaxed">
                      I take on{" "}
                      <span className="font-bold text-dark dark:text-light">
                        2 sprints per month.
                      </span>{" "}
                      Slots are kept limited so every engagement gets my full focus.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Layout>
        </section>

        {/* ── PROCESS TIMELINE ──────────────────────────────────────────── */}
        <section className="w-full bg-light dark:bg-dark border-t border-dark/10 dark:border-light/10">
          <Layout>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-bold text-6xl xl:text-5xl lg:text-4xl sm:text-3xl mb-4 w-full text-center"
            >
              How It Works
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center text-dark/60 dark:text-light/60 mb-24 lg:mb-16 text-lg"
            >
              Four weeks. One clear objective each week.
            </motion.p>

            <div ref={timelineRef} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
              <motion.div
                className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl"
                style={{ scaleY: scrollYProgress }}
              />
              <ul>
                {processSteps.map((step, index) => (
                  <ProcessStep
                    key={step.week}
                    {...step}
                    reference={stepRefs[index]}
                  />
                ))}
              </ul>
            </div>
          </Layout>
        </section>

        {/* ── RESULTS (from impact.json — translated to plain language) ─── */}
        <section className="w-full bg-light dark:bg-dark border-t border-dark/10 dark:border-light/10">
          <Layout>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-primary dark:text-primaryDark mb-4 block text-center"
            >
              Proof of Work
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-bold text-6xl xl:text-5xl lg:text-4xl sm:text-3xl mb-4 w-full text-center"
            >
              What This Looks Like in Practice
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center text-dark/60 dark:text-light/60 mb-16 lg:mb-10 text-lg max-w-2xl mx-auto"
            >
              In every case below, the bottleneck had gone unresolved for
              months — and was found within the first week once we knew where
              to look.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-8 lg:grid-cols-1"
            >
              {highlightedResults.map((result) => (
                <motion.div key={result.id} variants={cardReveal} className="relative group">
                  <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[1.5rem] bg-dark dark:bg-light sm:-right-1.5 sm:h-[101.5%]" />
                  <div className="relative rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 sm:p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-primary/30 dark:border-primaryDark/30 text-primary dark:text-primaryDark bg-primary/5 dark:bg-primaryDark/5">
                        {result.industry}
                      </span>
                      <span className="text-xs text-dark/40 dark:text-light/40 font-medium">
                        {result.period}
                      </span>
                    </div>

                    <div className="mb-6">
                      <p
                        className="font-bold text-dark dark:text-light leading-none"
                        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                      >
                        <AnimatedNumberFramerMotion value={result.metricValue} />
                        {result.metricSuffix}
                      </p>
                      <p className="text-xs font-medium text-dark/45 dark:text-light/45 mt-1 uppercase tracking-widest">
                        {result.metricLabel}
                      </p>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-dark/35 dark:text-light/35 mb-2">
                          Before
                        </p>
                        <p className="text-dark/75 dark:text-light/75 text-sm leading-relaxed">
                          {result.problem}
                        </p>
                      </div>
                      <div className="border-t border-dark/10 dark:border-light/10 pt-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primaryDark mb-2">
                          After
                        </p>
                        <p className="text-dark dark:text-light text-sm font-medium leading-relaxed">
                          {result.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Layout>
        </section>

        {/* ── DELIVERABLES ──────────────────────────────────────────────── */}
        <section className="w-full bg-light dark:bg-dark border-t border-dark/10 dark:border-light/10">
          <Layout>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-bold text-6xl xl:text-5xl lg:text-4xl sm:text-3xl mb-4 w-full text-center"
            >
              What You Walk Away With
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center text-dark/60 dark:text-light/60 mb-16 lg:mb-10 text-lg"
            >
              Five concrete outputs. Yours to keep and act on immediately.
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1"
            >
              {deliverables.map((d) => (
                <motion.div key={d.title} variants={cardReveal} className="relative group">
                  <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[1.5rem] bg-dark dark:bg-light sm:-right-1.5 sm:h-[101.5%]" />
                  <div className="relative flex flex-col h-full rounded-2xl border-2 border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark">
                    <div className="mb-4 w-10 h-10 text-primary dark:text-primaryDark">
                      {d.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 lg:text-base">{d.title}</h3>
                    <p className="font-medium text-sm text-dark/65 dark:text-light/65 flex-1 leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Layout>
        </section>

        {/* ── CREDIBILITY BAR (inverted) ─────────────────────────────────── */}
        <section className="w-full bg-dark dark:bg-light text-light dark:text-dark px-32 py-24 xl:px-24 xl:py-20 lg:px-16 lg:py-16 md:px-12 md:py-12 sm:px-8 sm:py-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold text-5xl xl:text-4xl lg:text-3xl sm:text-2xl mb-16 lg:mb-10 text-center"
          >
            Why Teams Trust Me
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-4 gap-8 mb-20 lg:grid-cols-2 lg:mb-12 sm:grid-cols-2 xs:grid-cols-1"
          >
            {[
              { value: 11, suffix: "+", label: "Years of engineering experience" },
              { value: 5, suffix: "", label: "Industries served" },
              { value: 120, suffix: "%", label: "Max performance improvement delivered" },
              { value: 2, suffix: "", label: "Sprint slots per month" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={cardReveal} className="text-center">
                <p className="font-bold text-light dark:text-dark leading-none mb-2"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
                  <AnimatedNumberFramerMotion value={stat.value} />
                  {stat.suffix}
                </p>
                <p className="text-light/55 dark:text-dark/55 text-xs uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 lg:grid-cols-1 max-w-5xl mx-auto"
          >
            {[
              "Reduced a compliance audit form from 14 seconds to 4. Auditors could finally start work immediately — across every form on the platform.",
              "Eliminated 5-hour upload failures on a healthcare platform. A 90% time reduction that also removed the need for any manual recovery.",
              "Cut a 6-second UI freeze to under 1 second for a government form builder — without changing a single line of existing infrastructure.",
            ].map((quote, i) => (
              <motion.blockquote
                key={i}
                variants={fadeUp}
                className="border-l-4 border-primary dark:border-primaryDark pl-5 py-1"
              >
                <p className="text-light/75 dark:text-dark/75 text-sm leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </p>
              </motion.blockquote>
            ))}
          </motion.div>
        </section>

        {/* ── PRIMARY CTA ───────────────────────────────────────────────── */}
        <section className="w-full bg-light dark:bg-dark border-t border-dark/10 dark:border-light/10">
          <Layout className="text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-bold text-5xl xl:text-4xl lg:text-3xl sm:text-2xl mb-5 max-w-3xl mx-auto leading-tight"
            >
              Ready to stop guessing where your bottleneck is?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-dark/65 dark:text-light/65 mb-10 max-w-xl mx-auto"
            >
              Book a free 30-minute call. No pitch. Just clarity on whether
              this sprint is the right fit for your team right now.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-5"
            >
              <Link
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-dark px-10 py-5 text-lg font-semibold text-light dark:bg-light dark:text-dark
                  hover:scale-105 active:scale-95 transition-transform duration-200 sm:px-8 sm:py-4 sm:text-base"
              >
                Book a Free 30-min Call
              </Link>
              <p className="text-dark/35 dark:text-light/35 text-sm">or</p>
              <Link
                href="https://linkedin.com/in/muhammed-faiyaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-primary dark:text-primaryDark hover:underline"
              >
                DM &quot;PERFORMANCE&quot; on LinkedIn →
              </Link>
              <div className="flex items-center gap-2 mt-2">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"
                />
                <p className="text-sm text-dark/50 dark:text-light/50">
                  2 sprint slots per month. Currently open.
                </p>
              </div>
            </motion.div>
          </Layout>
        </section>

        {/* ── LEAD CAPTURE ──────────────────────────────────────────────── */}
        <section className="w-full bg-light dark:bg-dark border-t border-dark/10 dark:border-light/10">
          <Layout>
            <div className="max-w-lg mx-auto">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[1.5rem] bg-dark dark:bg-light sm:-right-1.5 sm:h-[101.5%]" />
                <div className="relative rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-10 lg:p-8 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primaryDark mb-3">
                    Free Resource
                  </p>
                  <h2 className="font-bold text-2xl mb-1">Not ready to book?</h2>
                  <h3 className="font-bold text-2xl mb-5 text-dark/65 dark:text-light/65">
                    Take the checklist first.
                  </h3>
                  <p className="text-dark/60 dark:text-light/60 text-sm mb-6 leading-relaxed">
                    The 10-Point API Performance Checklist — the exact questions I
                    work through in Week 1 of every sprint. Free. Drop your email
                    and I&apos;ll send it over.
                  </p>
                  <ConsultingLeadForm utmParams={utmParams} />
                </div>
              </motion.div>
            </div>
          </Layout>
        </section>

        {/* ── FINAL CTA STRIP ───────────────────────────────────────────── */}
        <section className="w-full bg-dark dark:bg-light text-light dark:text-dark px-32 py-12 xl:px-24 lg:px-16 md:px-12 sm:px-8 flex items-center justify-between gap-6 sm:flex-col sm:text-center">
          <p className="text-2xl xl:text-xl font-bold">
            Still scrolling? Let&apos;s just talk.
          </p>
          <Link
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 rounded-lg border-2 border-light dark:border-dark px-8 py-3 font-semibold
              text-light dark:text-dark hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light
              transition-all duration-200 sm:w-full sm:text-center"
          >
            Book a Call →
          </Link>
        </section>

      </main>
    </>
  );
}
