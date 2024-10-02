import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

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
    <div className="fixed bottom-5 right-5 z-10">
      <input
        type="checkbox"
        id="check"
        className="invisible"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check" className="flex items-center text-lg cursor-pointer transition-colors duration-250">
        <span className={`block h-6 w-12 rounded-full transition-all duration-250 ${isChecked ? 'bg-gray-800 border-gray-400' : 'bg-gray-300 border-gray-200'} border`}></span>
        <span className={`block h-6 w-6 rounded-full border border-gray-400 bg-white absolute transition-transform duration-250 transform ${isChecked ? 'translate-x-6' : 'translate-x-0'}`}></span>
        <span className="ml-2">{t("darkMode.text")}</span>
      </label>
    </div>
  );
};

ToggleDarkMode.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
