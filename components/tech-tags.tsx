interface TechTagsProps {
  technologies: string[];
  max?: number;
}

const MAX_TAGS = 5;

export function TechTags({ technologies, max = MAX_TAGS }: TechTagsProps) {
  if (technologies.length === 0) return null;
  const visible = technologies.slice(0, max);
  const remaining = technologies.length - visible.length;
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {visible.map((tech, i) => (
        <li
          key={tech}
          className={`rounded-full border px-3 py-1 font-mono text-xs ${
            i < 2
              ? "border-line-strong bg-surface text-foreground"
              : "border-line bg-surface text-muted"
          }`}
        >
          {tech}
        </li>
      ))}
      {remaining > 0 ? (
        <li
          className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
          title={technologies.slice(max).join(", ")}
        >
          +{remaining}
        </li>
      ) : null}
    </ul>
  );
}
