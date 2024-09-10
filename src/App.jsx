// import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import { useTranslation } from 'react-i18next'

import "./App.css";
import { ToggleDarkMode } from "./components/ToggleDarkMode";
import { Navbar } from "./components/Navbar";

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  const { t, i18n } = useTranslation("global")

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
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