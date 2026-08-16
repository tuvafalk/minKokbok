"use client";
import React from 'react';
import { Recipe } from './types';

export const categoryColors: Record<string, string> = {
  'Lättlagat': '#7b8eb8',
  'Vegetariskt': '#9eab88',
  'Tillbehör': '#b87b64',
  'Efterrätt': '#f2d194',
  'Nyttigare': '#ab9ec7ff'
};

export default function TableOfContents() {
  const categories = Object.keys(categoryColors);

  return (
    <div className="w-[794px] max-w-full h-[1123px] bg-white relative overflow-hidden text-zinc-800 font-sans box-border py-[60px] px-[50px] flex flex-col items-center justify-center text-center print:w-full print:h-screen print:p-0 print:m-0">
      <div>
        <h1 className="font-serif text-5xl mb-2">Innehåll</h1>
        <div className="text-4xl font-serif mb-8 space-x-2 text-zinc-400">
          <span>~</span><span>~</span><span>~</span>
        </div>
        
        <div className="flex items-center gap-2 mb-12 text-base font-serif italic text-zinc-600">
          Tid och kraft för att laga receptet 
          <span className="flex gap-1 ml-2">
            <span className="w-4 h-4 rounded-full border-2 border-[#9886b3] bg-[#9886b3]"></span>
            <span className="w-4 h-4 rounded-full border-2 border-[#9886b3] bg-[#9886b3]"></span>
            <span className="w-4 h-4 rounded-full border-2 border-zinc-300 bg-zinc-300"></span>
            <span className="w-4 h-4 rounded-full border-2 border-zinc-300 bg-zinc-300"></span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-[400px]">
        {categories.map(cat => (
          <div 
            key={cat} 
            className="py-4 px-8 rounded-full font-serif italic text-2xl text-zinc-800 text-left shadow-md"
            style={{ backgroundColor: categoryColors[cat] }}
          >
            {cat}
          </div>
        ))}
      </div>

      <div className="mt-auto font-serif tracking-[4px] uppercase text-zinc-400 text-sm">
        <h2>TUVA & OLOV</h2>
      </div>
    </div>
  );
}