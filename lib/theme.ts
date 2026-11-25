'use client';

import { useState, useEffect } from 'react';

export const LANGUAGE_STORAGE_KEY = 'star-portfolio-language';
export const THEME_STORAGE_KEY = 'star-portfolio-theme';

export function getThemeColors(isDarkMode: boolean) {
  return {
    bg: isDarkMode ? 'bg-[#0C0E0D]' : 'bg-[#F5F1E7]',
    text: isDarkMode ? 'text-[#ECE9E2]' : 'text-[#0C0E0D]',
    subBg: isDarkMode ? 'bg-[#141816]' : 'bg-[#EFECE4]',
    border: isDarkMode ? 'border-[#ECE9E2]/15' : 'border-[#0C0E0D]/15',
    accentText: isDarkMode ? 'text-[#B8C0BC]' : 'text-[#526158]',
    cardBg: isDarkMode ? 'bg-[#0C0E0D]' : 'bg-[#ECE9E2]',
    asideBg: isDarkMode ? 'bg-[#ECE9E2] text-[#0C0E0D]' : 'bg-[#0C0E0D] text-[#ECE9E2]',
    buttonPrimary: isDarkMode
      ? 'bg-[#ECE9E2] text-[#0C0E0D] border-[#ECE9E2] hover:bg-transparent hover:text-[#ECE9E2]'
      : 'bg-[#0C0E0D] text-[#ECE9E2] border-[#0C0E0D] hover:bg-transparent hover:text-[#0C0E0D]',
  };
}

export function useThemeAndLang(initialLang: 'en' | 'sv' = 'sv') {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [lang, setLang] = useState<'en' | 'sv'>(initialLang);

  useEffect(() => {
    const syncFromCookies = () => {
      const cookies = document.cookie.split(';');

      const themeCookie = cookies.find((c) => c.trim().startsWith(`${THEME_STORAGE_KEY}=`));
      if (themeCookie) {
        setIsDarkMode(themeCookie.split('=')[1] === 'dark');
      }

      const langCookie = cookies.find((c) => c.trim().startsWith(`${LANGUAGE_STORAGE_KEY}=`));
      if (langCookie) {
        const storedLang = langCookie.split('=')[1] as 'en' | 'sv';
        if (storedLang === 'en' || storedLang === 'sv') setLang(storedLang);
      }
    };

    syncFromCookies();
    window.addEventListener('themeChanged', syncFromCookies);
    return () => window.removeEventListener('themeChanged', syncFromCookies);
  }, []);

  return {
    isDarkMode,
    lang,
    colors: getThemeColors(isDarkMode),
  };
}
