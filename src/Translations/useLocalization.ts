import {useEffect} from 'react';
import dayjs from 'dayjs';
import {useTranslation} from 'react-i18next';

import {TLanguageResourceKey} from './Languages';
import {RootState} from '@Store/index';
import {setLanguage} from '@Store/Slices/systemSlice';
import {useAppDispatch, useAppSelector} from '@Hooks/Hooks';

export function useInitLocalization() {
  const {i18n} = useTranslation();
  const language = useAppSelector((state: RootState) => state.system.language);

  useEffect(() => {
    i18n.changeLanguage(language);
    dayjs.locale(language);
  }, []);
}

export function useLocalization() {
  const {t, i18n} = useTranslation();
  const dispatch = useAppDispatch();

  const changeLanguage = (language: TLanguageResourceKey) => {
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
    dayjs.locale(language);
  };

  return {
    changeLanguage,
    translate: t,
    currentLanguage: i18n.language as TLanguageResourceKey,
  };
}
