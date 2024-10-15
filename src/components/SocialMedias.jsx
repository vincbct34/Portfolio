/**
 * @file SocialMedias.jsx is the component that displays the social media links of the application.
 * This component is used in the footer of the application to display the different social media links.
 */

import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

/**
 * SocialMedias component renders the social media links of the application.
 * 
 * @returns {JSX.Element} The SocialMedias component.
 */
export const SocialMedias = () => {
  // State to handle the active state of the links
  const [active, setActive] = useState(false);

  // Handle the click on the link button
  const handleLinkClick = () => {
    setActive(!active);
  };

  return (
    <div className="fixed bottom-5 left-5 flex flex-col items-center z-20">
      <a 
        href="https://github.com/vincbct34" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`fixed bottom-5 left-5 transition-all duration-300 ease-in-out dark:text-light-first z-10 ${active ? "translate-x-16 scale-150" : ""} hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo`}
      >
        <FaGithub size={24} />
      </a>
      <a 
        href="https://facebook.com/vincentbct34" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`fixed bottom-5 left-5 transition-all duration-300 ease-in-out dark:text-light-first z-10 ${active ? "-translate-y-16 scale-150" : ""} hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo`}
      >
        <FaFacebook size={24} />
      </a>
      <a 
        href="https://linkedin.com/in/vincent-bichat" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`fixed bottom-5 left-5 transition-all duration-300 ease-in-out dark:text-light-first z-10 ${active ? "translate-x-12 -translate-y-12 scale-150" : ""} transition-all duration-300 hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo`}
      >
        <FaLinkedin size={24} />
      </a>
      <FaExternalLinkAlt 
        className="fixed bottom-5 left-5 cursor-pointer bg-light-first dark:bg-dark-first dark:text-light-first z-20" 
        alt="Links" 
        onClick={handleLinkClick} 
        size={24}
      />
    </div>
  );
};
