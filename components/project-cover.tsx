interface ProjectCoverProps {
  index: string;
  label: string;
  caption?: string;
  accent?: "accent" | "accent-2";
  className?: string;
}

/**
 * Abstract typographic project cover used until real screenshots
 * are supplied. Deliberately schematic — communicates engineering
 * systems without pretending to be a product screenshot.
 */
export function ProjectCover({
  index,
  label,
  caption,
  accent = "accent",
  className = "",
}: ProjectCoverProps) {
  const accentText = accent === "accent" ? "text-accent" : "text-accent-2";
  const accentStroke =
    accent === "accent" ? "stroke-accent/50" : "stroke-accent-2/50";
  const accentFill =
    accent === "accent" ? "fill-accent/10" : "fill-accent-2/10";

  return (
    <div
      className={`relative overflow-hidden border border-line bg-card ${className}`}
      role="img"
      aria-label={`${label} — placeholder visual, screenshot pending`}
    >
      <div className="bg-grid-fine absolute inset-0" aria-hidden="true" />
      <div
        className={`absolute -right-16 -top-16 h-64 w-64 rounded-full ${
          accent === "accent"
            ? "bg-accent/10 blur-3xl"
            : "bg-accent-2/10 blur-3xl"
        }`}
        aria-hidden="true"
      />

      {/* System-diagram motif */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g className={accentStroke} fill="none" strokeWidth="1">
          <path d="M40 240 H360" strokeDasharray="4 6" className="animate-dash" />
          <path d="M60 60 V220 M340 60 V220" strokeDasharray="3 7" opacity="0.5" />
          <path d="M60 60 H340" opacity="0.4" />
          <path d="M120 110 L200 150 L280 110" opacity="0.6" />
          <path d="M120 190 L200 150 L280 190" opacity="0.6" />
        </g>
        <g className={accentFill} stroke="currentColor" strokeWidth="1">
          <rect x="150" y="130" width="100" height="40" rx="4" />
          <circle cx="80" cy="60" r="14" />
          <circle cx="320" cy="60" r="14" />
          <circle cx="80" cy="220" r="14" />
          <circle cx="320" cy="220" r="14" />
        </g>
      </svg>

      {/* Floating technical labels */}
      <div className="absolute left-5 top-5 flex flex-col gap-1.5 font-mono text-[10px] uppercase tracking-widest text-subtle">
        <span className={accentText}>/{label.toLowerCase().replace(/\s+/g, "-")}</span>
        <span>module · service · data</span>
      </div>

      {/* Index numeral */}
      <div
        className={`absolute bottom-4 right-5 font-mono text-6xl font-semibold leading-none ${accentText} opacity-25`}
        aria-hidden="true"
      >
        {index}
      </div>

      {caption ? (
        <div className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-widest text-subtle">
          {caption}
        </div>
      ) : null}
    </div>
  );
}
