"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {}

const Header: React.FC<Props> = () => {
  const path = usePathname();
  return (
    <ul className="text-secondary flex text-xl font-bold  gap-4">
      <li>
        <Link
          className={` hover:text-accent transition-colors ${
            path === "/" ? "overline decoration-accent" : ""
          }`}
          href="/"
          scroll
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={` hover:text-accent transition-colors ${
            path === "/about" ? "overline decoration-accent" : ""
          }`}
          href="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link className=" hover:text-accent transition-colors" href="/#contact">
          Projects
        </Link>
      </li>
      <li>
        <Link className=" hover:text-accent transition-colors" href="/#contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Header;
