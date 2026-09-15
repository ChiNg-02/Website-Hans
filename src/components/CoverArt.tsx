interface CoverArtProps {
  gradient: [string, string];
  className?: string;
  children?: React.ReactNode;
}

export function CoverArt({ gradient, className = "", children }: CoverArtProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
    >
      <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/25 blur-xl" />
      <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/20 blur-lg" />
      {children}
    </div>
  );
}
