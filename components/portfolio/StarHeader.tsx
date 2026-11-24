import Link from 'next/link';

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-[#ECE9E2] -rotate-12">
      <path d="M12 1.5l3.09 6.26L22 8.77l-5 4.87 1.18 6.88L12 17.27l-6.18 3.25L7 13.64 2 8.77l6.91-1.01L12 1.5z" />
    </svg>
  );
}

export default function StarHeader() {
  return (
    <header className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-4 border-b border-[#ECE9E2]/15 bg-[#0C0E0D]/90 px-6 py-4 backdrop-blur-md md:px-9">
      <Link
        href="/"
        className="flex items-center gap-2.5 font-display text-lg font-extrabold uppercase tracking-tight text-[#ECE9E2]"
      >
        <StarIcon />
        Tuva Falk
      </Link>

      <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
        <Link href="/#how-i-work" className="text-[#939E98] transition-colors hover:text-[#ECE9E2]">
          How I Work
        </Link>
        <Link href="/#projects" className="text-[#939E98] transition-colors hover:text-[#ECE9E2]">
          Projects &amp; Questions
        </Link>
        <Link href="/#lab" className="text-[#939E98] transition-colors hover:text-[#ECE9E2]">
          Art &amp; Lab
        </Link>
        <Link
          href="/#contact"
          className="border border-[#ECE9E2] bg-[#ECE9E2] px-4 py-2 font-semibold text-[#0C0E0D] transition-colors hover:bg-transparent hover:text-[#ECE9E2]"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
