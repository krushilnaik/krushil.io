"use client";

import { Project } from "@/types";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Loader from "./Loader";
import { useRouter } from "next/navigation";

function ProjectCard(props: Project) {
  const [fetching, setFetching] = useState(false);
  const router = useRouter();

  const clickHandler = () => {
    setFetching(true);
    router.push(`/portfolio/${props.slug}`);
  };

  return (
    <button
      className="p-2 bg-rose-900 transition-all duration-300 hover:scale-110 rounded-lg w-96 flex flex-col gap-3"
      onClick={clickHandler}
    >
      <motion.div
        layoutId={props.slug}
        className="relative w-full aspect-video grid place-content-center bg-rose-600 transition-colors duration-300 rounded-lg text-xl"
      >
        {fetching && (
          <div className="absolute w-full h-full grid place-content-center gap-3 bg-rose-950">
            <Loader />
            <span className="text-base">Collecting the mangoes</span>
          </div>
        )}
        {props.desktopScreenshot?.url ? (
          <Image
            className="w-full aspect-video rounded-lg"
            src={props.desktopScreenshot?.url || ""}
            width={props.desktopScreenshot?.width || 1920}
            height={props.desktopScreenshot?.height || 1080}
            alt={props.title}
          />
        ) : (
          props.title
        )}
      </motion.div>
      <div className="flex justify-between w-full">
        <ul className="flex gap-1">
          {props.techStack.map(({ icon, ..._t }) => (
            <li key={props.title + _t.title}>
              {
                <Image
                  src={icon?.url || ""}
                  height={icon?.height || 400}
                  width={icon?.width || 400}
                  className="h-5 w-5"
                  alt={_t.title}
                />
              }
            </li>
          ))}
        </ul>
        {props.isWIP && <span>⚒️</span>}
      </div>
    </button>
  );
}

export default ProjectCard;
