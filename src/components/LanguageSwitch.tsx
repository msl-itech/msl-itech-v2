import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
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
  const currentLabel = lang === "fr" ? "FR" : "EN";
  const targetLabel = targetLang === "fr" ? "FR" : "EN";

  return (
    <Link
      to={target}
      hrefLang={targetLang}
      lang={targetLang}
      aria-label={
        targetLang === "en" ? "Read this page in English" : "Lire cette page en français"
      }
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-grey-light bg-brand-white py-1.5 pl-3 pr-1.5",
        "font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-grey",
        "transition-colors duration-200 hover:border-brand-blue hover:text-brand-blue",
        className,
      )}
    >
      <Globe size={13} aria-hidden="true" className="text-brand-blue" />
      <span aria-hidden="true">{currentLabel}</span>
      <span
        aria-hidden="true"
        className="rounded-full bg-brand-blue px-2 py-0.5 text-brand-white"
      >
        {targetLabel}
      </span>
    </Link>
  );
}

export default LanguageSwitch;
