import { useLang } from "../i18n/useLang";

/**
 * EN / FR language toggle. Displays the *other* language as the label —
 * "FR" when English is active, "EN" when French is — so the user sees
 * what they'll switch to.
 */
export function LangToggle() {
  const { lang, setLang } = useLang();

  const toggle = () => setLang(lang === "en" ? "fr" : "en");
  const label = lang === "en" ? "FR" : "EN";

  return (
    <button
      className="lang-toggle"
      onClick={toggle}
      aria-label={label === "FR" ? "Passer en français" : "Switch to English"}
      title={label === "FR" ? "Passer en français" : "Switch to English"}
    >
      {label}
    </button>
  );
}
