import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LANG,
  isLang,
  LANG_STORAGE_KEY,
  langToPath,
  pathToLang,
  SEO_META,
  SITE_ORIGIN,
  type Lang,
} from "./lang";
import { LangContext } from "./LangContext";

function getInitialLang(): Lang {
  // An explicit `/fr` URL always wins, so shared/indexed links are honoured.
  if (window.location.pathname !== "/") {
    return pathToLang(window.location.pathname);
  }
  // At the root, fall back to a stored choice, then the browser language.
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored && isLang(stored)) return stored;
  return navigator.language.toLowerCase().startsWith("fr")
    ? "fr"
    : DEFAULT_LANG;
}

function setMeta(selector: string, attr: string, value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value);
}

/** Keep the document `<head>` consistent with the active language on in-app
 *  navigation (the server already renders the correct tags on first paint). */
function applySeoMeta(lang: Lang) {
  const meta = SEO_META[lang];
  const url = SITE_ORIGIN + meta.path;
  document.title = meta.title;
  setMeta('meta[name="description"]', "content", meta.description);
  setMeta('meta[property="og:title"]', "content", meta.title);
  setMeta('meta[property="og:description"]', "content", meta.description);
  setMeta('meta[property="og:url"]', "content", url);
  setMeta('meta[property="og:locale"]', "content", meta.ogLocale);
  setMeta(
    'meta[property="og:locale:alternate"]',
    "content",
    lang === "fr" ? "en_US" : "fr_FR",
  );
  setMeta('link[rel="canonical"]', "href", url);
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    applySeoMeta(lang);
  }, [lang]);

  // On first paint, make the URL match the resolved language without adding a
  // history entry (e.g. a French visitor landing on `/` moves to `/fr`).
  useEffect(() => {
    const path = langToPath(lang);
    if (window.location.pathname !== path) {
      window.history.replaceState(
        null,
        "",
        path + window.location.search + window.location.hash,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Follow the URL when the user uses the browser back/forward buttons.
  useEffect(() => {
    const onPopState = () => setLangState(pathToLang(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const setLang = useCallback((next: Lang) => {
    const path = langToPath(next);
    if (window.location.pathname !== path) {
      window.history.pushState(
        null,
        "",
        path + window.location.search + window.location.hash,
      );
    }
    setLangState(next);
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
