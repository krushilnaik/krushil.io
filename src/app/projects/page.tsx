"use client";

import { GET_ALL_PROJECT_SUMMARIES } from "@/graphql";
import { Project } from "@/types";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function ProjectPage() {
  const { data, loading } = useQuery<{ projects: Project[] }>(GET_ALL_PROJECT_SUMMARIES);

  if (loading) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 justify-center">
      {data?.projects.map((_p, i) => (
        <Link
          key={i}
          aria-label={_p.title}
          className="bg-rose-800 md:hover:scale-110 md:hover:shadow-md transition-all rounded-lg max-w-[90vw] flex flex-col"
          href={`/projects/${_p.slug}`}
        >
          {_p?.desktopScreenshot ? (
            <motion.img
              layoutId={_p.id}
              about={_p.id}
              src={_p.desktopScreenshot?.url || ""}
              width={_p.desktopScreenshot?.width || 1920}
              height={_p.desktopScreenshot?.height || 1080}
              className="w-80 aspect-[16/9] rounded-t-lg"
              alt={_p.title}
            />
          ) : (
            <div className="w-80 aspect-[16/9] grid place-content-center">{_p.title}</div>
          )}
          <div className="flex justify-between bg-rose-900 p-3 rounded-b-lg">
            <ul className="flex gap-1">
              {_p.techStack.map(({ icon, ..._t }) => (
                <li key={_p.title + _t.title}>
                  <Image
                    src={icon?.url || ""}
                    height={icon?.height || 400}
                    width={icon?.width || 400}
                    className="h-5 w-5"
                    alt={_t.title}
                  />
                </li>
              ))}
            </ul>
            <span>⚒️</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectPage;
