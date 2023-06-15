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
    <div className="grid place-content-center">
      <section className="h-[80vh] flex justify-center items-center gap-96">
        <section className="text-lg flex flex-col gap-10 items-start p-4">
          <div>
            <h1>Hey, I&apos;m Krushil.</h1>
            <p className="text-4xl mt-2 font-bold">Your next software engineer.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-indigo-500 dark:bg-amber-600 px-4 py-2 rounded-lg">
              Get in touch
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
        </section>
      </section>
      <section className="h-screen flex justify-center items-center gap-96">
        You can find me... {alliterations[0]}
      </section>
    </div>
  );
}
