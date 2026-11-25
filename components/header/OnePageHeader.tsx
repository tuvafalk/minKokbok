'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Story', href: '#story' },
  { label: 'Creative', href: '#creative' },
  { label: 'Contact', href: '#contact' },
];

export default function OnePageHeader() {
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#173F3A]/10 bg-[#F3F0E6]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <Link
          href="#top"
          onClick={() => setOpen(false)}
          className="font-serif text-xl font-bold tracking-[0.12em] text-[#173F3A]"
        >
          TUVA FALK
        </Link>

        <nav aria-label="Portfolio sections" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#5F7E75] transition-colors hover:text-[#173F3A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:falktuva@proton.me"
          className="hidden rounded-full bg-[#173F3A] px-5 py-2.5 text-sm font-semibold text-[#F3F0E6] md:inline-flex"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#173F3A]/15 md:hidden"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {open ? '×' : '≡'}
          </span>
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile portfolio sections"
          className="border-t border-[#173F3A]/10 bg-[#F3F0E6] px-4 py-3 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#1A2B3C]/10 py-3 text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:falktuva@proton.me"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-[#173F3A] px-4 py-3 text-center text-sm font-semibold text-[#F3F0E6]"
          >
            Let&apos;s talk
          </a>
        </nav>
      )}
    </header>
  );
}
