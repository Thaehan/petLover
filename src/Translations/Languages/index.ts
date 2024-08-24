import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import vi from './vi.json';
import en from './en.json';

export type TLanguageResource = {
  vi: {translation: Object};
  en: {translation: Object};
};
export type TLanguageResourceKey = keyof TLanguageResource;

const resources: TLanguageResource = {
  vi: {translation: vi},
  en: {translation: en},
};

const DEFAULT_LANGUAGE: TLanguageResourceKey = 'vi';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
