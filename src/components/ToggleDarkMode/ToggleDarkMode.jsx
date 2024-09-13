import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// Importing styles for the toggle component
import styles from './ToggleDarkMode.module.css';

/**
 * ToggleDarkMode Component
 * 
 * Renders a toggle switch for dark mode functionality.
 * 
 * @param {Object} props - Component properties
 * @param {Function} props.handleChange - Function to handle the change event of the toggle switch
 * @param {boolean} props.isChecked - Boolean value indicating whether the toggle is checked (dark mode enabled)
 * 
 * @returns {JSX.Element} The rendered ToggleDarkMode component
 */
export const ToggleDarkMode = ({ handleChange, isChecked }) => {
  // Access translation function from i18next
  const { t } = useTranslation("global");

  return (
    <div className={styles.toggleContainer}>
      {/* Input checkbox for toggling dark mode */}
      <input
        type="checkbox"
        id="check"
        className={styles.toggle}
        onChange={handleChange}
        checked={isChecked}
      />
      {/* Label for the checkbox */}
      <label htmlFor="check">{t("darkMode.text")}</label>
    </div>
  );
};

// Define PropTypes for the component to validate props
ToggleDarkMode.propTypes = {
  handleChange: PropTypes.func.isRequired, // Function to handle toggle changes
  isChecked: PropTypes.bool.isRequired,    // Boolean indicating if toggle is checked
};
