import CasesPortfolio from '../../components/cases/CasesPortfolio';
import { casesData } from '../../components/cases/casesData';

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E7] px-6 pb-24 pt-36 text-zinc-800 md:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-3xl">
          <h1 className="mb-4 font-serif text-4xl font-medium text-[#1A2B3C] md:text-5xl">
            Selected Works &amp; Case Studies
          </h1>
          <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
            Translating regulatory frameworks, socio-technical research, and complex data into
            resilient, human-centered systems.
          </p>
        </header>

        <CasesPortfolio cases={casesData} />
      </div>
    </main>
  );
}
