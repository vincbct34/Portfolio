/**
 * @file Utils.jsx is the component that displays the utility bar of the application.
 * These utilities are the language settings, the theme settings, the navigation bar, the authentication buttons and the social media links.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

// Importing Firebase configuration
import { auth } from '../../firebaseConfig';

// Importing styles
import styles from './Utils.module.css';

// Importing images
import usFlag from './../../assets/images/us-flag.png';
import frFlag from './../../assets/images/france-flag.png';

// Importing components
import { ToggleDarkMode } from "../ToggleDarkMode/ToggleDarkMode";
import { Navbar } from "../Navbar/Navbar";
import { SocialMedias } from "../SocialMedias/SocialMedias";

/**
 * Utils component to display the utility bar of the application.
 * 
 * @param {Object} props - The properties object.
 * @param {boolean} props.isDark - Indicates if the dark mode is enabled.
 * @param {Function} props.setIsDark - Function to toggle the dark mode.
 * @returns {JSX.Element} The Utils component.
 */
export const Utils = ({ isDark, setIsDark }) => {
  // Hook to use the translation module
  const { t, i18n } = useTranslation("global");
  // Hook to navigate to another page
  const navigate = useNavigate();

  // State variables to store the selected language and the user's authentication status
  const [languageSelected, setLanguageSelected] = useState(i18n.language);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // Check if the user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  // Function to change the language
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageSelected(lang);
  };

  // Function to log out the user
  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("Signed out successfully");
      window.location.reload();
    }).catch((error) => {
      console.log("Error logging out: ", error);
    });
  };

  // Function to navigate to the login page
  const handleSignIn = () => {
    navigate('/login');
  };

  return (
    <div className={styles.utilsContainer}>
      <div className={styles.language}>
        {t("languageSettings.chooseLanguage")}
        <button
          onClick={() => handleLanguageChange("en")}
          style={{
            filter: languageSelected === "en" ? "none" : "grayscale(100%)"
          }}
        >
          <img src={usFlag} alt="English" />
        </button>
        <button
          onClick={() => handleLanguageChange("fr")}
          style={{
            filter: languageSelected === "fr" ? "none" : "grayscale(100%)"
          }}
        >
          <img src={frFlag} alt="French" />
        </button>
      </div>
      <ToggleDarkMode
        isChecked={isDark}
        handleChange={() => setIsDark(prev => !prev)}
      />
      <Navbar />
      <div className={styles.authentication}>
        {isUserLoggedIn ? (
          <button onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button onClick={handleSignIn}>
            Sign In
          </button>
        )}
      </div>
      <SocialMedias />
    </div>
  );
};

// PropTypes validation
Utils.propTypes = {
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired
};
