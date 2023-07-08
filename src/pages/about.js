import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import profilePic from "../../public/profilepic.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Transition from "@/components/Transition";

const About = () => {
  return (
    <>
      <Head>
        <title>Ayush Raj | About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <Transition />
      <main className="w-full flex flex-col items-center justify-center ">
        <Layout classname="!p-16">
          <AnimatedText
            text="Design, Develop, Deploy!"
            className="mb-16 sm:mb-8 lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl"
          />
          <div className="grid w-full  grid-cols-6 gap-36 lg:flex lg:flex-col-reverse">
            <div
              className="col-span-3 text-lg ml-14 flex flex-col dark:text-light items-start justify-start
                    lg:col-span-6"
            >
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                As a IT student with a passion for technology, I am constantly
                seeking opportunities to expand my knowledge and skills in this
                dynamic field. My coursework has given me a solid foundation in
                programming languages such as Java, Python, and C++, as well as
                experience with data structures, algorithms, and software
                development methodologies.
              </p>
              <p className="font-medium my-4">
                I am eager to pursue a career that allows me to contribute to
                innovative solutions that have a positive impact on society. In
                my free time, I enjoy tinkering with new technologies and
                experimenting with programming projects. I am also an avid
                learner and often attend technology meetups and conferences to
                stay up-to-date with the latest trends and advancements.
              </p>
              <p className="font-medium">
                I am looking forward to connecting with professionals in the
                industry and exploring opportunities that will allow me to
                utilize my skills and contribute to the tech community. Feel
                free to reach out to me for any relevant job opportunities,
                internships or collaboration!
              </p>
            </div>

            <div
              className="col-span-3 relative h-max mr-20 rounded-2xl border-2 border-solid border-dark lg:justify-center lg:items-center lg:mx-auto
                    bg-light p-8 dark:bg-dark dark:border-2 dark:border-light"
            >
              <div className="absolute top-0 -z-10 rounded-[2rem] w-[102%] h-[103%] -right-3  bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt=""
                loading="eager"
                className="w-full h-auto rounded-2xl z-20"
                priority
                sizes="(max-width: 768px) 100vw,
                            (max-width:1200px) 50vw, 50vw"
              />
            </div>
          </div>

          <Skills />
          <Experience />
          {/* <Education /> */}
        </Layout>
      </main>
    </>
  );
};

export default About;
