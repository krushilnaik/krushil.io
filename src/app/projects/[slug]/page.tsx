"use client";

import { GET_SINGLE_PROJECT } from "@/graphql";
import { Project } from "@/types";
import { runQuery } from "@/utils";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { useProjectImage } from "@/hooks";
import { ProjectSummary } from "@/components";

interface Props {
  params: {
    slug: string;
  };
}

function ProjectPage({ params }: Props) {
  const { slug } = params;

  const { projectImage } = useProjectImage();
  const data = runQuery<{ project: Project }>(GET_SINGLE_PROJECT, params);

  return (
    <main className="flex flex-col lg:grid grid-cols-[1fr_1fr] items-center justify-between md:mt-0 gap-4">
      <div className="md:hidden relative h-96 aspect-[9/19.5] bg-slate-800 rounded-md border-[5px] border-slate-600 center text-center">
        <motion.img
          src={projectImage}
          width={1920}
          height={1080}
          alt="project screenshot"
          className="w-full h-full"
        />
      </div>
      <div aria-label="project demo" className="hidden md:flex flex-col items-center">
        <div className="h-80 aspect-[16/9] bg-slate-800 rounded-md border-4 border-slate-600">
          <motion.img
            layoutId={slug}
            src={projectImage}
            width={1920}
            height={1080}
            alt="project screenshot"
            className="w-full h-full"
          />
        </div>
        <div className="w-1/4 h-14 bg-slate-700"></div>
        <div className="h-4 w-1/3 rounded-full bg-slate-600"></div>
      </div>

      <Suspense fallback={<div>loading...</div>}>
        <ProjectSummary data={data} />
      </Suspense>
    </main>
  );
}

export default ProjectPage;
