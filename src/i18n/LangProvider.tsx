import { useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LANG, isLang, LANG_STORAGE_KEY, type Lang } from "./lang";
import { LangContext } from "./LangContext";

function getInitialLang(): Lang {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored && isLang(stored)) return stored;
  return navigator.language.toLowerCase().startsWith("fr")
    ? "fr"
    : DEFAULT_LANG;
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
