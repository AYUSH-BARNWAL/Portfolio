import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  InstagramIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
    h-[1px] inline-block absolute bg-dark left-0 -bottom-0.5 ease dark:bg-light
    group-hover:w-full transition-[width] duration-300 ${
      router.asPath === href ? "w-full" : "w-0"
    }
        `}
      ></span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const clickLink = () => {
    router.push(href);
    toggle();
  };
  return (
    <button
      href={href}
      className={`${className} relative group my-1.5 dark:text-dark text-light`}
      onClick={clickLink}
    >
      {title}
      <span
        className={`
                h-[1px] inline-block absolute bg-light left-0 -bottom-0.5 ease dark:bg-dark
                group-hover:w-full transition-[width] duration-300 ${
                  router.asPath === href ? "w-full" : "w-0"
                }
            `}
      ></span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher("dark");
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen(!open);
  };
  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between z-10 xl:px-24 lg:px-12 md:px-12 sm:px-8
    dark:text-light"
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={clickHandler}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            open ? "opacity-0" : "opacity-1"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="lg:hidden flex justify-between w-full items-center">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mr-4" />
          <CustomLink href="/projects" title="Projects" className="mr-4" />
          <CustomLink href="/contact" title="Contact Me" className="mr-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="http://linkedin.com/in/ayushraj1268"
            target={"_blank"}
            whileHover={{ y: -5 }}
            className="w-6 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="http://github.com/AYUSH-BARNWAL"
            target={"_blank"}
            whileHover={{ y: -5 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/b_for_beluga/"
            target={"_blank"}
            whileHover={{ y: -5 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <InstagramIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
                ${
                  mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {open ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] z-30 flex-col flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-between
         w-1/2 items-center bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-16"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className="mr-4"
              toggle={clickHandler}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="mr-4"
              toggle={clickHandler}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="mr-4"
              toggle={clickHandler}
            />
            <CustomMobileLink
              href="/contact"
              title="Contact Me"
              className="mr-4 mb-8"
              toggle={clickHandler}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="http://linkedin.com/in/ayushraj1268"
              target={"_blank"}
              whileHover={{ y: -5 }}
              className="w-6 mr-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="http://github.com/AYUSH-BARNWAL"
              target={"_blank"}
              whileHover={{ y: -5 }}
              className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="#"
              target={"_blank"}
              whileHover={{ y: -5 }}
              className="w-6 mx-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
                ${
                  mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};
export const mode = useThemeSwitcher.mode;
export default Navbar;
