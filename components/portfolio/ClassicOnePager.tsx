import Link from 'next/link';
import OnePageHeader from './OnePageHeader';
import { casesData } from '@/components/cases/casesData';

const featuredCases = casesData
  .filter((project) => project.featuredOrder !== undefined)
  .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));

export default function ClassicOnePager() {
  return (
    <main id="top" className="overflow-hidden bg-[#F3F0E6] text-[#173F3A]">
      <OnePageHeader />

      <section className="relative flex min-h-[calc(100svh-64px)] items-end px-4 pb-8 pt-24 md:min-h-[640px] md:px-8 md:pb-16 md:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #789B91 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#5F7E75]">AI ethics · UX · Engineering</p>
          <h1 className="max-w-5xl font-serif text-[18vw] leading-[0.82] tracking-[-0.06em] text-[#173F3A] sm:text-7xl md:text-8xl lg:text-[112px]">
            Technology that helps
            <span className="block font-serif text-[#E36959] italic font-normal tracking-[-0.04em]">people.</span>
          </h1>
          <div className="mt-8 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-base leading-7 text-[#4F6962] md:text-lg md:leading-8">
              I build and examine systems where people retain control. 
              <br/>Combining technical craft, ethical analysis, and clear human-centered design.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-[#173F3A] px-5 py-3 text-sm font-semibold text-[#F3F0E6]">Explore work</a>
              <a href="#contact" className="rounded-full border border-[#173F3A]/20 bg-[#E7EBDD]/70 px-5 py-3 text-sm font-semibold">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-16 bg-[#E7EBDD] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-6 md:mb-12">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#5F7E75]">Selected work</p>
                <h2 className="font-serif text-4xl leading-tight md:text-6xl">Where ideas meet reality</h2>
            </div>
            <Link href="/cases" className="hidden text-sm font-semibold underline decoration-[#9EAEA2] underline-offset-4 md:block">
              View all cases →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredCases.map((project, index) => (
              <article key={project.id} className="flex min-h-72 flex-col rounded-2xl border border-[#173F3A]/10 bg-[#F3F0E6] p-6 md:p-8">
                <p className="mb-8 text-xs font-bold uppercase tracking-[0.18em] text-[#5F7E75]">0{index + 1} / {project.category}</p>
                <h3 className="mb-4 max-w-md font-serif text-2xl leading-tight md:text-3xl">{project.title}</h3>
                <p className="flex-1 text-sm leading-6 text-[#4F6962]">{project.shortDescription}</p>
                <Link href={`/cases/${project.id}`} className="mt-8 w-fit text-sm font-semibold underline decoration-[#9EAEA2] underline-offset-4">
                  Read case →
                </Link>
              </article>
            ))}
          </div>

          <Link href="/cases" className="mt-6 block rounded-full border border-[#1A2B3C]/15 px-5 py-3 text-center text-sm font-semibold md:hidden">
            View all cases
          </Link>
        </div>
      </section>

      <section id="story" className="scroll-mt-16 bg-[#F3F0E6] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="absolute -inset-4 rounded-[32%_68%_61%_39%/42%_38%_62%_58%] bg-[#9EAEA2]/30" />
            <img src="/images/tuva-portrait.jpg" alt="Portrait of Tuva Falk" className="relative h-[440px] w-full rounded-[32%_68%_61%_39%/42%_38%_62%_58%] object-cover shadow-[0_25px_70px_rgba(26,43,60,0.18)]" />
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#5F7E75]">About</p>
            <h2 className="mb-6 font-serif text-4xl leading-[1.05] text-[#173F3A] md:mb-8 md:text-6xl">I work between people, systems, and the future we're building.</h2>
            <div className="max-w-2xl space-y-5 text-base leading-8 text-[#2B3742] md:text-lg">
              <p>I came to technology through curiosity, frustration, and a strong belief that systems should serve people rather than the other way around.</p>
              <p>I'm interested in the space between strategy and execution: making messy problems clear, and translating them into better products, experiences, and systems.</p>
              <Link href="/cases/epistemic-limits-ai" className="inline-block font-semibold underline decoration-[#9EAEA2] underline-offset-4">Read my research case <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="creative" className="scroll-mt-16 bg-[#173F3A] px-4 py-16 text-[#F3F0E6] md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#A8C0B7]">Creative lab</p>
              <h2 className="font-serif text-4xl leading-[1.05] text-[#F3F0E6] md:text-6xl">Ideas made to be explored.</h2>
            </div>
            <Link href="/creative" className="w-fit font-semibold underline decoration-[#9EAEA2] underline-offset-4">Open the playground <span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/recipes" className="group min-h-64 rounded-2xl border border-[#F3F0E6]/15 bg-[#F3F0E6] p-8 text-[#173F3A] shadow-sm transition-transform hover:-translate-y-1 md:p-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#718278]">Interactive cookbook</p>
              <h3 className="mb-4 font-serif text-3xl text-[#1A2B3C]">The Recipe Book</h3>
              <p className="leading-7 text-zinc-600">Browse, flip through, and print a personal collection of recipes.</p>
            </Link>
            <Link href="/cases" className="group min-h-64 rounded-2xl border border-[#F3F0E6]/15 bg-[#E7EBDD] p-8 text-[#173F3A] shadow-sm transition-transform hover:-translate-y-1 md:p-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#718278]">Portfolio experience</p>
              <h3 className="mb-4 font-serif text-3xl text-[#1A2B3C]">Case Study Explorer</h3>
              <p className="leading-7 text-zinc-600">Explore work across AI governance, research, engineering, and experience design.</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-16 bg-[#F3F0E6] px-4 py-16 text-[#173F3A] md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <img src="/images/tuva-arctiffrontiers2.JPG" alt="Tuva Falk at Arctic Frontiers" className="mx-auto h-[400px] w-full max-w-[360px] rounded-2xl object-cover md:h-[440px]" />
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#5F7E75]">Contact</p>
            <h2 className="mb-6 font-serif text-4xl leading-[1.05] md:text-6xl">Let's build something thoughtful.</h2>
            <p className="mb-8 max-w-xl text-base leading-7 text-[#4F6962] md:text-lg md:leading-8">Whether you work with AI, design, research, or product thinking, I'd be happy to connect.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="mailto:falktuva@proton.me" className="rounded-full bg-[#173F3A] px-6 py-3 text-center text-sm font-semibold text-[#F3F0E6]">Email me</a>
              <a href="https://www.linkedin.com/in/tuva-falk/" target="_blank" rel="noreferrer" className="rounded-full border border-[#1A2B3C]/20 bg-white/70 px-6 py-3 text-center text-sm font-semibold">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#173F3A]/10 px-4 py-6 text-[#173F3A] md:px-8">
        <div className="mx-auto">
          <p className="text-sm">© {new Date().getFullYear()} Tuva Falk</p>
        </div>
      </footer>
    </main>
  );
}
