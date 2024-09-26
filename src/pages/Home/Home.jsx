/**
 * @file Home.jsx is the component that displays the home page of the application, that doesn't require an account to be accessed.
 * It displays a welcome message, a short description of the technologies used and a picture of me.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

// Importing styles
import styles from './Home.module.css';

// Importing images
import profileImage from './../../assets/images/me.png';
import viteLogo from './../../assets/images/vite.svg';
import firebaseLogo from './../../assets/images/firebase.svg';
import reactLogo from './../../assets/images/react.svg';

/**
 * TechItem is a component that displays a technology item with its logo and description.
 * It conditionally wraps the logo in a custom wrapper if specified, to vary the hover effect.
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.logoSrc - The source URL of the logo image.
 * @param {string} props.altText - The alt text for the logo image.
 * @param {string} props.text - The description text for the technology.
 * @param {boolean} [props.customWrapper] - Optional flag to use a custom wrapper for the logo.
 * @returns {JSX.Element} The TechItem component.
 */
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

// Prop types for TechItem component
TechItem.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  customWrapper: PropTypes.bool
};

/**
 * Home is the component that displays the home page of the application, that doesn't require an account to be accessed.
 * 
 * @returns {JSX.Element} The Home component.
 */
export const Home = () => {
  // Translation hook
  const { t } = useTranslation("global");

  return (
    <div className={styles.home}>
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
      <div className={styles.secondHomeContainer}>
        <h1>{t("home.welcome")}</h1>
        <h2>{t("home.technologiesTitle")}</h2>
        <div className={styles.technologies}>
          <TechItem logoSrc={viteLogo} altText="Vite Logo" text={t("technologies.vite")} />
          <TechItem logoSrc={firebaseLogo} altText="Firebase Logo" text='Firebase' />
          <TechItem logoSrc={reactLogo} altText="React Logo" text={t("technologies.react")} customWrapper />
        </div>
      </div>
    </div>
  );
};

export default Home;
