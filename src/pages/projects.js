import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import pro1 from "../../public/razorpay.png";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, gitLink }) => {
  return (
    <div
      className="w-full flex flex-row items-center justify-between rounded-3xl border border-dark relative
         bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl
         xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                        (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={gitLink} target="_blank" className="w-12 ">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light
                     p-2 px-6 text-lg font-semibold dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </div>
  );
};

const Project = ({ title, type, img, link, gitLink }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-dark bg-light dark:bg-dark dark:border-light xs:p-4
         p-6 relative"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg md:-right-2
            md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center w-full gap-6 ">
          <Link
            href={link}
            target="_blank"
            className="underline text-dark dark:text-light text-lg font-semibold md:text-base"
          >
            Visit
          </Link>
          <Link href={gitLink} target="_blank" className="w-8 dark:fill-light">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Ayush Raj | Projects</title>
        <meta name="description" content="any"></meta>
      </Head>
      <Transition />
      <main className="flex flex-col items-center justify-center mb-16 dark:text-light w-screen">
        <Layout classname="py-16">
          <AnimatedText
            text="Where Imagination Meets Code!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-2 gap-24 mt-20 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-2">
              <FeaturedProject
                title="Razorpay Clone"
                summary="A fully responsive clone of home page of razorpay website based on HTML and Tailwind CSS"
                link="https://razor-clone.netlify.app"
                type="Featured Project"
                gitLink="https://github.com/AYUSH-BARNWAL/Razorpay-Clone"
                img={pro1}
              />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <Project
                title="Razorpay Clone"
                summary="A fully responsive clone of home page of razorpay website based on HTML and Tailwind CSS"
                link="#"
                type="Featured Project"
                gitLink="#"
                img={pro1}
              />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <Project
                title="Razorpay Clone"
                summary="A fully responsive clone of home page of razorpay website based on HTML and Tailwind CSS"
                link="#"
                type="Featured Project"
                gitLink="#"
                img={pro1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
