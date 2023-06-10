import { useContext } from "react";
import { ProjectContext } from "@/contexts";

export function useProjectImage() {
  const { projectImage, setProjectImage } = useContext(ProjectContext);

  return { projectImage, setProjectImage };
}
