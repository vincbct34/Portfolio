import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Importing translation resources
import global_en from './locales/en/global.json';
import global_fr from './locales/fr/global.json';
// Importing main App component
import { App } from './App.jsx';
// Importing global styles
import './assets/styles/global.css';

/**
 * Initialize i18next for internationalization
 */
i18next.init({
  interpolation: { escapeValue: false }, // Disable escaping for interpolation
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if the current language is not available
  resources: {
    en: {
      global: global_en, // English translations
    },
    fr: {
      global: global_fr, // French translations
    },
  },
});

/**
 * Render the React application
 * 
 * Wrap the App component with the I18nextProvider to provide i18n context
 * 
 * @returns {JSX.Element} The rendered App component wrapped in I18nextProvider
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
