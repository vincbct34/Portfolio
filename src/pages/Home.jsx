/**
 * @file Home.jsx is the component that displays the home page of the application, that doesn't require an account to be accessed.
 * It displays a welcome message, a short description of the technologies used and a picture of me.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

// Importing images
import profileImage from './../assets/images/me.png';
import viteLogo from './../assets/images/vite.svg';
import firebaseLogo from './../assets/images/firebase.svg';
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
  <div className="flex flex-col w-[25vw] justify-center items-center text-center group md:w-[15vw]">
    {customWrapper ? (
      <div className="flex justify-center items-center transition duration-300 ease-in-out hover:animate-turn hover:drop-shadow-custom">
        <img src={logoSrc} alt={altText} />
      </div>
    ) : (
      <div className="flex justify-center items-center transition duration-300 ease-in-out hover:drop-shadow-custom">
        <img src={logoSrc} alt={altText} />
      </div>
    )}
    <p className="mt-5 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-y-2">{text}</p>
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
    <div className="flex flex-col h-[105vh] justify-center items-center pt-40 cursor-default md:pt-35">
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="flex flex-col justify-center items-center text-center animate-fadeInUpText md:w-1/2 md:text-left md:items-start">
          <h2 className="text-4xl">{t("home.h2")} <span className="inline-block hover:animate-wave">👋</span></h2>
          <h2 className="text-5xl font-bold m-5 md:ml-0">{t("home.h1")}</h2>
          <h3 className="text-xl pb-10 md:w-3/4">{t("home.h3")}</h3>
        </div>
        <div className="flex w-1/4 rounded-full shadow-profileShadow bg-white overflow-hidden animate-fadeInUp mb-10">
          <img src={profileImage} alt="Profile Picture" className="object-cover translate-x-1.5 md:translate-x-3"/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl font-bold animate-fadeInUpText">{t("home.welcome")}</h1>
        <h2 className="text-xl animate-fadeInUpText">{t("home.technologiesTitle")}</h2>
        <div className="flex w-3/4 justify-center items-center animate-fadeInUp pt-10">
          <TechItem logoSrc={reactLogo} altText={t("technologies.react")} text={t("technologies.react")} customWrapper />
          <TechItem logoSrc={tailwindLogo} altText="Tailwind CSS Logo" text="Tailwind" />
          <TechItem logoSrc={firebaseLogo} altText="Firebase Logo" text='Firebase' />
          <TechItem logoSrc={viteLogo} altText="Vite Logo" text={t("technologies.vite")} />
        </div>
      </div>
    </div>
  );
};

export default Home;
