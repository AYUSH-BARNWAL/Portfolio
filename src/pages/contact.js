import React from "react";
import Head from "next/head";
import Transition from "@/components/Transition";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { useForm, ValidationError } from "@formspree/react";
import { ContactForm } from "@/components/ContactForm";

const contact = () => {
  return (
    <>
      <Head>
        <title>Ayush Raj | Contact Me</title>
        <meta name="description" content="any"></meta>
      </Head>
      <Transition />
      <main className="flex flex-col items-center justify-center mb-16 dark:text-light w-screen overflow-x-hidden">
        <Layout classname="py-16">
          <AnimatedText
            text="Ready To Contribute Inquire Within!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <ContactForm />
        </Layout>
      </main>
    </>
  );
};

export default contact;
