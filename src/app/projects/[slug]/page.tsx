"use client";

import { GET_SINGLE_PROJECT } from "@/graphql";
import { Project } from "@/types";
import { motion } from "framer-motion";
import { Loader } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect } from "react";
import { useBackgroundColor } from "@/hooks";

interface Props {
  params: {
    slug: string;
  };
}

function ProjectPage({ params }: Props) {
  const { setBackgroundColor } = useBackgroundColor();
  const { data, loading } = useQuery<{ project: Project }>(GET_SINGLE_PROJECT, {
    variables: params,
  });

  useEffect(() => {
    setBackgroundColor(data?.project.backgroundColor.hex!);
  }, [data, setBackgroundColor]);

  return (
    <main className="flex flex-col lg:grid grid-cols-[1fr_1fr] items-center justify-between md:mt-0 gap-4 pt-10">
      <div aria-label="project demo" className="flex flex-col items-center">
        <motion.div
          layoutId={params.slug}
          className="relative aspect-video grid place-content-center border-rose-900 bg-rose-600 text-xl rounded-md border-8 w-[600px] max-w-[85vw]"
        >
          {loading && (
            <div className="absolute w-full h-full grid place-content-center gap-3 bg-rose-950">
              <Loader />
              <span className="text-base">Collecting the mangoes</span>
            </div>
          )}
          {data?.project.desktopScreenshot ? (
            <Image
              className="w-full aspect-video"
              src={data?.project.desktopScreenshot.url}
              width={1920}
              height={1080}
              alt={"project screenshot"}
            />
          ) : (
            <span>{data?.project.title}</span>
          )}
        </motion.div>
        <div className="w-1/4 h-14 bg-rose-700"></div>
        <div className="h-4 w-1/3 rounded-full bg-rose-600"></div>
      </div>

      <div className="flex flex-col gap-4 items-center w-full overflow-hidden">
        <h2 className="text-3xl font-semibold">{data?.project.title}</h2>
        <ul className="flex flex-wrap items-center gap-2 md:px-4 justify-center">
          {data?.project.techStack.map((tech, i) => (
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
          {loading ? (
            <Loader />
          ) : (
            <ReactMarkdown>{data?.project.description.markdown as string}</ReactMarkdown>
          )}
          <div aria-hidden className="opacity-20 text-center">
            ~~~~~~~~~~~~~~~~~~~~
          </div>
        </div>
      </div>

      <Link
        style={{ color: data?.project.backgroundColor.hex }}
        className="flex gap-2 items-center md:hidden underline"
        href={"/projects"}
      >
        Back to Projects
      </Link>
    </main>
  );
}

export default ProjectPage;
