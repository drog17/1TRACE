'use client';
import { useState, useEffect } from 'react';
import ru from '@/locales/ru.json';
import en from '@/locales/en.json';

type Lang = 'ru' | 'en';

export default function useTranslation() {
  const [lang, setLang] = useState<Lang>('ru');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Lang | null;
    if (savedLang) setLang(savedLang);
  }, []);

  const switchLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = lang === 'ru' ? ru : en;

  return { t, lang, switchLang };
}
