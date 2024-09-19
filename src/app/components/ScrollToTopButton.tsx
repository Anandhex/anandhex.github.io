"use client";

import Image from "next/image";
import arrowUp from "@/app/assets/icons/arrow_up.svg";
interface Props {}
const ScrollToTopButton: React.FC<Props> = () => {
  return (
    <button onClick={() => window.scrollTo(0, 0)}>
      <Image
        src={arrowUp}
        className="rotate-180 w-4 xl:w-8"
        alt="scroll to top"
      />
    </button>
  );
};

export default ScrollToTopButton;
