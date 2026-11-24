import ClassicOnePager from '@/components/portfolio/ClassicOnePager';
import SwedishOnePager from '@/components/portfolio/SwedishOnePager';
import StarOnePager from '@/components/portfolio/StarOnePager';

const VERSIONS = {
  sv: SwedishOnePager,
  classic: ClassicOnePager,
  star: StarOnePager,
}
const ACTIVE_VERSION: keyof typeof VERSIONS = "star";  

export default function HomePage() { 
  const SelectedPortfolio = VERSIONS[ACTIVE_VERSION]
    return <SelectedPortfolio />;
}