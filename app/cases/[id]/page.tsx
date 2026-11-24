import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { casesData } from '@/components/cases/casesData'; // Anpassa sökvägen om din data ligger annorlunda
import StarHeader from '@/components/header/StarHeader';

export default async function CaseDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const currentId = resolvedParams.id; 

  // Hitta rätt projekt baserat på URL:ens [id]
  const project = casesData.find((p) => p.id === currentId);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0C0E0D] pb-24 text-[#ECE9E2]">
      <StarHeader />

      <div className="relative h-[42vh] min-h-[320px] border-b border-[#ECE9E2]/15">
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
            className="h-full w-full bg-[#141816]"
            style={{
              backgroundImage:
                'radial-gradient(circle at center, rgba(184,192,188,0.15) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
        )}
        <div className="absolute inset-0 bg-[#0C0E0D]/80" />
        
        <div className="absolute inset-0 mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pb-10 md:px-12">
          <div className="mb-24">
            <Link
              href="/cases"
              className="font-mono text-xs uppercase tracking-widest text-[#B8C0BC] transition-colors hover:text-[#ECE9E2]"
            >
              ← Back to cases
            </Link>
          </div>

          <span className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#B8C0BC]">
            ★ {project.category}
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-normal leading-tight text-[#ECE9E2] md:text-6xl">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6 md:px-12">
        
        <div className="mb-12 flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="border border-[#ECE9E2]/20 bg-[#141816] px-3.5 py-1.5 font-mono text-xs uppercase text-[#ECE9E2]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative ml-2 space-y-14 border-l-2 border-[#ECE9E2]/20 pb-6 md:ml-4">
          {project.sections.map((section, index) => (
            <section key={index} className="relative pl-6 md:pl-10">
              <span
                aria-hidden="true"
                className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-[#ECE9E2] bg-[#0C0E0D]"
              />
              
              <h2 className="mb-4 font-serif text-2xl font-normal leading-tight text-[#ECE9E2] md:text-3xl">
                {section.title}
              </h2>
              <p className="text-base leading-relaxed text-[#939E98] md:text-lg">
                {section.content}
              </p>
            </section>
          ))}
        </div>
        
        <div className="mt-20 border-t border-[#ECE9E2]/15 pt-12 text-center">
          <Link
            href="/#contact"
            className="font-mono text-xs uppercase tracking-wider inline-block border border-[#ECE9E2] bg-[#ECE9E2] px-8 py-4 font-semibold text-[#0C0E0D] transition-colors hover:bg-transparent hover:text-[#ECE9E2]"
          >
            Let&apos;s Connect
          </Link>
        </div>

      </div>
    </div>
  );
}