import { useEffect, useState } from "react";

/**
 * Barre de progression de scroll fixée en haut de page.
 * Utilise la couleur dorée de la marque MSL.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop || window.scrollY) / max : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px]"
      style={{ backgroundColor: "rgba(18,77,90,0.08)" }}
    >
      <div
        className="h-full origin-left transition-[transform] duration-100 ease-out"
        style={{
          backgroundColor: "var(--gold)",
          transform: `scaleX(${progress})`,
          transformOrigin: "left center",
          boxShadow: "0 0 12px rgba(255,221,87,0.6)",
        }}
      />
    </div>
  );
}

export default ScrollProgress;