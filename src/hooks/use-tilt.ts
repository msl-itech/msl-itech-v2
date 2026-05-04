import { useEffect, type RefObject } from "react";

/**
 * Applique un tilt 3D léger au survol de l'élément. Désactivé sur pointer:coarse
 * et prefers-reduced-motion.
 */
export function useTilt<T extends HTMLElement>(
  ref: RefObject<T>,
  options: { max?: number; perspective?: number } = {},
) {
  const { max = 8, perspective = 1000 } = options;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    el.style.transformStyle = "preserve-3d";
    el.style.willChange = "transform";

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const rx = (0.5 - y) * 2 * max;
      const ry = (x - 0.5) * 2 * max;
      el.style.transition = "transform 0.05s linear";
      el.style.transform = `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };

    const onLeave = () => {
      el.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, max, perspective]);
}

export default useTilt;