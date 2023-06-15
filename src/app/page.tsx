import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
config.autoAddCss = false;

export default function Home() {
  const alliterations = [
    "tasting tacos",
    "playing Pokemon",
    "surveying smartphones",
    "abusing alliterations",
  ];

  return (
    <div className="">
      <section className="h-[80vh] flex justify-center items-center gap-96">
        <section className="text-lg flex flex-wrap gap-10 p-8 items-center">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-xl">Hey, I&apos;m Krushil.</h1>
              <p className="text-4xl mt-2 font-bold lg:text-5xl">
                Your next software engineer.
              </p>
            </div>
            <div className="flex gap-7">
              {/* <button className="bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200 px-4 py-2 rounded-lg">
                Get in touch
              </button> */}
              <button
                aria-label="Get in touch"
                className="relative px-5 py-2 font-medium text-white group"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-indigo-500 group-hover:bg-indigo-700 group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-indigo-700 group-hover:bg-indigo-500 group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-indigo-600 -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-indigo-400 -rotate-12"></span>
                <span className="relative">Get in touch</span>
              </button>
              <Link
                href={"/projects"}
                className="group flex w-max items-center gap-1 [&>*]:transition-all [&>*]:duration-300"
              >
                <span className="group-hover:text-rose-400">See what I&apos;ve done</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="group-hover:translate-x-1 [&>*]:group-hover:text-rose-400 [&>*]:transition-all [&>*]:duration-300"
                />
              </Link>
            </div>
          </div>
          <div
            aria-hidden
            className="w-[500px] hidden lg:flex flex-col gap-1 [&>*]:rounded-full [&>*]:h-20 [&>*]:lg:h-24 [&>*]:w-96 -rotate-45 -z-10"
          >
            <div className="bg-amber-500" />
            <div className="bg-rose-500 self-end" />
            <div className="bg-indigo-500" />
            <div className="bg-amber-500 self-end" />
          </div>
        </section>
      </section>
      <section className="h-screen flex justify-center items-center gap-96">
        You can find me... {alliterations[0]}
      </section>
    </div>
  );
}
