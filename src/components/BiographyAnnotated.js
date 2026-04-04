import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useThemeSwitch } from "@/components/Hooks/useThemeSwitch";
import Link from "next/link";

export default function BiographyAnnotated() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mode] = useThemeSwitch();
  const color = mode === "dark" ? "#58E6D9" : "#B63E96";
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const props = {
    type: "underline",
    show: isInView && ready,
    color,
    strokeWidth: 2,
    padding: 2,
    iterations: 1,
    animationDuration: 600,
  };

  return (
    <div
      ref={ref}
      className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8"
    >
      <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
        BIOGRAPHY
      </h2>
      <RoughNotationGroup key={mode}>
        <p className="font-medium">
          Hi, I&apos;m <strong>Fayaz</strong>. I believe most performance
          problems aren&apos;t engineering problems — they&apos;re{" "}
          <RoughNotation {...props} order={1}>
            visibility problems
          </RoughNotation>
          . Teams scale infrastructure when what they actually need is a clear
          diagnosis.
        </p>
        <p className="my-4 font-medium">
          I spent{" "}
          <RoughNotation {...props} order={2}>
            over a decade
          </RoughNotation>{" "}
          as a Technical Lead and systems engineer across international SaaS,
          government, and fintech engagements. That experience taught me how to
          see across layers — API, database, infrastructure — and find the root
          cause, not just the symptom. I&apos;m also an{" "}
          <RoughNotation {...props} order={3}>
            AWS Certified Solutions Architect
          </RoughNotation>
          .
        </p>
        <p className="my-4 font-medium">
          I founded{" "}
          <RoughNotation {...props} order={4}>
            Upskillabs
          </RoughNotation>{" "}
          to pass this systems-level thinking to the next generation of
          developers building in an AI-first world.
        </p>
        <p className="my-4 font-medium">
          If your APIs are slowing down or your infra costs are climbing, my{" "}
          <RoughNotation {...props} order={5} multiline>
            Performance Optimization Sprint
          </RoughNotation>{" "}
          gives your team the diagnosis, the roadmap, and the guided fixes — in
          30 days, without touching your core architecture.
        </p>
      </RoughNotationGroup>
      <Link
        href={process.env.NEXT_PUBLIC_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-lg border-2 border-solid border-dark bg-dark px-6 py-3
        text-base font-semibold text-light transition-all duration-300
        hover:bg-transparent hover:text-dark
        dark:border-light dark:bg-light dark:text-dark
        dark:hover:bg-transparent dark:hover:text-light"
      >
        Get In Touch
      </Link>
    </div>
  );
}
