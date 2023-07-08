import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/port.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ayush Raj</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transition />
      <main className="flex text-dark items-center w-full min-h-screen dark:text-light -z-10 overflow-x-hidden">
        <Layout classname="pt-0 md:mt-16 sm:!mt-8">
          <div className="flex items-center justify-between md:-mt-30 sm:-mt-40 xs:-mt-10 w-full lg:flex-col">
            <div className="w-1/2 lg:w-full">
              <Image
                src={profilePic}
                alt=""
                className="w-full h-auto lg:inline-block md:inline-block md:w-full "
                priority
                sizes="(max-width: 768px) 100vw,
                        (max-width:1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <div>
                <AnimatedText
                  text="Aspiring full stack wizard blending expertise for digital mastery."
                  className="!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-3xl sm:!text-2xl"
                />
                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                  Passionate IT student and aspiring web developer with
                  expertise in Java and C++. Seeking career opportunities to
                  create impactful, innovative web solutions. Solid foundation
                  in web development technologies. <br /> Enjoys experimenting
                  with frontend and backend technologies, contributing to the
                  ever-evolving digital landscape. Actively involved in web
                  development communities, seeking inspiration and staying
                  updated with emerging trends.
                </p>
                <div className="flex  mt-8 self-start lg:self-center lg:items-center lg:justify-center">
                  <Link
                    href="http://www.google.com"
                    target="_blank"
                    className="flex items-center bg-dark
                   text-light p-2.5 px-6 rounded-lg text-  font-semibold hover:bg-light hover:text-dark
                   border-solid border-transparent hover:border-dark duration-100 transition-all border-2
                   dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-2
                   hover:dark:border-light md:p-2 md:text-base"
                  >
                    {" "}
                    Resume <LinkArrow className="w-6 ml-1" />
                  </Link>
                  {/* <Link href='/contacts' target='_blank' className='font-medium ml-10 text-lg text-dark underline'>Hire Me</Link> */}
                </div>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="!absolute right-8 bottom-8 inline-block !w-24 md:hidden">
          <Image src={lightbulb} alt="" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
