"use client";

import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center text-lg md:text-xl">
      <Link
        href={"/"}
        className="rounded-full bg-rose-800 h-9 aspect-square grid place-content-center"
      >
        k
      </Link>

      <div
        aria-hidden
        className="w-screen h-screen absolute bg-black/40 top-0 left-0 transition-colors md:hidden"
        onClick={() => setIsOpen(false)}
        style={{ opacity: isOpen ? 1 : 0, zIndex: isOpen ? 0 : -20 }}
      ></div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative grid place-content-center h-9 aspect-square md:hidden"
      >
        <div
          className="absolute transition-all duration-500 top-0 right-0 w-full h-full rounded border-2 flex flex-col justify-center border-dark/50 dark:border-light/50 bg-light dark:bg-dark"
          style={
            isOpen
              ? { width: "93vw", height: "50vh", padding: "20px" }
              : { padding: "4px" }
          }
        >
          <div
            className="relative transition-all duration-500 flex flex-col [&>*]:leading-snug"
            style={{
              fontSize: isOpen ? 40 : 4,
              fontWeight: isOpen ? 400 : 700,
              gap: isOpen ? "30px" : "0",
            }}
          >
            <div
              aria-hidden
              className="absolute w-full h-full top-0 left-0"
              style={{ display: isOpen ? "none" : "block" }}
            ></div>
            <Link href={"#"} aria-disabled={!isOpen}>
              About me
            </Link>
            <Link href={"/projects"} aria-disabled={!isOpen}>
              Projects
            </Link>
            <Link href={"#"} aria-disabled={!isOpen}>
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="space-x-4 hidden md:block">
        <Link href={"#"}>About me</Link>
        <Link href={"#"}>Projects</Link>
        <Link href={"#"}>Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;
