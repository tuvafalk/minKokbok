'use client';

import React from 'react';
import Link from 'next/link';
import { useThemeAndLang } from '@/lib/theme';

const liveProjects = [
  {
    title: { sv: 'Receptboken', en: 'The Recipe Book' },
    category: { sv: 'Interaktiv kokbok', en: 'Interactive cookbook' },
    description: {
      sv: 'Bläddra bland recept efter kategori, sök i samlingen, bläddra igenom kokboken eller skriv ut den som en PDF.',
      en: 'Browse recipes by category, search the collection, flip through the cookbook, or print it as a PDF.',
    },
    href: '/recipes',
    action: { sv: 'Öppna receptboken', en: 'Open the recipe book' },
    number: '01',
  },
  {
    title: { sv: 'Fallstudieutforskaren', en: 'Case Study Explorer' },
    category: { sv: 'Portfölj', en: 'Portfolio' },
    description: {
      sv: 'Utforska utvalda arbeten inom AI-styrning, forskning, teknik och kreativ utveckling.',
      en: 'Explore selected work across AI governance, research, engineering, and creative development.',
    },
    href: '/cases',
    action: { sv: 'Utforska casen', en: 'Explore the cases' },
    number: '02',
  },
];

export default function CreativeLab() {
  const { lang, colors } = useThemeAndLang();

  return (
    <>
      <main
        className={`min-h-screen px-6 pb-24 pt-16 md:px-12 mx-auto transition-colors duration-300 ${colors.bg} ${colors.text}`}
      >
        <div className="mx-auto max-w-7xl">
          <header className="mb-16 max-w-4xl pb-10">
            <p
              className={`mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] ${colors.accentText}`}
            >
              ★ Creative Lab // Playground
            </p>
            <h1 className="mb-6 font-serif text-5xl leading-tight md:text-6xl">
              {lang === 'sv' ? 'Idéer jag utforskat.' : 'Ideas made to be explored.'}
            </h1>
            <p className={`text-base leading-relaxed md:text-lg max-w-2xl ${colors.accentText}`}>
              {lang === 'sv'
                ? 'Ett hem för interaktiva experiment, projekt och små saker byggda för att skapa och utmana antaganden.'
                : 'A home for interactive experiments, personal projects, and small things built for the joy of making and breaking assumptions.'}
            </p>
          </header>

          <section aria-labelledby="live-projects-title">
            <div className="grid gap-6 md:grid-cols-2">
              {liveProjects.map((project) => (
                <article
                  key={project.href}
                  className={`group flex min-h-64 flex-col justify-between overflow-hidden border transition-all duration-300 ${colors.border} ${colors.cardBg} hover:border-current`}
                >
                  <div className="flex flex-1 flex-col p-8 md:p-10">
                    <div className="flex justify-between items-center mb-6">
                      <span
                        className={`font-mono text-xs uppercase tracking-widest ${colors.accentText}`}
                      >
                        ★ {project.category[lang]}
                      </span>
                    </div>

                    <h3 className="mb-4 font-serif text-3xl">{project.title[lang]}</h3>
                    <p
                      className={`max-w-lg leading-relaxed text-sm md:text-base mb-8 ${colors.accentText}`}
                    >
                      {project.description[lang]}
                    </p>

                    <Link
                      href={project.href}
                      className="mt-auto inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider underline decoration-current underline-offset-4 transition-opacity opacity-90 hover:opacity-100"
                    >
                      {project.action[lang]} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  <div aria-hidden="true" className={`h-1 ${colors.subBg}`} />
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
