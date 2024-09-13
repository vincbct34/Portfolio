import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SlArrowUp } from 'react-icons/sl';
import { FaHome } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { GrContact } from 'react-icons/gr';
import { SiAboutdotme } from 'react-icons/si';

import styles from './Navbar.module.css';

/**
 * Navbar Component
 * 
 * Renders a responsive navigation bar with links and a toggle button.
 * 
 * @returns {JSX.Element} The rendered Navbar component
 */
export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false); // State to control the visibility of the links
  const [isClicked, setIsClicked] = useState(false); // State to control button style

  const linksRef = useRef(null); // Ref for measuring the height of the links container
  const containerRef = useRef(null); // Ref for applying height style to the container
  const { t } = useTranslation("global"); // Translation function from i18next
  const location = useLocation(); // Hook to get the current URL

  // Define navigation links with translation and icons
  const links = [
    {
      id: 1,
      url: '/',
      text: t("links.home"),
      icon: <span className={styles.icon}><FaHome size={20}/></span>,
    },
    {
      id: 2,
      url: '/about',
      text: t("links.about"),
      icon: <span className={styles.icon}><SiAboutdotme size={20}/></span>,
    },
    {
      id: 3,
      url: '/projects',
      text: t("links.projects"),
      icon: <span className={styles.icon}><RiComputerLine size={20}/></span>,
    },
    {
      id: 4,
      url: '/contact',
      text: 'Contact',
      icon: <span className={styles.icon}><GrContact size={20}/></span>,
    },
  ];

  // Toggle the visibility of the links
  const toggleLinks = () => {
    setShowLinks(prevState => !prevState);
    setIsClicked(prevState => !prevState);
  };

  // Effect to adjust the height of the container based on link visibility
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    // Apply height transition based on visibility
    containerRef.current.style.height = showLinks ? `${linksHeight}px` : '0px';
  }, [showLinks]);

  // Determine the current page's logo
  const currentPageLogo = links.find(link => link.url === location.pathname)?.icon;

  return (
    <div>
      <nav>
        {/* Button to toggle links visibility */}
        <button
          onClick={toggleLinks}
          className={isClicked ? styles.clicked : ''}
        >
          <SlArrowUp />
        </button>
        <div 
          className={styles.linksContainer} 
          ref={containerRef} 
          style={{ height: '0px', overflow: 'hidden', transition: 'height 0.5s ease' }}
        >
          <div className={styles.links} ref={linksRef}>
            {/* Render navigation links */}
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <Link key={id} to={url}>
                  {text} {icon}
                </Link>
              );
            })}
          </div>
        </div>
        {/* Display the current page's logo */}
        <div className={styles.currentPageLogo}>
          {currentPageLogo}
        </div>
      </nav>
    </div>
  );
};
