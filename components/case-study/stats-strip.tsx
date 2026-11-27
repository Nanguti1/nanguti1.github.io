import type { StatItem } from "@/lib/case-study";

interface StatsStripProps {
  stats: StatItem[];
}

/** Headline figures under the case-study header. Renders nothing when empty. */
export function StatsStrip({ stats }: StatsStripProps) {
  if (!stats || stats.length === 0) return null;
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col">
          <dt className="order-2 mt-2 font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            {stat.label}
          </dt>
          <dd className="order-1 text-4xl font-semibold leading-none tracking-tight text-foreground">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
