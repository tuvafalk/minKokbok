import ClassicOnePager from '@/components/portfolio/ClassicOnePager';
import SwedishOnePager from '@/components/portfolio/SwedishOnePager';
import { MAIN_PAGE_VARIANT } from '@/components/portfolio/config';

export default function HomePage() {
  return MAIN_PAGE_VARIANT === 'swedish' ? <SwedishOnePager /> : <ClassicOnePager />;
}