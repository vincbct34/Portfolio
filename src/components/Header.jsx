import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToggleDarkMode } from "./ToggleDarkMode";
import { Navbar } from "./Navbar";
import "./Header.css";

export const Header = ({ isDark, setIsDark }) => {
  const { t, i18n } = useTranslation("global");
  const [languageSelected, setLanguageSelected] = useState(i18n.language);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageSelected(lang);
  };

  return (
    <div className="ColorMode">
      <div className="Language">
        {t("languageSettings.chooseLanguage")}
        <button
          onClick={() => handleLanguageChange("en")}
          style={{ padding: "10px", filter: languageSelected === "en" ? "none" : "grayscale(100%)" }}
        >
          <img src="/us-flag.png" alt="English" />
        </button>
        <button
          onClick={() => handleLanguageChange("fr")}
          style={{ padding: "10px", filter: languageSelected === "fr" ? "none" : "grayscale(100%)" }}
        >
          <img src="/france-flag.png" alt="French" />
        </button>
      </div>
      <ToggleDarkMode isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Navbar />
    </div>
  );
};
