"use client";

import { GET_ALL_PROJECT_SUMMARIES } from "@/graphql";
import { Project } from "@/types";
import { useQuery } from "@apollo/client";
import Link from "next/link";

function ProjectPage() {
  const { data, loading } = useQuery<{ projects: Project[] }>(GET_ALL_PROJECT_SUMMARIES);

  if (loading) {
    return null;
  }

  return (
    <div className="flex flex-col items-start gap-4 p-4">
      {data?.projects.map((_p, i) => (
        <Link
          key={i}
          className="px-4 py-2 bg-rose-800 rounded-lg"
          href={`/projects/${_p.slug}`}
        >
          {_p.title}
        </Link>
      ))}
    </div>
  );
}

export default ProjectPage;
