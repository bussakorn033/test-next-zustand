import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

type TLanguage = 'en' | 'th';

export interface CustomTranslation {
  t: any;
  isEn: boolean;
  language: TLanguage;
  changeLanguage: (newLanguage: string) => void;
}

const useCustomTranslation = (): CustomTranslation => {
  const { i18n, t } = useTranslation();
  const language = useMemo(() => {
    if (['th-TH', 'th'].includes(i18n.language)) {
      return 'th';
    } else {
      return 'en';
    }
  }, [i18n.language]);

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
  };

  return {
    t,
    language: language,
    changeLanguage,
    isEn: language === 'en'
  };
};

export default useCustomTranslation;
