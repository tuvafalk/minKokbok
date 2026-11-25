'use client';

import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useThemeAndLang } from "@/lib/theme";

interface ProjectItem {
  id: string;
  category: { en: string; sv: string };
  title: string;
  summary: { en: string; sv: string };
  tags: string[];
}

const projects: ProjectItem[] = [
  {
    id: "ai-evaluation-framework",
    category: { en: "Research & UX", sv: "Forskning & UX" },
    title: "Interdisciplinary AI Evaluation Framework",
    summary: {
      en: "Designed a mixed-methods framework (N=66) combining qualitative user experience metrics with technical audits at AI Policy Lab. Won Best Paper at USCCS 2025.",
      sv: "Designade ett ramverk med blandade metoder (N=66) som kombinerar kvalitativa UX-mått med tekniska granskningar på AI Policy Lab. Vann Best Paper på USCCS 2025."
    },
    tags: ["EU AI Act", "AI Auditing", "UX Metrics"],
  },
  {
    id: "public-sector-digital-hr",
    category: { en: "Systems & Ethics", sv: "System & Etik" },
    title: "Public Sector Digital HR & Risk Study",
    summary: {
      en: "Conducted technical feasibility and ethics reviews for adding preventative work-life balance tools to high-security public infrastructure.",
      sv: "Genomförde tekniska genomförbarhets- och etikgranskningar för att integrera förebyggande verktyg för balans i livet i högsäkerhetsinfrastruktur."
    },
    tags: ["Risk Analysis", "Power Dynamics", "Privacy"],
  },
  {
    id: "bioprocess",
    category: { en: "Frontend & Agent Workflows", sv: "Frontend & Agentflöden" },
    title: "Bioprocess Control & Agent Interfaces",
    summary: {
      en: "Building real-time batch tracking interfaces and prototyping MCP-based AI agent workflows for high-stakes laboratory environments at Sartorius.",
      sv: "Bygger gränssnitt för batchspårning i realtid och prototyper för MCP-baserade AI-agentflöden i laboratoriemiljöer hos Sartorius."
    },
    tags: ["React", "TypeScript", "Human Agency"],
  },
];

const StarIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M12 1.5l3.09 6.26L22 8.77l-5 4.87 1.18 6.88L12 17.27l-6.18 3.25L7 13.64 2 8.77l6.91-1.01L12 1.5z" />
  </svg>
);

const GrommetDivider = () => (
  <div className="w-full h-8 opacity-25 border-y border-current flex items-center justify-around px-6 my-12 overflow-hidden" aria-hidden="true">
    {[...Array(24)].map((_, i) => (
      <span key={i} className="w-2 h-2 rounded-full border border-current bg-transparent inline-block" />
    ))}
  </div>
);

export default function StarIndex({ initialLang = 'sv' }: { initialLang?: 'en' | 'sv' }) {
  const [copied, setCopied] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const { lang, colors } = useThemeAndLang(initialLang);
  
const heroSlides = [
    {
      type: 'quote',
      tag: lang === 'sv' ? 'ARKIV // KÄRNTES' : 'ARCHIVE // CORE THESIS',
      quote: lang === 'sv' ? 'Teknik är inte neutral. Den är makt.' : 'Technology is not neutral. It is power.',
      footer: 'Tuva Falk, 2026.',
      isHeroQuote: true
    },
    {
      type: 'quote',
      tag: lang === 'sv' ? 'ARKIV // INSIKT 01' : 'ARCHIVE // INSIGHT 01',
      quote: 'The primary barrier in technology isn’t a lack of data, but a lingering power imbalance that renders marginalized perspectives performative rather than substantive.', 
      footer: 'Falk, 2026. Epistemic Limits and Formal Logic.'
    },
    {
      type: 'image',
      tag: lang === 'sv' ? 'PLÅT // ARKIV' : 'PLATE // ARCHIVE',
      src: '/images/tuva-arctiffrontiers2.JPG',
      caption: 'Tromsø — Arctic Frontiers.'
    },
    {
      type: 'quote',
      tag: lang === 'sv' ? 'ARKIV // INSIKT 02' : 'ARCHIVE // INSIGHT 02',
      quote: 'Power is not distributed equally in the world, and data power is no exception. Data feminism begins with the premise that standardization is a form of power.',
      footer: 'Catherine D’Ignazio & Lauren F. Klein. Data Feminism, 2020.'
    },
    {
      type: 'quote',
      tag: lang === 'sv' ? 'ARKIV // INSIKT 03' : 'ARCHIVE // INSIGHT 03',
      quote: 'Data is not raw; it is cooked. It is a product of social, political, and historical contexts.',
      footer: 'Geoffrey Bowker & Susan Leigh Star. Sorting Things Out: Classification and Its Consequences.'
    },
    {
      type: 'image',
      tag: lang === 'sv' ? 'PLÅT // ARKIV' : 'PLATE // ARCHIVE',
      src: '/images/tuva-portrait.jpg',
      caption: 'Umeå University - TAIGA.'
    },
    {
      type: 'quote',
      tag: lang === 'sv' ? 'ARKIV // INSIKT 04' : 'ARCHIVE // INSIGHT 04',
      quote: 'Just as digitizing Indigenous perspectives fails on WEIRD models, identifying structural harm using tools trained on the very systems that created it risks missing the erasure of survivor voices.',
      footer: 'Falk, 2026. Epistemic Limits and Formal Logic.'
    },
    {
      type: 'image',
      tag: lang === 'sv' ? 'PLÅT // ARKIV' : 'PLATE // ARCHIVE',
      src: '/images/tuva-arcticfrontiers.JPG',
      caption: 'Tromsø — Arctic Frontiers.'
    },
  ];

  const nextSlide = () => setCarouselIndex((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCarouselIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("falktuva@proton.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentSlide = heroSlides[carouselIndex];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${colors.bg} ${colors.text}`}>
      <main className="w-full">
        <section className={`border-b ${colors.border}`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.55fr_1fr]">
            
            <div className={`p-6 sm:p-10 lg:py-16 lg:px-10 border-b lg:border-b-0 lg:border-r ${colors.border} opacity-90 relative overflow-hidden`}>
              <StarIcon className={`w-72 h-72 opacity-[0.06] -rotate-12 absolute -right-16 -bottom-20 pointer-events-none fill-current`} />

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.2rem] font-normal leading-[0.98] tracking-tight mb-6">
                {lang === "en" ? (
                  <>Hi I'm <em className={`italic ${colors.accentText} underline decoration-1 underline-offset-8`}>Tuva Falk.</em></>
                ) : (
                  <>Hej /// <em className={`italic ${colors.accentText} underline decoration-1 underline-offset-8`}>Tuva Falk.</em></>
                )}
              </h1>

              <div className="space-y-3 text-base md:text-[1rem] max-w-[64ch] leading-relaxed opacity-85">
                <p>
                  {lang === "sv"
                    ? "Jag kom till tekniken genom nyfikenhet, en ganska ihållande frustration över trasiga system och insikten om att mjukvara och AI aldrig är neutrala verktyg. Vem som gynnas av en arkitektur och vem som raderas är ingen slump."
                    : "I came to technology through curiosity, a persistent frustration with broken systems, and the realization that software and AI are never neutral tools. Who benefits from an architecture and who gets erased is no accident."}
                </p>  
                <p>
                  {lang === "sv"
                    ? "Jag granskar det som tagits för givet, skär genom bruset och bygger system där människan faktiskt behåller kontrollen."
                    : "I audit the taken-for-granted, cut through the noise, and build systems where humans actually retain control."}
                </p>
               
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className={`font-mono text-xs uppercase tracking-wider px-5 py-3 border font-semibold transition-colors ${colors.buttonPrimary}`}
                >
                  {lang === "sv" ? "Se projekt ↓" : "See Projects ↓"}
                </a>
              </div>
            </div>

            <aside className={`p-6 sm:p-8 lg:py-12 lg:px-10 flex flex-col justify-between relative min-h-[500px] ${colors.asideBg}`}>
              <div>
                <div className="flex justify-between items-center border-b border-current opacity-20 pb-3 mb-6 font-mono text-[11px] uppercase tracking-widest">
                  <span>{currentSlide.tag}</span>
                  <span className="font-bold">[{carouselIndex + 1} / {heroSlides.length}]</span>
                </div>
                {currentSlide.type === 'quote' ? (
                  <div className="transition-opacity duration-300 h-[350px] flex flex-col justify-between">
                    <StarIcon className="w-9 h-8 fill-current -rotate-12 mb-4" />
                    
                    {currentSlide.isHeroQuote ? (
                      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[0.98] tracking-tight mb-4">
                        {lang === "en" ? (
                          <>Technology is not neutral. <em className={`italic ${colors.accentText} underline decoration-1 underline-offset-8`}>It is power.</em></>
                        ) : (
                          <>Teknik är inte neutral. <em className={`italic ${colors.accentText} underline decoration-1 underline-offset-8`}>Den är makt.</em></>
                        )}
                      </h1>
                    ) : (
                      <blockquote className="font-serif text-2xl md:text-[1.8rem] leading-[1.15] mb-4">
                        “{currentSlide.quote}”
                      </blockquote>
                    )}

                    <p className="font-mono text-xs opacity-75">{currentSlide.footer || ""}</p>
                  </div>
                ) : (
                  <div className="space-y-2 transition-opacity duration-300 h-[350px] flex flex-col justify-between">
                    <div className="relative aspect-[4/3] w-full overflow-hidden border border-current opacity-90">
                      <Image 
                        src={currentSlide.src || '/images/tuva-portrait.jpg'}
                        alt="Tuva Falk portrait"
                        fill
                        className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <p className="font-mono text-xs opacity-75">{currentSlide.caption || ""}</p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-current opacity-20 flex justify-between items-center mt-4">
                <p className="font-mono text-xs opacity-75">★ // LOGG</p>
                <div className="flex gap-2 font-mono text-xs font-bold">
                  <button 
                    onClick={prevSlide}
                    className="px-2.5 py-1 border border-current hover:bg-current hover:text-inherit transition-colors cursor-pointer"
                    aria-label="Previous slide"
                  >
                    ←
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="px-2.5 py-1 border border-current hover:bg-current hover:text-inherit transition-colors cursor-pointer"
                    aria-label="Next slide"
                  >
                    →
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>

       <section id="how-i-work">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-normal">
                {lang === "sv" ? "Hur jag jobbar" : "How I Approach Things"}
              </h2>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-3 border ${colors.border}`}>
              <div className={`p-6 md:p-8 transition-colors border-b md:border-b-0 md:border-r ${colors.border}`}>
                <span className={`font-mono text-xs ${colors.accentText} uppercase tracking-widest block mb-3`}>
                  [ ★ 01 // BUILD ]
                </span>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight mb-2">
                  {lang === "sv" ? "System med avsikt" : "Systems with Intent"}
                </h3>
                <p className="text-sm opacity-75 leading-relaxed">
                  {lang === "sv"
                    ? "Skapar robusta gränssnitt och rena system som faktiskt löser faktiska problem."
                    : "Building robust interfaces and clean systems designed to solve actual problems."}
                </p>
              </div>

              <div className={`p-6 md:p-8 transition-colors border-b md:border-b-0 md:border-r ${colors.border}`}>
                <span className={`font-mono text-xs ${colors.accentText} uppercase tracking-widest block mb-3`}>
                  [ ★ 02 // AUDIT ]
                </span>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight mb-2">
                  {lang === "sv" ? "Etik & genomförbarhet" : "Ethics & Feasibility"}
                </h3>
                <p className="text-sm opacity-75 leading-relaxed">
                  {lang === "sv"
                    ? "Analyserar risker, antaganden och ramverk innan implementering för att säkerställa att tekniken håller."
                    : "Before shipping, I like to zoom out. Why are we building this? How will we evaluate if it works? What are the blind spots we aren't seeing yet?"}
                </p>
              </div>

              <div className="p-6 md:p-8 transition-colors">
                <span className={`font-mono text-xs ${colors.accentText} uppercase tracking-widest block mb-3`}>
                  [ ★ 03 // CHALLENGE ]
                </span>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight mb-2">
                  {lang === "sv" ? "Utmanar strukturer" : "Power & Critique"}
                </h3>
                <p className="text-sm opacity-75 leading-relaxed">
                  {lang === "sv"
                    ? "Ställer de nödvändiga frågorna om vem som gynnas, vem som missas och hur koden påverkar."
                    : "Asking the necessary questions about who benefits, who gets missed, and how the code impacts reality."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <GrommetDivider />

        <section id="projects" className="py-6 max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-8 flex flex-wrap justify-between items-end gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-normal">
                {lang === "sv" ? "Projekt & Frågeställningar" : "Projects & Questions"}
              </h2>
            </div>
          </div>

          <div className="grid gap-6">
            {projects.map((item) => (
              <article
                key={item.id}
                className={`group p-6 md:p-10 border transition-all duration-300 relative ${colors.border} ${colors.cardBg} hover:border-current`}
              >
                <div className="max-w-3xl">
                  <span className={`font-mono text-xs ${colors.accentText} uppercase tracking-wider block mb-2`}>
                    ★ {item.category[lang]}
                  </span>

                  <h3 className="font-serif text-2xl md:text-3xl font-normal mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base opacity-80 leading-relaxed mb-5">
                    {item.summary[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className={`font-mono text-xs uppercase border px-2.5 py-1 ${colors.border} ${colors.subBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/cases/${item.id}`}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider underline decoration-1 underline-offset-4 opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {lang === "sv" ? "Läs hela caset →" : "Read full case study →"} <span aria-hidden="true"></span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <GrommetDivider />

       <section id="lab" className="py-6 max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-normal">
              Creative Lab
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/creative"
              className={`group p-6 md:p-10 border transition-all duration-300 flex flex-col justify-between min-h-[260px] ${colors.border} ${colors.cardBg} hover:border-current`}
            >
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-normal mb-3">
                  {lang === "sv" ? "Sandlåda" : "Sandbox"}
                </h3>
                <p className="text-sm opacity-75 leading-relaxed max-w-md">
                  {lang === "sv" 
                    ? "Atmosfäriska spelprototyper (Darkwell, Realm Walker) och egna webbexperiment." 
                    : "Atmospheric game prototypes (Darkwell, Realm Walker) and independent web experiments."}
                </p>
              </div>

              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider opacity-90 group-hover:translate-x-1 transition-transform">
                {lang === "sv" ? "Utforska sandlåda" : "Explore sandbox"} →
              </span>
            </Link>

            <Link
              href="/gallery"
              className={`group p-6 md:p-10 border transition-all duration-300 flex flex-col justify-between min-h-[260px] ${colors.border} ${colors.cardBg} hover:border-current`}
            >
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-normal mb-3">
                  {lang === "sv" ? "Galleri" : "Gallery"}
                </h3>
                <p className="text-sm opacity-75 leading-relaxed max-w-md">
                  {lang === "sv" 
                    ? "Analoga blyertsporträtt, bläckstudier och visuella anteckningar." 
                    : "Analog pencil portraits, ink studies, and visual notes."}
                </p>
              </div>

              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider opacity-90 group-hover:translate-x-1 transition-transform">
                {lang === "sv" ? "Visa plåtar" : "View plates"} →
              </span>
            </Link>
          </div>
        </section>

        <section id="contact" className={`mt-16 py-12 px-6 md:px-10 max-w-7xl mx-auto ${colors.border}`}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-normal leading-[1.08] max-w-3xl mb-4">
            {lang === "sv" ? "Vill du bygga eller undersöka något ihop? Låt oss höras." : "Want to build or investigate something together? Let’s talk."}
          </h2>
          <p className="opacity-75 max-w-[54ch] text-sm sm:text-base leading-relaxed mb-8">
            {lang === "sv"
              ? "Alltid öppen för intressanta teknikprojekt, forskningssamarbeten eller skarpa samtal om hur vi ställer de rätta frågorna."
              : "Always open to interesting engineering projects, research collaborations, or sharp conversations about asking the right questions."}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleCopyEmail}
              className={`font-mono text-xs uppercase tracking-wider px-5 py-3 border font-semibold transition-colors cursor-pointer ${colors.buttonPrimary}`}
            >
              {copied 
                ? (lang === "sv" ? "Kopierad: falktuva@proton.me ✓" : "Copied: falktuva@proton.me ✓") 
                : (lang === "sv" ? "Kopiera Email: falktuva@proton.me" : "Copy Email: falktuva@proton.me") }
            </button>
            <a
              href="https://linkedin.com/in/tuvafalk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider px-5 py-3 border border-current opacity-80 hover:opacity-100 transition-opacity"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}