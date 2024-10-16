/**
 * @file Experience.jsx - This component displays the Experience page of the application.
 * The page provides a carousel of images with links to relevant documents, and a description of the projects done.
 * 
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useTranslation } from "react-i18next";

// Importing the InfiniteCarousel component
import { InfiniteCarousel } from "../components/InfiniteCarousel/InfiniteCarousel";

const Experience = () => {
  const { t } = useTranslation('global');

  return (
    <section id="experience" className="w-full bg-light-first dark:bg-dark-first text-dark-first dark:text-light-first">
      <div className="flex flex-col justify-center items-center h-96">
        <InfiniteCarousel title={t('experience.skills')} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="">{t('experience.projects')}</h2>
      </div>
    </section>
  );
}

export default Experience;