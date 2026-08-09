"use client";
import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Link from 'next/link';
import RecipeCard from '../../components/recipes/RecepieCards'; 
import TableOfContents from '../../components/recipes/TableOfContents';
import recipesData from '../../components/recipes/recipes.json';
import { Recipe } from '../../components/recipes/types';

const typedRecipesData: Recipe[] = recipesData as Recipe[];

export default function RecipePage() {
  const [viewMode, setViewMode] = useState<'book' | 'grid'>('grid');

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

  return (
    <div className="flex flex-col items-center py-5 min-h-screen">
      
      <div className="print:hidden text-center mb-10 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-zinc-200">
        <div className="flex gap-3 justify-center mb-5">
          <button 
            className={`px-5 py-2 text-base cursor-pointer border rounded-md transition-all ${viewMode === 'grid' ? 'bg-zinc-800 text-white border-zinc-800' : 'bg-zinc-100 text-zinc-800 border-zinc-300 hover:bg-zinc-200'}`}
            onClick={() => setViewMode('grid')}
          >
            📱 Visa Rutnät
          </button>
          <button 
            className={`px-5 py-2 text-base cursor-pointer border rounded-md transition-all ${viewMode === 'book' ? 'bg-zinc-800 text-white border-zinc-800' : 'bg-zinc-100 text-zinc-800 border-zinc-300 hover:bg-zinc-200'}`}
            onClick={() => setViewMode('book')}
          >
            📖 Bläddra som Bok
          </button>
        </div>

        {viewMode === 'book' && (
          <div className="mt-4">
            <button 
              onClick={() => window.print()} 
              className="px-5 py-2 text-base cursor-pointer bg-white border border-zinc-300 rounded-md shadow-sm hover:bg-zinc-50 transition-colors"
            >
              🖨 Skriv ut / Spara PDF
            </button>
            <p className="text-zinc-500 text-sm mt-2">Tips: Välj A5 och ta bort marginaler.</p>
          </div>
        )}
      </div>

      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1100px] px-5 print:hidden">
          {typedRecipesData.map(recipe => (
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
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="scale-[0.6] sm:scale-75 md:scale-90 origin-top -mb-[450px] sm:-mb-[280px] md:-mb-[110px] shadow-2xl print:scale-100 print:mb-0 print:shadow-none">
            <TableOfContents />
          </div>
          
          {typedRecipesData.map(recipe => (
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