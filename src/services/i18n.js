import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global1 from '../translations/es.json';
import global2 from '../translations/en.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const resources = {
  en: {
    translation: global2.en
  },
  es: {
    translation: global1.es
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: null,
    interpolation: {
      escapeValue: false
    },
    resources
  });

export default i18n;
