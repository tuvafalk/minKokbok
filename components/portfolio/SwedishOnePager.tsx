import Link from 'next/link';
import { casesData } from '@/components/cases/casesData';
import Image from 'next/image';
import SwedishHeader from '@/components/header/SwedishHeader';

const pillars = [
	{
		number: '[01]',
		title: 'Bygger',
		text: 'Tydliga, robusta gränssnitt som löser ett faktiskt behov. Jag bryr mig om hur tekniken används, inte bara att den går att demonstrera.',
	},
	{
		number: '[02]',
		title: 'Granskar',
		text: 'AI-strategier, risker och etik analyserade tidigt – så att problem blir synliga innan tekniken får sättas in i verkligheten.',
	},
	{
		number: '[03]',
		title: 'Utmanar',
		text: 'Att våga ställa frågorna som inte automatiskt kommer med nästa digitala våg – vem gynnas, vem påverkas och vem behöver kunna säga stopp?',
	},
];

export default function SwedishOnePager() {
	const featuredCases = casesData
		.filter((project) => project.featuredOrder !== undefined)
		.sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));

	return (
		<main id="top" className="overflow-hidden bg-[#EAE7E2] text-[#121417] selection:bg-[#B23A25] selection:text-[#EAE7E2]">
			<SwedishHeader />
			<section className="mx-auto flex min-h-[calc(100svh-64px)] max-w-6xl items-center px-4 pb-8 pt-24 md:px-8 md:pb-16 md:pt-32">
				<div className="grid w-full items-center gap-8 border-b border-[#121417] pb-16 lg:grid-cols-[1.35fr_0.65fr]">
					<div>
						<p className="mb-6 inline-block border border-[#2C3531] px-3 py-2 font-mono text-[11px] uppercase tracking-widest">
							Hej, jag är Tuva // Systemutveckling // Teknikkritisk analys
						</p>
						<h1 className="max-w-4xl font-serif text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-[88px]">
							Teknik är inte neutral.
							<br />
							<span className="text-[#B23A25]">Den är makt.</span>
						</h1>
						<p className="mt-8 max-w-2xl text-base leading-7 text-[#2C3531] md:text-lg md:leading-8">
							Jag utforskar hur teknik faktiskt påverkar människor, system och organisationer – och hjälper
							dig att göra system som är tydligare, säkrare och mer
							ansvarsfulla.
						</p>
						<p className="mt-6 max-w-2xl border-l-2 border-[#B23A25] pl-4 text-base font-bold leading-7 md:text-lg">
							Konstruktiv skärpa, inte fler tomma lösningar.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<a
								href="#arbete"
								className="border border-[#121417] bg-[#121417] px-5 py-3 text-center font-mono text-xs uppercase tracking-widest text-[#EAE7E2] transition-colors hover:border-[#B23A25] hover:bg-[#B23A25]">
								Utforska arbete ↓
							</a>
							<a
								href="#kontakt"
								className="border border-[#121417] px-5 py-3 text-center font-mono text-xs uppercase tracking-widest transition-colors hover:bg-[#121417] hover:text-[#EAE7E2]">
								Starta dialog
							</a>
						</div>
					</div>
					<div className="relative hidden h-[520px] lg:block">
						<div className="absolute inset-0 translate-x-3 translate-y-3 border border-[#121417]" />
						<Image
							src="/images/tuva-profile.jpg"
							alt="Tuva Falk"
							fill
							sizes="420px"
							className="relative object-cover grayscale-[20%]"
						/>
					</div>
				</div>
			</section>

			<section
				id="metod"
				className="scroll-mt-16 border-b border-[#121417] px-4 py-16 md:px-8 md:py-24">
				<div className="mx-auto max-w-6xl">
					<p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23A25]">// Metod & hantverk</p>
					<h2 className="mb-10 text-3xl font-bold tracking-tight md:text-5xl">
						Olika fält. En riktning.
					</h2>
					<div className="grid border-l border-t border-[#121417] md:grid-cols-3">
						{pillars.map((pillar) => (
							<article
								key={pillar.title}
								className="group border-b border-r border-[#121417] p-6 transition-colors hover:bg-[#121417] hover:text-[#EAE7E2] md:p-8">
								<p className="font-mono text-xs font-bold text-[#B23A25]">
									{pillar.number}
								</p>
								<h3 className="mt-6 text-xl font-bold">{pillar.title}</h3>
								<p className="mt-3 text-sm leading-6 text-[#2C3531] group-hover:text-[#EAE7E2]">
									{pillar.text}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section
				id="arbete"
				className="scroll-mt-16 border-b border-[#121417] px-4 py-16 md:px-8 md:py-24">
				<div className="mx-auto max-w-6xl">
					<div className="mb-8 flex items-end justify-between gap-6">
						<div>
							<p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23A25]">// Utvalda projekt</p>
							<h2 className="text-3xl font-bold tracking-tight md:text-5xl">
								Konkreta uppgifter. Tydliga slutsatser.
							</h2>
						</div>
						<Link
							href="/cases"
							className="hidden font-mono text-xs uppercase tracking-widest underline decoration-[#B23A25] underline-offset-4 md:block">
							Alla case →
						</Link>
					</div>

					<div className="space-y-4">
						{featuredCases.map((project, index) => (
							<article
								key={project.id}
								className="border border-[#121417] p-6 transition-colors hover:border-[#B23A25] md:p-8">
								<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
									<div className="max-w-2xl">
										<p className="font-mono text-xs">
											<span className="text-[#B23A25]">0{index + 1}</span> /{' '}
											{project.category}
										</p>
										<h3 className="mt-3 text-2xl font-bold tracking-tight">
											{project.title}
										</h3>
										<p className="mt-3 text-sm leading-6 text-[#2C3531] md:text-base">
											{project.shortDescription}
										</p>
									</div>
									<Link
										href={`/cases/${project.id}`}
										className="shrink-0 border border-[#121417] px-4 py-3 text-center font-mono text-[11px] uppercase tracking-widest transition-colors hover:border-[#B23A25] hover:bg-[#B23A25] hover:text-[#EAE7E2]">
										Läs case →
									</Link>
								</div>
							</article>
						))}
					</div>
					<Link
						href="/cases"
						className="mt-4 block border border-[#121417] px-4 py-3 text-center font-mono text-xs uppercase tracking-widest md:hidden">
						Alla case
					</Link>
				</div>
			</section>

			<section
				id="lekrum"
				className="scroll-mt-16 border-b border-[#121417] px-4 py-16 md:px-8 md:py-24">
				<div className="mx-auto max-w-6xl">
					<p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23A25]">// Utanför kodbasen</p>
					<h2 className="text-3xl font-bold md:text-5xl">
						Laboratorium & visuella undersökningar
					</h2>
					<div className="mt-8 grid gap-4 md:grid-cols-2">
						<Link
							href="/creative"
							className="border border-[#121417] p-6 transition-colors hover:bg-[#121417] hover:text-[#EAE7E2] md:p-8">
							<p className="font-mono text-xs text-[#B23A25]">[01 / SPEL & KOD]</p>
							<h3 className="mt-4 text-2xl font-bold">Creative Playground</h3>
							<p className="mt-3 text-sm leading-6 opacity-80">
								Hobbyprojekt, spelprototyper och webbexperiment.
							</p>
						</Link>
						<Link
							href="/recipes"
							className="border border-[#121417] p-6 transition-colors hover:bg-[#121417] hover:text-[#EAE7E2] md:p-8">
							<p className="font-mono text-xs text-[#B23A25]">[02 / INTERAKTIVT]</p>
							<h3 className="mt-4 text-2xl font-bold">Receptboken</h3>
							<p className="mt-3 text-sm leading-6 opacity-80">
								Sök, bläddra och skriv ut en personlig samling recept.
							</p>
						</Link>
					</div>
				</div>
			</section>

			<section
				id="kontakt"
				className="scroll-mt-16 px-4 py-16 md:px-8 md:py-24">
				<div className="mx-auto max-w-6xl border border-[#121417] bg-[#121417] p-6 text-[#EAE7E2] md:p-12">
					<p className="font-mono text-xs uppercase tracking-widest text-[#B23A25]">// Nästa steg</p>
					<h2 className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight md:text-5xl">
						Behöver du teknisk skärpa med en systemkritisk kompass?
					</h2>
					<p className="mt-4 max-w-2xl text-sm leading-6 text-[#EAE7E2]/80 md:text-base">
						Vill du syna en AI-strategi, bygga ett genomtänkt system eller ta de obekväma frågorna på allvar? Då vill jag gärna höra vad ni försöker lösa.
					</p>
					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<a
							href="mailto:falktuva@proton.me"
							className="border border-[#B23A25] bg-[#B23A25] px-5 py-3 text-center font-mono text-xs uppercase tracking-widest">
							Skicka e-post
						</a>
						<a
							href="https://www.linkedin.com/in/tuva-falk/"
							target="_blank"
							rel="noreferrer"
							className="border border-[#EAE7E2] px-5 py-3 text-center font-mono text-xs uppercase tracking-widest hover:bg-[#EAE7E2] hover:text-[#121417]">
							LinkedIn ↗
						</a>
					</div>
				</div>
			</section>

			<section
				id="berattelse"
				className="scroll-mt-16 border-b border-[#121417] px-4 py-16 md:px-8 md:py-24">
				<div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.72fr_1.28fr]">
					<div className="relative mx-auto h-[420px] w-full max-w-[360px]">
						<div className="absolute -inset-3 border border-[#121417]" />
						<Image
							src="/images/tuva-hike.jpg"
							alt="Tuva på vandring"
							fill
							sizes="360px"
							className="relative object-cover grayscale-[12%]"
						/>
					</div>
					<div>
						<p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#B23A25]">// Så började det</p>
						<h2 className="text-3xl font-bold leading-tight md:text-5xl">
							Människan ska vara med i bilden.
						</h2>
						<p className="mt-6 max-w-2xl text-sm leading-7 text-[#2C3531] md:text-base">
							Jag kommer till teknik genom nyfikenhet, frustration och en enkel
							övertygelse: system ska fungera för människor, inte tvärtom. Det gäller
							lika mycket i en kodbas som i ett mötesrum.
						</p>
						<p className="mt-4 max-w-2xl text-sm leading-7 text-[#2C3531] md:text-base">
							Jag tycker om att förstå en komplex verklighet, göra den begriplig och
							sedan bygga något som faktiskt håller. Det är där analys, hantverk och
							samarbete möts.
						</p>
						<Link
							href="/cases/epistemic-limits-ai"
							className="mt-6 inline-block font-mono text-xs uppercase tracking-widest underline decoration-[#B23A25] underline-offset-4">
							Läs mitt forskningscase →
						</Link>
					</div>
				</div>
			</section>

			<footer className="border-t border-[#121417] px-4 py-6 md:px-8">
				<div className="mx-auto flex max-w-6xl flex-col gap-2 font-mono text-[11px] uppercase text-[#2C3531] md:flex-row md:justify-between">
					<span>© {new Date().getFullYear()} Tuva Falk</span>
				</div>
			</footer>
		</main>
	);
}
