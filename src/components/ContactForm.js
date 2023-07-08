import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xdorooer");
  if (state.succeeded) {
    return (
      <p className="mx-auto text-center text-dark dark:text-light text-2xl">
        Message sent successfully!
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className=" relative h-max mr-20 rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-2 dark:border-light flex flex-col"
    >
      <div className="absolute top-0 -z-10 rounded-[2rem] w-[101%] h-[102.5%] -right-3 bg-dark dark:bg-light" />
      <label
        for="name"
        className="text-dark dark:text-light font-semibod mb-2 text-2xl"
      >
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        className="rounded-md p-2 border-2 border-dark text-dark font-medium focus:bg-dark
               focus:text-light dark:border-light dark:text-light dark:focus:bg-light
                dark:focus:text-dark dark:bg-dark bg-light dark:focus:outline-none mb-5"
        required
      ></input>
      <label
        for="email"
        className="text-dark dark:text-light my-2 font-semibod text-2xl"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="rounded-md p-2 border-2 border-dark text-dark font-medium focus:bg-dark
               focus:text-light dark:border-light dark:text-light dark:focus:bg-light
                dark:focus:text-dark dark:bg-dark bg-light dark:focus:outline-none mb-5"
        placeholder="Enter your email address"
        required
      ></input>
      <label
        for="subject"
        className="text-dark dark:text-light font-semibod text-2xl my-2"
      >
        Subject
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Write the subject"
        className="rounded-md p-2 border-2 border-dark text-dark font-medium focus:bg-dark
               focus:text-light dark:border-light dark:text-light dark:focus:bg-light
                dark:focus:text-dark dark:bg-dark bg-light dark:focus:outline-none mb-5"
        required
      ></input>
      <label
        for="msg"
        className="text-dark dark:text-light font-semibod my-2 text-2xl"
      >
        Your Message
      </label>
      <textarea
        rows="6"
        cols="1"
        type="text"
        id="msg"
        name="msg"
        placeholder="Write your message here..."
        className="rounded-md p-2 border-2 border-dark text-dark font-medium focus:bg-dark
               focus:text-light dark:border-light dark:text-light dark:focus:bg-light
                dark:focus:text-dark dark:bg-dark bg-light dark:focus:outline-none mb-5
                "
        required
      ></textarea>
      <button
        type="submit"
        className=" bg-dark w-32
                   text-light p-2.5 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark
                   border-solid border-transparent hover:border-dark duration-100 transition-all border-2
                   dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-2
                   hover:dark:border-light md:p-2 md:text-base mt-2"
      >
        SUBMIT
      </button>
    </form>
  );
};
