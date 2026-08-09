"use client";
import React from 'react';
import { Recipe } from './types';

const categoryColors: Record<string, string> = {
  'Lättlagat': '#7b8eb8',
  'Vegetariskt': '#9eab88',
  'Tillbehör': '#b87b64',
  'Efterrätt': '#f2d194',
  'Nyttigare': '#ab9ec7ff'
};

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const color = categoryColors[recipe.category] || '#cccccc';

  const renderClocks = (effort: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`inline-block w-4 h-4 rounded-full border-2 ${i < effort ? 'border-zinc-800 bg-zinc-800' : 'border-zinc-300 bg-zinc-300'}`}></span>
    ));
  };

  return (
    <div className="w-[794px] max-w-full h-[1123px] bg-white relative overflow-hidden text-zinc-800 font-sans box-border py-[60px] px-[50px] print:w-full print:h-screen print:p-0 print:m-0">
      
      <header className="flex justify-between items-end mb-5">
        <div>
          <span className="font-serif italic text-xl text-zinc-500 block -mb-1">{recipe.category}</span>
          <h1 className="font-serif text-5xl md:text-6xl font-normal m-0 tracking-wide">{recipe.title}</h1>
          {recipe.subtitle && (
            <p className="font-serif text-l md:text-xl font-normal m-0 tracking-wide">{recipe.subtitle}</p>
          )}
        </div>
        <div className="text-right">
          <div className="flex gap-1 justify-end mb-1">
            {renderClocks(recipe.effort)}
          </div>
          {recipe.oven && (
            <div className="text-sm leading-snug">
              Ugn <strong>{recipe.oven.temp}</strong> grader<br/>
              <strong>{recipe.oven.time}</strong> minuter
            </div>
          )}
        </div>
      </header>

      <div className="w-[calc(100%+100px)] -ml-[50px] h-[140px] mb-8 relative" style={{ backgroundColor: color }}>
        {recipe.oven && (
          <div 
            className="absolute left-[50px] bottom-[10px] w-[120px] h-[100px] opacity-70 bg-no-repeat"
            style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="30" width="80" height="50" rx="5" fill="none" stroke="%23333" stroke-width="2"/><circle cx="80" cy="45" r="3" fill="%23333"/><circle cx="80" cy="55" r="3" fill="%23333"/><circle cx="80" cy="65" r="3" fill="%23333"/></svg>')` }}
          />
        )}
        <div 
          className="absolute right-[20px] -bottom-[40px] w-[180px] h-[220px] opacity-70 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 100 Q40 50 80 10" fill="none" stroke="%23333" stroke-width="1.5"/><circle cx="80" cy="10" r="15" fill="none" stroke="%23333" stroke-width="1.5"/></svg>')` }}
        />
      </div>

      <div className="grid grid-cols-[280px_1fr] gap-10">
        
        <div>
          <div className="flex gap-5 text-[15px] mb-7 font-bold border-b border-zinc-300 pb-2.5">
            <span>🍴 {recipe.portions} portioner</span>
            <span>⏱ {recipe.time}</span>
          </div>
          
          <h3 className="font-serif text-xl tracking-[2px] uppercase mb-5 font-normal">INGREDIENSER</h3>
          
          <div>
            {recipe.ingredients.map((group, idx) => (
              <div key={idx} className="mb-4">
                {group.group && <h4 className="mt-4 mb-1 text-base font-bold">{group.group}</h4>}
                <ul className="list-none p-0 m-0">
                  {group.items.map((item, i) => (
                    <li key={i} className="relative pl-4 mb-2 text-[15px] leading-snug before:content-['•'] before:absolute before:left-0 before:text-zinc-800">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl tracking-[2px] uppercase mb-5 font-normal text-center">🌿 GÖR SÅ HÄR 🌿</h3>
          
          <ol className="pl-5 text-[16px] leading-[1.8] list-decimal">
            {recipe.instructions.map((step, idx) => (
              <li key={idx} className="mb-4 pl-2 marker:font-bold" dangerouslySetInnerHTML={{ __html: step }} />
            ))}
          </ol>

          {recipe.tips && (
            <div className="bg-[#f6e6cd] py-5 px-7 mt-10 -rotate-1 relative shadow-sm before:content-[''] before:absolute before:-top-2.5 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-5 before:bg-[#b87b64]/40">
              <h4 className="font-serif text-[22px] italic m-0 mb-2 font-normal">Tips</h4>
              <p className="italic m-0 text-[15px] leading-[1.6]" dangerouslySetInnerHTML={{ __html: recipe.tips.replace(/\n/g, '<br/>') }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}