'use client';

import React, { useState } from "react";
import Link from 'next/link';
import { useThemeAndLang } from '@/lib/theme';

export function StarFooter() {
  const { lang, colors } = useThemeAndLang();

  return (
    <footer className={`w-full py-6 px-6 md:px-12 border-t font-mono text-xs uppercase tracking-wider transition-colors duration-300 ${colors.border} ${colors.subBg} ${colors.text}`}>
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 opacity-75">
        <div>
          <span>© 2026 Tuva Falk /// EDITION: TF-2026</span>
        </div>
        <div className="flex items-center gap-4">
          <span>[ UMEÅ, SE ]</span>
          <span>•</span>
          <span>★ BUILD // AUDIT // CHALLENGE</span>
        </div>
      </div>
    </footer>
  );
}

export default function StarFooterWithNav() {
  const { lang, colors } = useThemeAndLang();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("falktuva@proton.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className={`w-full py-8 px-6 md:px-12 border-t transition-colors duration-300 ${colors.border} ${colors.bg} ${colors.text}`}>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-center">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest opacity-60 block mb-1">
            [ SYSTEM INFO ]
          </span>
          <p className="font-serif text-base mb-1">Tuva Falk</p>
          <p className="text-[11px] font-mono opacity-75 max-w-xs leading-relaxed">
            {lang === 'sv' 
              ? 'Teknisk granskning, maktstrukturer och systemarkitektur.' 
              : 'Technical auditing, power dynamics, and systems architecture.'}
          </p>
        </div>

        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest opacity-60 block mb-1">
            [ INDEX ]
          </span>
          <ul className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs uppercase tracking-wider">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/cases" className="hover:underline">Cases</Link></li>
            <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link href="/creative" className="hover:underline">Lab</Link></li>
            <li>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="cursor-pointer"
              >
                {lang === 'sv' ? '↑ TOPP' : '↑ TOP'}
              </button>
            </li>
          </ul>
        </div>

        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest opacity-60 block mb-1">
            [ CONTACT ]
          </span>
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleCopyEmail}
              className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 border font-semibold transition-colors cursor-pointer ${colors.buttonPrimary}`}
            >
              {copied 
                ? (lang === "sv" ? "Kopierad ✓" : "Copied ✓") 
                : "falktuva@proton.me"}
            </button>
            <a
              href="https://linkedin.com/in/tuvafalk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 border border-current opacity-80 hover:opacity-100 transition-opacity"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      <div className={`w-full max-w-7xl mx-auto pt-4 border-t font-mono text-[11px] uppercase tracking-widest opacity-60 flex flex-wrap justify-between items-center gap-3 ${colors.border}`}>
        <span>© 2026 Tuva Falk /// EDITION: TF-2026</span>
        <div className="flex items-center gap-4">
          <span>★ BUILD // AUDIT // CHALLENGE</span>
        </div>
      </div>
    </footer>
  );
}