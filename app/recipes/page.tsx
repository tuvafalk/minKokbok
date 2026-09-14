"use client";
import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import RecipeCard from '../../components/recipes/RecepieCards'; 
import TableOfContents from '../../components/recipes/TableOfContents';
import categoryColors from '../../components/recipes/TableOfContents';
import recipesData from '../../components/recipes/recipes.json';
import { Recipe } from '../../components/recipes/types';

const typedRecipesData: Recipe[] = recipesData as Recipe[];

export default function RecipePage() {
  const [viewMode, setViewMode] = useState<'book' | 'grid'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Alla');

  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Tuva_Olov_Receptsamling',
  });

  const handleThumbnailClick = (id: string) => {
    setViewMode('book');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const categoryColors: Record<string, string> = {
  'Alla': '#d4d4d8',
  'Lättlagat': '#7b8eb8',
  'Vegetariskt': '#9eab88',
  'Tillbehör': '#b87b64',
  'Efterrätt': '#f2d194',
  'Nyttigare': '#8a70b1',
};
  const categories = ['Alla', 'Lättlagat', 'Vegetariskt', 'Tillbehör', 'Efterrätt', 'Nyttigare'];

  const processedRecipes = typedRecipesData
    .filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Alla' || recipe.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => categories.indexOf(a.category) - (categories.indexOf(b.category)));

  return (
    <div className="flex min-h-screen relative pt-6 pb-10 print:pt-0">
      <aside className="fixed left-5 top-28 z-40 w-64 pt-4 print:hidden">
        <div className="flex flex-col gap-4 rounded-2xl border border-zinc-300 bg-[#F5F1E7]/90 p-3 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-3 py-2 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-[#1A2B3C]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input 
              type="text" 
              placeholder="Sök..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-[#1A2B3C] placeholder-[#1A2B3C]/50 font-medium"
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500 px-1">Kategorier</span>
            <div className="flex flex-col gap-2">
              {categories.map(cat => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    title={cat}
                    className={`flex items-center gap-2.5 rounded-full border px-2.5 py-2 text-left transition-all duration-300 ${
                      isSelected
                        ? 'border-zinc-300 bg-white shadow-sm'
                        : 'border-transparent bg-transparent hover:border-zinc-200 hover:bg-white/40'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-zinc-400"
                      style={{ backgroundColor: categoryColors[cat as keyof typeof categoryColors] }}
                    />
                    <span className="text-sm text-[#1A2B3C] font-medium">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-1 pt-1">
            <button 
              className={`flex-1 px-3 py-2 text-[11px] font-bold tracking-widest uppercase rounded-full border transition-all ${viewMode === 'grid' ? 'border-zinc-300 bg-[#1A2B3C] text-[#F5F1E7]' : 'border-zinc-300 bg-white/70 text-zinc-500 hover:bg-white'}`}
              onClick={() => setViewMode('grid')}
            >
              Rutnät
            </button>
            <button 
              className={`flex-1 px-3 py-2 text-[11px] font-bold tracking-widest uppercase rounded-full border transition-all ${viewMode === 'book' ? 'border-zinc-300 bg-[#1A2B3C] text-[#F5F1E7]' : 'border-zinc-300 bg-white/70 text-zinc-500 hover:bg-white'}`}
              onClick={() => setViewMode('book')}
            >
              Bläddra
            </button>
          </div>

          {viewMode === 'book' && (
            <button 
              onClick={handlePrint} 
              className="print:hidden mt-1 rounded-full border border-zinc-300 bg-white/70 px-4 py-2.5 text-sm font-medium text-[#1A2B3C] shadow-sm hover:bg-white transition-colors"
            >
              🖨 Skriv ut PDF
            </button>
          )}
        </div>
      </aside>

      <main className="w-full pl-80 pr-6 print:pl-0 print:pr-0">

      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1100px] px-5 print:hidden">
          {processedRecipes.map(recipe => (
            <div key={recipe.id} className="flex flex-col items-center cursor-pointer group" onClick={() => handleThumbnailClick(`recipe-${recipe.id}`)}>
              <div className="w-[198px] h-[280px] relative overflow-hidden border border-zinc-200 rounded-md shadow-sm transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-lg bg-white">
                <div className="w-[794px] h-[1123px] scale-[0.25] origin-top-left pointer-events-none">
                  <RecipeCard recipe={recipe} />
                </div>
              </div>
              <h3 className="font-serif text-xl mt-4 mb-1 text-center text-zinc-500">{recipe.title}</h3>
              <span className="font-serif italic text-sm text-zinc-700">{recipe.category}</span>
            </div>
          ))}
        </div>
      )}

      {viewMode === 'book' && (
        <div ref={componentRef} className="flex flex-col items-center gap-5 w-full">
          <div className="scale-[0.6] sm:scale-75 md:scale-90 origin-top -mb-[450px] sm:-mb-[280px] md:-mb-[110px] shadow-2xl print:scale-100 print:mb-0 print:shadow-none">
            <TableOfContents />
          </div>
          
          {processedRecipes.map(recipe => (
            <div 
              key={recipe.id} 
              id={`recipe-${recipe.id}`} 
              className="scale-[0.6] sm:scale-75 md:scale-90 origin-top -mb-[450px] sm:-mb-[280px] md:-mb-[110px] shadow-2xl print:scale-100 print:mb-0 print:shadow-none"
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      )}
      </main>
    </div>
  );
}