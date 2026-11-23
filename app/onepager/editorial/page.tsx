import Image from 'next/image';
import Link from 'next/link';
import { casesData } from '@/components/cases/casesData';
import VersionSwitcher from '@/components/portfolio/VersionSwitcher';

export default function EditorialOnePagerPage() {
  const featuredCases = casesData.filter((project) => project.featuredOrder !== undefined);

  return (
    <main id="top" className="min-h-screen bg-[#ECE8DE] text-[#17202A]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#17202A]/15 bg-[#ECE8DE]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <Link href="#top" className="font-serif text-xl font-bold tracking-tight">Tuva Falk</Link>
          <nav aria-label="Huvudsektioner" className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#om">Om mig</a>
            <a href="#arbete">Arbete</a>
            <a href="#lekrum">Lekrum</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a href="mailto:falktuva@proton.me" className="hidden rounded-full bg-[#17202A] px-5 py-2.5 text-sm font-semibold text-[#ECE8DE] md:block">Skriv till mig</a>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100svh-64px)] max-w-7xl items-end gap-8 px-4 pb-16 pt-24 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#9A4F3D]">Systemutveckling · Etik · Utforskning</p>
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.92] tracking-[-0.04em] md:text-8xl lg:text-[112px]">
            Teknik med människor i centrum.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-[#4E5A62] md:text-xl md:leading-8">
            Jag bygger och granskar system där mänsklig kontroll, klarhet och ansvar inte är tillägg – utan själva grunden.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#arbete" className="rounded-full bg-[#17202A] px-6 py-3 text-center text-sm font-semibold text-[#ECE8DE]">Utforska mitt arbete</a>
            <a href="#kontakt" className="rounded-full border border-[#17202A]/20 px-6 py-3 text-center text-sm font-semibold">Låt oss prata</a>
          </div>
        </div>
        <div className="relative hidden aspect-[4/5] max-h-[620px] overflow-hidden rounded-[48%_48%_16px_16px] lg:block">
          <Image src="/images/tuva-hike.jpg" alt="Tuva Falk på vandring" fill sizes="560px" className="object-cover" />
        </div>
      </section>

      <section id="om" className="scroll-mt-16 border-y border-[#17202A]/10 bg-[#F7F4EC] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9A4F3D]">Om mig</p>
          <div>
            <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] md:text-6xl">Nyfiken på system. Människa först i varje beslut.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#4E5A62] md:text-lg md:leading-8">
              Jag arbetar i skärningen mellan teknik, etik och användare. Jag gör komplexa frågor begripliga, undersöker vad som faktiskt händer i ett system och bygger lösningar som håller över tid.
            </p>
          </div>
        </div>
      </section>

      <section id="arbete" className="scroll-mt-16 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#9A4F3D]">Utvalda arbeten</p>
              <h2 className="font-serif text-4xl md:text-6xl">Välj var nyfikenheten börjar.</h2>
            </div>
            <Link href="/cases" className="hidden text-sm font-semibold underline underline-offset-4 md:block">Alla case →</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredCases.map((project) => (
              <article key={project.id} className="rounded-2xl border border-[#17202A]/10 bg-[#F7F4EC] p-6 md:p-8">
                <p className="mb-8 text-xs font-bold uppercase tracking-[0.18em] text-[#9A4F3D]">{project.category}</p>
                <h3 className="font-serif text-2xl md:text-3xl">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#4E5A62]">{project.shortDescription}</p>
                <Link href={`/cases/${project.id}`} className="mt-8 inline-block text-sm font-semibold underline underline-offset-4">Läs case →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lekrum" className="scroll-mt-16 bg-[#17202A] px-4 py-16 text-[#ECE8DE] md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#C58A78]">Utanför yrkesrollen</p>
          <h2 className="font-serif text-4xl md:text-6xl">Utforska, prova, gör om.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Link href="/creative" className="rounded-2xl border border-[#ECE8DE]/20 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[#C58A78]">Lekrum</p>
              <h3 className="mt-4 font-serif text-3xl">Spel, verktyg och små experiment</h3>
            </Link>
            <Link href="/recipes" className="rounded-2xl border border-[#ECE8DE]/20 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[#C58A78]">Samling</p>
              <h3 className="mt-4 font-serif text-3xl">Receptboken</h3>
            </Link>
          </div>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-16 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#9A4F3D]">Kontakt</p>
          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">Låt oss hitta vad som faktiskt behöver byggas.</h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:falktuva@proton.me" className="rounded-full bg-[#17202A] px-6 py-3 text-sm font-semibold text-[#ECE8DE]">Skicka e-post</a>
            <a href="https://www.linkedin.com/in/tuva-falk/" target="_blank" rel="noreferrer" className="rounded-full border border-[#17202A]/20 px-6 py-3 text-sm font-semibold">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#17202A]/10 px-4 py-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm">© {new Date().getFullYear()} Tuva Falk</p>
          <VersionSwitcher variant="editorial" />
        </div>
      </footer>
    </main>
  );
}
