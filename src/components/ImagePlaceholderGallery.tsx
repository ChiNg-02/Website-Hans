/**
 * Ready-to-fill gallery slots for a project's real photos, which get added later.
 * Swap a slot's placeholder for a real <img> once the photo is available.
 */
export function ImagePlaceholderGallery({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex aspect-square flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed border-ink-200 bg-ink-50 text-ink-300"
        >
          <span className="text-2xl">🖼️</span>
          <span className="text-[11px] font-medium">Ảnh sẽ cập nhật</span>
        </div>
      ))}
    </div>
  );
}
