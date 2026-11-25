import { cookies } from 'next/headers';
import ClassicOnePager from '@/components/portfolio/ClassicOnePager';
import SwedishOnePager from '@/components/portfolio/SwedishOnePager';
import StarIndex from '@/components/portfolio/StarIndex';

const VERSIONS = {
  sv: SwedishOnePager,
  classic: ClassicOnePager,
  star: StarIndex,
}
const ACTIVE_VERSION: keyof typeof VERSIONS = "star";  

export default async function HomePage() {
  if (ACTIVE_VERSION === 'star') {
    const cookieStore = await cookies();
    const savedLang = cookieStore.get('star-portfolio-language')?.value;
    return <StarIndex initialLang={savedLang === 'en' ? 'en' : 'sv'} />;
  }

  const SelectedPortfolio = VERSIONS[ACTIVE_VERSION]
  return <SelectedPortfolio />;
}