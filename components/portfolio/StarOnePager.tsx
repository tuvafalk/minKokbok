'use client';

import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import StarHeader from '@/components/header/StarHeader';

const LANGUAGE_STORAGE_KEY = 'star-portfolio-language';

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

// Edge-to-edge Grommet Divider (Sträcker sig över hela skärmbredden)
const GrommetDivider = () => (
  <div className="w-full h-8 opacity-25 border-y border-current flex items-center justify-around px-6 my-12 overflow-hidden" aria-hidden="true">
    {[...Array(24)].map((_, i) => (
      <span key={i} className="w-2 h-2 rounded-full border border-current bg-transparent inline-block" />
    ))}
  </div>
);

export default function HomePostPunk({ initialLang = 'sv' }: { initialLang?: 'en' | 'sv' }) {
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [lang, setLang] = useState(initialLang);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // --- REN PALETT (Blå/grönt borttaget i Light Mode, strikt ull/papper & bläcksvart) ---
  const colors = {
    bg: isDarkMode ? 'bg-[#0C0E0D]' : 'bg-[#F5F1E7]',
    text: isDarkMode ? 'text-[#ECE9E2]' : 'text-[#0C0E0D]',
    subBg: isDarkMode ? 'bg-[#141816]' : 'bg-[#EFECE4]',
    border: isDarkMode ? 'border-[#ECE9E2]/15' : 'border-[#0C0E0D]/15',
    accentText: isDarkMode ? 'text-[#B8C0BC]' : 'text-[#526158]',
    cardBg: isDarkMode ? 'bg-[#0C0E0D]' : 'bg-[#ECE9E2]',
    asideBg: isDarkMode ? 'bg-[#ECE9E2] text-[#0C0E0D]' : 'bg-[#0C0E0D] text-[#ECE9E2]',
    buttonPrimary: isDarkMode 
      ? 'bg-[#ECE9E2] text-[#0C0E0D] border-[#ECE9E2] hover:bg-transparent hover:text-[#ECE9E2]' 
      : 'bg-[#0C0E0D] text-[#ECE9E2] border-[#0C0E0D] hover:bg-transparent hover:text-[#0C0E0D]',
  };

  const heroSlides = [
    {
      type: 'quote',
      tag: lang === 'sv' ? 'Kärninsikt // 01' : 'Core Insights // 01',
      quote: lang === 'sv' 
        ? 'Varje arkitektur kodar in ett antagande om vem som har agens — och vem som förväntas foga sig.' 
        : 'Every architecture encodes an assumption about who holds agency—and who is expected to comply.',
      footer: lang === 'sv' ? 'Kombinerar tekniskt utförande med en nyfikenhet på människor och konsekvens.' : 'Combining technical execution with a relentless curiosity about people and impact.'
    },
    {
      type: 'image',
      tag: lang === 'sv' ? 'Zine Plåt // 02 (Personligt)' : 'Zine Plate // 02 (Personal)',
      src: '/images/tuva-portrait.jpg',
      caption: lang === 'sv' ? 'Umeå — Utanför skärmen & i koden.' : 'Umeå — Away from the glowing screen.'
    },
    {
      type: 'quote',
      tag: lang === 'sv' ? 'Kärninsikt // 03' : 'Core Insights // 03',
      quote: lang === 'sv' 
        ? 'Teknik utan maktanalys är bara sofistikerad försköning av status quo.' 
        : 'Technology without power analysis is just sophisticated beautification of the status quo.',
      footer: lang === 'sv' ? 'Socio-teknisk granskning med knivsegg.' : 'Socio-technical auditing with an edge.'
    }
  ];

  const nextSlide = () => setCarouselIndex((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCarouselIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'sv' : 'en';
    document.cookie = `${LANGUAGE_STORAGE_KEY}=${nextLang}; Path=/; Max-Age=31536000; SameSite=Lax`;
    setLang(nextLang);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("falktuva@proton.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentSlide = heroSlides[carouselIndex];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${colors.bg} ${colors.text}`}>

      <StarHeader />

      {/* Zine sub-strip (Edge-to-edge) */}
      <div className={`w-full px-6 md:px-12 py-2 border-b text-[11px] font-mono uppercase tracking-widest flex justify-between items-center ${colors.border} ${colors.subBg}`}>
        <span className="opacity-75">
            <span className="w-2.5 h-2.5 rounded-full border border-current bg-transparent inline-block" /> ★ ZINE EDITION v2.6
        </span>
        <div className="flex items-center gap-4">
          <button onClick={toggleLang} className="hover:underline font-semibold">
            [ LANG: {lang.toUpperCase()} ]
          </button>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="hover:underline font-semibold">
            [ THEME: {isDarkMode ? 'LIGHT' : 'DARK'} ]
          </button>
        </div>
      </div>

      <main className="w-full pb-16">

        {/* --- HERO SECTION --- */}
        <section className={`border-b ${colors.border}`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.55fr_1fr]">
            
            <div className={`p-6 sm:p-10 lg:py-16 lg:px-10 border-b lg:border-b-0 lg:border-r ${colors.border} opacity-90 relative overflow-hidden`}>
              <StarIcon className={`w-72 h-72 opacity-[0.06] -rotate-12 absolute -right-16 -bottom-20 pointer-events-none fill-current`} />

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.2rem] font-normal leading-[0.98] tracking-tight mb-6">
                {lang === "en" ? (
                  <>I work between people, systems, and the <em className={`italic ${colors.accentText} underline decoration-1 underline-offset-8`}>future</em> we’re building.</>
                ) : (
                  <>Teknik är inte neutral. <em className={`italic ${colors.accentText} underline decoration-1 underline-offset-8`}>Den är makt.</em></>
                )}
              </h1>

              <div className="space-y-3 text-base md:text-[1rem] max-w-[64ch] leading-relaxed opacity-85">
                <p>
                  {lang === "sv"
                    ? "Jag kom till tekniken genom nyfikenhet, en ihållande frustration över trasiga system och insikten om att teknik aldrig är neutral — den är ett maktutövande."
                    : "I came to technology through curiosity, a persistent frustration with broken systems, and the realization that technology is never neutral—it is an exercise of power."}
                </p>
                <p>
                  {lang === "sv"
                    ? "Jag verkar i utrymmet mellan strategi och utförande: skär genom bruset, granskar strukturerna bakom koden och omvandlar komplexa socio-tekniska realiteter till system där människan faktiskt sitter kvar vid ratten."
                    : "I operate in the space between strategy and execution: cutting through the noise, auditing the structures behind the code, and translating complex socio-technical realities into systems where humans actually stay at the wheel."}
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

            {/* Zine Karusell */}
            <aside className={`p-6 sm:p-10 lg:py-14 lg:px-10 flex flex-col justify-between relative min-h-[420px] ${colors.asideBg}`}>
              <div>
                <div className="flex justify-between items-center border-b border-current opacity-20 pb-3 mb-6 font-mono text-[11px] uppercase tracking-widest">
                  <span>{currentSlide.tag}</span>
                  <span className="font-bold">[{carouselIndex + 1} / {heroSlides.length}]</span>
                </div>

                <StarIcon className="w-8 h-8 fill-current -rotate-12 mb-4" />

                {currentSlide.type === 'quote' ? (
                  <div className="transition-opacity duration-300">
                    <blockquote className="font-serif text-2xl md:text-[1.8rem] leading-[1.15] mb-4">
                      “{currentSlide.quote}”
                    </blockquote>
                  </div>
                ) : (
                  <div className="space-y-2 transition-opacity duration-300">
                    <div className="relative aspect-[4/3] w-full overflow-hidden border border-current opacity-90">
                      <Image 
                        src={currentSlide.src || '/images/tuva-portrait.jpg'}
                        alt="Tuva Falk personal plate"
                        fill
                        className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <p className="font-mono text-xs opacity-75">{currentSlide.caption || "Umeå"}</p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-current opacity-20 flex justify-between items-center mt-4">
                <p className="font-mono text-xs opacity-75">
                  {currentSlide.type === 'quote' ? currentSlide.footer : (lang === 'sv' ? 'Zine plåt arkiverad.' : 'Archived zine plate.')}
                </p>
                <div className="flex gap-2 font-mono text-xs font-bold">
                  <button 
                    onClick={prevSlide}
                    className="px-2.5 py-1 border border-current hover:bg-current hover:text-inherit transition-colors"
                    aria-label="Previous slide"
                  >
                    ←
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="px-2.5 py-1 border border-current hover:bg-current hover:text-inherit transition-colors"
                    aria-label="Next slide"
                  >
                    →
                  </button>
                </div>
              </div>

            </aside>
          </div>
        </section>

        {/* --- METHOD / HOW I WORK --- */}
        <section id="how-i-work" className={`border-b ${colors.border}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-normal">
                {lang === "sv" ? "Hur jag tar an problem" : "How I Approach Things"}
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
                    ? "Jag bygger responsiva gränssnitt med ren kod och strukturell avsikt som faktiskt löser verkliga problem."
                    : "I build responsive, well-crafted interfaces. I care about clean code, good design, and making sure software actually solves real problems."}
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
                    ? "Innan sjösättning granskar jag underliggande risker, antaganden och ramverk för att skydda mänsklig agens."
                    : "Before shipping, I like to zoom out. Why are we building this? How will we evaluate if it works? What are the blind spots we aren't seeing yet?"}
                </p>
              </div>

              <div className="p-6 md:p-8 transition-colors">
                <span className={`font-mono text-xs ${colors.accentText} uppercase tracking-widest block mb-3`}>
                  [ ★ 03 // CHALLENGE ]
                </span>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight mb-2">
                  {lang === "sv" ? "Makt & kritik" : "Power & Critique"}
                </h3>
                <p className="text-sm opacity-75 leading-relaxed">
                  {lang === "sv"
                    ? "Ställer de obekväma frågorna om vem som gynnas av en arkitektur, vem som marginaliseras och var de blinda fläckarna finns."
                    : "Every system distributes power. I ask the uncomfortable questions about who benefits from an architecture, who gets erased, and where the blind spots hide."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <GrommetDivider />

        {/* --- PROJECTS --- */}
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
                    {lang === "sv" ? "Läs fullständig fallstudie" : "Read full case study"} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <GrommetDivider />

        {/* --- CREATIVE LAB --- */}
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
                  {lang === "sv" ? "Atmosfäriska spelprototyper (Darkwell, Realm Walker), oberoende byggen och webbexperiment." : "Atmospheric game prototypes (Darkwell, Realm Walker), independent builds, and web experiments."}
                </p>
              </div>

              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider opacity-90 group-hover:translate-x-1 transition-transform">
                {lang === "sv" ? "Utforska sandlåda" : "Explore playground"} →
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
                  {lang === "sv" ? "Analoga blyertsporträtt, bläckstudier och visuella anteckningar bortom skärmen." : "Analog pencil portraits, ink studies, and visual notes created away from the glowing screen."}
                </p>
              </div>

              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider opacity-90 group-hover:translate-x-1 transition-transform">
                {lang === "sv" ? "Visa plåtar" : "View plates"} →
              </span>
            </Link>
          </div>
        </section>

        {/* --- CONTACT PANEL (Edge-to-edge utan ruta) --- */}
        <section id="contact" className={`mt-16 py-12 px-6 md:px-10 max-w-7xl mx-auto border-y ${colors.border}`}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-normal leading-[1.08] max-w-3xl mb-4">
            {lang === "sv" ? "Vill du bygga något meningsfullt ihop? Låt oss höras." : "Want to build something meaningful together? Let’s talk."}
          </h2>
          <p className="opacity-75 max-w-[54ch] text-sm sm:text-base leading-relaxed mb-8">
            {lang === "sv"
              ? "Alltid öppen för intressanta teknikprojekt, forskningssamarbeten eller samtal om hur vi bygger bättre system."
              : "Always open to interesting engineering projects, research collaborations, or conversations about how we build better tech."}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleCopyEmail}
              className={`font-mono text-xs uppercase tracking-wider px-5 py-3 border font-semibold transition-colors cursor-pointer ${colors.buttonPrimary}`}
            >
              {copied ? "Kopierad: falktuva@proton.me ✓" : "Copy Email: falktuva@proton.me"}
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

        <footer className={`mt-12 py-6 px-6 md:px-10 font-mono text-xs uppercase tracking-wider opacity-60 flex flex-wrap justify-between items-center gap-3 mx-auto ${colors.border}`}>
          <span>© 2026 Tuva Falk</span>
          <span>★ BUILD // AUDIT // CHALLENGE</span>
        </footer>

      </main>
    </div>
  );
}