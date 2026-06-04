import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import translationFR from './locales/fr/common.json';
import translationEN from './locales/en/common.json';
import translationES from './locales/es/common.json';
import translationHT from './locales/ht/common.json';

const resources = {
  fr: { translation: translationFR },
  en: { translation: translationEN },
  es: { translation: translationES },
  ht: { translation: translationHT }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'es', 'ht'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;