interface SectionHeadingProps {
  title: string;
  description?: string;
  id?: string;
}

export function SectionHeading({ title, description, id }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2
        id={id}
        className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-foreground"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[15px] leading-6 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
