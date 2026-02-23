import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/me_working.png";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";


export default function Home() {

  // Todo: include "and insightful articles" after publishing the articles and showing it in navbar
  return (
    <>
      <Head>
        <title>Faiyazbits</title>
        <meta
          name="description"
          content="Explore CodeBucks's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-center justify-between gap-8 md:flex-col">
            <div className="w-1/2 flex justify-center items-center lg:hidden md:flex md:justify-center md:w-full">
              <div className="relative w-96 h-96 md:w-72 md:h-72 sm:w-64 sm:h-64 xs:w-56 xs:h-56 rounded-full overflow-hidden border-4 border-dark dark:border-light">
                <Image
                  src={profilePic}
                  alt="Faiyazbits"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Transforming Vision into Digital Masterpieces with Code and Creativity!"
                className="!text-left !text-5xl xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-2xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                With over a decade of expertise as a seasoned full-stack developer, I&apos;m committed to bringing concepts to life through groundbreaking web applications. Dive into my recent ventures, highlighting my mastery of the ever-evolving realm of web development              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="mailto:m.faiyaz123@gmail.com"
                  className="text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-dark dark:text-light opacity-60"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </article>
      <Services />
      <div className="flex justify-end pr-8 pb-8 md:hidden">
        <div className="inline-block w-24">
          <Image className="relative h-auto w-full" src={lightBulb} alt="Faiyazbits" />
        </div>
      </div>
    </>
  );
}
