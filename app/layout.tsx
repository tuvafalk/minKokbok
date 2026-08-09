import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tuva | Portfolio',
  description: 'AI Ethics & Frontend Development',
};

const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Cases', href: '/#cases' },
  { label: 'Story', href: '/#story' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Contact', href: '/contact' }
];

const Header = () => (
  <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 bg-[#F5F1E7]/90 backdrop-blur-sm text-[#1A2B3C]">
    <Link href="/" className="font-serif text-3xl font-bold tracking-widest uppercase">
      Tuva
    </Link>
    
    <nav className="hidden md:flex gap-8 font-medium">
      {NAVIGATION_LINKS.map(link => (
        <Link 
          key={link.label} 
          href={link.href} 
          className="hover:text-[#9EAEA2] transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>

    <div className="flex gap-6 font-medium">
       <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#E36959] transition-colors">Resume</a>
       <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E36959] transition-colors">LinkedIn</a>
    </div>
  </header>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-[#F5F1E7] text-[#1A2B3C] selection:bg-[#E36959] selection:text-[#F4EDE3] pt-24">
        <Header />
        {children}
      </body>
    </html>
  );
}