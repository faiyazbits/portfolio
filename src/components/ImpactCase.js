import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

const categoryColors = {
  Performance: "text-primary dark:text-primaryDark",
  Architecture: "text-blue-500 dark:text-blue-400",
  UX: "text-emerald-500 dark:text-emerald-400",
};

export const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.5 },
  },
};

export default function ImpactCase({ caseStudy }) {
  const {
    headline,
    client,
    period,
    category,
    tags,
    problem,
    solution,
    impact,
    metrics,
    techStack,
    highlight,
  } = caseStudy;

  const badgeColor = categoryColors[category] || categoryColors.Performance;

  return (
    <motion.article
      variants={cardVariants}
      className={`relative w-full rounded-3xl rounded-br-2xl border border-solid bg-light p-12 dark:bg-dark
        ${highlight ? "border-primary dark:border-primaryDark" : "border-dark dark:border-light"}
        xl:p-8 md:p-6 xs:p-4
      `}
    >
      {/* Offset shadow */}
      <div
        className={`absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl
          ${highlight ? "bg-primary dark:bg-primaryDark" : "bg-dark dark:bg-light"}
          sm:-right-2 sm:h-[102%] xs:-right-1.5 xs:h-[101%] xs:w-[100%] xs:rounded-[1.5rem]
        `}
      />

      {/* Header row */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`text-sm font-bold uppercase tracking-wider ${badgeColor}`}>
            {category}
          </span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full border border-dark/20 dark:border-light/20 text-dark/60 dark:text-light/60"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-sm text-dark/60 dark:text-light/60">
          {client} · {period}
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-3xl font-bold text-dark dark:text-light mb-6 lg:text-2xl sm:text-xl">
        {headline}
      </h2>

      {/* Problem / Solution — 2 col on md+, 1 col on smaller */}
      <div className="grid grid-cols-5 gap-8 mb-6 md:grid-cols-1 md:gap-4">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-xs font-bold uppercase tracking-widest text-dark/40 dark:text-light/40 mb-2">
            Problem
          </h3>
          <p className="text-dark dark:text-light sm:text-sm leading-relaxed">
            {problem}
          </p>
        </div>
        <div className="col-span-3 md:col-span-1">
          <h3 className="text-xs font-bold uppercase tracking-widest text-dark/40 dark:text-light/40 mb-2">
            Solution
          </h3>
          <p className="text-dark dark:text-light sm:text-sm leading-relaxed">
            {solution}
          </p>
        </div>
      </div>

      {/* Impact */}
      <div className="py-4 border-t border-b border-dark/10 dark:border-light/10 mb-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-dark/40 dark:text-light/40 mb-2">
          Impact
        </h3>
        <p className="text-dark dark:text-light sm:text-sm leading-relaxed">{impact}</p>
      </div>

      {/* Metrics */}
      <div className="flex flex-wrap gap-10 mb-6 md:gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col items-start">
            <span className="text-4xl font-bold text-dark dark:text-light lg:text-3xl xs:text-2xl">
              {metric.prefix}
              <AnimatedNumber value={metric.value} />
              {metric.suffix}
            </span>
            <span className="text-sm text-dark/60 dark:text-light/60 mt-1">
              {metric.label}
              {metric.note ? ` (${metric.note})` : ""}
            </span>
          </div>
        ))}
      </div>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm font-medium rounded-full border border-dark dark:border-light text-dark dark:text-light bg-light dark:bg-dark xs:text-xs xs:px-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
