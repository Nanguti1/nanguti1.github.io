interface TechTagsProps {
  technologies: string[];
}

export function TechTags({ technologies }: TechTagsProps) {
  if (technologies.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {technologies.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
