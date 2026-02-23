import Head from "next/head";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import ImpactCase, { cardVariants } from "@/components/ImpactCase";
import impactData from "@/data/impact.json";

function AnimatedNumberFramerMotion({ value }) {
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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heroStats = [
  { value: 7, suffix: "", label: "Impact stories" },
  { value: 120, suffix: "%", label: "Max performance gain" },
  { value: 90, suffix: "%", label: "Fastest load reduction" },
  { value: 10, suffix: "+", label: "Years engineering" },
];

const sortedCases = [...impactData].sort((a, b) =>
  b.highlight === a.highlight ? 0 : b.highlight ? 1 : -1
);

export default function Impact() {
  return (
    <>
      <Head>
        <title>Faiyazbits | Impact</title>
        <meta
          name="description"
          content="Real engineering impact: performance wins, architecture decisions, and measurable outcomes from 10+ years of senior frontend engineering."
        />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Results Over Resumes."
            className="mb-8 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />
          <p className="text-dark/75 dark:text-light/75 text-lg max-w-3xl mb-16 sm:text-base sm:mb-8">
            Real engineering impact — documented as Problem → Solution → Outcome.
          </p>

          {/* Hero stat bar */}
          <div className="grid grid-cols-4 gap-8 mb-16 md:grid-cols-2 xs:grid-cols-2 sm:gap-4">
            {heroStats.map(({ value, suffix, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <span className="text-5xl font-bold text-dark dark:text-light lg:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumberFramerMotion value={value} />
                  {suffix}
                </span>
                <span className="text-sm text-dark/60 dark:text-light/60 mt-2 capitalize">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-dark/10 dark:bg-light/10 mb-16" />

          {/* Case studies with stagger */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-24 xl:gap-16 md:gap-12"
          >
            {sortedCases.map((caseStudy) => (
              <ImpactCase key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </motion.div>

          {/* CTA strip */}
          <div className="mt-24 text-center border-t border-dark/10 dark:border-light/10 pt-16">
            <h2 className="text-4xl font-bold text-dark dark:text-light mb-4 lg:text-3xl sm:text-2xl">
              Let&apos;s build something together.
            </h2>
            <p className="text-dark/75 dark:text-light/75 text-lg mb-8 sm:text-base">
              Available for senior engineering roles and high-impact freelance engagements.
            </p>
            <Link
              href="mailto:m.faiyaz@gmail.com"
              className="rounded-lg bg-dark px-8 py-4 text-lg font-semibold text-light dark:bg-light dark:text-dark hover:scale-105 transition-transform duration-200 inline-block sm:text-base sm:px-6 sm:py-3"
            >
              Get in touch
            </Link>
          </div>
        </Layout>
      </main>
    </>
  );
}
