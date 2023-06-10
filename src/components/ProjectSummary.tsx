"use client";

import { useBackgroundColor } from "@/hooks";
import { Project } from "@/types";
import Image from "next/image";
import React, { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface Props {
  data: {
    read: () => { project: Project };
  };
}

function ProjectSummary({ data }: Props) {
  const { project } = data.read();
  const { setBackgroundColor } = useBackgroundColor();

  useEffect(() => {
    setBackgroundColor(project.backgroundColor.hex!);
  }, [data, setBackgroundColor]);

  return (
    <div className="flex flex-col gap-4 items-center w-full overflow-hidden">
      <h2 className="text-3xl font-semibold">{project.title}</h2>
      <ul className="flex flex-wrap items-center gap-2 md:px-4 justify-center">
        {project.techStack.map((tech, i) => (
          <li
            key={tech.id}
            style={{
              animationName: "slideFromRight",
              animationDelay: `${i * 200}ms`,
              animationDuration: "500ms",
              animationFillMode: "forwards",
            }}
            className="flex items-center gap-2 bg-slate-400/40 p-3 py-1 rounded-full opacity-0 translate-x-[100px]"
          >
            {tech.icon ? (
              <Image
                width={tech.icon.width}
                height={tech.icon.height}
                src={tech.icon.url}
                className="h-4 w-4"
                alt={tech.title}
              />
            ) : (
              <div className="w-4 h-4" aria-hidden />
            )}
            <span>{tech.title}</span>
          </li>
        ))}
      </ul>
      <div className="prose transition-colors duration-500 dark:prose-invert lg:prose-lg prose-strong:text-sky-800 dark:prose-strong:text-rose-300 p-5">
        <ReactMarkdown>{project.description.markdown as string}</ReactMarkdown>
        <div aria-hidden className="opacity-20 text-center">
          ~~~~~~~~~~~~~~~~~~~~
        </div>
      </div>
    </div>
  );
}

export default ProjectSummary;
