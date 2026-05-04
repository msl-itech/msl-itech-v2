import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Rayon d'attraction en px */
  radius?: number;
  /** Force d'attraction (0..1) */
  strength?: number;
  className?: string;
};

/**
 * Wrapper qui attire son enfant vers le curseur dans un rayon donné.
 * Idéal pour les CTA. Désactivé si prefers-reduced-motion ou pointer:coarse.
 */
export function MagneticLayer({
  children,
  radius = 80,
  strength = 0.35,
  className,
}: Props) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const wrap = wrapRef.current;
    const child = childRef.current;
    if (!wrap || !child) return;

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < radius + Math.max(r.width, r.height) / 2) {
        child.style.transition = "transform 0.15s ease-out";
        child.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      } else {
        child.style.transition = "transform 0.4s cubic-bezier(0.22,1,0.36,1)";
        child.style.transform = "translate(0,0)";
      }
    };
    const onLeave = () => {
      child.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)";
      child.style.transform = "translate(0,0)";
    };

    window.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, [radius, strength]);

  return (
    <span ref={wrapRef} className={className} style={{ display: "inline-block" }}>
      <div ref={childRef} style={{ display: "inline-block", willChange: "transform" }}>
        {children}
      </div>
    </span>
  );
}

export default MagneticLayer;