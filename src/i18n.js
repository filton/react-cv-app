import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from '../public/assets/i18n/translations/en.json';
import translationGER from '../public/assets/i18n/translations/ger.json';
import translationCRO from '../public/assets/i18n/translations/cro.json';

const resources = {
 en: {
   translation: translationEN,
 },
 ger: {
   translation: translationGER,
 },
 cro: {
   translation: translationCRO
 }
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources,
    // backend: {
    //   loadPath: '/react-cv-app/assets/assets/i18n/{{ns}}/{{lng}}.json'
    // },
    fallbackLng: 'en',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true
    }
  })

export default i18n