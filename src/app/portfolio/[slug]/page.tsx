"use client";

import { Loader } from "@/components";
import { GET_SINGLE_PROJECT } from "@/graphql";
import { Project } from "@/types";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

function NewProjectPage({ params }: Props) {
  const { data, loading } = useQuery<{ project: Project }>(GET_SINGLE_PROJECT, {
    variables: params,
  });

  return (
    <div aria-label="project demo" className="flex flex-col items-center">
      <motion.div
        layoutId={params.slug}
        className="relative aspect-video grid place-content-center bg-rose-600 text-xl rounded-md border-4 border-slate-600 w-[683px] max-w-[85vw]"
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
      <div className="w-1/4 h-14 bg-slate-700"></div>
      <div className="h-4 w-1/3 rounded-full bg-slate-600"></div>
    </div>
  );
}

export default NewProjectPage;
