"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Cases', href: '/cases' },
  { label: 'Story', href: '/story' },
  { label: 'Creative', href: '/creative' },
  { label: 'Contact', href: '/contact' }
];

function isCurrentLink(pathname: string, href: string) {
  return pathname === href || (href === '/cases' && pathname.startsWith('/cases/'));
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-[#F5F1E7] px-5 py-4 text-[#1A2B3C] shadow-sm md:px-8 md:py-5 print:hidden"
    >
      <Link
        href="/"
        onClick={closeMenu}
        className="font-serif text-2xl font-bold uppercase tracking-widest md:text-3xl"
      >
        TUVA
      </Link>

      <nav aria-label="Main navigation" className="hidden items-center gap-8 font-medium md:flex">
        {NAVIGATION_LINKS.map((link) => {
          const isCurrent = isCurrentLink(pathname, link.href);

          return (
            <Link
              key={link.label}
              href={link.href}
              aria-current={isCurrent ? 'page' : undefined}
              className={`transition-colors hover:text-[#718278] ${
                isCurrent ? 'font-semibold text-[#718278] underline decoration-[#9EAEA2] underline-offset-8' : ''
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden items-center gap-6 font-medium md:flex">
        <a
          href="/Tuva CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#E36959]"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/tuvafalk/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#E36959]"
        >
          LinkedIn
        </a>
      </div>

      <button
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1A2B3C]/20 bg-white/70 text-[#1A2B3C] transition-colors hover:bg-white md:hidden"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="h-5 w-5"
        >
          {isMenuOpen ? (
            <path d="m6 6 12 12M18 6 6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
        className="absolute left-0 right-0 top-full border-t border-[#1A2B3C]/10 bg-[#F5F1E7] px-4 pb-8 pt-4 shadow-lg md:hidden"
      >
          <div className="flex flex-col">
            {NAVIGATION_LINKS.map((link) => {
              const isCurrent = isCurrentLink(pathname, link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`border-b border-[#1A2B3C]/10 py-3.5 pl-3 font-medium transition-colors hover:text-[#718278] ${
                    isCurrent
                      ? 'border-l-2 border-l-[#9EAEA2] bg-[#9EAEA2]/10 text-[#52645a]'
                      : 'text-[#1A2B3C]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex gap-8 pt-4 text-sm font-medium">
              <a href="/Tuva CV.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                Resume
              </a>
              <a href="https://www.linkedin.com/in/tuvafalk/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                LinkedIn
              </a>
            </div>
          </div>
      </nav>
    </header>
  );
}
