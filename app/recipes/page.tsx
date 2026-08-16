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
    <div className="flex flex-col items-center py-5 min-h-screen relative">
           <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 p-3 bg-[#F5F1E7]/90 backdrop-blur-md shadow-xl rounded-full border border-zinc-300 print:hidden transition-all">
        
        <div className="flex items-center gap-2 pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-[#1A2B3C]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input 
            type="text" 
            placeholder="Sök..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-16 focus:w-32 bg-transparent outline-none text-sm transition-all duration-300 text-[#1A2B3C] placeholder-[#1A2B3C]/50 font-medium"
          />
        </div>

        <div className="w-px h-6 bg-zinc-300"></div> {/* Avdelare */}

        <div className="flex items-center gap-2.5 px-2">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                title={cat}
                className={`w-5 h-5 rounded-full transition-all duration-300 ${
                  isSelected 
                    ? 'scale-125 ring-2 ring-offset-2 ring-zinc-400 opacity-100 shadow-sm' 
                    : 'opacity-60 hover:opacity-100 hover:scale-110'
                }`}
                style={{ backgroundColor: categoryColors[cat as keyof typeof categoryColors] }}
              />
            );
          })}
        </div>

        <div className="w-px h-6 bg-zinc-300"></div>

        <div className="flex gap-1 pr-1">
          <button 
            className={`px-3 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full transition-all ${viewMode === 'grid' ? 'bg-[#1A2B3C] text-[#F5F1E7]' : 'text-zinc-500 hover:bg-black/5'}`}
            onClick={() => setViewMode('grid')}
          >
            Rutnät
          </button>
          <button 
            className={`px-3 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full transition-all ${viewMode === 'book' ? 'bg-[#1A2B3C] text-[#F5F1E7]' : 'text-zinc-500 hover:bg-black/5'}`}
            onClick={() => setViewMode('book')}
          >
            Bläddra
          </button>
        </div>

      </div>


      {viewMode === 'book' && (
        <div className="fixed top-28 right-8 z-40 print:hidden">
          <button 
            onClick={handlePrint} 
            className="px-5 py-2.5 text-sm font-medium flex flex-col items-center cursor-pointer bg-white border border-zinc-200 rounded-lg shadow-lg hover:bg-zinc-50 transition-colors"
          >
            <span>🖨 Skriv ut PDF</span>
            <span className="text-zinc-400 text-xs mt-1 font-normal">A5 • Inga marginaler</span>
          </button>
        </div>
      )}

      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1100px] px-5 print:hidden">
          {processedRecipes.map(recipe => (
            <div key={recipe.id} className="flex flex-col items-center cursor-pointer group" onClick={() => handleThumbnailClick(`recipe-${recipe.id}`)}>
              <div className="w-[198px] h-[280px] relative overflow-hidden border border-zinc-200 rounded-md shadow-sm transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-lg bg-white">
                <div className="w-[794px] h-[1123px] scale-[0.25] origin-top-left pointer-events-none">
                  <RecipeCard recipe={recipe} />
                </div>
              </div>
              <h3 className="font-serif text-xl mt-4 mb-1 text-center text-zinc-800">{recipe.title}</h3>
              <span className="font-serif italic text-sm text-zinc-500">{recipe.category}</span>
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
    </div>
  );
}