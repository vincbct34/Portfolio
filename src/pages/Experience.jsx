/**
 * @file Experience.jsx - This component displays the Experience section of the application.
 * The section showcases the user's documents, including a resume and degree, 
 * as well as various projects, along with their details and links.
 * 
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Importing images for experience previews
import cvPreview from '../assets/images/cvPreview.png';
import degreePreview from '../assets/images/degreePreview.png';
import portfolioPreview from '../assets/images/portfolioPreview.png';
import minishellPreview from '../assets/images/minishellPreview.png';
import rpgPreview from '../assets/images/rpgPreview.png';
import settingupPreview from '../assets/images/settingupPreview.png';
import publipostagePreview from '../assets/images/publipostagePreview.png';

// Importing PDF files for download
import cvPdf from '../assets/files/Cv.pdf';
import degreePdf from '../assets/files/Degree.pdf';

// Importing icons for navigation
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

// Importing custom components
import { InfiniteCarousel } from "../components/InfiniteCarousel/InfiniteCarousel";
import { ProjectCard } from "../components/ProjectCard";

const Experience = () => {
  const { t } = useTranslation('global');

  // Array of images and corresponding PDFs for download
  const images = [ cvPreview, degreePreview ];
  const pdfs = [ cvPdf, degreePdf ];
  const fileNames = [ t('experience.resume'), t('experience.degree') ];

  // Array of project objects containing details for each project
  const projects = [
    {
      title: 'Portfolio',
      image: portfolioPreview,
      description: t('experience.cards.portfolio.description'),
      skills: ['React', 'Tailwind CSS', 'Vite'],
      link: 'https://github.com/vincbct34/Portfolio'
    },
    {
      title: 'Minishell',
      image: minishellPreview,
      description: t('experience.cards.minishell.description'),
      skills: ['C', t('experience.cards.memory'), 'Parsing', 'Shell'],
      link: 'https://github.com/MyEPITECH-Tek1/EPITECH-Tek1/tree/main/Mandatory%20Units/Unix%20System%20Programming/My_minishell_2'
    },
    {
      title: 'RPG',
      image: rpgPreview,
      description: t('experience.cards.rpg.description'),
      skills: ['C', t('experience.cards.memory'), 'Parsing', t('experience.cards.graphical')],
      link: 'https://github.com/MyEPITECH-Tek1/EPITECH-Tek1/tree/main/Mandatory%20Units/Graphical%20Programming/My_rpg'
    },
    {
      title: 'Setting Up',
      image: settingupPreview,
      description: t('experience.cards.settingUp.description'),
      skills: ['C', 'Parsing'],
      link: 'https://github.com/MyEPITECH-Tek1/EPITECH-Tek1/tree/main/Mandatory%20Units/Elementary%20Programming%20in%20C/Setting%20Up'
    },
    {
        title: t('experience.cards.publipostage.title'),
        image: publipostagePreview,
        description: t('experience.cards.publipostage.description'),
        skills: ['Electron', 'React', 'Vite', 'SQLite', 'Python'],
        link: ''
    }
  ];

  // State management for current index and fading effect
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Function to navigate to the previous image
  const prevImage = () => {
    setIsLoading(true);
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsFading(false);
    }, 200);
  };

  // Function to navigate to the next image
  const nextImage = () => {
    setIsLoading(true);
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFading(false);
    }, 200);
  };

  return (
    <section id="experience" className="w-full bg-light-first dark:bg-dark-first text-dark-first dark:text-light-first">
      <div className="flex flex-col justify-center items-center h-80 overflow-hidden">
        {/* Infinite carousel displaying skills */}
        <InfiniteCarousel title={t('experience.skills')} />
      </div>
      <div className="flex flex-col justify-center items-center pb-10">
        <h2 className="text-xl font-bold my-10">{t('experience.documents')}</h2>
        <div className="flex justify-center items-center">
          {/* Navigation buttons for images */}
          <button onClick={prevImage} className="pr-10" disabled={isLoading}>
            <FaArrowAltCircleLeft size={40} className={`transition-all duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo ${isLoading ? 'opacity-50' : 'opacity-100'}`} />
          </button>
          {/* Displaying current image with fading effect */}
          {isLoading ? (
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-dark-first dark:bg-light-first animate-bounce [animation-delay:.7s]"></div>
              <div className="w-4 h-4 rounded-full bg-dark-first dark:bg-light-first animate-bounce [animation-delay:.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-dark-first dark:bg-light-first animate-bounce [animation-delay:.7s]"></div>
            </div>
          ) : (
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className={`w-1/2 object-contain transition-opacity duration-200 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
            />
          )}
          <button onClick={nextImage} className="pl-10" disabled={isLoading}>
            <FaArrowAltCircleRight size={40} className={`transition-all duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo ${isLoading ? 'opacity-50' : 'opacity-100'}`} />
          </button>
        </div>
        {/* Download button for the current PDF */}
        <a
          href={pdfs[currentIndex]}
          download
          className="mt-6 px-4 py-2 bg-primary text-white rounded transition-all duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo"
        >
          {t('experience.download')} {fileNames[currentIndex]}
        </a>
      </div>
      <h2 className="text-4xl font-bold my-10 text-center">{t('experience.projects')}</h2>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center gap-8 text-justify">
          {/* Mapping through projects to display ProjectCard components */}
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              skills={project.skills}
              link={project.link}
            />
          ))}
        </div>
        <a
          href="https://github.com/vincbct34"
          className="text-2xl font-bold my-10 text-center transition-all duration-300 hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('experience.moreProjects')}
        </a>
      </div>
    </section>
  );
};

export default Experience;
