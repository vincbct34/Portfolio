/**
 * @file ToggleDarkMode.jsx is the component that allows users to toggle between dark and light modes.
 * The component is used in the Utils component.
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// Importing styles
import styles from './ToggleDarkMode.module.css';

/**
 * ToggleDarkMode component allows users to toggle between dark and light modes.
 * 
 * @param {Object} props - The properties object.
 * @param {function} props.handleChange - Function to handle the change event.
 * @param {boolean} props.isChecked - Boolean indicating if the toggle is checked.
 * @returns {JSX.Element} The rendered ToggleDarkMode component.
 */
export const ToggleDarkMode = ({ handleChange, isChecked }) => {
  // Hook to use the translation module
  const { t } = useTranslation("global");

  return (
    <div className={styles.toggleContainer}>
      <input
        type="checkbox"
        id="check"
        className={styles.toggle}
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">{t("darkMode.text")}</label>
    </div>
  );
};

ToggleDarkMode.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
