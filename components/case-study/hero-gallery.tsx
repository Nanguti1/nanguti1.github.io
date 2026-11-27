"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ProjectMockup } from "@/components/project-mockup";

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  label?: string;
}

interface HeroGalleryProps {
  title: string;
  /** Host shown in the mock browser chrome — the project's liveUrl host when available. */
  domain?: string;
  items: GalleryItem[];
}

/**
 * Case-study hero visual: browser-frame mockup with a tabbed image gallery.
 * Renders the designed placeholder frame when `items` is empty.
 */
export function HeroGallery({ title, domain, items }: HeroGalleryProps) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = useCallback((index: number) => {
    setActive((index + items.length) % items.length);
  }, [items.length]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      select(active + 1);
      tabRefs.current[(active + 1) % items.length]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      select(active - 1);
      tabRefs.current[(active - 1 + items.length) % items.length]?.focus();
    }
  };

  if (items.length === 0) {
    return <ProjectMockup title={title} domain={domain} className="w-full" />;
  }

  const current = items[active];
  const host = domain ?? title;

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-line bg-card">
        {/* Browser chrome */}
        <div className="flex items-center gap-4 border-b border-line bg-elevated px-4 py-2">
          <div className="flex shrink-0 gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </div>
          <div className="flex min-w-0 flex-1 items-center rounded-md border border-line bg-background px-4 py-2">
            <span className="truncate font-mono text-xs text-subtle">{host}</span>
          </div>
        </div>

        {/* Viewport */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-card via-elevated to-background">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Tabs / thumbnail strip */}
      {items.length > 1 ? (
        <div
          role="tablist"
          aria-label={`${title} screenshots`}
          className="mt-4 flex flex-wrap gap-2"
          onKeyDown={onKeyDown}
        >
          {items.map((item, i) => (
            <button
              key={item.src}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              aria-selected={i === active}
              aria-controls="hero-gallery-panel"
              id={`hero-gallery-tab-${i}`}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                i === active
                  ? "border-accent/60 bg-surface text-foreground"
                  : "border-line bg-surface text-muted hover:border-line-strong hover:text-foreground"
              }`}
            >
              {item.label ?? `View ${i + 1}`}
            </button>
          ))}
        </div>
      ) : null}

      {current.caption ? (
        <p className="mt-3 text-sm text-subtle">{current.caption}</p>
      ) : null}
    </div>
  );
}
