import PropTypes from 'prop-types';
import { FaReact, FaMemory } from 'react-icons/fa';
import { TbBrandCoinbase } from 'react-icons/tb';
import { SiPowershell, SiGraphite } from 'react-icons/si';
import { DiGhostSmall } from 'react-icons/di';
import { SiTailwindcss, SiVite } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

/**
 * Icons object mapping skill names to their respective React icons.
 * Each key is a string representing a skill, and each value is a React icon component.
 */
const icons = {
  React: <FaReact />,
  'Tailwind CSS': <SiTailwindcss />,
  Vite: <SiVite />,
  C: <TbBrandCoinbase />,
  Shell: <SiPowershell />,
  Parsing: <DiGhostSmall />,
  'Memory handling': <FaMemory />,
  'Gestion Mémoire': <FaMemory />,
  Graphical: <SiGraphite />,
  Graphique: <SiGraphite />
};

/**
 * @component ProjectCard
 * 
 * The ProjectCard component displays information about a specific project.
 * It includes the project's title, image, description, skills used, and a link to the project.
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the project.
 * @param {string} props.image - The URL of the project's image.
 * @param {string} props.description - A brief description of the project.
 * @param {Array<string>} props.skills - An array of skills used in the project.
 * @param {string} props.link - The URL to the project.
 * 
 * @returns {JSX.Element} The ProjectCard component.
 */
export const ProjectCard = ({ title, image, description, skills, link }) => {
  // Hook for translation to support internationalization.
  const { t } = useTranslation('global');

  return (
    <div className="w-full max-w-sm p-6 bg-gradient-light dark:bg-gradient-dark dark:bg-dark-second rounded transition-all duration-300 ease-in-out hover:shadow-darkProfileShadow hover:dark:shadow-lightProfileShadow transform hover:scale-105">
      {/* Project image */}
      <img src={image} alt={title} className="w-full max-h-40 object-scale-down rounded-md transition-all duration-700 ease-in-out hover:max-h-64" />
      {/* Project content */}
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        {/* Skills with icons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skills.map((skill, index) => (
            <span key={index} className="flex items-center gap-2 py-1 px-2 rounded-full text-lg font-extrabold">
              {icons[skill] && <span className="text-xl">{icons[skill]}</span>} {/* Display the icon if it exists */}
              {skill}
            </span>
          ))}
        </div>
        {/* Button/Link to project */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded transition-all duration-300 hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo"
        >
          {t('experience.seeProject')} {/* Translated text for project link */}
        </a>
      </div>
    </div>
  );
};

// Prop types for the ProjectCard component
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired
};
