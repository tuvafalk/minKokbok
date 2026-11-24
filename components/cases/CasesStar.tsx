'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { CaseFilterGroup, CaseProject } from './casesData';

type ActiveFilter = 'All' | CaseFilterGroup;

const filters: ActiveFilter[] = ['All', 'AI Governance', 'Engineering & UX'];

function FrameworkVisual() {
  return (
    <div className="flex h-full min-h-64 items-center justify-center bg-[#141816] p-6 md:min-h-[380px] border-b md:border-b-0 md:border-r border-[#ECE9E2]/15">
      <svg
        viewBox="0 0 560 360"
        role="img"
        aria-label="Diagram connecting governance, evaluation, and user experience"
        className="w-full max-w-125"
      >
        <path d="M160 112h84m72 0h84M160 248h84m72 0h84M280 144v72" fill="none" stroke="#939E98" strokeWidth="1.5" />
        <rect x="28" y="72" width="132" height="80" rx="4" fill="#0C0E0D" stroke="#ECE9E2" strokeWidth="1" />
        <rect x="400" y="72" width="132" height="80" rx="4" fill="#0C0E0D" stroke="#ECE9E2" strokeWidth="1" />
        <rect x="28" y="208" width="132" height="80" rx="4" fill="#0C0E0D" stroke="#ECE9E2" strokeWidth="1" />
        <rect x="400" y="208" width="132" height="80" rx="4" fill="#ECE9E2" strokeWidth="1" />
        <rect x="208" y="132" width="144" height="96" rx="4" fill="#3B5747" stroke="#ECE9E2" strokeWidth="1.5" />
        <text x="94" y="118" textAnchor="middle" fill="#ECE9E2" fontSize="14" fontFamily="monospace">Governance</text>
        <text x="466" y="118" textAnchor="middle" fill="#ECE9E2" fontSize="14" fontFamily="monospace">UX</text>
        <text x="94" y="254" textAnchor="middle" fill="#ECE9E2" fontSize="14" fontFamily="monospace">Research</text>
        <text x="466" y="254" textAnchor="middle" fill="#ECE9E2" fontSize="14" fontFamily="monospace">Evaluation</text>
        <text x="280" y="174" textAnchor="middle" fill="#ECE9E2" fontSize="14" fontWeight="600" fontFamily="monospace">AI SYSTEM</text>
        <text x="280" y="196" textAnchor="middle" fill="#939E98" fontSize="11" fontFamily="monospace">Shared framework</text>
      </svg>
    </div>
  );
}

function RiskMatrixVisual() {
  return (
    <div className="flex h-full min-h-64 items-center justify-center bg-[#141816] p-6 md:min-h-[380px] border-b md:border-b-0 md:border-r border-[#ECE9E2]/15">
      <svg
        viewBox="0 0 560 360"
        role="img"
        aria-label="Illustrative risk matrix and system boundary"
        className="w-full max-w-125"
      >
        <rect x="86" y="40" width="388" height="280" rx="4" fill="#0C0E0D" stroke="#ECE9E2" strokeWidth="1.5" />
        <path d="M280 80v200M126 180h308" stroke="#939E98" strokeWidth="1" strokeDasharray="4 4" />
        <text x="203" y="132" textAnchor="middle" fill="#ECE9E2" fontSize="14" fontFamily="monospace">Feasibility</text>
        <text x="357" y="132" textAnchor="middle" fill="#B8C0BC" fontSize="14" fontFamily="monospace">Ethics</text>
        <text x="203" y="232" textAnchor="middle" fill="#939E98" fontSize="14" fontFamily="monospace">Risk</text>
        <text x="357" y="232" textAnchor="middle" fill="#ECE9E2" fontSize="14" fontFamily="monospace">Boundary</text>
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
    <div className="relative min-h-64 overflow-hidden bg-[#141816] md:min-h-95 border-b md:border-b-0 md:border-r border-[#ECE9E2]/15">
      {project.imageUrl && (
        <Image
          src={project.imageUrl}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover grayscale transition-transform duration-500 hover:grayscale-0 hover:scale-[1.02]"
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
    <div className={`flex flex-col justify-center p-8 md:p-12 bg-[#0C0E0D] ${reverse ? 'md:order-1' : ''}`}>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#B8C0BC]">
        ★ {project.category}
      </p>
      <h2 className="mb-5 font-serif text-3xl md:text-4xl text-[#ECE9E2] font-normal leading-tight">
        {project.title}
      </h2>
      <p className="mb-8 text-sm md:text-base leading-relaxed text-[#939E98]">
        {project.shortDescription}
      </p>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs uppercase border border-[#ECE9E2]/20 bg-[#1A201D] px-3 py-1 text-[#ECE9E2]"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/cases/${project.id}`}
          className="font-mono text-xs uppercase tracking-wider text-[#ECE9E2] underline decoration-[#B8C0BC] underline-offset-4 transition-colors hover:text-[#B8C0BC]"
        >
          Read case <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );

  return (
    <article className="grid overflow-hidden border border-[#ECE9E2]/20 bg-[#0C0E0D] shadow-sm md:grid-cols-2">
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
    <article className="grid overflow-hidden border border-[#ECE9E2]/20 bg-[#0C0E0D] sm:grid-cols-[240px_1fr]">
      <div className="relative min-h-44 bg-[#141816] border-r border-[#ECE9E2]/15">
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt=""
            fill
            sizes="240px"
            className="object-cover grayscale hover:grayscale-0 transition-all"
          />
        )}
      </div>
      <div className="flex flex-col justify-center p-6 md:p-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[#B8C0BC]">
          ★ {project.category}
        </p>
        <h3 className="mb-2 font-serif text-2xl text-[#ECE9E2]">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-[#939E98]">{project.shortDescription}</p>
        <Link
          href={`/cases/${project.id}`}
          className="w-fit font-mono text-xs uppercase tracking-wider text-[#ECE9E2] underline decoration-[#B8C0BC] underline-offset-4 hover:text-[#B8C0BC]"
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
      className="group flex flex-col overflow-hidden border border-[#ECE9E2]/20 bg-[#0C0E0D] transition-all duration-300 hover:border-[#ECE9E2]"
    >
      <div className="relative h-52 overflow-hidden bg-[#141816] border-b border-[#ECE9E2]/15">
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[#B8C0BC]">
          ★ {project.category}
        </p>
        <h3 className="mb-3 font-serif text-2xl text-[#ECE9E2]">{project.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-[#939E98]">{project.shortDescription}</p>
        <span className="font-mono text-xs uppercase tracking-wider text-[#ECE9E2]">
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
    <div className="py-12 px-6 md:px-12 max-w-[1140px] mx-auto text-[#ECE9E2]">
      {/* Sida Rubrik / Header */}
      <header className="mb-12 border-b border-[#ECE9E2]/20 pb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-[#B8C0BC] block mb-3">
          ★ ARCHIVE // INQUIRIES &amp; PROTOTYPES
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-[#ECE9E2] font-normal tracking-tight mb-6">
          Selected Evidence &amp; Systems.
        </h1>
        <p className="text-[#939E98] max-w-2xl text-base leading-relaxed">
          Empirical research, socio-technical risk analysis, and production engineering. Stripped of corporate spectacle.
        </p>

        {/* Filter Buttons */}
        <div role="group" aria-label="Filter case studies" className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-mono text-xs uppercase tracking-wider border px-5 py-2.5 transition-all ${
                activeFilter === filter
                  ? 'border-[#ECE9E2] bg-[#ECE9E2] text-[#0C0E0D] font-semibold'
                  : 'border-[#ECE9E2]/20 bg-[#141816] text-[#939E98] hover:border-[#ECE9E2] hover:text-[#ECE9E2]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      {showGovernance && (
        <section aria-label="AI governance case studies" className="mb-20 space-y-12">
          {featuredCases.map((project, index) => (
            <FeaturedCaseCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
          {supportingCases.length > 0 && (
            <div className="pt-6 border-t border-[#ECE9E2]/15">
              <h2 className="mb-6 font-serif text-3xl text-[#ECE9E2]">Related research</h2>
              <div className="grid gap-6">
                {supportingCases.map((project) => (
                  <SupportingCaseCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {showEngineering && (
        <section aria-labelledby="engineering-lab-title" className="pt-6 border-t border-[#ECE9E2]/15">
          <header className="mb-8">
            <h2
              id="engineering-lab-title"
              className="mb-2 font-serif text-3xl md:text-4xl text-[#ECE9E2]"
            >
              Engineering &amp; Creative Lab
            </h2>
            <p className="max-w-2xl text-[#939E98] text-sm md:text-base">
              Earlier builds, game development, and full-stack experiments.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engineeringCases.map((project) => (
              <EngineeringCard key={project.id} project={project} /> // Använd rätt komponentnamn nedan
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// Säkerställ att denna matchar namnet ovan
function EngineeringCard({ project }: { project: CaseProject }) {
  return (
    <Link
      href={`/cases/${project.id}`}
      className="group flex flex-col overflow-hidden border border-[#ECE9E2]/20 bg-[#0C0E0D] transition-all duration-300 hover:border-[#ECE9E2]"
    >
      <div className="relative h-52 overflow-hidden bg-[#141816] border-b border-[#ECE9E2]/15">
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[#B8C0BC]">
          ★ {project.category}
        </p>
        <h3 className="mb-3 font-serif text-2xl text-[#ECE9E2]">{project.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-[#939E98]">{project.shortDescription}</p>
        <span className="font-mono text-xs uppercase tracking-wider text-[#ECE9E2]">
          Read case <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}