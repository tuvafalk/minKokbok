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
      <body className="font-sans antialiased bg-[#ECE9E2] text-[#0C0E0D] selection:bg-[#3B5747] selection:text-[#ECE9E2]">
        {children}
      </body>
    </html>
  );
}