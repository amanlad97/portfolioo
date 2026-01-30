import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--glass-border)] mt-16 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm text-[var(--text-muted)]">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[var(--text-secondary)]">{personalInfo.name}</span>
          <span className="opacity-30">•</span>
          <span>{personalInfo.location}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Built with passion</span>
          <span className="opacity-30">•</span>
          <span>© {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}
