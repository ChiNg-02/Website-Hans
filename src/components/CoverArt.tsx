interface CoverArtProps {
  gradient: [string, string];
  className?: string;
  children?: React.ReactNode;
  image?: string;
  /** Alt text for `image`; empty (decorative) by default. */
  imageAlt?: string;
  /** "contain" shows the whole image (e.g. a poster) over the gradient instead of cropping it. */
  imageFit?: "cover" | "contain";
}

export function CoverArt({
  gradient,
  className = "",
  children,
  image,
  imageAlt = "",
  imageFit = "cover",
}: CoverArtProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
    >
      {image ? (
        <img
          src={image}
          alt={imageAlt}
          className={`absolute inset-0 h-full w-full ${imageFit === "contain" ? "object-contain" : "object-cover"}`}
        />
      ) : (
        <>
          <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/25 blur-xl" />
          <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/20 blur-lg" />
        </>
      )}
      {children}
    </div>
  );
}
