"use client";

import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import RecipeCard from '../../components/recipes/RecepieCards';
import TableOfContents, { categoryColors } from '../../components/recipes/TableOfContents';
import recipesData from '../../components/recipes/recipes.json';
import type { Recipe } from '@/components/recipes/types';

const typedRecipesData: Recipe[] = recipesData as Recipe[];
const categories = ['Alla', ...Object.keys(categoryColors)];

export default function RecipePage() {
  const [viewMode, setViewMode] = useState<'book' | 'grid'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Alla');
  const componentRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchExpanded) searchInputRef.current?.focus();
  }, [isSearchExpanded]);

  const closeSearch = () => {
    setIsSearchExpanded(false);
    setSearchQuery('');
  };

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Tuva_Olov_Receptsamling',
    pageStyle: `
      @page {
        size: A4 portrait;
        margin: 0;
      }

      @media print {
        html, body {
          width: 210mm;
          margin: 0 !important;
          padding: 0 !important;
        }
      }
    `,
  });

  const handleThumbnailClick = (id: string) => {
    setViewMode('book');
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const processedRecipes = typedRecipesData
    .filter((recipe) => {
      const matchesSearch = recipe.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase());
      const matchesCategory = selectedCategory === 'Alla' || recipe.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => categories.indexOf(a.category) - categories.indexOf(b.category));

  return (
    <div className="relative min-h-screen px-4 pb-32 pt-6 sm:px-6 sm:pb-28 print:px-0 print:pb-0 print:pt-0">
      <main className="mx-auto w-full max-w-350 print:max-w-none">
        <header className="mb-8 px-1 print:hidden">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#718278]">
            Playground / Creative Lab
          </p>
          <h1 className="font-serif text-3xl text-[#1A2B3C] sm:text-4xl">The Recipe Book</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            Find a favorite, browse by category, or print the collection as an A4 recipe book.
          </p>
        </header>

        {viewMode === 'grid' && (
          <section aria-label="Recipes" className="print:hidden">
            <p className="sr-only" aria-live="polite">
              {processedRecipes.length} recipes found
            </p>
            {processedRecipes.length > 0 ? (
              <div className="grid grid-cols-2 justify-items-center gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
                {processedRecipes.map((recipe) => (
                  <button
                    key={recipe.id}
                    type="button"
                    aria-label={`Open ${recipe.title} in the recipe book`}
                    onClick={() => handleThumbnailClick(`recipe-${recipe.id}`)}
                    className="group flex w-full max-w-49.5 flex-col items-center text-center"
                  >
                    <span className="relative block aspect-198/280 w-full overflow-hidden rounded-md border border-zinc-200 bg-white shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
                      <span className="pointer-events-none absolute left-0 top-0 h-280.75 w-198.5 origin-top-left scale-[0.25]">
                        <RecipeCard recipe={recipe} />
                      </span>
                    </span>
                    <span className="mt-3 font-serif text-base text-zinc-700 sm:mt-4 sm:text-xl">
                      {recipe.title}
                    </span>
                    <span className="font-serif text-sm italic text-zinc-600">{recipe.category}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-zinc-300 bg-white/50 px-6 py-16 text-center">
                <p className="font-serif text-2xl text-[#1A2B3C]">No recipes found</p>
                <p className="mt-2 text-sm text-zinc-600">Try another search or category.</p>
              </div>
            )}
          </section>
        )}

        {viewMode === 'book' && (
          <div
            ref={componentRef}
            className="recipe-print-document mx-auto flex w-full flex-col items-center gap-5 print:block"
          >
            <div className="recipe-page-screen origin-top scale-[0.42] -mb-157.75 shadow-xl sm:scale-[0.6] sm:-mb-107.25 md:scale-[0.75] md:-mb-65.25 lg:scale-[0.9] lg:-mb-23 print:mb-0 print:scale-100 print:shadow-none">
              <TableOfContents />
            </div>

            {processedRecipes.map((recipe) => (
              <div
                key={recipe.id}
                id={`recipe-${recipe.id}`}
                className="recipe-page-screen origin-top scale-[0.42] -mb-157.75 shadow-xl sm:scale-[0.6] sm:-mb-107.25 md:scale-[0.75] md:-mb-65.25 lg:scale-[0.9] lg:-mb-23 print:mb-0 print:scale-100 print:shadow-none"
              >
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        )}
      </main>

      <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 right-3 z-50 print:hidden lg:left-1/2 lg:right-auto lg:w-[60%] lg:-translate-x-1/2">
        <div className="flex gap-8 rounded-2xl border border-zinc-300/80 bg-[#F5F1E7]/95 p-2.5 shadow-[0_12px_40px_rgba(26,43,60,0.18)] backdrop-blur-xl lg:items-center lg:gap-3 lg:rounded-full lg:px-4">
          {isSearchExpanded ? (
            <label className="flex h-11 w-full min-w-0 items-center gap-2.5 rounded-full border border-zinc-300/80 bg-white/80 px-3.5 focus-within:border-[#718278] focus-within:ring-2 focus-within:ring-[#9EAEA2]/40 lg:w-64 lg:shrink-0">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4 shrink-0 text-[#718278]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.2-5.2m0 0A7.5 7.5 0 1 0 5.2 5.2a7.5 7.5 0 0 0 10.6 10.6Z" />
              </svg>
              <span className="sr-only">Search recipes</span>
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="min-w-0 flex-1 bg-transparent text-sm text-[#1A2B3C] outline-none placeholder:text-zinc-500"
              />
              <button
                type="button"
                aria-label="Close recipe search"
                onClick={closeSearch}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-[#1A2B3C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A2B3C]"
              >
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="m5.3 4.2 4.7 4.7 4.7-4.7 1.1 1.1-4.7 4.7 4.7 4.7-1.1 1.1-4.7-4.7-4.7 4.7-1.1-1.1 4.7-4.7-4.7-4.7z" />
                </svg>
              </button>
            </label>
          ) : (
            <button
              type="button"
              aria-label="Search recipes"
              title="Search recipes"
              onClick={() => setIsSearchExpanded(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#718278] transition-colors hover:bg-white hover:text-[#1A2B3C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A2B3C]"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.2-5.2m0 0A7.5 7.5 0 1 0 5.2 5.2a7.5 7.5 0 0 0 10.6 10.6Z" />
              </svg>
            </button>
          )}

          <div className="flex min-w-0 items-center justify-between gap-1 lg:flex-1 lg:justify-start lg:gap-2">
            <div role="group" aria-label="Filter by recipe category" className="flex min-w-0 flex-1 items-center gap-0 overflow-x-auto py-1 lg:gap-1">
              {categories.map((category) => {
                const isSelected = selectedCategory === category;
                const isAllCategories = category === 'Alla';

                return (
                  <button
                    key={category}
                    type="button"
                    aria-label={isAllCategories ? 'All categories' : category}
                    aria-pressed={isSelected}
                    title={isAllCategories ? 'All categories' : category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A2B3C] focus-visible:ring-offset-2 lg:h-8 lg:w-8 ${
                      isSelected ? 'ring-2 ring-[#1A2B3C]' : 'hover:bg-white/80'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="h-3.5 w-3.5 rounded-full border border-black/10"
                      style={{
                        backgroundColor: isAllCategories ? '#d4d4d8' : categoryColors[category]
                      }}
                    />
                  </button>
                );
              })}
            </div>

            <div role="group" aria-label="Recipe book controls" className="flex shrink-0 items-center gap-0.5 lg:gap-1">
              <button
                type="button"
                aria-label="Show recipe grid"
                aria-pressed={viewMode === 'grid'}
                title="Grid view"
                onClick={() => setViewMode('grid')}
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A2B3C] ${
                  viewMode === 'grid' ? 'bg-[#1A2B3C] text-white' : 'text-zinc-600 hover:bg-white'
                }`}
              >
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="M2 2h7v7H2zM11 2h7v7h-7zM2 11h7v7H2zM11 11h7v7h-7z" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Open recipe book"
                aria-pressed={viewMode === 'book'}
                title="Book view"
                onClick={() => setViewMode('book')}
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A2B3C] ${
                  viewMode === 'book' ? 'bg-[#1A2B3C] text-white' : 'text-zinc-600 hover:bg-white'
                }`}
              >
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2H9v15H4a2 2 0 0 1-2-2V3.5ZM11 2h5.5A1.5 1.5 0 0 1 18 3.5V15a2 2 0 0 1-2 2h-5V2Z" />
                </svg>
              </button>
              {viewMode === 'book' && (
                <button
                  type="button"
                  aria-label="Print recipe book as A4 PDF"
                  title="Print A4 PDF"
                  onClick={handlePrint}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9EAEA2] text-[#1A2B3C] transition-colors hover:bg-[#87998d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A2B3C]"
                >
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M5 2h10v4H5V2Zm10 11h2a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a1 1 0 0 0 1 1h2v5h10v-5Zm-2 3H7v-5h6v5Z" />
                    <circle cx="15" cy="9" r="1" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
