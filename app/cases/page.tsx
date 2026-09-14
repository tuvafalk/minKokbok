import React from 'react';
import Link from 'next/link';
import { casesData } from '../../components/cases/casesData';

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E7] text-zinc-800 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-[#1A2B3C] mb-4">Selected Works</h1>
          <p className="text-lg text-zinc-600 max-w-2xl">
            A collection of my recent projects, spanning from full-stack web development and game design to AI research.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {casesData.map((project) => (
            <Link 
              key={project.id} 
              href={`/cases/${project.id}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200 hover:-translate-y-1"
            >
              <div className="relative h-64 w-full overflow-hidden bg-zinc-100">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[20%]"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="font-serif text-2xl font-semibold text-zinc-800 group-hover:text-[#1A2B3C] transition-colors mb-3">
                  {project.title}
                </h2>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2.5 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-md border border-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}