import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { useState } from "react";
import projectsData from "@/data/projects.json";
import sineWaveSim from "../../public/images/projects/sine-wave-sim.png";
import weldTrace from "../../public/images/projects/weld-trace.png";
import weldq from "../../public/images/projects/weldq.png";
import inBrowserDialer from "../../public/images/projects/in-browser-dialer.jpeg";
import eform from "../../public/images/projects/eform.png";
import tradeworks from "../../public/images/projects/tradeworks.webp";
import adeptIQ from "../../public/images/projects/dds-wireless.png";
import recharts from "../../public/images/projects/recharts.png";
import nexum from "../../public/images/projects/nexum.png";
import travelTools from "../../public/images/projects/travel-tools.png";
import averq from "../../public/images/projects/averq.jpeg";
import portfolio from "../../public/images/projects/portfolio.png";
import docutalk from "../../public/images/projects/docutalk.png";
import sagamath from "../../public/images/projects/sagamath.png";


const FramerImage = motion(Image);

// Image map to convert JSON keys to imported images
const imageMap = {
  sineWaveSim,
  weldTrace,
  weldq,
  inBrowserDialer,
  eform,
  tradeworks,
  adeptIQ,
  recharts,
  nexum,
  travelTools,
  averq,
  portfolio,
  docutalk,
  sagamath
};

// ProjectModal Component
const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/50 dark:bg-light/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dark offset background */}
            <div className="absolute top-0 -right-3 -z-10 h-[101%] w-[101%] rounded-3xl bg-dark dark:bg-light xs:-right-2" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-dark dark:bg-light text-light dark:text-dark hover:scale-110 transition-transform duration-200"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div className="p-8 sm:p-6 xs:p-4">
              {/* Project image */}
              <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg mb-6">
                <Image
                  src={imageMap[project.img]}
                  alt={project.title}
                  className="w-full h-auto max-h-64 object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              {/* Project type */}
              <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
                {project.type}
              </span>

              {/* Project title */}
              <h2 className="my-2 text-4xl font-bold text-dark dark:text-light lg:text-3xl xs:text-2xl">
                {project.title}
              </h2>

              {/* Metadata: Time Period and Country */}
              <div className="flex items-center gap-4 text-sm text-dark/75 dark:text-light/75 mb-4 xs:flex-col xs:items-start xs:gap-1">
                <span className="flex items-center gap-1">
                  <span className="text-base">{countryFlags[project.country]}</span>
                  <span>{project.country}</span>
                </span>
                <span className="xs:hidden">•</span>
                <span>{project.timePeriod}</span>
              </div>

              {/* Summary */}
              <p className="my-4 text-dark dark:text-light sm:text-sm">
                {project.summary || project.title}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium rounded-full border border-dark dark:border-light text-dark dark:text-light bg-light dark:bg-dark xs:text-xs xs:px-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Contributions section */}
              {project.contributions && project.contributions.length > 0 && (
                <div className="mt-6 p-6 rounded-2xl border border-dark dark:border-light bg-light dark:bg-dark">
                  <h3 className="text-2xl font-bold text-dark dark:text-light mb-4 xs:text-xl">
                    My Contributions
                  </h3>
                  <ul className="space-y-3">
                    {project.contributions.map((contribution, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-dark dark:text-light"
                      >
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary dark:bg-primaryDark mt-2" />
                        <span className="text-base sm:text-sm">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              <div className="mt-6 flex items-center flex-wrap gap-4">
                {project.github && <Link
                  href={project.github}
                  target="_blank"
                  className="w-10"
                  aria-label={`${project.title} github link`}
                >
                  <GithubIcon />
                </Link>}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base hover:scale-105 transition-transform duration-200"
                    aria-label={project.title}
                  >
                    Visit Project
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const countryFlags = {
  US: "🇺🇸",
  UK: "🇬🇧",
  CA: "🇨🇦",
  AU: "🇦🇺",
  DE: "🇩🇪",
  FR: "🇫🇷",
  IN: "🇮🇳",
  JP: "🇯🇵",
  DK: "🇩🇰",
};

const FeaturedProject = ({ type, title, summary, img, link, github, techStack, timePeriod, country, contributions }) => {
  // Use title as summary if summary is empty
  const displaySummary = summary || title;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectData = {
    type,
    title,
    summary: displaySummary,
    img,
    link,
    github,
    techStack,
    timePeriod,
    country,
    contributions
  };

  return (
    <>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={projectData}
      />
      <article
        className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4
    "
      >
        <div
          className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
        />

        {link ? (
          <Link
            href={link}
            target={"_blank"}
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
          >
            <FramerImage
              src={imageMap[img]}
              className="h-auto w-full"
              alt={title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              priority
            />
          </Link>
        ) : (
          <div className="w-1/2 overflow-hidden rounded-lg lg:w-full">
            <FramerImage
              src={imageMap[img]}
              className="h-auto w-full"
              alt={title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              priority
            />
          </div>
        )}
        <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
            {type}
          </span>
          <div className="flex items-center gap-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
              {title}
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-shrink-0 p-1.5 rounded-full hover:bg-dark/10 dark:hover:bg-light/10 transition-colors duration-200 text-dark dark:text-light"
              aria-label={`View details for ${title}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>

          {/* Metadata: Time Period and Country */}
          <div className="flex items-center gap-4 text-sm text-dark/75 dark:text-light/75 mb-2 xs:flex-col xs:items-start xs:gap-1">
            <span className="flex items-center gap-1">
              <span className="text-base">{countryFlags[country]}</span>
              <span>{country}</span>
            </span>
            <span className="xs:hidden">•</span>
            <span>{timePeriod}</span>
          </div>

          <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
            {displaySummary}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium rounded-full border border-dark dark:border-light
              text-dark dark:text-light bg-light dark:bg-dark xs:text-xs xs:px-2"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-2 flex items-center flex-wrap gap-4">
            {github && <Link
              href={github}
              target={"_blank"}
              className="w-10"
              aria-label={`${title} github link`}
            >
              <GithubIcon />
            </Link>}
            {link && (
              <Link
                href={link}
                target={"_blank"}
                className="rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
                aria-label={title}
              >
                Visit Project
              </Link>
            )}
          </div>
          {contributions && contributions.length > 0 && (
            <div className="mt-6 w-full">
              <h3 className="text-lg font-bold text-dark dark:text-light mb-3">
                What I Did
              </h3>
              <ul className="space-y-3">
                {contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-2 text-dark dark:text-light">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary dark:bg-primaryDark mt-[0.45rem]" />
                    <span className="text-base sm:text-sm">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

const TECH_CATEGORIES = {
  "Frontend": ["React", "AngularJS", "Angular 4", "Angular", "Ember.js", "Next.js"],
  "Languages": ["JavaScript", "TypeScript", "Kotlin"],
  "Styling": ["Tailwind CSS", "SCSS", "jQuery", "jQuery UI"],
  "Backend": ["Node.js", "Express.js", "Spring Boot"],
  "Databases": ["MongoDB", "MySQL", "PostgreSQL", "Elasticsearch", "ChromaDB", "Sequelize"],
  "State & Async": ["Redux", "RxJS", "Kafka", "WebSockets"],
  "Visualization": ["D3.js", "ChartIQ", "Leaflet", "Canvas API", "HTML5 Canvas", "SVG"],
  "AI / LLM": ["LangChain.js", "Vercel AI SDK", "OpenAI Embeddings", "DeepSeek LLM"],
  "Tools": ["Vite", "Cypress", "Framer Motion", "Twilio", "SurveyJS"],
};

// Tech Filter Component
const TechFilter = ({ allTechs, selectedTech, onSelectTech }) => {
  const pill = (active) =>
    `px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
     ${active
      ? "bg-primary dark:bg-primaryDark text-light dark:text-dark border-primary dark:border-primaryDark"
      : "border-dark/20 dark:border-light/20 text-dark/60 dark:text-light/60 bg-transparent hover:border-dark/60 dark:hover:border-light/60 hover:text-dark dark:hover:text-light"
    }`;

  return (
    <div className="mb-16 w-full">
      <p className="mb-4 text-sm text-dark/40 dark:text-light/40">
        Filter projects by technology used
      </p>
      {/* All Projects reset */}
      <div className="pb-5 mb-5 border-b border-dark/10 dark:border-light/10">
        <button onClick={() => onSelectTech("All")} className={pill(selectedTech === "All")}>
          All Projects
        </button>
      </div>

      {/* Category rows */}
      <div className="flex flex-col gap-4">
        {Object.entries(TECH_CATEGORIES).map(([category, techs]) => {
          const present = techs.filter((t) => allTechs.includes(t));
          if (present.length === 0) return null;
          return (
            <div key={category} className="flex items-start gap-4 sm:flex-col sm:gap-1.5">
              <span className="min-w-[8rem] pt-1.5 text-xs font-bold uppercase tracking-widest text-dark/35 dark:text-light/35 sm:pt-0">
                {category}
              </span>
              <div className="flex flex-wrap gap-2">
                {present.map((tech) => (
                  <button key={tech} onClick={() => onSelectTech(tech)} className={pill(selectedTech === tech)}>
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");


  const allTechs = [...new Set(projectsData.flatMap((project) => project.techStack))];


  const filteredProjects = (selectedTech === "All"
    ? projectsData
    : projectsData.filter((project) => project.techStack.includes(selectedTech))
  ).sort((a, b) => a.order - b.order);

  return (
    <>
      <Head>
        <title>Faiyazbits | Projects</title>
        <meta
          name="description"
          content="Explore Fayaz's portfolio of real-world projects — from AI document chatbots and trading platforms to dispatch systems and government e-applications. Built with React, Node.js, Angular, and more."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />


          <TechFilter
            allTechs={allTechs}
            selectedTech={selectedTech}
            onSelectTech={setSelectedTech}
          />


          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {filteredProjects.map((project, index) => (
              <div key={index} className="col-span-12">
                <FeaturedProject
                  type={project.type}
                  title={project.title}
                  summary={project.summary}
                  img={project.img}
                  link={project.link}
                  github={project.github}
                  techStack={project.techStack}
                  timePeriod={project.timePeriod}
                  country={project.country}
                  contributions={project.contributions}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
}
