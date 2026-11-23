import type { Metadata } from 'next';
import './globals.css';
import HeaderSwitch from '../components/header/HeaderSwitch';
import { MAIN_PAGE_VARIANT } from '@/components/portfolio/config';

export const metadata: Metadata = {
  title: MAIN_PAGE_VARIANT === 'swedish' ? 'Tuva Falk | Teknikkritisk utveckling' : 'Tuva Falk | Portfolio',
  description:
    MAIN_PAGE_VARIANT === 'swedish'
      ? 'AI-etisk analys, teknikutveckling och systemkritisk granskning.'
      : 'AI Ethics & Frontend Development',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={MAIN_PAGE_VARIANT === 'swedish' ? 'sv' : 'en'} className="scroll-smooth">
      <body className="font-sans antialiased bg-[#F5F1E7] text-[#1A2B3C] selection:bg-[#E36959] selection:text-[#F4EDE3]">
        <HeaderSwitch />
        {children}
      </body>
    </html>
  );
}