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
import proj1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import proj2 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import proj3 from "../../public/images/projects/fashion-studio-website.jpg";
import proj4 from "../../public/images/projects/portfolio-cover-image.jpg";
import proj5 from "../../public/images/projects/agency-website-cover-image.jpg";
import proj6 from "../../public/images/projects/devdreaming.jpg";

const FramerImage = motion(Image);

// Image map to convert JSON keys to imported images
const imageMap = {
  proj1,
  proj2,
  proj3,
  proj4,
  proj5,
  proj6,
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
                <Link
                  href={project.github}
                  target="_blank"
                  className="w-10"
                  aria-label={`${project.title} github link`}
                >
                  <GithubIcon />
                </Link>
                <Link
                  href={project.link}
                  target="_blank"
                  className="rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base hover:scale-105 transition-transform duration-200"
                  aria-label={project.title}
                >
                  Visit Project
                </Link>
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
};

const FeaturedProject = ({ type, title, summary, img, link, github, techStack, timePeriod, country, hasViewMore, contributions }) => {
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
        <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
            {type}
          </span>
          <Link
            href={link}
            target={"_blank"}
            className="underline-offset-2 hover:underline"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
              {title}
            </h2>
          </Link>

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
            <Link
              href={github}
              target={"_blank"}
              className="w-10"
              aria-label={`${title} github link`}
            >
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target={"_blank"}
              className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark
             sm:px-4 sm:text-base
            "
              aria-label={title}
            >
              Visit Project
            </Link>
            {hasViewMore && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-lg border border-dark dark:border-light
               p-2 px-6 text-lg font-semibold text-dark dark:text-light
               sm:px-4 sm:text-base hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark
               transition-colors duration-200
              "
                aria-label={`View my contribution to ${title}`}
              >
                View My Contribution
              </button>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

// Tech Filter Component
const TechFilter = ({ allTechs, selectedTech, onSelectTech }) => {
  return (
    <div className="mb-16 flex flex-wrap justify-center gap-3 md:gap-2">
      <button
        onClick={() => onSelectTech("All")}
        className={`px-6 py-2 rounded-lg border border-dark dark:border-light font-medium transition-colors duration-200
          xs:px-4 xs:py-1.5 xs:text-sm
          ${selectedTech === "All"
            ? "bg-dark text-light dark:bg-light dark:text-dark"
            : "bg-light text-dark dark:bg-dark dark:text-light hover:bg-dark/10 dark:hover:bg-light/10"
          }`}
      >
        All
      </button>
      {allTechs.map((tech) => (
        <button
          key={tech}
          onClick={() => onSelectTech(tech)}
          className={`px-6 py-2 rounded-lg border border-dark dark:border-light font-medium transition-colors duration-200
            xs:px-4 xs:py-1.5 xs:text-sm
            ${selectedTech === tech
              ? "bg-dark text-light dark:bg-light dark:text-dark"
              : "bg-light text-dark dark:bg-dark dark:text-light hover:bg-dark/10 dark:hover:bg-light/10"
            }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");


  const allTechs = [...new Set(projectsData.flatMap((project) => project.techStack))];


  const filteredProjects =
    selectedTech === "All"
      ? projectsData
      : projectsData.filter((project) => project.techStack.includes(selectedTech));

  return (
    <>
      <Head>
        <title>Faiyazbits | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
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
                  hasViewMore={project.hasViewMore}
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
