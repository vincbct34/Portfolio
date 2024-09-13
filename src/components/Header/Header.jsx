import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import { ToggleDarkMode } from "../ToggleDarkMode/ToggleDarkMode";
import { Navbar } from "../Navbar/Navbar";
import styles from './Header.module.css';
import usFlag from './../../assets/images/us-flag.png';
import frFlag from './../../assets/images/france-flag.png';

export const Header = ({ isDark, setIsDark }) => {
  // Initialize translation hook
  const { t, i18n } = useTranslation("global");

  // Local state to keep track of the selected language
  const [languageSelected, setLanguageSelected] = useState(i18n.language);

  // Function to handle language change
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageSelected(lang);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.language}>
        {t("languageSettings.chooseLanguage")}
        {/* Button to switch to English */}
        <button
          onClick={() => handleLanguageChange("en")}
          style={{
            padding: "10px",
            filter: languageSelected === "en" ? "none" : "grayscale(100%)"
          }}
        >
          <img src={usFlag} alt="English" />
        </button>
        {/* Button to switch to French */}
        <button
          onClick={() => handleLanguageChange("fr")}
          style={{
            padding: "10px",
            filter: languageSelected === "fr" ? "none" : "grayscale(100%)"
          }}
        >
          <img src={frFlag} alt="French" />
        </button>
      </div>
      {/* Component to toggle dark mode */}
      <ToggleDarkMode
        isChecked={isDark}
        handleChange={() => setIsDark(prev => !prev)}
      />
      {/* Navbar component */}
      <Navbar />
    </div>
  );
};

// Define prop types for the Header component
Header.propTypes = {
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired
};
