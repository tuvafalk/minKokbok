import Link from 'next/link';

const liveProjects = [
  {
    title: 'The Recipe Book',
    category: 'Interactive cookbook',
    description:
      'Browse recipes by category, search the collection, flip through the cookbook, or print it as a PDF.',
    href: '/recipes',
    action: 'Open the recipe book',
    number: '01'
  },
  {
    title: 'Case Study Explorer',
    category: 'Portfolio experience',
    description:
      'Explore selected work across AI governance, research, engineering, and creative development.',
    href: '/cases',
    action: 'Explore the cases',
    number: '02'
  }
];

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E7] px-6 pb-24 pt-24 text-[#1A2B3C] md:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#718278]">
            Creative Lab
          </p>
          <h1 className="mb-4 font-serif text-5xl leading-tight md:text-6xl">
            Ideas made to be explored.
          </h1>
          <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
            A home for interactive experiments, personal projects, and small things built for the
            joy of making.
          </p>
        </header>

        <section aria-labelledby="live-projects-title">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="live-projects-title" className="font-serif text-3xl md:text-4xl">
                Live projects
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {liveProjects.map((project) => (
              <article
                key={project.href}
                className="group flex min-h-64 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3 className="mb-4 font-serif text-3xl text-[#1A2B3C]">{project.title}</h3>
                  <p className="max-w-lg leading-relaxed text-zinc-600">{project.description}</p>
                  <Link
                    href={project.href}
                    className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-[#1A2B3C] underline decoration-[#9EAEA2] underline-offset-4 transition-colors group-hover:text-[#718278]"
                  >
                    {project.action} <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div
                  aria-hidden="true"
                  className="h-2 bg-[#9EAEA2]"
                />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
