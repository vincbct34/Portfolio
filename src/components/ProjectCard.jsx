import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';

const icons = {
  React: <FaReact />,
  'Tailwind CSS': <SiTailwindcss />,
  Vite: <SiVite />,
};

export const ProjectCard = ({ title, image, description, skills, link }) => {
  return (
    <div className="w-full max-w-md p-6 bg-gradient-light dark:bg-dark-second rounded transition-all duration-300 ease-in-out hover:shadow-darkProfileShadow hover:dark:shadow-lightProfileShadow transform hover:scale-105">
      {/* Image du projet */}
      <img src={image} alt={title} className="w-full max-h-40 object-scale-down rounded-md transition-all duration-700 ease-in-out hover:max-h-96" />
      {/* Contenu du projet */}
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        {/* Compétences avec icônes */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {skills.map((skill, index) => (
            <span key={index} className="flex items-center gap-2 py-1 px-2 rounded-full text-lg font-extrabold">
              {icons[skill] && <span className="text-xl">{icons[skill]}</span>}
              {skill}
            </span>
          ))}
        </div>
        {/* Bouton/Lien */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 rounded transition-all duration-300 hover:drop-shadow-darkLogo dark:hover:drop-shadow-lightLogo"
        >
          Voir plus
        </a>
      </div>
    </div>
  );
};
