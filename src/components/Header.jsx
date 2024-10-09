/**
 * @file Header.jsx is the component that displays the utility bar of the application.
 * These utilities are the language settings and the theme settings.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Importing images
import usFlag from './../assets/images/us-flag.png';
import frFlag from './../assets/images/france-flag.png';
import sun from './../assets/images/sun.svg';
import moon from './../assets/images/moon.svg';

// Importing components
import { Navbar } from "./Navbar";

/**
 * Header component to display the utility bar of the application.
 * 
 * @returns {JSX.Element} The Utils component.
 */
export const Header = ({isDark, setIsDark}) => {
  // Hook to use the translation module
  const { t, i18n } = useTranslation("global");

  // State variables to store the selected language
  const [languageSelected, setLanguageSelected] = useState(i18n.language);

  // Function to change the language
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageSelected(lang);
  };

  return (
    <>
      <div className="sticky flex h-[15vh] w-full justify-between items-center px-10 z-50 bg-light-second dark:bg-dark-second">
        <div className="flex h-1/2 w-2/3 md:w-1/4 items-center gap-4">
          <p className="md:text-2xl">{t("header.chooseLanguage")}</p>
          <button
            onClick={() => handleLanguageChange("en")}
            className={classNames(
              "w-1/6 transition-transform duration-300 hover:scale-110", 
              {
                "grayscale-0": languageSelected === "en",
                "grayscale": languageSelected !== "en"
              }
            )}
          >
            <img
              src={usFlag}
              alt="English"
              className="transition-transform duration-300 hover:scale-110"
            />
          </button>
          <button
            onClick={() => handleLanguageChange("fr")}
            className={classNames(
              "w-1/6 transition-transform duration-300 hover:scale-110", 
              {
                "grayscale-0": languageSelected === "fr",
                "grayscale": languageSelected !== "fr"
              }
            )}
          >
            <img
              src={frFlag}
              alt="French"
              className="transition-transform duration-300 hover:scale-110"
            />
          </button>
        </div>
        <Navbar />
        <div className="flex h-1/2 w-1/6 items-center justify-end">
          <button
            onClick={() => {setIsDark(!isDark)}}
            className="flex justify-center items-center h-zuto w-1/3 md:w-1/4 rounded dark:bg-light-first transition-all duration-300 hover:scale-125 hover:shadow-toggleDarkMode dark:hover:shadow-toggleLightMode"
          >
            {isDark ? (
              <span>
                <img src={sun} alt="Light Mode"/>
              </span>
            ) : (
              <span>
                <img src={moon} alt="Dark Mode"/>
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

// PropTypes validation
Header.propTypes = {
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired
};
