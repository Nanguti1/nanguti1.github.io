import Image from "next/image";

interface ProjectMockupProps {
  title: string;
  /** Host shown in the mock browser chrome. */
  domain?: string;
  /** Real screenshot path — when provided, renders the image instead of the abstract body. */
  src?: string;
  /** Alt text for a real screenshot. */
  imageAlt?: string;
  className?: string;
}

/**
 * Consistent browser-frame mockup used for every project visual.
 * Swap in a real screenshot later by passing `src` (and `imageAlt`).
 */
export function ProjectMockup({
  title,
  domain,
  src,
  imageAlt,
  className = "",
}: ProjectMockupProps) {
  const host = domain ?? `${title.toLowerCase().replace(/[^a-z0-9]+/g, "")}.app`;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-card ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-elevated px-4 py-2.5">
        <div className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </div>
        <div className="flex min-w-0 flex-1 items-center rounded-md border border-line bg-background px-3 py-1">
          <span className="truncate font-mono text-xs text-subtle">
            {host}
          </span>
        </div>
      </div>

      {/* Viewport */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-card via-elevated to-background">
        {src ? (
          <Image
            src={src}
            alt={imageAlt ?? `${title} — application screenshot`}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        ) : (
          <MockupBody title={title} />
        )}
      </div>
    </div>
  );
}

function MockupBody({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 flex" aria-hidden="true">
      {/* sidebar */}
      <div className="hidden w-14 shrink-0 flex-col gap-2 border-r border-line bg-card/60 p-3 sm:flex">
        <span className="h-2 w-2/3 rounded-sm bg-line-strong" />
        <span className="h-2 w-full rounded-sm bg-line" />
        <span className="h-2 w-4/5 rounded-sm bg-line" />
        <span className="mt-2 h-2 w-3/5 rounded-sm bg-line" />
        <span className="h-2 w-full rounded-sm bg-line" />
      </div>
      {/* content area */}
      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            {title}
          </span>
          <span className="h-2.5 w-16 rounded-sm bg-line" />
        </div>
        <div className="grid flex-1 grid-cols-3 gap-3">
          <span className="rounded-md border border-line bg-elevated/70" />
          <span className="col-span-2 rounded-md border border-line bg-elevated/40" />
        </div>
        <div className="flex gap-3">
          <span className="h-2 flex-1 rounded-sm bg-line" />
          <span className="h-2 w-1/3 rounded-sm bg-line" />
        </div>
      </div>
    </div>
  );
}
