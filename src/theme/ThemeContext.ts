import { createContext } from "react";
import type { Lang, Theme, ThemeCopy, ThemeId } from "../themes";

export interface ThemeContextValue {
  theme: Theme;
  themeId: ThemeId;
  setTheme: (id: ThemeId) => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** The active theme's copy, already resolved for the active language. */
  copy: ThemeCopy;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
