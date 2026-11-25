const nodes = [
  { label: "API", x: 24, y: 30, delay: "0s" },
  { label: "STORE", x: 76, y: 22, delay: "1.2s" },
  { label: "DB", x: 18, y: 72, delay: "2.1s" },
  { label: "QUEUE", x: 82, y: 68, delay: "0.6s" },
  { label: "ADMIN", x: 50, y: 88, delay: "1.7s" },
];

/**
 * Abstract system-composition visual for the hero.
 * Pure SVG/CSS — no fabricated imagery.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-lg lg:max-w-none">
      {/* backdrop grid + glow */}
      <div className="bg-grid absolute inset-0 rounded-2xl border border-line" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      {/* central system node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-line-strong bg-card shadow-[0_0_60px_-15px_rgba(135,152,255,0.35)]">
          <div className="bg-grid-fine absolute inset-0 rounded-2xl opacity-60" />
          <div className="relative text-center">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-subtle">
              core
            </span>
            <span className="block font-mono text-xs font-semibold text-accent">
              SYSTEM
            </span>
          </div>
          <span className="animate-pulse-soft absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-accent-2" />
        </div>
      </div>

      {/* connecting lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {nodes.map((n) => (
          <line
            key={n.label}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="rgb(135 152 255 / 0.35)"
            strokeWidth="0.4"
            strokeDasharray="2 3"
            className="animate-dash"
          />
        ))}
      </svg>

      {/* floating module labels */}
      {nodes.map((n) => (
        <div
          key={n.label}
          className="animate-float absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            animationDelay: n.delay,
          }}
          aria-hidden="true"
        >
          <span className="block rounded-md border border-line bg-elevated/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted backdrop-blur">
            {n.label}
          </span>
        </div>
      ))}

      {/* corner annotations */}
      <div className="absolute -bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-subtle">
        fig. 01 — system composition
      </div>
      <div className="absolute -right-2 -top-3 font-mono text-[10px] uppercase tracking-widest text-subtle">
        v2026
      </div>
    </div>
  );
}
