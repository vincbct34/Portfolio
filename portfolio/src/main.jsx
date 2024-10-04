/**
 * @file main.jsx is the root file of the application
 * @author Vincent Bichat <vincent260705@gmail.com>
 */

import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Importing translations
import global_en from './locales/en/global.json';
import global_fr from './locales/fr/global.json';

// Importing global styles
import './assets/styles/global.css';

// Importing App component
import { App } from './App.jsx';

// Initializing i18next, for translations
i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
  },
});

// Rendering the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
