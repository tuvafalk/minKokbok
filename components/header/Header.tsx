"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Cases', href: '/cases' },
  { label: 'Story', href: '/#story' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 transition-all duration-500 print:hidden ${
        isScrolled 
          ? 'text-[#1A2B3C] bg-[#F5F1E7]/70 backdrop-blur-sm py-4 hover:bg-[#F5F1E7]/90 hover:backdrop-blur-sm'
             : 'text-[#1A2B3C] bg-[#F5F1E7]/90 backdrop-blur-sm py-8'
      }`}
    >

      <Link href="/" className="font-serif text-3xl font-bold tracking-widest uppercase">
      
        TUVA
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
}