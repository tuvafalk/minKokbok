import Image from 'next/image';
import StarHeader from '@/components/header/StarHeader';

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
  return (
    <>
      <StarHeader />
      <main className="min-h-screen bg-[#0C0E0D] px-6 pb-24 pt-16 text-[#ECE9E2] md:px-12">
        <div className="mx-auto max-w-7xl">
          <header className="mb-12 max-w-3xl pb-8">
            <h1 className="mb-4 font-serif text-5xl font-normal md:text-6xl">Art Gallery</h1>
            <p className="max-w-2xl text-sm leading-relaxed text-[#939E98] md:text-base">
              A growing archive of photographs, illustrations, and visual experiments.
            </p>
          </header>

          <section aria-label="Gallery images" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <figure
                key={item.src}
                className="overflow-hidden border border-[#ECE9E2]/20 bg-[#141816]"
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
                <figcaption className="flex items-center justify-between border-t border-[#ECE9E2]/15 px-4 py-3">
                  <span className="font-serif text-lg">{item.title}</span>
                  <span className="font-mono text-xs text-[#939E98]">
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
