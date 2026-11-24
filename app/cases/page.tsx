import CasesPortfolio from '../../components/cases/CasesPortfolio';
import CasesStar from '../../components/cases/CasesStar';
import { casesData } from '../../components/cases/casesData';
import StarHeader from '@/components/portfolio/StarHeader';
import { ACTIVE_CASE_VERSION } from '@/components/cases/casesVersion';

const VERSIONS = {
  classic: CasesPortfolio,
  star: CasesStar,
}
const ACTIVE_VERSION: keyof typeof VERSIONS = ACTIVE_CASE_VERSION;

export default function CasesPage() {
  const isStarVersion = ACTIVE_VERSION === 'star';
  const SelectedCase = VERSIONS[ACTIVE_VERSION]

  return (
    <>
      {isStarVersion && <StarHeader />}
      <main
        className={
          isStarVersion
            ? 'min-h-screen bg-[#0C0E0D] px-6 pb-24 pt-16 text-[#ECE9E2] md:px-12'
            : 'min-h-screen bg-[#F5F1E7] px-6 pb-24 pt-16 text-zinc-800 md:px-12'
        }
      >
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 max-w-3xl">
            <h1
              className={`mb-4 font-serif text-4xl font-medium md:text-5xl ${
                isStarVersion ? 'text-[#ECE9E2]' : 'text-[#1A2B3C]'
              }`}
            >
              Selected Works &amp; Case Studies
            </h1>
            <p
              className={`text-base leading-relaxed md:text-lg ${
                isStarVersion ? 'text-[#939E98]' : 'text-zinc-600'
              }`}
            >
              Translating regulatory frameworks, socio-technical research, and complex data into
              resilient, human-centered systems.
            </p>
          </header>
          <SelectedCase cases={casesData} />
        </div>
      </main>
    </>
  );
}
