'use client';

import Image from 'next/image';
import { useThemeAndLang } from '@/lib/theme';

const galleryItems = [
  {
    src: '/images/IMG_9416.png',
    alt: 'Three hikers on an open landscape',
    title: 'Open air'
  },
  {
    src: '/images/tuva-portrait.jpg',
    alt: 'Portrait in a sunlit corridor',
    title: 'Portrait'
  },
  {
    src: '/images/tuva-hike.jpg',
    alt: 'Hiker in a mountain landscape',
    title: 'On the trail'
  },
  {
    src: '/images/ringar.png',
    alt: 'Illustration of a bird in flight',
    title: 'Bird in flight'
  },
  {
    src: '/images/tuva-hike2.jpg',
    alt: 'Hiker in a forest',
    title: 'Into the forest'
  },
  {
    src: '/images/tuneblr.png',
    alt: 'Pastel illustration of a cassette player',
    title: 'Cassette study'
  }
];

export default function GalleryPage() {
  const { lang, colors } = useThemeAndLang();

  return (
    <>
      <main className={`min-h-screen px-6 pb-24 pt-16 transition-colors duration-300 md:px-12 ${colors.bg} ${colors.text}`}>
        <div className="mx-auto max-w-7xl">
          <header className="mb-12 max-w-3xl pb-8">
            <h1 className="mb-4 font-serif text-5xl font-normal md:text-6xl">
              {lang === 'sv' ? 'Konstgalleri' : 'Art Gallery'}
            </h1>
            <p className={`max-w-2xl text-sm leading-relaxed md:text-base ${colors.accentText}`}>
              {lang === 'sv' 
                ? 'Ett växande arkiv med fotografier, illustrationer och visuella experiment.' 
                : 'A growing archive of photographs, illustrations, and visual experiments.'}
            </p>
          </header>

          <section aria-label="Gallery images" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <figure
                key={item.src}
                className={`overflow-hidden border transition-colors duration-300 ${colors.border} ${colors.cardBg}`}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
                <figcaption className={`flex items-center justify-between border-t px-4 py-3 transition-colors duration-300 ${colors.border}`}>
                  <span className="font-serif text-lg">{item.title}</span>
                  <span className={`font-mono text-xs ${colors.accentText}`}>
                    [ {String(index + 1).padStart(2, '0')} ]
                  </span>
                </figcaption>
              </figure>
            ))}
          </section>
        </div>        
      </main>
    </>
  );
}