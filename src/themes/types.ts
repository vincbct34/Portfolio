import type { ReactNode } from "react";

export type Lang = "en" | "fr";

export type ThemeId =
  | "swiss"
  | "editorial"
  | "atmos"
  | "pop"
  | "terminal"
  | "noir"
  | "blueprint"
  | "broadsheet";

/** Per-theme voice: same structure, different tone. */
export interface ThemeCopy {
  logo: string;
  navWork: string;
  navAbout: string;
  navContact: string;
  kicker: ReactNode;
  headline: ReactNode;
  tagline: string;
  cta1: string;
  cta2: string;
  workTitle: string;
  aboutTitle: string;
  contactTitle: string;
  statement: ReactNode;
  /** Longer bio prose shown under the statement in the About section. */
  aboutBody: ReactNode;
  footerLine: string;
  /** One description per project, same order as PROJECTS. */
  projectDescriptions: string[];
}

export interface Theme {
  id: ThemeId;
  name: string;
  /** CSS background used for the picker swatch. */
  swatch: string;
  /** One full ThemeCopy per language, same voice in both. */
  copy: Record<Lang, ThemeCopy>;
  /** Full theme stylesheet, injected into <style id="theme-css">. */
  css: string;
  /** Google Fonts CSS2 stylesheet URL for this theme's font families only. */
  fonts: string;
}
