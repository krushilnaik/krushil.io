"use client";

import { GET_ALL_PROJECT_SUMMARIES } from "@/graphql";
import { Project } from "@/types";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

function ProjectPage() {
  const { data, loading } = useQuery<{ projects: Project[] }>(GET_ALL_PROJECT_SUMMARIES);

  if (loading) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {data?.projects.map((_p, i) => (
        <Link
          key={i}
          className="px-4 py-2 bg-rose-800 hover:bg-rose-700 rounded-lg w-96 flex flex-col gap-3"
          href={`/projects/${_p.slug}`}
        >
          <Image
            src={_p.desktopScreenshot?.url || ""}
            width={_p.desktopScreenshot?.width || 1920}
            height={_p.desktopScreenshot?.height || 1080}
            alt={_p.title}
          />
          <hr />
          <div className="flex justify-between">
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
            <span>⚒️</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectPage;
