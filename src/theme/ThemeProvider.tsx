import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  DEFAULT_LANG,
  DEFAULT_THEME,
  LANG_STORAGE_KEY,
  THEMES,
  THEME_STORAGE_KEY,
  isLang,
  isThemeId,
  type Lang,
  type ThemeId,
} from "../themes";
import { ThemeContext } from "./ThemeContext";

function getInitialTheme(): ThemeId {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored && isThemeId(stored) ? stored : DEFAULT_THEME;
}

function getInitialLang(): Lang {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored && isLang(stored)) return stored;
  return navigator.language.toLowerCase().startsWith("fr")
    ? "fr"
    : DEFAULT_LANG;
}

/**
 * The theme stylesheet must come after the base stylesheet so that
 * equal-specificity theme rules win (e.g. .project display overrides),
 * so it is appended to <head> at runtime rather than declared in index.html.
 */
function getThemeStyleElement(): HTMLStyleElement {
  let el = document.getElementById("theme-css") as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = "theme-css";
    document.head.appendChild(el);
  }
  return el;
}

/**
 * Each theme loads only its own font families. index.html preloads the
 * default theme's fonts via this same id, so this is reused (not recreated)
 * on first render.
 */
function getThemeFontsElement(): HTMLLinkElement {
  let el = document.getElementById("theme-fonts") as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.id = "theme-fonts";
    el.rel = "stylesheet";
    document.head.appendChild(el);
  }
  return el;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setTheme] = useState<ThemeId>(getInitialTheme);
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const isFirstRender = useRef(true);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  }, [lang]);

  useEffect(() => {
    const theme = THEMES[themeId];
    const apply = () => {
      document.documentElement.dataset.theme = themeId;
      getThemeStyleElement().textContent = theme.css;
      getThemeFontsElement().href = theme.fonts;
    };
    // Crossfade the swap on subsequent theme changes; apply instantly on first mount.
    if (!isFirstRender.current && document.startViewTransition) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
    isFirstRender.current = false;
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  }, [themeId]);

  const value = useMemo(
    () => ({
      theme: THEMES[themeId],
      themeId,
      setTheme,
      lang,
      setLang,
      copy: THEMES[themeId].copy[lang],
    }),
    [themeId, lang],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
