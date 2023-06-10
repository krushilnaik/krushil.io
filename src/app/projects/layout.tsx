"use client";

import { ProjectBackground } from "@/components";
import { BackgroundContext, ProjectContext } from "@/contexts";
import { PropsWithChildren, useState } from "react";

function ProjectLayout({ children }: PropsWithChildren<{}>) {
  const [backgroundColor, setBackgroundColor] = useState("forestgreen");
  const [projectImage, setProjectImage] = useState("");

  return (
    <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      <ProjectBackground />

      <ProjectContext.Provider value={{ projectImage, setProjectImage }}>
        {children}
      </ProjectContext.Provider>
    </BackgroundContext.Provider>
  );
}

export default ProjectLayout;
