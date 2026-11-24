"use client";

import React, { useState } from "react";
import Link from 'next/link';
import StarHeader from './StarHeader';

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  behindTheScenes: string;
  tags: string[];
}

const projects: ProjectItem[] = [
  {
    id: "ai-evaluation-framework",
    category: "Research & UX",
    title: "Interdisciplinary AI Evaluation Framework",
    summary:
      "Designed a mixed-methods framework (N=66) combining qualitative user experience metrics with technical audits at AI Policy Lab. Won Best Paper at USCCS 2025.",
    behindTheScenes:
      "The core question here was: How do you make abstract laws (like the EU AI Act) actually feel transparent and human inside a real, working interface instead of just being legal fine print?",
    tags: ["EU AI Act", "AI Auditing", "UX Metrics"],
  },
  {
    id: "public-sector-digital-hr",
    category: "Systems & Ethics",
    title: "Public Sector Digital HR & Risk Study",
    summary:
      "Conducted technical feasibility and ethics reviews for adding preventative work-life balance tools to high-security public infrastructure.",
    behindTheScenes:
      "We had to pause and ask: Are we building something that genuinely supports employees, or is this just digital surveillance disguised as wellness? Protecting human autonomy came first.",
    tags: ["Risk Analysis", "Power Dynamics", "Privacy"],
  },
  {
    id: "bioprocess",
    category: "Frontend & Agent Workflows",
    title: "Bioprocess Control & Agent Interfaces",
    summary:
      "Building real-time batch tracking interfaces and prototyping MCP-based AI agent workflows for high-stakes laboratory environments at Sartorius.",
    behindTheScenes:
      "The guiding rule: Automation should never strip away human judgment. Designing supervisory controls so operators always keep the final say.",
    tags: ["React", "TypeScript", "Human Agency"],
  },
];

const StarIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M12 1.5l3.09 6.26L22 8.77l-5 4.87 1.18 6.88L12 17.27l-6.18 3.25L7 13.64 2 8.77l6.91-1.01L12 1.5z" />
  </svg>
);

export default function HomePostPunk() {
  const [openDrawers, setOpenDrawers] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);
  const [activeModal, setActiveModal] = useState<"playground" | "gallery" | null>(null);

  const toggleDrawer = (id: string) => {
    setOpenDrawers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@tuvafalk.se");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0C0E0D] text-[#ECE9E2] selection:bg-[#ECE9E2] selection:text-[#0C0E0D] font-sans antialiased">
      <div className="mx-auto">
        <StarHeader />

        <section className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] border-b border-[#ECE9E2]/15">
          <div className="p-8 md:p-12 lg:py-20 lg:px-10 border-b lg:border-b-0 lg:border-r border-[#ECE9E2]/15 relative overflow-hidden">
            <StarIcon className="w-80 h-80 fill-[#ECE9E2] opacity-[0.035] -rotate-12 absolute -right-16 -bottom-20 pointer-events-none" />

            <p className="font-mono text-xs uppercase tracking-widest text-[#B8C0BC] mb-6">
              ★ Socio-Technical Systems // Critical AI Ethics // Engineering
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.6rem] font-normal leading-[0.98] tracking-tight text-[#ECE9E2] mb-8">
              I work between people, systems, and the{" "}
              <em className="italic text-[#B8C0BC] underline decoration-1 underline-offset-8">
                future
              </em>{" "}
              we’re building.
            </h1>

            <div className="space-y-4 text-[#939E98] text-base md:text-[1.05rem] max-w-[64ch] leading-relaxed">
              <p>
                I came to technology through curiosity, a persistent frustration with broken systems, and the realization that <b>technology is never neutral—it is an exercise of power.</b>
              </p>
              <p>
                I operate in the space between strategy and execution: cutting through the noise, auditing the structures behind the code, and translating complex socio-technical realities into systems where humans actually stay at the wheel.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3.5">
              <a
                href="#projects"
                className="font-mono text-xs uppercase tracking-wider px-6 py-3.5 bg-[#ECE9E2] text-[#0C0E0D] border border-[#ECE9E2] font-semibold hover:bg-[#3B5747] hover:border-[#3B5747] hover:text-[#ECE9E2] transition-colors"
              >
                See Projects ↓
              </a>
              <a
                href="#how-i-work"
                className="font-mono text-xs uppercase tracking-wider px-6 py-3.5 border border-[#ECE9E2]/20 text-[#ECE9E2] hover:border-[#ECE9E2] hover:bg-[#141816] transition-colors"
              >
                My Approach
              </a>
            </div>
          </div>

          <aside className="bg-[#ECE9E2] text-[#0C0E0D] p-8 md:p-12 lg:py-16 lg:px-10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-[#0C0E0D]/20 pb-3.5 mb-8 font-mono text-[11px] uppercase tracking-widest">
                <span>Core Insights</span>
              </div>

              <StarIcon className="w-10 h-10 fill-[#0C0E0D] -rotate-12 mb-6" />

              <blockquote className="font-serif text-3xl md:text-[2.1rem] leading-[1.15] text-[#0C0E0D] mb-6">
                “Every architecture encodes an assumption about who holds agency—and who is expected to comply.”
              </blockquote>
            </div>

            <p className="font-mono text-xs text-[#0C0E0D]/75 leading-relaxed border-t border-[#0C0E0D]/15 pt-4">
              Combining technical execution with a relentless curiosity about people and impact.
            </p>
          </aside>
        </section>

        <section id="how-i-work" className="border-b border-[#ECE9E2]/15">
          <div className="px-6 md:px-10 pt-14 pb-8">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#ECE9E2]">
              How I Approach Things
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#ECE9E2]/15">
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#ECE9E2]/15 hover:bg-[#141816] transition-colors">
              <span className="font-mono text-xs text-[#B8C0BC] uppercase tracking-widest block mb-4">
               [ ★ 01 // BUILD ]
              </span>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-3 text-[#ECE9E2]">
                Systems with Intent
              </h3>
              <p className="text-sm md:text-[0.95rem] text-[#939E98] leading-relaxed">
                I build responsive, well-crafted interfaces. I care about clean code, good design, and making sure software actually solves real problems.
              </p>
            </div>

            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#ECE9E2]/15 hover:bg-[#141816] transition-colors">
              <span className="font-mono text-xs text-[#B8C0BC] uppercase tracking-widest block mb-4">
                [ ★ 02 // AUDIT ]
              </span>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-3 text-[#ECE9E2]">
                 Ethics &amp; Feasibility
              </h3>
              <p className="text-sm md:text-[0.95rem] text-[#939E98] leading-relaxed">
                Before shipping, I like to zoom out. Why are we building this? How will we evaluate if it works? What are the blind spots we aren't seeing yet?
              </p>
            </div>

            <div className="p-8 md:p-10 hover:bg-[#141816] transition-colors">
              <span className="font-mono text-xs text-[#B8C0BC] uppercase tracking-widest block mb-4">
                [ ★ 03 // CHALLENGE ]
              </span>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-3 text-[#ECE9E2]">
                Power &amp; Critique
              </h3>
              <p className="text-sm md:text-[0.95rem] text-[#939E98] leading-relaxed">
                Every system distributes power. I ask the uncomfortable questions about who benefits from an architecture, who gets erased, and where the blind spots hide.
              </p>
            </div>
          </div>
        </section>

        <div className="space-y-24 py-16">
          {/* --- SECTION 1: PROJECTS & INQUIRIES --- */}
          <section id="projects" className="border-y border-[#ECE9E2]/15 py-12 md:py-16">
            <div className="px-6 md:px-12 max-w-[1140px] mx-auto mb-12 flex flex-wrap justify-between items-end gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#B8C0BC] block mb-3">
                  ★ 01 // EVIDENCE &amp; WORK
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#ECE9E2]">
                  Projects &amp; Questions
                </h2>
              </div>
              <p className="text-sm md:text-base text-[#939E98] max-w-[42ch] leading-relaxed">
                A look at what I've built, what I looked into, and the questions that drove the work.
              </p>
            </div>

            <div className="max-w-[1140px] mx-auto px-6 md:px-12">
              <div className="grid gap-8">
                {projects.map((item, idx) => (
                  <article
                    key={item.id}
                    className="group p-8 md:p-12 border border-[#ECE9E2]/20 bg-[#0C0E0D] hover:border-[#ECE9E2] transition-all duration-300 relative"
                  >
                    {/* Ovanlig detalj: Snedställd dekorativ stjärna eller nummer i hörnet */}
                    <div className="absolute top-6 right-6 font-mono text-xs text-[#939E98]">
                      [ 0{idx + 1} ]
                    </div>

                    <div className="max-w-3xl">
                      <span className="font-mono text-xs text-[#B8C0BC] uppercase tracking-wider block mb-3">
                        ★ {item.category}
                      </span>

                      <h3 className="font-serif text-3xl md:text-4xl font-normal text-[#ECE9E2] mb-4 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-base text-[#939E98] leading-relaxed mb-6">
                        {item.summary}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {item.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="font-mono text-xs uppercase text-[#ECE9E2] border border-[#ECE9E2]/20 bg-[#141816] px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Direktlänk till fullständigt case istället för expanderande text */}
                      <Link
                        href={`/cases/${item.id}`}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#ECE9E2] underline decoration-[#B8C0BC] underline-offset-4 group-hover:text-[#B8C0BC] transition-colors"
                      >
                        Read full case study <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* --- SECTION 2: CREATIVE LAB & ARCHIVE --- */}
          <section id="lab" className="border-y border-[#ECE9E2]/15 py-12 md:py-16">
            <div className="px-6 md:px-12 max-w-[1140px] mx-auto mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B8C0BC] block mb-3">
                ★ 02 // AFTER HOURS
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#ECE9E2]">
                Creative Lab
              </h2>
            </div>

            <div className="max-w-[1140px] mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Kort 1: Playground */}
                <Link
                  href="/creative"
                  className="group p-8 md:p-12 border border-[#ECE9E2]/20 bg-[#0C0E0D] hover:border-[#ECE9E2] transition-all duration-300 flex flex-col justify-between min-h-[320px]"
                >
                  <div>
                    <span className="font-mono text-xs text-[#B8C0BC] uppercase tracking-widest block mb-3">
                      [ 01 // Code &amp; Worlds ]
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-normal text-[#ECE9E2] mb-4">
                      Creative Playground
                    </h3>
                    <p className="text-sm md:text-base text-[#939E98] leading-relaxed max-w-md">
                      Atmospheric game prototypes (Darkwell, Realm Walker), independent builds, and web experiments.
                    </p>
                  </div>

                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#ECE9E2] group-hover:translate-x-1 transition-transform">
                    Explore playground →
                  </span>
                </Link>

                {/* Kort 2: Art Gallery */}
                <Link
                  href="/gallery"
                  className="group p-8 md:p-12 border border-[#ECE9E2]/20 bg-[#0C0E0D] hover:border-[#ECE9E2] transition-all duration-300 flex flex-col justify-between min-h-[320px]"
                >
                  <div>
                    <span className="font-mono text-xs text-[#B8C0BC] uppercase tracking-widest block mb-3">
                      [ 02 // Ink &amp; Charcoal ]
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-normal text-[#ECE9E2] mb-4">
                      Art Gallery
                    </h3>
                    <p className="text-sm md:text-base text-[#939E98] leading-relaxed max-w-md">
                      Analog pencil portraits, ink studies, and visual notes created away from the glowing screen.
                    </p>
                  </div>

                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#ECE9E2] group-hover:translate-x-1 transition-transform">
                    View plates →
                  </span>
                </Link>

              </div>
            </div>
          </section>
        </div>

        <section id="contact" className="p-8 md:p-16 lg:py-20 bg-[#141816]">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] font-normal leading-[1.08] max-w-3xl text-[#ECE9E2] mb-5">
            Want to build something meaningful together? 
            <br/>Let’s talk.
          </h2>
          <p className="text-[#939E98] max-w-[54ch] text-base leading-relaxed mb-9">
            Always open to interesting engineering projects, research collaborations, or conversations about how we build better tech.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <button
              onClick={handleCopyEmail}
              className="font-mono text-xs uppercase tracking-wider px-6 py-3.5 bg-[#ECE9E2] text-[#0C0E0D] border border-[#ECE9E2] font-semibold hover:bg-[#3B5747] hover:border-[#3B5747] hover:text-[#ECE9E2] transition-colors cursor-pointer"
            >
              {copied ? "Copied: falktuva@proton.me ✓" : "Copy Email: falktuva@proton.me"}
            </button>
            <a
              href="https://linkedin.com/in/tuvafalk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider px-6 py-3.5 border border-[#ECE9E2]/20 text-[#ECE9E2] hover:border-[#ECE9E2] hover:bg-[#0C0E0D] transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>

        <footer className="px-6 md:px-10 py-6 bg-[#0C0E0D] border-t border-[#ECE9E2]/15 flex flex-wrap justify-between items-center gap-3 font-mono text-xs text-[#939E98] uppercase tracking-wider">
          <span>© 2026 Tuva Falk — Sweden</span>
          <span>Build, Audit &amp; Challenge</span>
        </footer>
      </div>
    </div>
  );
}

