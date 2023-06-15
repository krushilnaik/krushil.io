"use client";

import { GET_SINGLE_PROJECT } from "@/graphql";
import { Project } from "@/types";
import { runQuery } from "@/utils";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { useProjectImage } from "@/hooks";
import { Loader, ProjectSummary } from "@/components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
      <div aria-label="project demo" className="flex flex-col items-center">
        <motion.div
          layoutId={slug}
          className="aspect-video grid place-content-center bg-rose-600 text-xl rounded-md border-4 border-slate-600 w-[683px] max-w-[85vw]"
        >
          {projectImage ? (
            <Image
              className="w-full aspect-video"
              src={projectImage}
              width={1920}
              height={1080}
              alt={"project screenshot"}
            />
          ) : (
            "Screenshot not found"
          )}
        </motion.div>
        <div className="w-1/4 h-14 bg-slate-700"></div>
        <div className="h-4 w-1/3 rounded-full bg-slate-600"></div>
      </div>

      <Suspense fallback={<Loader />}>
        <ProjectSummary data={data} />
      </Suspense>

      <Link className="flex gap-2 items-center md:hidden" href={"/projects"}>
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>Back to Projects</span>
      </Link>
    </main>
  );
}

export default ProjectPage;
