import type { GlanceItem } from "@/lib/case-study";

interface GlanceProps {
  items: GlanceItem[];
}

export function Glance({ items }: GlanceProps) {
  return (
    <section aria-labelledby="at-a-glance">
      <h2
        id="at-a-glance"
        className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-subtle"
      >
        At a glance
      </h2>
      <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="bg-surface px-6 py-4">
            <dt className="text-xs font-medium uppercase tracking-wider text-subtle">
              {item.label}
            </dt>
            <dd className="mt-2 text-sm leading-6 text-foreground">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
