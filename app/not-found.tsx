import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-6rem)] items-center overflow-hidden bg-[#F5F1E7] px-6 py-16 text-[#1A2B3C] md:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #9EAEA2 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_0.85fr] md:gap-16">
        <section>          
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] md:text-7xl">
            This page wandered off.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
            The link may be out of date, or this page may have found a different story. Let’s get
            you back to something worth exploring.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#1A2B3C] px-6 py-3 font-semibold text-[#F5F1E7] transition-colors hover:bg-[#34495b]"
            >
              Back home
            </Link>
            <Link
              href="/playground"
              className="inline-flex items-center rounded-full border border-[#1A2B3C]/20 bg-white/70 px-6 py-3 font-semibold text-[#1A2B3C] transition-colors hover:bg-white"
            >
              Visit the Creative Lab
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
