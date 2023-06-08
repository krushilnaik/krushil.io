import { Asset } from "./Asset";
import { Color } from "./Color";
import { Tech } from "./Tech";

export interface Project {
  id: string;
  title: string;
  isWIP: boolean;
  slug: string;
  githubRepo: string;
  liveSite: string;
  techStack: Tech[];
  backgroundColor: Color;
  desktopScreenshot: Asset;
  description: {
    markdown: string;
  };
}
