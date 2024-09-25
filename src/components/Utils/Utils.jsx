import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

import { ToggleDarkMode } from "../ToggleDarkMode/ToggleDarkMode";
import { Navbar } from "../Navbar/Navbar";
import { SocialMedias } from "../SocialMedias/SocialMedias";
import styles from './Utils.module.css';
import usFlag from './../../assets/images/us-flag.png';
import frFlag from './../../assets/images/france-flag.png';

export const Utils = ({ isDark, setIsDark }) => {
  const { t, i18n } = useTranslation("global");
  const navigate = useNavigate();
  const [languageSelected, setLanguageSelected] = useState(i18n.language);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageSelected(lang);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("Signed out successfully");
      window.location.reload();
    }).catch((error) => {
      console.log("Error logging out: ", error);
    });
  };

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

Utils.propTypes = {
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired
};
