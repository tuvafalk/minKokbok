import React from 'react';
import Link from 'next/link';

const casesData = [
  {
    id: 'tuneblr',
    title: 'Tuneblr',
    client: 'Full-stack / MVC',
    category: 'Web Development',
    description: 'A platform for digital mixtapes where users can customize their pages freely — inspired by the Tumblr era for the ultimate retro feel.',
    tags: ['C#', 'MVC', 'Database', 'CSS'],
  },
  {
    id: 'unity-roguelike',
    title: 'Procedural Roguelike',
    client: 'Game Development',
    category: 'Game Design',
    description: 'An isometric survival game in a retro black-and-white style, set in a moving, procedurally generated dungeon that is never the same twice.',
    tags: ['Unity', 'C#', 'Procedural Gen', 'Retro'],
  },
  {
    id: 'sami-ai-thesis',
    title: 'Bottom-up AI Logic',
    client: 'Master Thesis',
    category: 'Research & AI',
    description: 'Exploring formal logics for AI grounded in Sámi values and Traditional Ecological Knowledge (TEK), as an alternative to Western foundation models.',
    tags: ['Formal Logics', 'AI Ethics', 'TEK', 'Research'],
  }
];

export default function Cases() {
  return (
    <div className="min-h-screen bg-[#F5F1E7] text-zinc-800 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-[#1A2B3C] mb-4">Selected Works</h1>
          <p className="text-lg text-zinc-600 max-w-2xl">
            A collection of my recent work, side projects, and explorations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {casesData.map((project) => (
            <Link 
              key={project.id} 
              href={`/cases/${project.id}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200 hover:-translate-y-1"
            >
              <div className="relative h-64 w-full overflow-hidden bg-[#1A2B3C]">
                <img 
                  //src={project.imageUrl} 
                  //alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[20%]"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-sm font-medium text-zinc-500 mb-1 block">{project.client}</span>
                  <h2 className="font-serif text-2xl font-semibold text-zinc-800 group-hover:text-[#1A2B3C] transition-colors">
                    {project.title}
                  </h2>
                </div>
                
                <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
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