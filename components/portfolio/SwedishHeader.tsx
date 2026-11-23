'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Work', href: '#arbete' },
  { label: 'Metod', href: '#metod' },
  { label: 'Story', href: '#berattelse' },
  { label: 'Creative', href: '#lekrum' },
  { label: 'Contact', href: '#kontakt' },
];

export default function SwedishHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#121417] bg-[#EAE7E2]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <Link href="#top" onClick={() => setOpen(false)} className="font-mono text-xs font-bold uppercase tracking-[0.18em]">
          TUVA FALK <span className="text-[#B23A25]">///</span> SE
        </Link>

        <nav aria-label="Huvudnavigation" className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-wider md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-[#B23A25]">{link.label}</a>
          ))}
        </nav>

        <a href="#kontakt" className="hidden border border-[#121417] bg-[#121417] px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-[#EAE7E2] md:block">
          Kontakt
        </a>

        <button
          type="button"
          aria-label={open ? 'Stäng navigation' : 'Öppna navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center border border-[#121417] font-mono md:hidden"
        >
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav aria-label="Mobilnavigation" className="border-t border-[#121417] bg-[#EAE7E2] px-4 py-3 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-[#121417]/15 py-3 font-mono text-xs uppercase tracking-wider">
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
