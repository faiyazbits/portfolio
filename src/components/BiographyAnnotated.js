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
          Hi, I&apos;m <strong>Fayaz</strong>,
          a{" "} full stack developer
          with{" "}<RoughNotation {...props} order={6}>over a decade</RoughNotation>{" "}
          of experience
          building scalable applications across
          technology stacks. My expertise spans{" "}
          JavaScript, Java, Kotlin, and Python
          , with deep knowledge of modern frameworks including{" "}
          React, Angular, Svelte, and Node.js
          ecosystems.
        </p>
        <p className="my-4 font-medium">
          As an{" "}
          <RoughNotation {...props} order={1}>
            AWS Certified Solutions Architect
          </RoughNotation>
          , I help clients design and implement robust cloud solutions.
          Currently, I focus on{" "}
          <RoughNotation {...props} order={2}>
            AI engineering
          </RoughNotation>{" "}
          projects, helping organizations integrate AI capabilities into their
          application workflows.
        </p>
        <p className="my-4 font-medium">
          Beyond development, I&apos;m passionate about{" "}
          <RoughNotation {...props} order={3}>
            mentorship and education
          </RoughNotation>
          . I&apos;ve had the privilege of training hundreds of students—from
          young learners to career changers—and find genuine joy in those
          moments when someone experiences the thrill of solving their first
          problem with code.
        </p>
        <p className="my-4 font-medium">
          Whether I&apos;m working on a website, mobile app, or other digital
          product, I bring my commitment to{" "}
          technical excellence
          and{" "}
          user-centered thinking
          to every project I work on.
        </p>
        <p className="my-4 font-medium">
          I specialize in creating clean, intuitive user interfaces paired with
          well-architected backend systems. Whether you&apos;re looking to build
          something new, optimize existing systems, or explore AI integration,
          I&apos;d welcome the opportunity to collaborate.
        </p>
        <p className="font-medium">
          <RoughNotation {...props} order={4}>
            Let&apos;s connect and {" "}
          </RoughNotation>
          <RoughNotation {...props} order={5} multiline>
            build something great together
          </RoughNotation>
          .
        </p>
      </RoughNotationGroup>
      <Link
        href="mailto:m.faiyazuddeen@gmail.com"
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
