import type { GlanceItem } from "@/lib/case-study";
import { TechTags } from "@/components/tech-tags";

interface GlanceProps {
  items: GlanceItem[];
}

/** Spec-sheet "At a glance" card: mono labels, 15px values, optional links and tag pills. */
export function Glance({ items }: GlanceProps) {
  return (
    <section aria-labelledby="at-a-glance">
      <h2
        id="at-a-glance"
        className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-subtle"
      >
        At a glance
      </h2>
      <dl className="overflow-hidden rounded-xl border border-line bg-surface">
        {items.map((item) => (
          <div
            key={item.label}
            className="grid gap-2 border-b border-line px-6 py-4 last:border-b-0 sm:grid-cols-[160px_minmax(0,1fr)] sm:items-baseline sm:gap-6"
          >
            <dt className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
              {item.label}
            </dt>
            <dd className="text-body text-foreground">
              {item.tags ? (
                <TechTags technologies={item.tags} />
              ) : item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-colors hover:text-accent-bright"
                >
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
