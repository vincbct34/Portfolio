import type { Lang, Theme, ThemeId } from "./types";
import swiss from "./swiss";
import editorial from "./editorial";
import atmos from "./atmos";
import pop from "./pop";
import terminal from "./terminal";
import noir from "./noir";
import blueprint from "./blueprint";
import broadsheet from "./broadsheet";

export type { Lang, Theme, ThemeCopy, ThemeId } from "./types";

/** Insertion order = order in the theme picker. */
export const THEMES: Record<ThemeId, Theme> = {
  swiss,
  editorial,
  atmos,
  pop,
  terminal,
  noir,
  blueprint,
  broadsheet,
};

export const THEME_LIST: Theme[] = Object.values(THEMES);

export const DEFAULT_THEME: ThemeId = "swiss";

export const THEME_STORAGE_KEY = "vb-theme";

export function isThemeId(value: string): value is ThemeId {
  return value in THEMES;
}

export const LANG_STORAGE_KEY = "vb-lang";

export const DEFAULT_LANG: Lang = "en";

export function isLang(value: string): value is Lang {
  return value === "en" || value === "fr";
}
