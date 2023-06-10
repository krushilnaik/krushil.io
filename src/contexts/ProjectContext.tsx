import { createContext } from "react";

export const ProjectContext = createContext({
  projectImage: "",
  setProjectImage: (newImage: string) => {},
});
