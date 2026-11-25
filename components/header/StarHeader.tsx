'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useThemeAndLang } from '@/lib/theme';

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-[#ECE9E2] -rotate-12">
      <path d="M12 1.5l3.09 6.26L22 8.77l-5 4.87 1.18 6.88L12 17.27l-6.18 3.25L7 13.64 2 8.77l6.91-1.01L12 1.5z" />
    </svg>
  );
}

export default function StarHeader() {
  const { lang, isDarkMode, colors } = useThemeAndLang();
  const [domainSuffix, setDomainSuffix] = useState('SE');

  useEffect(() => {
    const hostname = window.location.hostname;
    if (hostname.endsWith('.com')) {
      setDomainSuffix('COM');
    } else {
      setDomainSuffix('SE');
    }
  }, []);

  const toggleLang = () => {
    const nextLang = lang === 'sv' ? 'en' : 'sv';
    document.cookie = `star-portfolio-language=${nextLang}; path=/; max-age=31536000`;
    window.dispatchEvent(new Event('themeChanged'));
  };

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? 'light' : 'dark';
    document.cookie = `star-portfolio-theme=${nextTheme}; path=/; max-age=31536000`;
    window.dispatchEvent(new Event('themeChanged'));
  };

  return (
    <>
      <header className={`w-full px-6 md:px-10 py-4 flex justify-between items-center border-b transition-colors duration-300 ${colors.border} ${colors.bg} ${colors.text}`}>
        <Link href="/" className="font-mono text-xs font-bold uppercase tracking-[0.18em] flex items-center gap-1.5">
          TUVA FALK <span className="text-[#B23A25]">///</span> {domainSuffix}
        </Link>
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
          <Link href="/#how-i-work" className="opacity-75 transition-opacity hover:opacity-100">
            {lang === 'sv' ? 'Hur jag arbetar' : 'How I Work'}
          </Link> 
          <Link href="/cases" className="opacity-75 transition-opacity hover:opacity-100">
            {lang === 'sv' ? 'Cases' : 'Cases'}
          </Link>
          <Link href="/creative" className="opacity-75 transition-opacity hover:opacity-100">
            Creative Lab
          </Link>
          <Link
            href="/#contact"
            className={`border px-4 py-2 font-semibold transition-colors ${colors.buttonPrimary}`}
          >
            {lang === 'sv' ? 'Kontakt' : 'Contact'}
          </Link>
        </nav>
      </header>

      <div className={`w-full px-6 md:px-12 py-2 border-b text-[11px] font-mono uppercase tracking-widest flex justify-between items-center transition-colors duration-300 ${colors.border} ${colors.subBg} ${colors.text}`}>
        <span className="opacity-75 flex items-center gap-2">
          ★ [ EDITION: TF-2026 ]
        </span>
        <div className="flex items-center gap-4">
          <button onClick={toggleLang} className="hover:underline font-semibold cursor-pointer">
            [ LANG: {lang.toUpperCase()} ]
          </button>
          <button onClick={toggleTheme} className="hover:underline font-semibold cursor-pointer">
            [ THEME: {isDarkMode ? 'LIGHT' : 'DARK'} ]
          </button>
        </div>
      </div>
    </>
  );
}