"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/");

  return (
    <ul className="flex gap-4 items-center ml-4">
      {parts.slice(1).map((path, i) => (
        <li
          key={`breadcrumb-${i}`}
          className="relative rounded-md bg-dark/25 hover:bg-rose-700/25 transition-colors duration-300 p-1 text-base before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:content-['/']"
        >
          <Link href={parts.slice(0, i + 2).join("/")}>{path}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumbs;
