import React, { useRef } from "react";
import { spring, useScroll } from "framer-motion";
import { motion } from "framer-motion";

const Details = ({ position, company, time, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <LiIcon reference="ref" />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-light">
          {position} &nbsp;
          <span className="text-primary dark:text-primaryDark capitalize">
            @{company}
          </span>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm">
          {work.split(" ").map((word, index) => {
            if (
              word === "Organized" ||
              word === "managed" ||
              word === "Designed" ||
              word === "Led" ||
              word === "engaging" ||
              word === "conducting"
            ) {
              return (
                <span
                  key={index}
                  className="text-primary dark:text-primaryDark"
                >
                  {word}{" "}
                </span>
              );
            }
            return word + " ";
          })}
        </p>
      </motion.div>
    </li>
  );
};

const LiIcon = (reference) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 -translate-y-1 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-1 stroke-primary dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-light dark:fill-dark"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", " center start"],
  });
  return (
    <div className="mt-64 dark:text-light">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl sx:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[71%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px] "
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="General Secretary"
            company="NSS, BIT Mesra"
            time="Feb'22-Present"
            work={`Organized and managed two successful blood donation camps as well as two prabhat feris, ensuring smooth logistics,
            volunteer coordination, and maximum participation. Led a team of executive members, effectively delegating tasks and collaborating
            to execute various events and initiatives. Designed various posters, templates, flexes and T-shirt.`}
          />
          <Details
            company="PSoc, BIT Mesra"
            position="Member"
            time="Aug'22-Present"
            work=" Played a vital role in conducting engaging workshops on photography, camera handling, and graphic design to empower
                  students in developing artistic vision and technical skills. Drove impactful event coverage, extensive poster design, and efficient event organization in club."
          />
          <Details
            company="ACM, BIT Mesra"
            position="Member"
            time="Jan'23-Present"
            work="Organized a CP workshop and coding contests in college."
          />
          <Details
            position="Member"
            company="GFG-Student Chapter, BIT Mesra"
            time="Oct'22-Present"
            work="Designed posters for various events."
          />
          <Details
            position="Design Co-coordinator"
            company="Finance Club, BIT Mesra"
            time="Feb'22-Mar'23"
            work="Designed posters and volunteered in organizing many events."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
