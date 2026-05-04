import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

/**
 * Monté une fois dans le Layout : applique les animations data-anim à tout
 * l'arbre. Re-scanne à chaque changement de route grâce à la `key` (le composant
 * est démonté/remonté ailleurs) ou via la dépendance pathname.
 */
export function RevealRoot({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  // Scan + ré-scan sur changement de route
  useGsapReveal(ref, [pathname]);

  // Au cas où des éléments arrivent après (lazy images, etc.)
  useEffect(() => {
    const t = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 400);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <div ref={ref} style={{ display: "contents" }}>
      {children}
    </div>
  );
}

export default RevealRoot;