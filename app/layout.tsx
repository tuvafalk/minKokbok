import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Header from '../components/header/Header'

export const metadata: Metadata = {
  title: 'Tuva | Portfolio',
  description: 'AI Ethics & Frontend Development',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-[#F5F1E7] text-[#1A2B3C] selection:bg-[#E36959] selection:text-[#F4EDE3] pt-[76px]">
        <Header />
        {children}
      </body>
    </html>
  );
}