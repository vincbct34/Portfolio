export type Lang = "en" | "fr";

export const LANG_STORAGE_KEY = "vb-lang";

export const DEFAULT_LANG: Lang = "en";

export function isLang(value: string): value is Lang {
  return value === "en" || value === "fr";
}
