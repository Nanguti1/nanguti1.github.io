import type { ReactNode } from "react";
import type { ContentBlock, DiagramDef } from "@/lib/case-study";
import { Diagram } from "@/components/case-study/diagrams";

/** Renders `backtick` spans as inline code chips. */
export function renderInline(text: string): ReactNode[] {
  const parts = text.split(/`([^`]+)`/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <code
        key={i}
        className="rounded border border-line bg-elevated px-1.5 py-0.5 font-mono text-[0.9em] whitespace-nowrap text-foreground"
      >
        {part}
      </code>
    ) : (
      part
    ),
  );
}

const proseClass = "text-prose leading-[1.75] text-foreground/80";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-prose leading-[1.75] text-foreground/80">
          <span
            aria-hidden="true"
            className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-muted"
          />
          {renderInline(item)}
        </li>
      ))}
    </ul>
  );
}

function ChecklistGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-lg border border-line bg-surface px-4 py-3 text-sm leading-6 text-foreground/80"
        >
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted"
          />
          {renderInline(item)}
        </li>
      ))}
    </ul>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Callout({ text }: { text: string }) {
  return (
    <aside className="rounded-r-xl border-l-[3px] border-foreground/40 bg-surface px-6 py-5">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.08em] text-accent-2">
        Design decision
      </p>
      <p className="text-prose leading-[1.75] text-foreground">
        {renderInline(text)}
      </p>
    </aside>
  );
}

function Steps({ items }: { items: string[] }) {
  return (
    <ol className="flex flex-col">
      {items.map((item, i) => (
        <li key={item} className="relative flex gap-6 pb-8 last:pb-0">
          <div className="flex flex-col items-center">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong bg-elevated font-mono text-xs text-foreground">
              {i + 1}
            </span>
            {i < items.length - 1 ? (
              <span
                aria-hidden="true"
                className="mt-2 w-px flex-1 bg-line"
              />
            ) : null}
          </div>
          <p className={`pt-1.5 ${proseClass}`}>{renderInline(item)}</p>
        </li>
      ))}
    </ol>
  );
}

export function ContentBlockView({
  block,
  diagrams,
}: {
  block: ContentBlock;
  diagrams?: Record<string, DiagramDef>;
}) {
  switch (block.type) {
    case "paragraph":
      return <p className={proseClass}>{renderInline(block.text)}</p>;
    case "callout":
      return <Callout text={block.text} />;
    case "steps":
      return <Steps items={block.items} />;
    case "diagram": {
      const def = diagrams?.[block.id];
      return def ? <Diagram def={def} /> : null;
    }
    case "list":
      if (block.variant === "chips") return <Chips items={block.items} />;
      return block.items.length >= 5 ? (
        <ChecklistGrid items={block.items} />
      ) : (
        <BulletList items={block.items} />
      );
  }
}
