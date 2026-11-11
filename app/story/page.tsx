import Image from 'next/image';
import Link from 'next/link';

export default function StoryPage() {
  return (
    <main className="bg-[#F5F1E7] px-6 pb-24 pt-24 text-[#1A2B3C] md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center md:mb-16">
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            I work between people, systems, and the future we’re building.
          </h1>
        </header>

        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[360px]">
              <div className="absolute -inset-4 rounded-[32%_68%_61%_39%/42%_38%_62%_58%]" />
              <Image
                src="/images/tuva-portrait.jpg"
                alt="Portrait of Tuva Falk"
                width={900}
                height={1100}
                className="relative h-[440px] w-full rounded-[32%_68%_61%_39%/42%_38%_62%_58%] object-cover shadow-[0_25px_70px_rgba(26,43,60,0.18)]"
              />
            </div>
          </div>

          <article className="space-y-6 text-base leading-8 text-[#2B3742] md:text-lg">
            <p>
              I came to technology through a mix of curiosity, frustration, and a strong belief that systems should serve people rather than the other way around. For me, technology is not just about technical efficiency or raw performance, but about how it shapes our lives, our values, and the structures we build together.
            </p>

            <p>
              My Master’s thesis was one of the big turning points for me. It explored how large language models and digital systems often rely on Western, standardized knowledge frames and leave out perspectives that are deeply important but not easily translated into the dominant datasets. That research is also reflected in my case study, <Link href="/cases/epistemic-limits-ai" className="font-semibold underline underline-offset-4">Epistemic Limits &amp; Formal Logic</Link>.
            </p>

            <p>
              That work made a few things clear to me. First, the problem is not only technical it is also cultural and political. Second, a good system is not just clever; it has to be thoughtful, fair, and grounded in reality. And third, I do not want to build technology that looks smart while ignoring the people it touches.
            </p>

            <p>
              I’m interested in the space between strategy and execution. I like looking at messy problems, understanding them, and translating them into something useful: 
            </p>
              <ul className="list-disc space-y-2 pl-6 text-base leading-8 text-[#2B3742] md:text-lg">
              <li>a clearer product</li>
              <li>a better experience</li>
              <li>a more thoughtful system</li>
              <li>a more responsible way of working</li>
            </ul>

            <p>
              If that sounds like the kind of work you’re doing, I’d love to hear from you at <a href="mailto:falktuva@proton.me" className="font-semibold underline underline-offset-4">falktuva@proton.me</a>.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
