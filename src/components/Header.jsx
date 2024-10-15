import { useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Importing images for language flags and theme icons
import usFlag from './../assets/images/us-flag.png';
import frFlag from './../assets/images/france-flag.png';
import sun from './../assets/images/sun.svg';
import moon from './../assets/images/moon.svg';

// Importing Navbar component
import { Navbar } from "./Navbar";

/**
 * @component Header
 * 
 * The Header component serves as the top navigation bar of the application. 
 * It includes language selection, a dark mode toggle, and the Navbar component.
 * 
 * @param {Object} props - The properties object.
 * @param {boolean} props.isDark - Indicates if dark mode is active.
 * @param {Function} props.setIsDark - Function to toggle dark mode.
 * 
 * @returns {JSX.Element} The Header component.
 */
export const Header = ({ isDark, setIsDark }) => {
  // Hook for translation
  const { t, i18n } = useTranslation("global");
  const [languageSelected, setLanguageSelected] = useState(i18n.language);

  /**
   * Handles language change by updating the i18next language setting
   * and updating the local state for the selected language.
   * 
   * @param {string} lang - The language code (e.g., 'en' or 'fr').
   */
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageSelected(lang);
  };

  return (
    <div className="sticky flex h-[8vh] w-full justify-between items-center px-10 z-50 bg-light-second dark:bg-dark-second text-dark-first dark:text-light-first">
      {/* Language selection section */}
      <div className="flex items-center gap-4">
        <p className="md:text-2xl">{t("header.chooseLanguage")}</p>
        <div className="flex justify-center items-center h-12 w-20 gap-5">
          <button
            onClick={() => handleLanguageChange("en")}
            className={classNames(
              "transition-transform duration-300 hover:scale-110",
              {
                "grayscale-0": languageSelected === "en", // Highlight selected language
                "grayscale": languageSelected !== "en"    // Dim non-selected language
              }
            )}
          >
            <img
              src={usFlag}
              alt="English"
              className="h-6 w-6 md:h-6 md:w-6 transition-transform duration-300 hover:scale-150"
            />
          </button>
          <button
            onClick={() => handleLanguageChange("fr")}
            className={classNames(
              "transition-transform duration-300 hover:scale-110",
              {
                "grayscale-0": languageSelected === "fr", // Highlight selected language
                "grayscale": languageSelected !== "fr"    // Dim non-selected language
              }
            )}
          >
            <img
              src={frFlag}
              alt="French"
              className="h-6 w-6 md:h-6 md:w-6 transition-transform duration-300 hover:scale-150"
            />
          </button>
        </div>
      </div>
      
      {/* Navbar component */}
      <Navbar />
      
      {/* Dark mode toggle section */}
      <div className="flex items-center justify-end pb-1">
        <button
          onClick={() => setIsDark(!isDark)} // Toggle dark mode state
          className="flex justify-center items-center h-12 w-12 rounded-full dark:bg-light-first transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        >
          {isDark ? (
            <img src={sun} alt="Light Mode" className="h-10 w-10" />
          ) : (
            <img src={moon} alt="Dark Mode" className="h-10 w-10" />
          )}
        </button>
      </div>
    </div>
  );
};

// PropTypes validation for Header component
Header.propTypes = {
  isDark: PropTypes.bool.isRequired,    // Indicates if dark mode is enabled
  setIsDark: PropTypes.func.isRequired   // Function to change dark mode state
};
