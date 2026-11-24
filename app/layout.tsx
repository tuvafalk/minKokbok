import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tuva Falk | Portfolio',
  description: 'AI Ethics, analysis and development',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-[#F5F1E7] text-[#1A2B3C] selection:bg-[#E36959] selection:text-[#F4EDE3]">
        {children}
      </body>
    </html>
  );
}