import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebaseConfig';
import PropTypes from 'prop-types';

import styles from './Home.module.css';
import profileImage from './../../assets/images/me.png';
import viteLogo from './../../assets/images/vite.svg';
import firebaseLogo from './../../assets/images/firebase.svg';
import reactLogo from './../../assets/images/react.svg';

const TechItem = ({ logoSrc, altText, text, customWrapper }) => (
  <div className={styles.techWrapper}>
    {customWrapper ? (
      
      <div className={styles.reactDiv}>
        <img src={logoSrc} alt={altText} className={styles.techLogos} />
      </div>
    ) : (
      
      <div className={styles.otherDiv}>
        <img src={logoSrc} alt={altText} className={styles.techLogos} />
      </div>
    )}
    <p>{text}</p>
  </div>
);

TechItem.propTypes = {
  logoSrc: PropTypes.string.isRequired,  
  altText: PropTypes.string.isRequired,  
  text: PropTypes.string.isRequired,     
  customWrapper: PropTypes.bool          
};

export const Home = () => {
  const { t } = useTranslation("global");

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        console.log("uid", uid)
      } else {
        console.log("user is logged out")
      }
      });
  }, [])

  return (
    <div className={styles.home}>
      {}
      <div className={styles.firstHomeContainer}>
        <div className={styles.presentation}>
          <h2>{t("home.h2")} <span className={styles.wave}>👋</span></h2>
          <h1>{t("home.h1")}</h1>
          <h3>{t("home.h3")}</h3>
        </div>
        <div className={styles.profileContainer}>
          <img src={profileImage} alt="Profile" className={styles.profileImage} />
        </div>
      </div>
      
      {}
      <div className={styles.secondHomeContainer}>
        <h1>{t("home.welcome")}</h1>
        <h2>{t("home.technologiesTitle")}</h2>
        <div className={styles.technologies}>
          {}
          <TechItem logoSrc={viteLogo} altText="Vite Logo" text={t("technologies.vite")} />
          <TechItem logoSrc={firebaseLogo} altText="Firebase Logo" text='Firebase' />
          <TechItem logoSrc={reactLogo} altText="React Logo" text={t("technologies.react")} customWrapper />
        </div>
      </div>
    </div>
  );
};

export default Home;
