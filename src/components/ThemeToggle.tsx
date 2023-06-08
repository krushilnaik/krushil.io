"use client";

import { toggleScheme } from "@/utils";
import { useRouter } from "next/navigation";

function ThemeToggle() {
  const router = useRouter();
  const toggleTheme = async () => {
    await toggleScheme();

    router.refresh();
  };
  return (
    <button
      className="relative overflow-hidden transition-colors duration-500 h-6 aspect-square rounded-full bg-indigo-500 dark:bg-amber-500"
      onClick={toggleTheme}
    >
      <div
        aria-hidden
        className="transition-all duration-500 h-2/3 dark:-translate-x-full dark:-translate-y-full aspect-square absolute top-0 left-0 bg-light dark:bg-dark rounded-full"
      ></div>
    </button>
  );
}

export default ThemeToggle;
