export type Lang = "en" | "fr";

export const LANG_STORAGE_KEY = "vb-lang";

export const DEFAULT_LANG: Lang = "en";

/** Canonical origin used to build absolute SEO URLs. */
export const SITE_ORIGIN = "https://www.vincent-bichat.fr";

export function isLang(value: string): value is Lang {
  return value === "en" || value === "fr";
}

/** Each language has its own indexable URL: `en` → `/`, `fr` → `/fr`. */
export function langToPath(lang: Lang): string {
  return lang === "fr" ? "/fr" : "/";
}

/** Resolve the active language from the current path. `/` (and anything not
 *  under `/fr`) is English; `/fr` (and `/fr/...`) is French. */
export function pathToLang(pathname: string): Lang {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
}

export interface SeoMeta {
  title: string;
  description: string;
  ogLocale: string;
  path: string;
}

/** Per-language `<head>` content. The English values mirror `index.html`;
 *  the server injects the French values when serving `/fr`, and the client
 *  keeps them in sync on in-app navigation. */
export const SEO_META: Record<Lang, SeoMeta> = {
  en: {
    title: "Vincent Bichat — Full-Stack Developer & Studio 404Factory",
    description:
      "Vincent Bichat — full-stack developer and founder of the studio 404Factory. I build modern web apps and sites with React, Next.js, and TypeScript that businesses are proud to send people to.",
    ogLocale: "en_US",
    path: "/",
  },
  fr: {
    title: "Vincent Bichat — Développeur Full-Stack & Studio 404Factory",
    description:
      "Vincent Bichat — développeur full-stack et fondateur du studio 404Factory. Je conçois des applications et sites web modernes en React, Next.js et TypeScript dont les entreprises sont fières.",
    ogLocale: "fr_FR",
    path: "/fr",
  },
};
