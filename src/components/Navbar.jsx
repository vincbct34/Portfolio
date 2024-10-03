/**
 * @file Navbar.jsx is the component that displays the navbar of the application.
 * The navbar is displayed on the top of the application, and contains links to the different pages of the application.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SlArrowUp } from 'react-icons/sl';
import { FaHome } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { GrContact } from 'react-icons/gr';
import { SiAboutdotme } from 'react-icons/si';

/**
 * Navbar is the component that displays the navbar of the application.
 * 
 * @returns {JSX.Element} The Navbar component.
 */
export const Navbar = () => {
  // Refs to the links and the container
  const linksRef = useRef(null);
  const containerRef = useRef(null);
  // Translation function
  const { t } = useTranslation("global");
  // Location of the current page
  const location = useLocation();

  // State to show the links
  const [showLinks, setShowLinks] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Links to be displayed in the navbar
  const links = [
    {
      id: 1,
      url: '/',
      text: t("links.home"),
      icon: (
        <span className="opacity-0 transform scale-100 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-125">
          <FaHome size={20} />
        </span>
      ),
      currentPage: <FaHome size={20} />,
    },
    {
      id: 2,
      url: '/about',
      text: t("links.about"),
      icon: (
        <span className="opacity-0 transform scale-100 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-125">
          <SiAboutdotme size={20} />
        </span>
      ),
      currentPage: <SiAboutdotme size={20} />,
    },
    {
      id: 3,
      url: '/experience',
      text: t("links.experience"),
      icon: (
        <span className="opacity-0 transform scale-100 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-125">
          <RiComputerLine size={20} />
        </span>
      ),
      currentPage: <RiComputerLine size={20} />,
    },
    {
      id: 4,
      url: '/contact',
      text: 'Contact',
      icon: (
        <span className="opacity-0 transform scale-100 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-125">
          <GrContact size={20} />
        </span>
      ),
      currentPage: <GrContact size={20} />,
    },
  ];

  // Function to toggle the links
  const toggleLinks = () => {
    setShowLinks((prevState) => !prevState);
    setIsClicked((prevState) => !prevState);
  };

  // Effect to set the height of the container, for the transition effect
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    containerRef.current.style.height = showLinks ? `${linksHeight}px` : '0px';
  }, [showLinks]);

  // Icon of the current page
  const currentPageLink = links.find((link) => link.url === location.pathname);
  const currentPageLogo = currentPageLink ? currentPageLink.currentPage : <FaHome size={20} />;

  return (
    <div>
      <nav className="fixed flex flex-col items-center text-center left-1/2 -translate-x-1/2 top-28 z-10 md:gap-10 2xl:top-10">
        <div className="hidden flex-col justify-center items-center md:flex">
          {currentPageLogo}
        </div>
        <button
          onClick={toggleLinks}
          className={`w-5 text-xl cursor-pointer transition duration-300 ease-in-out ${isClicked ? "rotate-180 -translate-y-10" : ''}`}
        >
          <SlArrowUp />
        </button>
        <div
          ref={containerRef}
          className="overflow-hidden transition-height duration-500 ease"
          style={{ height: '0px' }}
        >
          <div className="flex justify-center gap-5" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <Link key={id} to={url} className="flex flex-col items-center gap-2 font-bold transition duration-300 pb-10 ease group hover:translate-y-2">
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
