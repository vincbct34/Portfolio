import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaHome, FaArrowCircleLeft } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { GrContact } from 'react-icons/gr';
import { SiAboutdotme } from 'react-icons/si';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const { t } = useTranslation("global");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      {windowWidth < 768 ? (
        <div className="fixed flex right-0 top-1/2 transform -translate-y-1/2">
          <button 
            onClick={toggleNavbar} 
            className={`transition-all duration-300 p-2 bg-blue-500 text-white rounded ${
              isNavVisible ? 'mr-16 rotate-180' : 'mr-0'
            }`}
          >
            <FaArrowCircleLeft size={24} />
          </button>
          <div 
            className={`fixed right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${
              isNavVisible ? 'w-1/2' : 'w-0'
            } overflow-hidden`}
          >
            <div className="flex flex-col items-center justify-center h-full bg-white">
              <Link to="home" smooth={true} duration={500} className="cursor-pointer p-4 rounded-full transition duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo hover:bg-gray-200">
                <FaHome size={24} />
              </Link>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer p-4 rounded-full transition duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo hover:bg-gray-200">
                <SiAboutdotme size={24} />
              </Link>
              <Link to="experience" smooth={true} duration={500} className="cursor-pointer p-4 rounded-full transition duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo hover:bg-gray-200">
                <RiComputerLine size={24} />
              </Link>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer p-4 rounded-full transition duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo hover:bg-gray-200">
                <GrContact size={24} />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-1/3 h-full bg-light-second dark:bg-dark-second text-dark-first dark:text-light-first flex ml-72 items-center flex-row">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer flex flex-col justify-center items-center w-1/4 mt-4 group transition-all duration-300 hover:mt-0">
            <FaHome size={30} />
            <p className="text-sm xl:text-xl opacity-0 transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">{t("navbar.home")}</p>
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer flex flex-col justify-center items-center w-1/4 mt-4 group transition-all duration-300 hover:mt-0">
            <SiAboutdotme size={30} />
            <p className="text-sm xl:text-xl opacity-0 transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">{t("navbar.about")}</p>
          </Link>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer flex flex-col justify-center items-center w-1/4 mt-4 group transition-all duration-300 hover:mt-0">
            <RiComputerLine size={30} />
            <p className="text-sm xl:text-xl opacity-0 transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">{t("navbar.experience")}</p>
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer flex flex-col justify-center items-center w-1/4 mt-4 group transition-all duration-300 hover:mt-0">
            <GrContact size={30} />
            <p className="text-sm xl:text-xl opacity-0 transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">{t("navbar.contact")}</p>
          </Link>
        </div>
      )}
    </>
  );
};
