import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaHome, FaArrowCircleLeft } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { GrContact } from 'react-icons/gr';
import { SiAboutdotme } from 'react-icons/si';

export const Navbar = () => {
  const { t } = useTranslation("global");
  const windowWidth = window.innerWidth;
  const [isNavVisible, setIsNavVisible] = useState(false);

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
              <a href="#home" className="p-4 rounded-full transition duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo hover:bg-gray-200">
                <FaHome size={24} />
              </a>
              <a href="#about" className="p-4 rounded-full transition duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo hover:bg-gray-200">
                <SiAboutdotme size={24} />
              </a>
              <a href="#experience" className="p-4 rounded-full transition duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo hover:bg-gray-200">
                <RiComputerLine size={24} />
              </a>
              <a href="#contact" className="p-4 rounded-full transition duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo hover:bg-gray-200">
                <GrContact size={24} />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-1/3 h-full bg-light-second dark:bg-dark-second text-dark-first dark:text-light-first flex ml-72 items-center flex-row">
          <a href="#home" className="flex flex-col justify-center items-center w-1/4 mt-4 group transition-all duration-300 hover:mt-0">
            <FaHome size={40} />
            <p className="text-sm xl:text-xl opacity-0 transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">{t("navbar.home")}</p>
          </a>
          <a href="#about" className="flex flex-col justify-center items-center w-1/4 mt-4 group transition-all duration-300 hover:mt-0">
            <SiAboutdotme size={40} />
            <p className="text-sm xl:text-xl opacity-0 transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">{t("navbar.about")}</p>
          </a>
          <a href="#experience" className="flex flex-col justify-center items-center w-1/4 mt-4 group transition-all duration-300 hover:mt-0">
            <RiComputerLine size={40} />
            <p className="text-sm xl:text-xl opacity-0 transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">{t("navbar.experience")}</p>
          </a>
          <a href="#contact" className="flex flex-col justify-center items-center w-1/4 mt-4 group transition-all duration-300 hover:mt-0">
            <GrContact size={40} />
            <p className="text-sm xl:text-xl opacity-0 transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">{t("navbar.contact")}</p>
          </a>
        </div>
      )}
    </>
  );
};
