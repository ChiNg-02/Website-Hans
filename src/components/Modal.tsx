import { useEffect } from "react";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  icon?: string;
  children: ReactNode;
}

export function Modal({ open, onClose, title, icon, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div
        className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
      />
      <div className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl animate-[slideUp_0.25s_ease-out]">
        <div className="flex items-center justify-between border-b border-ink-100 px-6 py-4">
          <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
            {icon && <span>{icon}</span>}
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-400 transition hover:bg-ink-100 hover:text-ink-700"
          >
            ✕
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-5">{children}</div>
      </div>
      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  );
}
