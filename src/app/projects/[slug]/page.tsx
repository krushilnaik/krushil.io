"use client";

import { useBackgroundColor } from "@/app/hooks";
import { GET_SINGLE_PROJECT } from "@/graphql";
import { Project } from "@/types";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Fragment, useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface Props {
  params: {
    slug: string;
  };
}

function ProjectPage({ params }: Props) {
  const { slug } = params;
  const { setBackgroundColor } = useBackgroundColor();
  const { data, loading } = useQuery<{ project: Project }>(GET_SINGLE_PROJECT, {
    variables: params,
  });

  // const { project } = data!;

  useEffect(() => {
    setBackgroundColor(data?.project.backgroundColor);
  }, [data]);

  if (loading) {
    return null;
  } else {
    console.log(data);
  }

  return (
    <main className="flex flex-col lg:grid grid-cols-[1fr_1fr] items-center justify-between my-14 md:mt-0">
      <div className="md:hidden relative w-96 max-w-[45vw] aspect-[9/19.5] bg-slate-800 rounded-md border-[5px] border-slate-600 text-center">
        &quot;{data?.project.title}&quot; Mobile Demo
      </div>
      <div aria-label="project demo" className="hidden md:flex flex-col items-center">
        <div className="center h-80 aspect-[16/9] bg-slate-800 rounded-md border-4 border-slate-600">
          &quot;{data?.project.title}&quot; Desktop Demo
        </div>
        <div className="w-1/4 h-14 bg-slate-700"></div>
        <div className="h-4 w-1/3 rounded-full bg-slate-600"></div>
      </div>
      <div className="flex flex-col gap-4 items-center w-full">
        <h2 className="text-3xl font-semibold">{data?.project.title}</h2>
        <ul className="flex flex-wrap items-center gap-x-2 md:px-4">
          {data?.project.techStack.map((tech, i) => (
            <Fragment key={tech.id}>
              {i !== 0 && (
                <span
                  className="inline-block w-1 aspect-square bg-slate-100/40 rounded-full"
                  aria-hidden
                ></span>
              )}
              <li style={{ color: tech.borderColor.hex }}>{tech.title}</li>
            </Fragment>
          ))}
        </ul>
        <div className="prose transition-colors duration-500 dark:prose-invert lg:prose-lg prose-strong:text-sky-800 dark:prose-strong:text-rose-300 p-5">
          <ReactMarkdown>{data?.project.description.markdown as string}</ReactMarkdown>
          <div aria-hidden className="opacity-20 text-center">
            ~~~~~~~~~~~~~~~~~~~~
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
