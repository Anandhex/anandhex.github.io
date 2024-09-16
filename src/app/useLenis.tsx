// hooks/useLenis.ts
import { useEffect } from "react";
import Lenis from "lenis";

const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smoothWheel: true,
    });

    // Handle scroll
    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
