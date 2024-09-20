"use client";

import Image from "next/image";
import menu from "@/app/assets/icons/menu.svg";
import close from "@/app/assets/icons/close.svg";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {}
const Hamburger: React.FC<Props> = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const showModal = () => {
    dialogRef.current?.showModal();
  };
  const closeModal = () => {
    dialogRef.current?.close();
  };

  const path = usePathname();

  return (
    <div className="md:hidden fixed z-30 b right-1 top-1">
      <button onClick={showModal}>
        <Image alt="menu" src={menu} className="w-10 h-10" />
      </button>
      <dialog
        className="w-full h-full bg-primary m-0 relative "
        ref={dialogRef}
      >
        <button className="absolute right-1 top-1" onClick={closeModal}>
          <Image width={48} src={close} alt="close menu" />
        </button>
        <ul className="text-6xl text-secondary grid place-content-center gap-12 h-full">
          <li>
            <Link
              className={` hover:text-accent transition-colors ${
                path === "/" ? "text-accent" : ""
              }`}
              href="/"
              scroll
              onClick={closeModal}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={` hover:text-accent transition-colors ${
                path === "/about" ? "text-accent" : ""
              }`}
              href="/about"
              onClick={closeModal}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              className=" hover:text-accent transition-colors"
              href="/#contact"
              onClick={closeModal}
            >
              Contact
            </Link>
          </li>
        </ul>
      </dialog>
    </div>
  );
};

export default Hamburger;
