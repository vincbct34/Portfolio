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
        href="https://github.com/your-profile" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`fixed bottom-5 left-5 transition-transform duration-300 ease-in-out text-current z-10 ${active ? "translate-x-12 scale-150" : ""}`}
      >
        <FaGithub alt="Github" />
      </a>
      <a 
        href="https://facebook.com/your-profile" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`fixed bottom-5 left-5 transition-transform duration-300 ease-in-out text-current z-10 ${active ? "-translate-y-12 scale-150" : ""}`}
      >
        <FaFacebook alt="Facebook" />
      </a>
      <a 
        href="https://linkedin.com/in/vincent-bichat" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`fixed bottom-5 left-5 transition-transform duration-300 ease-in-out text-current z-10 ${active ? "translate-x-9 -translate-y-9 scale-150" : ""}`}
      >
        <FaLinkedin alt="LinkedIn" />
      </a>
      <FaExternalLinkAlt 
        className="fixed bottom-5 left-5 cursor-pointer bg-[var(--background-color)] text-current transition-transform duration-300 ease-in-out z-20" 
        alt="Links" 
        onClick={handleLinkClick} 
      />
    </div>
  );
};