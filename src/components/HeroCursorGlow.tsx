import { useRef, useState, useCallback, useEffect } from "react";

type Props = {
  /** Couleur de la lueur (CSS color). Par défaut: doré de la marque */
  color?: string;
  /** Diamètre de la lueur en px. Par défaut: 520 */
  size?: number;
  /** Opacité max de la lueur. Par défaut: 0.45 */
  intensity?: number;
  /** Border-radius pour matcher le conteneur parent */
  radius?: string;
};

/**
 * Lueur qui suit le curseur, à placer comme overlay absolu dans un hero
 * relatif/isolé. Le parent doit avoir `position: relative` (ou `isolate`).
 */
export function HeroCursorGlow({
  color = "rgba(255, 221, 87, 1)",
  size = 520,
  intensity = 0.45,
  radius = "inherit",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  // Attach listeners to the parent section so the overlay itself stays
  // non-interactive (clicks & text selection pass through).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const onLeave = () => setPos(null);

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const half = size / 2;
  const visible = pos !== null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      style={{ borderRadius: radius }}
    >
      <div
        className="pointer-events-none absolute transition-opacity duration-300 ease-out"
        style={{
          width: size,
          height: size,
          left: (pos?.x ?? 0) - half,
          top: (pos?.y ?? 0) - half,
          opacity: visible ? intensity : 0,
          background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 65%)`,
          filter: "blur(40px)",
          mixBlendMode: "screen",
          willChange: "left, top, opacity",
        }}
      />
    </div>
  );
}