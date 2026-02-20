import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import LiIcon from "./LiIcon";

const Details = ({ name, issuer, issuerLink, date, description, badge }) => {
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
          {name}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={issuerLink}
            target={"_blank"}
          >
            @{issuer}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {date}
        </span>
        <p className="font-medium w-full md:text-sm">{description}</p>
        {badge && (
          <div className="mt-4">
            <Image
              src={badge}
              alt={`${name} badge`}
              width={96}
              height={96}
              className="rounded-lg"
            />
          </div>
        )}
      </motion.div>
    </li>
  );
};

const Certifications = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Certifications
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            name="AWS Certified Solutions Architect"
            issuer="Amazon Web Services"
            issuerLink="https://aws.amazon.com/certification/"
            date="2024"
            description="Validates expertise in designing distributed systems on AWS, including compute, storage, networking, and security best practices."
            badge="/images/aws-certified-solutions-architect-associate.png"
          />
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
