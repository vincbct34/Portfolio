import { useContext } from "react";
import { LangContext, type LangContextValue } from "./LangContext";
import { CONTENT } from "../data/content";

export function useLang(): LangContextValue & { t: (typeof CONTENT)["en"] } {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return { ...ctx, t: CONTENT[ctx.lang] };
}
