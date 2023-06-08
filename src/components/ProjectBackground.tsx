"use client";

import { BackgroundContext } from "@/contexts";
import { usePathname } from "next/navigation";

function ProjectBackground() {
  const pathname = usePathname();

  const isProject = pathname.startsWith("/projects/");

  return (
    <BackgroundContext.Consumer>
      {({ backgroundColor }) => (
        <div className="absolute w-full h-screen overflow-hidden -z-10">
          {/* Desktop Background */}
          <div
            className="fixed hidden md:block transition-all duration-500 top-0 left-0 h-screen bg-red-400"
            style={{
              backgroundColor,
              clipPath: "polygon(0 0, 80% 0%, 55% 100%, 0% 100%)",
              width: isProject ? "70vw" : "0vw",
            }}
          ></div>
          {/* Mobile background */}
          <div
            className="absolute transition-all md:hidden duration-500 bg-red-400 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2"
            style={{
              backgroundColor,
              width: isProject ? "155vw" : "0vw",
              height: isProject ? "155vw" : "0vw",
            }}
          ></div>
        </div>
      )}
    </BackgroundContext.Consumer>
  );
}

export default ProjectBackground;
