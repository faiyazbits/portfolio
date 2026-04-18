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
          Hi, I&apos;m <strong>Fayaz</strong> — a full-stack engineer who
          recently crossed into AI engineering. My most recent work involved
          building{" "}
          <RoughNotation {...props} order={1}>
            RAG pipelines
          </RoughNotation>
          , real-time LLM streaming via SSE, agentic tool calling, and a
          7-stage KaTeX rendering pipeline — all in production.
        </p>
        <p className="my-4 font-medium">
          Before that, I spent{" "}
          <RoughNotation {...props} order={2}>
            11+ years
          </RoughNotation>{" "}
          as a solution architect and technical lead building systems where
          performance and reliability aren&apos;t optional — WebSockets,
          Service Workers, RxJS pipelines, distributed architectures. I&apos;m
          also an{" "}
          <RoughNotation {...props} order={3}>
            AWS Certified Solutions Architect
          </RoughNotation>
          .
        </p>
        <p className="my-4 font-medium">
          I&apos;ve led teams of 5–10 engineers and owned end-to-end delivery
          across{" "}
          <RoughNotation {...props} order={4}>
            8+ international client engagements
          </RoughNotation>{" "}
          — government, healthcare, fintech, and public transit — working
          remotely across the US, Canada, Denmark, and Australia.
        </p>
        <p className="my-4 font-medium">
          Currently open to interesting engineering problems — whether
          that&apos;s building something new, improving something that&apos;s
          slow, or bringing AI into a product that needs it.
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
