import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import cvPreview from '../assets/images/cvPreview.png';
import degreePreview from '../assets/images/degreePreview.png';
import portfolioPreview from '../assets/images/portfolioPreview.png';

import cvPdf from '../assets/files/cv.pdf';
import degreePdf from '../assets/files/degree.pdf';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import { InfiniteCarousel } from "../components/InfiniteCarousel/InfiniteCarousel";
import { ProjectCard } from "../components/ProjectCard";

const Experience = () => {
  const { t } = useTranslation('global');
  
  const images = [ cvPreview, degreePreview ];
  const pdfs = [ cvPdf, degreePdf ];
  const fileNames = [ t('experience.resume'), t('experience.degree') ];

  const projects = [
    {
      title: 'Portfolio',
      image: portfolioPreview,
      description: 'Portfolio interactif présentant mes compétences et projets.',
      skills: ['React', 'Tailwind CSS', 'Vite'],
      link: 'https://github.com/vincbct34/Portfolio'
    },
    {
      title: 'Minishell',
      image: minishellPreview,
      description: 'Portfolio interactif présentant mes compétences et projets.',
      skills: ['C', 'Memory handling', 'Parsing', 'Shell'],
      link: 'https://github.com/MyEPITECH-Tek1/EPITECH-Tek1/tree/main/Mandatory%20Units/Unix%20System%20Programming/My_minishell_2'
    },
    {
      title: 'RPG',
      image: rpgPreview,
      description: 'Portfolio interactif présentant mes compétences et projets.',
      skills: ['C', 'Memory handling', 'Parsing', 'Graphical'],
      link: 
    },
    {
      title: 'Setting Up',
      image: settingupPreview,
      description: 'Portfolio interactif présentant mes compétences et projets.',
      skills: ['C', 'Parsing'],
      link: 'https://github.com/MyEPITECH-Tek1/EPITECH-Tek1/tree/main/Mandatory%20Units/Elementary%20Programming%20in%20C/Setting%20Up'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const prevImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsFading(false);
    }, 200);
  };

  const nextImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFading(false);
    }, 200);
  };

  return (
    <section id="experience" className="w-full bg-light-first dark:bg-dark-first text-dark-first dark:text-light-first">
      <div className="flex flex-col justify-center items-center h-80 overflow-hidden">
        <InfiniteCarousel title={t('experience.skills')} />
      </div>
      <div className="flex flex-col justify-center items-center pb-10">
        <h2 className="text-4xl font-bold my-10">{t('experience.documents')}</h2>
        <div className="flex justify-center items-center">
          <button onClick={prevImage} className="p-10">
            <FaArrowAltCircleLeft size={40} className="transition-all duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo" />
          </button>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className={`w-1/2 object-contain transition-opacity duration-200 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
          />
          <button onClick={nextImage} className="p-10">
            <FaArrowAltCircleRight size={40} className="transition-all duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo" />
          </button>
        </div>
        <a
          href={pdfs[currentIndex]}
          download
          className="mt-6 px-4 py-2 bg-primary text-white rounded transition-all duration-300 ease-in-out hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo"
        >
          {t('experience.download')} {fileNames[currentIndex]}
        </a>
      </div>
      <h2 className="text-4xl font-bold my-10 text-center">{t('experience.projects')}</h2>
      <div className="flex flex-wrap justify-center gap-8">
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
    </section>
  );
};

export default Experience;
