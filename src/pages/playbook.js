import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import PlaybookForm from "@/components/PlaybookForm";

const BULLETS = [
  "RAG design patterns that hold up under real-world load — not just in demos",
  "Performance signals to catch before your users do",
  "Architecture decisions that prevent costly rewrites at scale",
  "The most common production failure modes — and how to spot them early",
];

export default function Playbook() {
  const { query } = useRouter();

  const utmParams = {
    utmSource: query.utm_source || query.ref || "direct",
    utmMedium: query.utm_medium || "organic",
    utmCampaign: query.utm_campaign || "playbook",
  };

  return (
    <>
      <Head>
        <title>AI Product Readiness Checklist — Fayaz</title>
        <meta
          name="description"
          content="A  checklist to identify if your AI product will fail in production — covering RAG design, performance, and system architecture."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 pb-24">
          <div className="max-w-2xl mx-auto">
            <AnimatedText
              text="AI Product Readiness Checklist"
              className="mb-4 !text-5xl !leading-tight lg:!text-4xl sm:!text-3xl xs:!text-2xl"
            />
            <p className="text-dark/70 dark:text-light/70 text-lg mb-10 sm:text-base">
              A  checklist to identify if your AI product will fail in production — covering RAG design, performance, and system architecture.
            </p>

            <ul className="space-y-3 mb-10">
              {BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-dark dark:text-light">
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary/10 dark:bg-primaryDark/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary dark:text-primaryDark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border-2 border-solid border-dark/10 dark:border-light/10 p-8 sm:p-6 bg-dark/[0.02] dark:bg-light/[0.02]">
              <h2 className="font-bold text-xl mb-1 text-dark dark:text-light">Get the free checklist</h2>
              <p className="text-dark/60 dark:text-light/60 text-sm mb-6">
                Enter your email and I&apos;ll send it straight to your inbox.
              </p>
              <PlaybookForm utmParams={utmParams} />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
