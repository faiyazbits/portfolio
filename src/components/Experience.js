import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Founder"
            company="Upskillabs"
            companyLink="/"
            time="2025-Present"
            address="Kochi, India"
            work="Founded Upskillabs with a mission to build the next generation of AI-native developers, leading product vision, curriculum design, and organizational growth from inception."
          />

          <Details
            position="Solution architect"
            company="Provility"
            companyLink="https://provility.com/"
            time="January 2024"
            address="Chennai, India"
            work="Designed end-to-end technical solutions by translating business requirements into scalable system architectures, collaborated with stakeholders to evaluate technology options, and ensured alignment between product goals and engineering delivery."
          />

          <Details
            position="Techincal Lead"
            company="Provility"
            companyLink="https://provility.com/"
            time="April 2019"
            address="Chennai, India"
            work="Led a cross-functional engineering team to deliver scalable software solutions, defined technical architecture, conducted code reviews, mentored junior developers, and drove engineering best practices across the development lifecycle."
          />

          <Details
            position="Senior  Engineer"
            company="Provility"
            companyLink="https://provility.com/"
            time="June 2016"
            address="Chennai, India"
            work="Designed and developed robust backend systems and APIs, contributed to key architectural decisions, optimized application performance, and collaborated closely with product and design teams to ship high-quality features."
          />

          <Details
            position="Junior Engineer"
            company="Provility"
            companyLink="https://provility.com/"
            time="September 2014"
            address="Chennai, India"
            work="Assisted in developing and testing web application features, resolved bugs identified during QA, participated in daily standups, and supported senior engineers in meeting sprint deliverables on time."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
