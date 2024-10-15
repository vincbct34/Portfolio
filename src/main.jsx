/**
 * @file main.jsx - The root file of the application responsible for rendering the App component and initializing i18next for internationalization.
 * It sets up the i18next translation provider and applies global styles.
 * 
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Importing translation files for English and French
import global_en from './locales/en/global.json';
import global_fr from './locales/fr/global.json';

// Importing global styles (CSS)
import './assets/styles/global.css';

// Importing the main App component
import { App } from './App.jsx';

/**
 * Initialize i18next for translation handling. 
 * It defines the default language ('en' for English) and provides fallback options.
 */
i18next.init({
  interpolation: { escapeValue: false }, // Prevents XSS by not escaping strings
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if the selected one is unavailable
  resources: {
    en: {
      global: global_en, // English translation resource
    },
    fr: {
      global: global_fr, // French translation resource
    },
  },
});

// Rendering the App component and wrapping it with I18nextProvider for translations
ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
