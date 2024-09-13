import { useTranslation } from "react-i18next";
// Importing CSS module for styling
import styles from './Home.module.css';
// Importing image assets
import profileImage from './../../assets/images/me.png';
import viteLogo from './../../assets/images/vite.svg';
import brainLogo from './../../assets/images/brain.svg';
import reactLogo from './../../assets/images/react.svg';
// Importing PropTypes for prop validation
import PropTypes from 'prop-types';

/**
 * TechItem Component
 * 
 * Renders a technology item with an optional custom wrapper.
 * 
 * @param {string} logoSrc - The source URL for the technology logo.
 * @param {string} altText - The alt text for the technology logo image.
 * @param {string} text - The description text for the technology.
 * @param {boolean} customWrapper - Optional flag to apply a custom wrapper.
 * 
 * @returns {JSX.Element} The rendered TechItem component.
 */
const TechItem = ({ logoSrc, altText, text, customWrapper }) => (
  <div className={styles.techWrapper}>
    {customWrapper ? (
      // Custom wrapper with specific styling if customWrapper is true
      <div className={styles.reactDiv}>
        <img src={logoSrc} alt={altText} className={styles.techLogos} />
      </div>
    ) : (
      // Default wrapper if customWrapper is false or not provided
      <div className={styles.otherDiv}>
        <img src={logoSrc} alt={altText} className={styles.techLogos} />
      </div>
    )}
    <p>{text}</p>
  </div>
);

// Adding PropTypes validation for TechItem props
TechItem.propTypes = {
  logoSrc: PropTypes.string.isRequired,  // URL for the technology logo
  altText: PropTypes.string.isRequired,  // Alt text for the logo image
  text: PropTypes.string.isRequired,     // Description text for the technology
  customWrapper: PropTypes.bool          // Optional flag for custom styling
};

/**
 * Home Component
 * 
 * Renders the homepage with a presentation section, profile image, and a list of technologies.
 * 
 * @returns {JSX.Element} The rendered Home component.
 */
export const Home = () => {
  const { t } = useTranslation("global");

  return (
    <div className={styles.home}>
      {/* First section of the homepage */}
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
      
      {/* Second section of the homepage */}
      <div className={styles.secondHomeContainer}>
        <h1>{t("home.welcome")}</h1>
        <h2>{t("home.technologiesTitle")}</h2>
        <div className={styles.technologies}>
          {/* List of technology items */}
          <TechItem logoSrc={viteLogo} altText="Vite Logo" text={t("technologies.vite")} />
          <TechItem logoSrc={brainLogo} altText="Brain Logo" text={t("technologies.brain")} />
          <TechItem logoSrc={reactLogo} altText="React Logo" text={t("technologies.react")} customWrapper />
        </div>
      </div>
    </div>
  );
};

export default Home;
