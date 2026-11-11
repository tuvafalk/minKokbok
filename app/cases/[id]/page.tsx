import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { casesData } from '@/components/cases/casesData';

export default async function CaseDetail({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const currentId = resolvedParams.id; 

  const project = casesData.find((p) => p.id === currentId);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5F1E7] text-zinc-800 pb-24">
      
      <div className="w-full h-[40vh] min-h-75 relative">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt=""
            fill
            sizes="100vw"
            className="object-cover grayscale-30"
          />
        ) : (
          <div
            aria-hidden="true"
            className="h-full w-full bg-[#1A2B3C]"
            style={{
              backgroundImage:
                'radial-gradient(circle at center, rgba(158,174,162,0.5) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
        )}
        <div className="absolute inset-0 bg-[#1A2B3C]/70 mix-blend-multiply" />
        
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12 max-w-4xl mx-auto w-full">
          <span className="text-white/80 uppercase tracking-widest text-sm font-bold mb-2 block">
            {project.category}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#F5F1E7]">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 mt-16">
        
        <div className="flex flex-wrap gap-2 mb-16">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full border border-zinc-200 shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="relative border-l-2 border-dashed border-[#1A2B3C]/20 ml-4 md:ml-6 space-y-16 pb-12">
          
          {project.sections.map((section, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-[#F5F1E7] border-2 border-[#1A2B3C] rounded-full" />
              
              <h3 className="font-serif text-3xl text-[#1A2B3C] mb-4">
                {section.title}
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

        </div>
        
        <div className="mt-20 text-center border-t border-zinc-200 pt-16">
          <Link href="/contact" className="inline-block px-8 py-3 bg-[#1A2B3C] text-white font-medium rounded-full hover:bg-zinc-800 transition-colors">
            Let&apos;s Connect
          </Link>
        </div>

      </div>
    </div>
  );
}