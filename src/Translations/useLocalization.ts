import {useEffect} from 'react';
import dayjs from 'dayjs';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {TLanguageResource} from './Languages';
import {IRootState} from '@Store/index';
import {setLanguage} from '@Store/Reducers/systemReducer';

export function useInitLocalization() {
  const {i18n} = useTranslation();
  const language = useSelector((state: IRootState) => state.system.language);

  useEffect(() => {
    i18n.changeLanguage(language);
    dayjs.locale(language);
  }, []);
}

export function useLocalization() {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (language: keyof TLanguageResource) => {
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
    dayjs.locale(language);
  };

  return {
    changeLanguage,
    translate: t,
    currentLanguage: i18n.language as keyof TLanguageResource,
  };
}
