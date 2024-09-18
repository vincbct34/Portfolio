import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './ToggleDarkMode.module.css';

export const ToggleDarkMode = ({ handleChange, isChecked }) => {
  
  const { t } = useTranslation("global");

  return (
    <div className={styles.toggleContainer}>
      {}
      <input
        type="checkbox"
        id="check"
        className={styles.toggle}
        onChange={handleChange}
        checked={isChecked}
      />
      {}
      <label htmlFor="check">{t("darkMode.text")}</label>
    </div>
  );
};

ToggleDarkMode.propTypes = {
  handleChange: PropTypes.func.isRequired, 
  isChecked: PropTypes.bool.isRequired,    
};
