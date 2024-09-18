import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SlArrowUp } from 'react-icons/sl';
import { FaHome } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { GrContact } from 'react-icons/gr';
import { SiAboutdotme } from 'react-icons/si';

import styles from './Navbar.module.css';

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false); 
  const [isClicked, setIsClicked] = useState(false); 

  const linksRef = useRef(null); 
  const containerRef = useRef(null); 
  const { t } = useTranslation("global"); 
  const location = useLocation(); 

  
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

  
  const toggleLinks = () => {
    setShowLinks(prevState => !prevState);
    setIsClicked(prevState => !prevState);
  };

  
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    
    containerRef.current.style.height = showLinks ? `${linksHeight}px` : '0px';
  }, [showLinks]);

  
  const currentPageLogo = links.find(link => link.url === location.pathname)?.icon;

  return (
    <div>
      <nav>
        {}
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
            {}
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
        {}
        <div className={styles.currentPageLogo}>
          {currentPageLogo}
        </div>
      </nav>
    </div>
  );
};
