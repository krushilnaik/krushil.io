"use client";

import { useProjectImage } from "@/hooks";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect } from "react";

function ProjectDemo() {
  const { projectImage } = useProjectImage();
  const { slug } = useParams();
  const { setProjectImage } = useProjectImage();

  useEffect(() => {
    return () => setProjectImage("");
  }, []);

  return (
    <>
      <div className="md:hidden relative w-96 max-w-[45vw] aspect-[9/19.5] bg-slate-800 rounded-md border-[5px] border-slate-600 text-center">
        Mobile Demo
      </div>
      <div aria-label="project demo" className="hidden md:flex flex-col items-center">
        <div className="h-80 aspect-[16/9] bg-slate-800 rounded-md border-4 border-slate-600">
          <motion.img layoutId={slug} src={projectImage} />
        </div>
        <div className="w-1/4 h-14 bg-slate-700"></div>
        <div className="h-4 w-1/3 rounded-full bg-slate-600"></div>
      </div>
    </>
  );
}

export default ProjectDemo;
