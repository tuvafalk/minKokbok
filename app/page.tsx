import React from 'react';
import Link from 'next/link';

const HeroSection = () => (
  <section className="relative h-[calc(100vh-6rem)] w-full flex flex-col justify-center items-center overflow-hidden bg-[#1A2B3C] text-[#F4EDE3]">
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle at center, #9EAEA2 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    />

    <h1 className="z-10 font-serif text-[12vw] leading-none font-black text-[#F4EDE3] uppercase tracking-tighter select-none">
      Exploration
    </h1>

    <div className="absolute bottom-16 right-8 z-20 text-right text-lg font-medium leading-relaxed text-[#F4EDE3] md:right-16 md:w-2/5 md:text-2xl">
      <p>
        Hi, I'm Tuva. I'm committed to creating technology that serves people and society, combining technical expertise with ethical insight to drive responsible innovation.
      </p>
    </div>
  </section>
);

const CaseStudiesAction = () => (
  <section id="cases" className="flex flex-col items-center justify-center bg-[#F4EDE3] px-6 py-32 text-center">
    <h2 className="mb-4 font-serif text-[10vw] font-bold uppercase tracking-tight text-[#1A2B3C] md:text-9xl">
      Pathways
    </h2>

    <p className="mb-10 max-w-2xl text-base leading-relaxed text-[#1A2B3C] md:text-xl">
      I thrive where technology meets humans, transforming needs into robust, high-quality solutions through clarity, collaboration, and purpose.
    </p>

    <Link
      href="/cases"
      className="rounded-full bg-[#9EAEA2] px-10 py-5 font-bold uppercase tracking-widest text-[#1A2B3C] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#1A2B3C] hover:text-[#F4EDE3] hover:shadow-xl"
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