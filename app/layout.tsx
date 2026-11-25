import type { Metadata } from 'next';
import './globals.css';
import StarHeader from '@/components/header/StarHeader';
import StarFooterWithNav from '@/components/footer/StarFooter';

export const metadata: Metadata = {
  title: 'Tuva Falk /// Archive & Portfolio',
  description: 'Technical auditing, power dynamics, and systems architecture.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className="font-sans antialiased flex flex-col min-h-screen selection:bg-[#3B5747] selection:text-[#ECE9E2]">
        <StarHeader />
        <main className="flex-grow">
          {children}
        </main>
        <StarFooterWithNav />
      </body>
    </html>
  );
}