import React from 'react';
import Link from 'next/link';

const HeroSection = () => (
  <section className="relative h-[calc(100vh-6rem)] w-full flex flex-col justify-center items-center overflow-hidden">
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle at center, #9EAEA2 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    />

    <h1 className="z-10 font-serif text-[12vw] leading-none font-black text-zinc-300 uppercase tracking-tighter select-none">
      Exploration
    </h1>

    <div className="absolute bottom-16 right-8 md:right-16 md:w-2/5 z-20 text-right text-lg md:text-2xl font-medium leading-relaxed">
      <p>
        Navigating the intersection of complex data and human-centric design.
        Building responsible AI interfaces with a strong ethical compass and a passion for clarity.
      </p>
    </div>
  </section>
);

const CaseStudiesAction = () => (
  <section id="cases" className="bg-[#F4EDE3] py-32 flex flex-col items-center justify-center">
    <h2 className="font-serif text-[#1A2B3C] text-[10vw] mb:text-8xl font-bold uppercase tracking-tight mb-12">
      Pathways
    </h2>
    
    <Link 
      href="/cases"
      className="bg-[#9EAEA2] text-[#1A2B3C] px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#1A2B3C] hover:text-[#F4EDE3] transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1"
    >
      Explore Cases
    </Link>
  </section>
);

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <CaseStudiesAction />
    </main>
  );
}