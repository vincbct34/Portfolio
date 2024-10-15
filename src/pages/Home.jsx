/**
 * @file Home.jsx - This component displays the Home page of the application.
 * The page provides a brief introduction, showcasing a welcome message, profile image, and a description of the main technologies used in the app.
 * 
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

// Importing images for profile and technologies
import profileImage from './../assets/images/me.png';
import viteLogo from './../assets/images/vite.svg';
import reactLogo from './../assets/images/react.svg';
import tailwindLogo from './../assets/images/tailwind.svg';

/**
 * @component TechItem
 * 
 * The TechItem component displays a technology item with an image and description.
 * An optional custom wrapper effect is applied around the logo if specified.
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.logoSrc - Source URL of the technology logo image.
 * @param {string} props.altText - Alternative text for the logo image.
 * @param {string} props.text - Description of the technology.
 * @param {boolean} [props.customWrapper] - Optional; if true, adds a unique wrapper effect to the logo.
 * 
 * @returns {JSX.Element} A component displaying a tech item with its logo and description.
 */
const TechItem = ({ logoSrc, altText, text, customWrapper }) => (
  <div className="flex flex-col w-1/4 justify-center items-center group">
    {/* Tooltip text that appears on hover */}
    <p className=" opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-y-2">{text}</p>
    {customWrapper ? (
      <div className="flex justify-center items-center transition duration-300 ease-in-out hover:animate-turn hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo">
        <img src={logoSrc} alt={altText} />
      </div>
    ) : (
      <div className="flex justify-center items-center transition duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo">
        <img src={logoSrc} alt={altText} />
      </div>
    )}
  </div>
);

// Prop types for the TechItem component
TechItem.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  customWrapper: PropTypes.bool
};

/**
 * @component Home
 * 
 * The Home component renders the main introduction page of the application, 
 * including a greeting, a profile image, and a list of the technologies used.
 * 
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
  const { t } = useTranslation("global");

  return (
    <section id="home" className="w-full bg-light-first dark:bg-dark-first text-dark-first dark:text-light-first">
      <div className="flex flex-col items-center justify-center">
        {/* Main header with profile information */}
        <div className="relative flex flex-col md:flex-row md:w-full items-center justify-center mt-5">
          <div className="flex flex-col md:w-1/2 items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-center m-2 pl-2">
              {t("home.presentation")}<span className="inline-block cursor-default hover:animate-wave">👋</span>
            </h1>
            <h3 className="text-2xl md:text-4xl font-bold text-center md:m-5">{t("home.name")}</h3>
            <h2 className="text-4xl font-bold text-center m-5">{t("home.title")}</h2>
            <p className="text-center">{t("home.description")}</p>
          </div>
          {/* Profile image with shadow effect */}
          <div className="flex rounded-full shadow-darkProfileShadow dark:shadow-lightProfileShadow overflow-hidden m-10">
            <img src={profileImage} alt="Me" className="translate-x-4" />
          </div>
        </div>
        {/* Technology logos for Vite, React, and Tailwind */}
        <div className="relative flex flex-wrap justify-center items-center gap-5">
          <TechItem logoSrc={viteLogo} altText="Vite logo" text="Vite" />
          <TechItem logoSrc={reactLogo} altText="React logo" text="React" customWrapper />
          <TechItem logoSrc={tailwindLogo} altText="Tailwind CSS logo" text="Tailwind" />
        </div>
      </div>
    </section>
  );
};

export default Home;
