/**
 * Bilinguisme FR / EN — source de vérité unique.
 *
 * Règles :
 *  - Le français reste à la racine, sans aucun changement d'URL.
 *  - L'anglais vit sous /en, avec des slugs traduits.
 *  - Seules les pages réellement traduites figurent dans TRANSLATED_ROUTES.
 *    Une page absente de la table n'a pas de version anglaise : pas de hreflang "en",
 *    pas d'entrée /en dans le sitemap, et le Worker renvoie 404 sur son URL /en.
 *
 * Contraintes : fichier de pure data (pas d'alias `@/`, pas de React) —
 * il est importé par sitemap-routes.ts au build.
 */

export type Lang = "fr" | "en";

export const SITE_ORIGIN = "https://msl-itech.com";
export const EN_PREFIX = "/en";

/**
 * Chemin FR → chemin EN.
 * Ajouter une ligne UNIQUEMENT quand la page anglaise est en ligne
 * (route déclarée dans App.tsx, contenu traduit et relu).
 */
export const TRANSLATED_ROUTES: Record<string, string> = {
  "/": "/en",
  "/integrateur-odoo-maroc": "/en/odoo-partner-morocco",
  "/a-propos": "/en/about",
  "/contact": "/en/contact",
  "/prendre-rendez-vous": "/en/book-a-meeting",
  "/odoo-erp": "/en/odoo-erp",
  "/odoo-btp-maroc": "/en/odoo-construction-morocco",
  "/odoo-horeca-maroc": "/en/odoo-hospitality-morocco",
  "/realisations": "/en/case-studies",
  "/notre-approche": "/en/our-approach",
};

/** Chemin EN → chemin FR (calculé à la volée : la table reste la seule source). */
function frPathOf(enPath: string): string | undefined {
  return Object.keys(TRANSLATED_ROUTES).find((fr) => TRANSLATED_ROUTES[fr] === enPath);
}

/** Langue d'un chemin : tout ce qui est sous /en est anglais, le reste français. */
export function langFromPath(path: string): Lang {
  return path === EN_PREFIX || path.startsWith(EN_PREFIX + "/") ? "en" : "fr";
}

export type Alternates = { fr?: string; en?: string };

/**
 * Versions linguistiques d'une page (chemins relatifs).
 * Retourne toujours la langue courante ; l'autre seulement si elle existe.
 */
export function getAlternates(path: string): Alternates {
  if (langFromPath(path) === "en") {
    const fr = frPathOf(path);
    return fr ? { fr, en: path } : { en: path };
  }
  const en = TRANSLATED_ROUTES[path];
  return en ? { fr: path, en } : { fr: path };
}

/** Accueil de chaque langue (fil d'Ariane, liens « retour à l'accueil »). */
export function homePath(lang: Lang): string {
  return lang === "en" ? EN_PREFIX : "/";
}

/** og:locale par langue. */
export function ogLocale(lang: Lang): string {
  return lang === "en" ? "en_US" : "fr_MA";
}

/** Libellés partagés par le SEO (fil d'Ariane par défaut, etc.). */
export const SEO_LABELS: Record<Lang, { home: string }> = {
  fr: { home: "Accueil" },
  en: { home: "Home" },
};

/** Liste des chemins EN publiés (sitemap, contrôles). */
export function englishPaths(): string[] {
  return Object.values(TRANSLATED_ROUTES);
}

/**
 * Chemin à utiliser dans un lien interne selon la langue courante.
 * En anglais : chemin EN s'il existe dans TRANSLATED_ROUTES, sinon le chemin FR.
 * Les query strings et ancres sont conservées.
 */
export function localizedPath(frPath: string, lang: Lang): string {
  if (lang !== "en") return frPath;
  const m = frPath.match(/^([^?#]*)(.*)$/);
  const base = m ? m[1] : frPath;
  const rest = m ? m[2] : "";
  const en = TRANSLATED_ROUTES[base];
  return en ? en + rest : frPath;
}

/** Préfixe « [EN] » le message libre d'un formulaire envoyé depuis une page anglaise. */
export function tagMessageForLang(message: string, lang: Lang): string {
  return lang === "en" ? `[EN] ${message}` : message;
}
