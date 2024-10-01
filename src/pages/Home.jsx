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
  <div class="flex flex-col w-1/4 h-1/3 justify-center items-center text-center mt-20 group md:mt-30">
    {customWrapper ? (
      <div class="flex justify-center items-center w-2/3 transition duration-300 ease-in-out hover:animate-turn hover:drop-shadow-custom">
        <img src={logoSrc} alt={altText} />
      </div>
    ) : (
      <div class="flex justify-center items-center w-2/3 transition duration-300 ease-in-out hover:drop-shadow-custom">
        <img src={logoSrc} alt={altText} />
      </div>
    )}
    <p class="mt-10 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:-translate-y-10">{text}</p>
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
    <div class="flex flex-col w-full h-screen justify-center items-center pt-20 cursor-default md:pt-0">
      <div class="flex flex-col w-full h-1/2 justify-center items-center md:flex-row">
        <div class="flex flex-col w-1/2 h-full justify-center items-center text-center gap-0 animate-fadeInUpText md:text-left md:items-start">
          <h2 class="text-4xl animate-fadeInUpText">{t("home.h2")} <span class="inline-block hover:animate-wave">👋</span></h2>
          <h1 class="w-[85vw] text-5xl font-bold m-5 md:w-[60%] md:ml-0 animate-fadeInUpText">{t("home.h1")}</h1>
          <h3 class="w-[85vw] text-xl animate-fadeInUpText md:w-3/4">{t("home.h3")}</h3>
        </div>
        <div class="flex w-[45vw] h-[40vh] rounded-full shadow-profileShadow bg-white overflow-hidden animate-fadeInUp md:h-[25vh] md:w-[25vh]">
          <img src={profileImage} alt="Profile Picture" class="w-full h-full object-cover translate-x-1 md:translate-y-3"/>
        </div>
      </div>
      <div class="flex flex-col h-[30vh] justify-center items-center text-center">
        <h1 class="w-[95vw] text-2xl font-bold m-5 animate-fadeInUpText md:text-5xl">{t("home.welcome")}</h1>
        <h2 class="text-xl animate-fadeInUpText md:text-4xl md:pb-20">{t("home.technologiesTitle")}</h2>
        <div class="flex w-full h-[40%] justify-center items-center gap-3 animate-fadeInUp">
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
