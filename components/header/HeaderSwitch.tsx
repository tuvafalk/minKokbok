'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function HeaderSwitch() {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '/onepager' || pathname.startsWith('/onepager/')) return null;

  return <Header />;
}
