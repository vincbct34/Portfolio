/**
 * @file Navbar.jsx is the component that displays the navbar of the application.
 * The navbar is displayed on the top or on the right of the application, and contains links to the different parts of the application.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import { useTranslation } from 'react-i18next';
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
  // Translation hook
  const { t } = useTranslation("global");

  return (
    <>
    </>
  );
};