import type { ComponentType } from "react";

type IconProps = {
  size?: number | string;
  className?: string;
};

/**
 * Crée un composant icône Odoo à partir d'une URL SVG (asset CDN).
 * Compatible avec l'API utilisée dans les pages produits (`<Icon size={24} />`).
 */
export function createOdooIcon(url: string, label = ""): ComponentType<IconProps> {
  const OdooIcon = ({ size = 24, className }: IconProps) => (
    <img
      src={url}
      width={size}
      height={size}
      alt={label}
      aria-hidden={label ? undefined : true}
      loading="lazy"
      draggable={false}
      className={className}
      style={{ display: "block" }}
    />
  );
  OdooIcon.displayName = `OdooIcon(${label || "icon"})`;
  return OdooIcon;
}