/**
 * @file SocialMedias.jsx is the component that displays the social medias links of the application.
 * This component is used in the footer of the application to display the different social medias links.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useState } from 'react';
import classNames from 'classnames';
import { FaExternalLinkAlt, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

// Importing styles
import styles from './SocialMedias.module.css';

/**
 * SocialMedias component renders the social medias links of the application.
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
    <div>
      <a 
        href="https://github.com/your-profile" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={classNames(
          styles.socialLink,
          active && styles.github
        )}
      >
        <FaGithub alt="Github" />
      </a>
      <a 
        href="https://facebook.com/your-profile" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={classNames(
          styles.socialLink,
          active && styles.facebook
        )}
      >
        <FaFacebook alt="Facebook" />
      </a>
      <a 
        href="https://linkedin.com/in/your-profile" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={classNames(
          styles.socialLink,
          active && styles.linkedin
        )}
      >
        <FaLinkedin alt="LinkedIn" />
      </a>
      <FaExternalLinkAlt 
        className={styles.buttonLink} 
        alt="Links" 
        onClick={handleLinkClick} 
      />
    </div>
  );
};
