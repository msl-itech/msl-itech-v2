import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll inertiel via Lenis. Désactivé si prefers-reduced-motion.
 * Ajoute la classe `lenis-active` sur <html> pour permettre le CSS conditionnel.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      lerp: 0.1,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    document.documentElement.classList.add("lenis-active", "lenis-smooth");

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.documentElement.classList.remove("lenis-active", "lenis-smooth");
    };
  }, []);

  return null;
}

export default SmoothScroll;