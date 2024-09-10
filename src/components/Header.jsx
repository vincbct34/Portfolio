import useLocalStorage from "use-local-storage";
import { useTranslation } from 'react-i18next'

import { ToggleDarkMode } from "./ToggleDarkMode";
import { Navbar } from "./Navbar";
import "./Header.css";

export const Header = () => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  
    const { t, i18n } = useTranslation("global")
  
    return (
      <div className="ColorMode" data-theme={isDark ? "dark" : "light"}>
        <div className="Language">
          {t("languageSettings.chooseLanguage")}
          <button onClick={() => i18n.changeLanguage("en")} style={{ padding: '20px' }}>
            <img src="/us-flag.png" alt="English" />
          </button>
          <button onClick={() => i18n.changeLanguage("fr")}>
            <img src="/france-flag.png" alt="French" />
          </button>
        </div>
        <ToggleDarkMode isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        <Navbar />
      </div>
    );
  };