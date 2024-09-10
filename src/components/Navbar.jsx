import { useState, useRef, useEffect } from 'react';
import { SlArrowUp } from 'react-icons/sl';
import { useTranslation } from 'react-i18next';
// import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

import './Navbar.css';

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [shownPage, setShownPage] = useState('');

  const linksRef = useRef(null);
  const containerRef = useRef(null);
  const { t } = useTranslation("global");

  const links = [
    {
      id: 1,
      url: '/',
      text: t("links.home"),
    },
    {
      id: 2,
      url: '/about',
      text: t("links.about"),
    },
    {
      id: 3,
      url: '/projects',
      text: t("links.projects"),
    },
    {
      id: 4,
      url: '/contact',
      text: 'Contact',
    },
  ];

  // const social = [
  //   {
  //     id: 1,
  //     url: 'https://github.com/vincbct34',
  //     icon: <FaGithub />,
  //   },
  //   {
  //     id: 2,
  //     url: 'https://www.linkedin.com/in/vincent-bichat/',
  //     icon: <FaLinkedin />,
  //   },
  //   {
  //     id: 3,
  //     url: 'https://www.facebook.com/vincentbct34/',
  //     icon: <FaFacebook />,
  //   },
  // ];

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
              const { id, url, text } = link;
              return (
                <a key={id} href={url}>
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};
