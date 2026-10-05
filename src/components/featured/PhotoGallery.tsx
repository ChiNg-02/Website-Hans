interface PhotoGalleryProps {
  images: string[];
  alt: string;
}

/** One large image beside two stacked smaller ones. */
export function PhotoGalleryTrio({ images, alt }: PhotoGalleryProps) {
  return (
    <div className="grid aspect-[4/3] grid-cols-2 grid-rows-2 gap-3 sm:aspect-[21/9]">
      <div className="row-span-2 overflow-hidden rounded-2xl">
        <img src={images[0]} alt={alt} className="h-full w-full object-cover" />
      </div>
      <div className="overflow-hidden rounded-2xl">
        <img src={images[1]} alt={alt} className="h-full w-full object-cover" />
      </div>
      <div className="overflow-hidden rounded-2xl">
        <img src={images[2]} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

interface PhotoGalleryCarouselProps {
  groups: string[][];
  alt: string;
}

/** Horizontally scrollable gallery of the same large-and-stacked photo layout. */
export function PhotoGalleryCarousel({ groups, alt }: PhotoGalleryCarouselProps) {
  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3">
      {groups.map((images, index) => (
        <div
          key={images[0]}
          className="grid aspect-[4/3] w-[calc(100%-1rem)] shrink-0 snap-start grid-cols-2 grid-rows-2 gap-3 sm:aspect-[21/9]"
          aria-label={`${alt}, nhóm ${index + 1}`}
        >
          <div className="row-span-2 overflow-hidden rounded-2xl">
            <img src={images[0]} alt={`${alt} ${index * 3 + 1}`} className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={images[1]} alt={`${alt} ${index * 3 + 2}`} className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={images[2]} alt={`${alt} ${index * 3 + 3}`} className="h-full w-full object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
}

/** A clean 2x2 mosaic. */
export function PhotoGalleryQuad({ images, alt }: PhotoGalleryProps) {
  return (
    <div className="grid aspect-square grid-cols-2 grid-rows-2 gap-3 sm:aspect-[16/7]">
      {images.map((src) => (
        <div key={src} className="overflow-hidden rounded-2xl">
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  );
}
