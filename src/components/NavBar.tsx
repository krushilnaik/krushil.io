"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Props {}

function NavBar(props: Props) {
  const {} = props;

  return (
    <nav className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center text-lg md:text-xl">
      <Link href={"/"}>k</Link>

      <FontAwesomeIcon icon={faBars} />

      <div className="space-x-4 hidden">
        <Link href={"#"}>About me</Link>
        <Link href={"#"}>Projects</Link>
        <Link href={"#"}>Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;
