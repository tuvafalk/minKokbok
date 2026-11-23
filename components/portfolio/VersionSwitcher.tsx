import Link from 'next/link';

const versions = [
  { label: 'Svenska · radion', href: '/', exact: true },
  { label: 'English · classic', href: '/onepager', exact: false },
  { label: 'Svenska · editorial', href: '/onepager/editorial', exact: false },
];

export default function VersionSwitcher({ variant }: { variant: 'swedish' | 'classic' | 'editorial' }) {
  return (
    <nav aria-label="Välj portfoliosida" className="mt-6 border-t border-current/10 pt-4 md:mt-8">
      <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] opacity-60">Versionsvy</p>
      <div className="flex flex-wrap gap-2">
        {versions.map((version) => {
          const active =
            (variant === 'swedish' && version.href === '/') ||
            (variant === 'classic' && version.label.startsWith('English')) ||
            (variant === 'editorial' && version.href === '/onepager/editorial');

          return (
            <Link
              key={version.href}
              href={version.href}
              aria-current={active ? 'page' : undefined}
              className={`rounded-full border px-3 py-2 font-mono text-[10px] uppercase tracking-wider transition-opacity ${
                active ? 'border-current font-bold opacity-100' : 'border-current/20 opacity-60 hover:opacity-100'
              }`}
            >
              {version.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
