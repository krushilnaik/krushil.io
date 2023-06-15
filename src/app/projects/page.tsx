"use client";

import { GET_ALL_PROJECT_SUMMARIES } from "@/graphql";
import { Project } from "@/types";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useProjectImage } from "@/hooks";
import { useRouter } from "next/navigation";

function ProjectPage() {
  const { data, loading } = useQuery<{ projects: Project[] }>(GET_ALL_PROJECT_SUMMARIES);
  const { setProjectImage } = useProjectImage();
  const router = useRouter();

  if (loading) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-evenly">
      <div className="flex flex-wrap max-w-7xl mx-auto items-center justify-center gap-4 p-4">
        {data?.projects.slice(0, 6).map((_p, i) => (
          <button
            key={i}
            className="p-2 bg-rose-900 transition-all duration-300 hover:scale-110 rounded-lg w-96 flex flex-col gap-3"
            onClick={() => {
              setProjectImage(_p.desktopScreenshot?.url || "");
              router.push(`/projects/${_p.slug}`);
            }}
          >
            <motion.div
              layoutId={_p.slug}
              className="w-full aspect-video grid place-content-center bg-rose-600 rounded-lg text-xl"
            >
              {_p.desktopScreenshot?.url ? (
                <Image
                  className="w-full aspect-video rounded-lg"
                  src={_p.desktopScreenshot?.url || ""}
                  width={_p.desktopScreenshot?.width || 1920}
                  height={_p.desktopScreenshot?.height || 1080}
                  alt={_p.title}
                />
              ) : (
                _p.title
              )}
            </motion.div>
            <div className="flex justify-between w-full">
              <ul className="flex gap-1">
                {_p.techStack.map(({ icon, ..._t }) => (
                  <li key={_p.title + _t.title}>
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
              {_p.isWIP && <span>⚒️</span>}
            </div>
          </button>
        ))}
      </div>
      <span>Page indicators coming soon</span>
    </div>
  );
}

export default ProjectPage;
