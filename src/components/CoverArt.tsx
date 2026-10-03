interface CoverArtProps {
  gradient: [string, string];
  className?: string;
  children?: React.ReactNode;
  image?: string;
}

export function CoverArt({ gradient, className = "", children, image }: CoverArtProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
    >
      {image ? (
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
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
