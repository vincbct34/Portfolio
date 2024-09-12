import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SlArrowUp } from 'react-icons/sl';
import { FaHome } from 'react-icons/fa';
import { RiComputerLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";

import './Navbar.css';

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const linksRef = useRef(null);
  const containerRef = useRef(null);
  const { t } = useTranslation("global");

  const links = [
    {
      id: 1,
      url: '/',
      text: t("links.home"),
      icon: <span className="icon"><FaHome size={20}/></span>,
    },
    {
      id: 2,
      url: '/about',
      text: t("links.about"),
      icon: <span className="icon"><SiAboutdotme size={20}/></span>,
    },
    {
      id: 3,
      url: '/projects',
      text: t("links.projects"),
      icon: <span className="icon"><RiComputerLine size={20}/></span>,
    },
    {
      id: 4,
      url: '/contact',
      text: 'Contact',
      icon: <span className="icon"><GrContact size={20}/></span>,
    },
  ];

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      containerRef.current.style.height = `${linksHeight}px`;
    } else {
      containerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <div>
      <nav>
        <button
          onClick={toggleLinks}
          className={isClicked ? 'clicked' : ''}
        >
          <SlArrowUp />
        </button>
        <div className="links-container" ref={containerRef} style={{ height: '0px', overflow: 'hidden', transition: 'height 0.3s ease' }}>
          <div className="links" ref={linksRef}>
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
      </nav>
    </div>
  );
};
