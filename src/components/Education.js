import React, { useRef } from "react";
import { spring, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { MongoIcon } from "./Icons";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-3/5 mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <LiIcon reference="ref" />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl  sm:text-xl dark:text-light xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium flex flex-row text-dark/75 whitespace-nowrap dark:text-light xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
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

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", " center start"],
  });
  return (
    <div className="my-64  dark:text-light">
      <h2 className="font-bold text-8xl mb-32 w-full text-center  md:text-6xl sx:text-4xl md:mb-16 ">
        Education
      </h2>

      <div ref={ref} className="w-[71%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
             md:w-[2px] md:left-[30px] xs:left-[20px] "
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2  ">
          <Details
            type="B.Tech in Information Technology"
            time="Dec'21-Present | Birla Institute of Technology, Mesra"
            place="Birla Institute of Technology, Mesra"
          />
          <Details
            type="JAVA and Data Structures and Algorithm in JAVA"
            time="Apna College"
            place="Apna College"
            info=""
          />

          <Details
            type="Full Stack Web Development"
            time="Code Help"
            place="Code Help"
            info=""
          />
          <Details type="C/C++" time="Abdul Bari" place="Abdul Bari" info="" />
        </ul>
      </div>
    </div>
  );
};

export default Education;
