'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { CaseFilterGroup, CaseProject } from './casesData';

type ActiveFilter = 'All' | CaseFilterGroup;

const filters: ActiveFilter[] = ['All', 'AI Governance', 'Engineering & UX'];

function FrameworkVisual() {
  return (
    <div className="flex h-full min-h-64 items-center justify-center bg-[#e8ebe4] p-6 md:min-h-[380px]">
      <svg
        viewBox="0 0 560 360"
        role="img"
        aria-label="Diagram connecting governance, evaluation, and user experience"
        className="w-full max-w-125"
      >
        <path d="M160 112h84m72 0h84M160 248h84m72 0h84M280 144v72" fill="none" stroke="#718278" strokeWidth="3" />
        <rect x="28" y="72" width="132" height="80" rx="14" fill="#f8f6f0" stroke="#718278" strokeWidth="2" />
        <rect x="400" y="72" width="132" height="80" rx="14" fill="#f8f6f0" stroke="#718278" strokeWidth="2" />
        <rect x="28" y="208" width="132" height="80" rx="14" fill="#f8f6f0" stroke="#718278" strokeWidth="2" />
        <rect x="400" y="208" width="132" height="80" rx="14" fill="#f8f6f0" stroke="#718278" strokeWidth="2" />
        <rect x="208" y="132" width="144" height="96" rx="18" fill="#1A2B3C" />
        <text x="94" y="116" textAnchor="middle" fill="#1A2B3C" fontSize="16" fontWeight="600">Governance</text>
        <text x="466" y="116" textAnchor="middle" fill="#1A2B3C" fontSize="16" fontWeight="600">UX</text>
        <text x="94" y="252" textAnchor="middle" fill="#1A2B3C" fontSize="16" fontWeight="600">Research</text>
        <text x="466" y="252" textAnchor="middle" fill="#1A2B3C" fontSize="16" fontWeight="600">Evaluation</text>
        <text x="280" y="174" textAnchor="middle" fill="#F5F1E7" fontSize="15" fontWeight="600">AI SYSTEM</text>
        <text x="280" y="198" textAnchor="middle" fill="#cbd3cc" fontSize="12">Shared framework</text>
      </svg>
    </div>
  );
}

function RiskMatrixVisual() {
  return (
    <div className="flex h-full min-h-64 items-center justify-center bg-[#eee8df] p-6 md:min-h-[380px]">
      <svg
        viewBox="0 0 560 360"
        role="img"
        aria-label="Illustrative risk matrix and system boundary"
        className="w-full max-w-125"
      >
        <rect x="86" y="40" width="388" height="280" rx="18" fill="#f8f6f0" stroke="#d4c8b7" strokeWidth="2" />
        <path d="M280 80v200M126 180h308" stroke="#c6b8a5" strokeWidth="2" />
        <rect x="126" y="80" width="154" height="100" fill="#d9e3d6" />
        <rect x="280" y="80" width="154" height="100" fill="#e9d8bd" />
        <rect x="126" y="180" width="154" height="100" fill="#e7e5d7" />
        <rect x="280" y="180" width="154" height="100" fill="#d9c8bd" />
        <rect x="86" y="40" width="388" height="280" rx="18" fill="none" stroke="#d4c8b7" strokeWidth="2" />
        <text x="203" y="132" textAnchor="middle" fill="#40554a" fontSize="15" fontWeight="600">Feasibility</text>
        <text x="357" y="132" textAnchor="middle" fill="#73583c" fontSize="15" fontWeight="600">Ethics</text>
        <text x="203" y="232" textAnchor="middle" fill="#5c5b49" fontSize="15" fontWeight="600">Risk</text>
        <text x="357" y="232" textAnchor="middle" fill="#694d40" fontSize="15" fontWeight="600">Boundary</text>
      </svg>
    </div>
  );
}

function ProjectVisual({ project }: { project: CaseProject }) {
  if (project.visual === 'framework') {
    return <FrameworkVisual />;
  }

  if (project.visual === 'risk-matrix') {
    return <RiskMatrixVisual />;
  }

  return (
    <div className="relative min-h-64 overflow-hidden bg-zinc-100 md:min-h-95">
      {project.imageUrl && (
        <Image
          src={project.imageUrl}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      )}
    </div>
  );
}

function FeaturedCaseCard({ project, reverse }: { project: CaseProject; reverse?: boolean }) {
  const visual = (
    <div className={`group relative ${reverse ? 'md:order-2' : ''}`}>
      <ProjectVisual project={project} />
    </div>
  );

  const details = (
    <div className={`flex flex-col justify-center p-7 md:p-10 ${reverse ? 'md:order-1' : ''}`}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#718278]">
        {project.category}
      </p>
      <h2 className="mb-5 font-serif text-3xl leading-tight text-[#1A2B3C] md:text-4xl">
        {project.title}
      </h2>
      <p className="mb-8 max-w-xl text-sm leading-7 text-zinc-600 md:text-base">
        {project.shortDescription}
      </p>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-200 bg-[#F5F1E7] px-3 py-1.5 text-xs text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/cases/${project.id}`}
          className="shrink-0 font-semibold text-[#1A2B3C] underline decoration-[#9EAEA2] underline-offset-4 transition-colors hover:text-[#718278]"
        >
          Read case <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );

  return (
    <article className="grid overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm md:grid-cols-2">
      {reverse ? (
        <>
          {details}
          {visual}
        </>
      ) : (
        <>
          {visual}
          {details}
        </>
      )}
    </article>
  );
}

function SupportingCaseCard({ project }: { project: CaseProject }) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:grid-cols-[220px_1fr]">
      <div className="relative min-h-44 bg-zinc-100">
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt=""
            fill
            sizes="220px"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col justify-center p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#718278]">
          {project.category}
        </p>
        <h3 className="mb-2 font-serif text-2xl text-[#1A2B3C]">{project.title}</h3>
        <p className="mb-4 text-sm leading-6 text-zinc-600">{project.shortDescription}</p>
        <Link
          href={`/cases/${project.id}`}
          className="w-fit font-semibold text-[#1A2B3C] underline decoration-[#9EAEA2] underline-offset-4 transition-colors hover:text-[#718278]"
        >
          Read case <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

function EngineeringCaseCard({ project }: { project: CaseProject }) {
  return (
    <Link
      href={`/cases/${project.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-52 overflow-hidden bg-zinc-100">
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#718278]">
          {project.category}
        </p>
        <h3 className="mb-3 font-serif text-2xl text-[#1A2B3C]">{project.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-6 text-zinc-600">{project.shortDescription}</p>
        <span className="font-semibold text-[#1A2B3C]">
          Read case <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

export default function CasesPortfolio({ cases }: { cases: CaseProject[] }) {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>('All');
  const showGovernance = activeFilter !== 'Engineering & UX';
  const showEngineering = activeFilter !== 'AI Governance';
  const featuredCases = cases
    .filter((project) => project.featuredOrder !== undefined)
    .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));
  const supportingCases = cases.filter(
    (project) => project.filterGroup === 'AI Governance' && project.featuredOrder === undefined
  );
  const engineeringCases = cases.filter((project) => project.filterGroup === 'Engineering & UX');

  return (
    <div>
      <div role="group" aria-label="Filter case studies" className="mb-10 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'border-[#1A2B3C] bg-[#1A2B3C] text-white'
                : 'border-zinc-300 bg-white/70 text-zinc-600 hover:border-[#1A2B3C] hover:text-[#1A2B3C]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {showGovernance && (
        <section aria-label="AI governance case studies" className="mb-20 space-y-8">
          {featuredCases.map((project, index) => (
            <FeaturedCaseCard
              key={project.id}
              project={project}
              reverse={index === 1}
            />
          ))}
          {supportingCases.length > 0 && (
            <div className="pt-2">
              <h2 className="mb-5 font-serif text-2xl text-[#1A2B3C]">Related research</h2>
              <div className="grid gap-5">
                {supportingCases.map((project) => (
                  <SupportingCaseCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {showEngineering && (
        <section aria-labelledby="engineering-lab-title">
          <header className="mb-7">
            <h2
              id="engineering-lab-title"
              className="mb-2 font-serif text-3xl text-[#1A2B3C] md:text-4xl"
            >
              Engineering &amp; Creative Lab
            </h2>
            <p className="max-w-2xl text-zinc-600">
              Earlier builds, game development, and full-stack experiments.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engineeringCases.map((project) => (
              <EngineeringCaseCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
