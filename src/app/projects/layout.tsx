"use client";

import { ProjectBackground } from "@/components";
import { BackgroundContext } from "@/contexts";
import { PropsWithChildren, useState } from "react";

function ProjectLayout({ children }: PropsWithChildren<{}>) {
  const [backgroundColor, setBackgroundColor] = useState("forestgreen");

  return (
    <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      <ProjectBackground />

      {children}
    </BackgroundContext.Provider>
  );
}

export default ProjectLayout;
