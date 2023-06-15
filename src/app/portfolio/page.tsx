"use client";

import { Loader, ProjectCard } from "@/components";
import { GET_ALL_PROJECT_SUMMARIES } from "@/graphql";
import { Project } from "@/types";
import { useQuery } from "@apollo/client";

function page() {
  const { data, loading } = useQuery<{ projects: Project[] }>(GET_ALL_PROJECT_SUMMARIES);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-8">Projects</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {data?.projects.map((_p) => (
          <ProjectCard {..._p} />
        ))}
      </div>
    </div>
  );
}

export default page;
