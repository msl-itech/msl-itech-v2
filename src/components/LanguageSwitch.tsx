import { Link, useLocation } from "react-router-dom";
import { getAlternates, langFromPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Lien vers la version de la page dans l'autre langue.
 * Ne s'affiche que si cette version existe (table TRANSLATED_ROUTES) :
 * jamais de lien vers une page /en non traduite, jamais de renvoi vers l'accueil.
 * Aucune redirection automatique selon le navigateur ou l'IP (Googlebot explore depuis les États-Unis).
 */
export function LanguageSwitch({ className }: { className?: string }) {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  const alt = getAlternates(pathname);
  const target = lang === "fr" ? alt.en : alt.fr;
  if (!target) return null;

  const targetLang = lang === "fr" ? "en" : "fr";
  return (
    <Link
      to={target}
      hrefLang={targetLang}
      lang={targetLang}
      aria-label={targetLang === "en" ? "Read this page in English" : "Lire cette page en français"}
      className={cn(
        "font-heading text-xs font-semibold uppercase tracking-wide underline-offset-4 hover:underline",
        className,
      )}
    >
      {targetLang === "en" ? "EN" : "FR"}
    </Link>
  );
}

export default LanguageSwitch;
