import React, { useState } from 'react';
import Link from 'next/link';

interface Pillar {
  id: string;
  symbol: string;
  title: string;
  description: string;
}

interface FeaturedCase {
  slug: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
}

const PILLARS: Pillar[] = [
  {
    id: 'build',
    symbol: '[01]',
    title: 'Bygger',
    description:
      'vässade, hållbara gränssnitt där koden har ett faktiskt syfte – inte automatisering för automatiseringens skull.',
  },
  {
    id: 'audit',
    symbol: '[02]',
    title: 'Granskar',
    description:
      'AI-strategier, maktasymmetrier och regelverk (som EU AI Act) innan ogenomtänkta system skadar verkliga människor.',
  },
  {
    id: 'challenge',
    symbol: '[03]',
    title: 'Utmanar',
    description:
      'fasaden om att teknik är neutral. Kod bär på makt och politik. Människan ska styra maskinen – inte tvärtom.',
  },
];

const FEATURED_CASES: FeaturedCase[] = [
  {
    slug: 'ai-evaluation-framework',
    category: 'AI GOVERNANCE & UX',
    title: 'Interdisiplinärt utvärderingsramverk för AI',
    summary:
      'Utformade ett granskningsramverk (N=66) som förenar kvalitativa UX-mått med tekniska AI-audits vid AI Policy Lab. Belönad med Best Paper på USCCS 2025[cite: 1].',
    tags: ['EU AI ACT', 'AUDITING', 'UX METRICS'],
  },
  {
    slug: 'police-hr-feasibility',
    category: 'SOCIO-TEKNISK RISK',
    title: 'Digital HR & Riskanalys i Offentlig Sektor',
    summary:
      'Teknisk genomförbarhetsstudie och etikansökan för att integrera en förebyggande arbetslivsmodul i Polismyndighetens komplexa IT-miljö[cite: 1].',
    tags: ['RISKANALYS', 'MAKTMÄTNING', 'INTEGRITET'],
  },
  {
    slug: 'biopharma-human-in-the-loop',
    category: 'SYSTEM & KONTROLL',
    title: 'Human-in-the-Loop för Bioprocesser',
    summary:
      'Bygger realtidsgränssnitt för spårbarhet och prototyper för MCP-baserade AI-agenter i högintensiva miljöer hos Sartorius[cite: 1].',
    tags: ['REACT', 'TYPESCRIPT', 'AGENT-SYSTEM'],
  },
];

export default function PortfolioOnePagerSe() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@tuvafalk.se');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#EAE7E2] text-[#121417] selection:bg-[#B23A25] selection:text-[#EAE7E2]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#121417] bg-[#EAE7E2]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-mono text-xs font-bold tracking-widest uppercase">
            TUVA FALK <span className="text-[#B23A25]">///</span> SE
          </Link>

          <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-[#2C3531]">
            <a href="#work" className="hover:text-[#B23A25] transition-colors">
              Arbete
            </a>
            <Link href="/cases" className="hover:text-[#B23A25] transition-colors">
              Case
            </Link>
            <Link href="/playground" className="hover:text-[#B23A25] transition-colors">
              Playground
            </Link>
            <Link href="/gallery" className="hover:text-[#B23A25] transition-colors">
              Konst
            </Link>
            <a
              href="#contact"
              className="border border-[#121417] bg-[#121417] px-3 py-1.5 text-[#EAE7E2] hover:border-[#B23A25] hover:bg-[#B23A25] transition-colors"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <section className="border-b border-[#121417] py-20 md:py-28">
          <div className="mb-6 inline-block border border-[#2C3531] px-3 py-1 font-mono text-xs uppercase tracking-widest text-[#2C3531]">
            Umeå // Systemutveckling // Teknikkritisk Analys
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight leading-[1.05] md:text-7xl font-serif">
            Teknik är aldrig neutral.{' '}
            <span className="text-[#B23A25] block mt-2">Den är makt.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#2C3531] md:text-xl">
            Vi rullar ut system och AI som om de vore opåverkade naturkrafter. Oavsett om det handlar 
            om trög akademi eller kortsiktig corporate-hets måste vi sluta ta tekniken för given. 
            Jag bygger och granskar system där människan har kontrollen kvar.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="border border-[#121417] bg-[#121417] px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-[#EAE7E2] hover:border-[#B23A25] hover:bg-[#B23A25] transition-colors"
            >
              Utforska Utvalda Fall ↓
            </a>
            <a
              href="#contact"
              className="border border-[#121417] bg-transparent px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-[#121417] hover:bg-[#121417] hover:text-[#EAE7E2] transition-colors"
            >
              Starta Dialog
            </a>
          </div>
        </section>

        {/* Pillars / What I do */}
        <section className="border-b border-[#121417] py-16">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B23A25]">
                // Metod & Hantverk
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Olika fält. En riktning.
              </h2>
            </div>
            <p className="max-w-md font-mono text-xs text-[#2C3531]">
              Skarp maktanalys möter kompromisslös kodarkitektur.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-[#121417] md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="border-r border-b border-[#121417] p-8 transition-colors hover:bg-[#121417] hover:text-[#EAE7E2] group"
              >
                <span className="font-mono text-xs font-bold text-[#B23A25]">
                  {pillar.symbol}
                </span>
                <h3 className="mt-4 text-xl font-bold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-85 text-[#2C3531] group-hover:text-[#EAE7E2]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Cases */}
        <section id="work" className="border-b border-[#121417] py-20">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B23A25]">
                // Utvalda Projekt
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Bevis före Hype
              </h2>
            </div>
            <Link
              href="/cases"
              className="font-mono text-xs uppercase tracking-widest underline decoration-[#B23A25] underline-offset-4 hover:text-[#B23A25]"
            >
              Alla Case →
            </Link>
          </div>

          <div className="space-y-6">
            {FEATURED_CASES.map((item, index) => (
              <article
                key={item.slug}
                className="group border border-[#121417] bg-[#EAE7E2] p-8 transition-colors hover:border-[#B23A25]"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="text-[#B23A25]">0{index + 1}</span>
                      <span className="text-[#2C3531]">/ {item.category}</span>
                    </div>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight group-hover:text-[#B23A25] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-base leading-relaxed text-[#2C3531]">
                      {item.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#121417] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider bg-[#EAE7E2] text-[#121417]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/cases/${item.slug}`}
                    className="shrink-0 border border-[#121417] px-5 py-3 font-mono text-xs uppercase tracking-widest transition-colors group-hover:border-[#B23A25] group-hover:bg-[#B23A25] group-hover:text-[#EAE7E2]"
                  >
                    Läs Fallstudie →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Beyond Code */}
        <section className="border-b border-[#121417] py-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B23A25]">
            // Utanför Kodbasen
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Laboratorium & Visuellt mörker
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Link
              href="/playground"
              className="group flex flex-col justify-between border border-[#121417] p-8 transition-colors hover:bg-[#121417] hover:text-[#EAE7E2]"
            >
              <div>
                <span className="font-mono text-xs text-[#B23A25]">[01 / SPEL & KOD]</span>
                <h3 className="mt-3 text-2xl font-bold">Creative Playground</h3>
                <p className="mt-2 text-sm opacity-85 text-[#2C3531] group-hover:text-[#EAE7E2]">
                  Hobbyprojekt, gotiska spelprototyper (Darkwell) och interaktiva webb-experiment.
                </p>
              </div>
              <span className="mt-8 font-mono text-xs uppercase tracking-widest group-hover:text-[#B23A25]">
                Till Playground →
              </span>
            </Link>

            <Link
              href="/gallery"
              className="group flex flex-col justify-between border border-[#121417] p-8 transition-colors hover:bg-[#121417] hover:text-[#EAE7E2]"
            >
              <div>
                <span className="font-mono text-xs text-[#B23A25]">[02 / VISUELLT]</span>
                <h3 className="mt-3 text-2xl font-bold">Konstgalleri</h3>
                <p className="mt-2 text-sm opacity-85 text-[#2C3531] group-hover:text-[#EAE7E2]">
                  Analoga skisser, mörka stämningar och visuella undersökningar bortom skärmen.
                </p>
              </div>
              <span className="mt-8 font-mono text-xs uppercase tracking-widest group-hover:text-[#B23A25]">
                Se Galleri →
              </span>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="border border-[#121417] bg-[#121417] p-8 text-[#EAE7E2] md:p-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B23A25]">
              // Nästa steg
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl font-serif">
              Behöver du teknisk skärpa med en systemkritisk kompass?
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#EAE7E2]/80">
              Oavsett om det handlar om att syna en AI-strategi, bygga reella system eller ifrågasätta 
              status quo – hör av dig.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="border border-[#B23A25] bg-[#B23A25] px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-[#EAE7E2] hover:bg-transparent transition-colors cursor-pointer"
              >
                {copiedEmail ? 'Kopierat: hello@tuvafalk.se ✓' : 'Kopiera E-post'}
              </button>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="border border-[#EAE7E2] px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-[#EAE7E2] hover:bg-[#EAE7E2] hover:text-[#121417] transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#121417] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-[#2C3531] md:flex-row">
          <span>© {new Date().getFullYear()} TUVA FALK — ALLA RÄTTIGHETER RESERVERADE</span>
          <span>BYGGD MED MOTSTÅND // NO FLUFF</span>
        </div>
      </footer>
    </div>
  );
}