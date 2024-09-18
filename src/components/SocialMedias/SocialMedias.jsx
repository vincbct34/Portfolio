import { useState } from 'react';
import classNames from 'classnames';
import { FaExternalLinkAlt, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

import styles from './SocialMedias.module.css';

export const SocialMedias = () => {
  const [active, setActive] = useState(false);

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
