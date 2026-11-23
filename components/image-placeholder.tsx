interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label} — no screenshot available yet`}
      className={`flex items-center justify-center border border-dashed border-line bg-elevated ${className}`}
    >
      <span className="font-mono text-xs uppercase tracking-widest text-subtle">
        {label}
      </span>
    </div>
  );
}
