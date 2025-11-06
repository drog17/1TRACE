// src/useTranslation.tsx (переименованный и исправленный)
'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { translations, Lang, T } from '@/locales/HeaderTrans'; // Импорт переводов

// --- 1. Определение Контекста ---
interface LangContextType {
  lang: Lang;
  switchLang: (newLang: Lang) => void;
  t: T; 
}

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru"); 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedLang = localStorage.getItem('lang') as Lang | null;
    if (savedLang && translations.hasOwnProperty(savedLang)) {
        setLang(savedLang);
    }
  }, []);
  const switchLang = (newLang: Lang) => {
    if (translations.hasOwnProperty(newLang)) {
        setLang(newLang);
        localStorage.setItem('lang', newLang);
    }
  };

  const t = translations[lang];

  // ⭐️ ИСПРАВЛЕНИЕ: Добавлен явный return с Provider'ом
  return (
    <LanguageContext.Provider value={{ lang, switchLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// --- 3. Хук для использования ---
export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    // ВАЖНО: Убедитесь, что ваш компонент обернут в <LanguageProvider>
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return context;
}