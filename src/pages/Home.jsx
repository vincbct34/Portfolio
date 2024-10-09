/**
 * @file Home.jsx is the component that displays the home page of the application.
 * It displays a welcome message, a short description of the technologies etc...
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

// Importing images
import profileImage from './../assets/images/me.png';
import viteLogo from './../assets/images/vite.svg';
import reactLogo from './../assets/images/react.svg';
import tailwindLogo from './../assets/images/tailwind.svg';

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
  <div className="flex flex-col w-1/4 justify-center items-center group">
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

// Prop types for TechItem component
TechItem.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  customWrapper: PropTypes.bool
};

/**
 * Home is the component that displays the home page of the application.
 * 
 * @returns {JSX.Element} The Home component.
 */
export const Home = () => {
  const { t } = useTranslation("global");

  return (
    <section id="home" className="w-full bg-light-first dark:bg-dark-first text-dark-first dark:text-light-first">
      <div className="flex flex-col items-center justify-center">
        <div className="relative flex flex-col md:flex-row md:w-full items-center justify-center mt-5">
          <div className="flex flex-col md:w-1/2 items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-center m-2 pl-2">{t("home.presentation")}<span className="inline-block cursor-default hover:animate-wave">👋</span></h1>
            <h3 className="text-2xl md:text-4xl font-bold text-center md:m-5">{t("home.name")}</h3>
            <h2 className="text-4xl font-bold text-center m-5">{t("home.title")}</h2>
            <p className="text-center">{t("home.description")}</p>
          </div>
          <div className="flex rounded-full shadow-darkProfileShadow dark:shadow-lightProfileShadow overflow-hidden m-10">
            <img src={profileImage} alt="Me" className="object-cover translate-x-2.5 md:translate-x-5" />
          </div>
        </div>
        <div className="relative flex flex-wrap justify-center items-center gap-5">
          <TechItem logoSrc={viteLogo} altText="Vite logo" text="Vite" />
          <TechItem logoSrc={reactLogo} altText="React logo" text="React" customWrapper />
          <TechItem logoSrc={tailwindLogo} altText="Tailwind CSS logo" text="Tailwind" />
        </div>
      </div >
    </section>
  );
};


export default Home;
