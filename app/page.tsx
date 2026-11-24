import { cookies } from 'next/headers';
import ClassicOnePager from '@/components/portfolio/ClassicOnePager';
import SwedishOnePager from '@/components/portfolio/SwedishOnePager';
import StarOnePager from '@/components/portfolio/StarOnePager';

const VERSIONS = {
  sv: SwedishOnePager,
  classic: ClassicOnePager,
  star: StarOnePager,
}
const ACTIVE_VERSION: keyof typeof VERSIONS = "star";  

export default async function HomePage() {
  if (ACTIVE_VERSION === 'star') {
    const cookieStore = await cookies();
    const savedLang = cookieStore.get('star-portfolio-language')?.value;
    return <StarOnePager initialLang={savedLang === 'en' ? 'en' : 'sv'} />;
  }

  const SelectedPortfolio = VERSIONS[ACTIVE_VERSION]
  return <SelectedPortfolio />;
}