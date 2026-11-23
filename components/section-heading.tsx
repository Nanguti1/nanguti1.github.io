interface SectionHeadingProps {
  title: string;
  description?: string;
  id?: string;
}

export function SectionHeading({ title, description, id }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
