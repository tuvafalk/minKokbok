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
    category: 'Portfolio',
    description:
      'Explore selected work across AI governance, research, engineering, and creative development.',
    href: '/cases',
    action: 'Explore the cases',
    number: '02'
  }
];

export default function CreativeLab() {
  return (
    <main className="min-h-screen bg-[#0C0E0D] px-6 pb-24 pt-24 text-[#ECE9E2] md:px-12 mx-auto">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-16 max-w-4xl pb-10">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#B8C0BC]">
            ★ Creative Lab // Playground
          </p>
          <h1 className="mb-6 font-serif text-5xl leading-tight md:text-6xl text-[#ECE9E2]">
            Ideas made to be explored.
          </h1>
          <p className="text-base leading-relaxed text-[#939E98] md:text-lg max-w-2xl">
            A home for interactive experiments, personal projects, and small things built for the
            joy of making and breaking assumptions.
          </p>
        </header>

        {/* Live Projects Section */}
        <section aria-labelledby="live-projects-title">
          <div className="grid gap-6 md:grid-cols-2">
            {liveProjects.map((project) => (
              <article
                key={project.href}
                className="group flex min-h-64 flex-col justify-between overflow-hidden border border-[#ECE9E2]/20 bg-[#0C0E0D] transition-all duration-300 hover:border-[#ECE9E2]"
              >
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#B8C0BC]">
                      ★ {project.category}
                    </span>
                  </div>

                  <h3 className="mb-4 font-serif text-3xl text-[#ECE9E2]">{project.title}</h3>
                  <p className="max-w-lg leading-relaxed text-[#939E98] text-sm md:text-base mb-8">
                    {project.description}
                  </p>

                  <Link
                    href={project.href}
                    className="mt-auto inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#ECE9E2] underline decoration-[#B8C0BC] underline-offset-4 transition-colors hover:text-[#B8C0BC]"
                  >
                    {project.action} <span aria-hidden="true">→</span>
                  </Link>
                </div>
                {/* Underkant i metall/silver-ton inspirerad av öljetterna */}
                <div
                  aria-hidden="true"
                  className="h-1 bg-[#B8C0BC]/60"
                />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}