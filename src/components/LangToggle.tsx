import { useTheme } from "../theme/useTheme";

/**
 * EN / FR language toggle rendered inside the nav's `.menu`.
 *
 * Uses a `<button>` with `.lang-toggle` so it visually matches the
 * surrounding `.menu a` links in every theme. Each theme stylesheet
 * provides its own `.lang-toggle` overrides to perfectly blend in.
 *
 * Displays the *other* language as the label — "FR" when English
 * is active, "EN" when French is — so the user sees what they'll
 * switch to.
 */
export function LangToggle() {
  const { lang, setLang } = useTheme();

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
