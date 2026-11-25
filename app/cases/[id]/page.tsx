'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { casesData } from '@/components/cases/casesData';
import { useThemeAndLang } from '@/lib/theme';

export default function CaseDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const currentId = resolvedParams.id; 
  
  const { lang, colors } = useThemeAndLang();
  const project = casesData.find((p) => p.id === currentId);

  if (!project) {
    notFound();
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${colors.bg} ${colors.text}`}>
      <div className={`relative h-[42vh] min-h-[320px] border-b ${colors.border}`}>
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt=""
            fill
            sizes="100vw"
            className="object-cover grayscale-[25%]"
          />
        ) : (
          <div
            aria-hidden="true"
            className={`h-full w-full ${colors.subBg}`}
            style={{
              backgroundImage:
                'radial-gradient(circle at center, rgba(184,192,188,0.15) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
        )}
        <div className={`absolute inset-0 ${isDarkBg(colors.bg) ? 'bg-[#0C0E0D]/80' : 'bg-[#F5F1E7]/80'}`} />
        
        <div className="absolute inset-0 mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pb-10 md:px-12">
          <div className="mb-24">
            <Link
              href="/cases"
              className={`font-mono text-xs uppercase tracking-widest ${colors.accentText} transition-colors hover:opacity-150`}
            >
              {lang === 'sv' ? '← Tillbaka till cases' : '← Back to cases'}
            </Link>
          </div>

          <span className={`mb-3 font-mono text-xs font-bold uppercase tracking-[0.24em] ${colors.accentText}`}>
            ★ {project.category}
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-normal leading-tight md:text-6xl">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6 md:px-12">
        
        <div className="mb-12 flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`border px-3.5 py-1.5 font-mono text-xs uppercase ${colors.border} ${colors.subBg}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`relative ml-2 space-y-14 border-l-2 pb-6 md:ml-4 ${colors.border}`}>
          {project.sections.map((section, index) => (
            <section key={index} className="relative pl-6 md:pl-10">
              <span
                aria-hidden="true"
                className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 ${colors.border.split(' ')[0]} ${colors.cardBg}`}
              />
              
              <h2 className="mb-4 font-serif text-2xl font-normal leading-tight md:text-3xl">
                {section.title}
              </h2>
              <p className={`text-base leading-relaxed md:text-lg ${colors.accentText}`}>
                {section.content}
              </p>
            </section>
          ))}
        </div>
        
        <div className={`mt-20 border-t pt-12 text-center ${colors.border}`}>
          <Link
            href="/#contact"
            className={`font-mono text-xs uppercase tracking-wider inline-block border px-8 py-4 font-semibold transition-colors ${colors.buttonPrimary}`}
          >
            {lang === 'sv' ? 'Låt oss höras' : "Let's Connect"}
          </Link>
        </div>

      </div>
    </div>
  );
}

function isDarkBg(bgClass: string) {
  return bgClass.includes('0C0E0D');
}