import { createContext } from "react";
import type { Lang } from "./lang";

export interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LangContext = createContext<LangContextValue | null>(null);
