import { useLocation } from "react-router-dom";
import { langFromPath, type Lang } from "@/lib/i18n";

/** Langue de la page courante, déduite de l'URL (/en/... = anglais). */
export function useLang(): Lang {
  return langFromPath(useLocation().pathname);
}
