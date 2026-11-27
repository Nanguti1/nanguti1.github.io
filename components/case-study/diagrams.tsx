import type {
  DiagramDef,
  FlowNode,
  StateGroup,
} from "@/lib/case-study";
import { renderInline } from "@/components/case-study/content-blocks";

const frameClass =
  "overflow-x-auto rounded-xl border border-line bg-surface";
const captionClass =
  "mt-3 px-1 font-mono text-xs uppercase tracking-[0.08em] text-subtle";

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="12"
      viewBox="0 0 28 12"
      className="mx-1 shrink-0 self-center text-subtle"
    >
      <line x1="0" y1="6" x2="22" y2="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 1 L28 6 L22 11" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* ---------- FlowDiagram ---------- */

function FlowNodeCard({ node }: { node: FlowNode }) {
  return (
    <div className="min-w-44 flex-1 rounded-lg border border-line bg-elevated px-4 py-3">
      <p className="text-sm font-medium text-foreground">{renderInline(node.title)}</p>
      {node.items ? (
        <ul className="mt-2 space-y-1">
          {node.items.map((item) => (
            <li key={item} className="text-xs leading-5 text-muted">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      ) : null}
      {node.note ? (
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.06em] text-subtle">
          {renderInline(node.note)}
        </p>
      ) : null}
    </div>
  );
}

function FlowDiagram({ def }: { def: Extract<DiagramDef, { type: "flow" }> }) {
  return (
    <div className={frameClass} role="img" aria-label={def.caption ?? "Flow diagram"}>
      <div className="flex min-w-[560px] items-stretch gap-0 p-5">
        {def.nodes.map((node, i) => (
          <div key={node.title} className="flex flex-1 items-center">
            {i > 0 ? <Arrow /> : null}
            <FlowNodeCard node={node} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- SequenceDiagram ---------- */

const ROW_H = 76;

function SequenceDiagram({
  def,
}: {
  def: Extract<DiagramDef, { type: "sequence" }>;
}) {
  const { lanes, messages } = def;
  const n = lanes.length;
  const lanePct = 100 / n;
  const center = (i: number) => (i + 0.5) * lanePct;

  return (
    <div className={frameClass} role="img" aria-label={def.caption ?? "Sequence diagram"}>
      <div className="min-w-[620px] px-4 py-4">
        {/* Lane headers */}
        <div className="flex border-b border-line pb-3">
          {lanes.map((lane) => (
            <div
              key={lane}
              className="flex-1 px-1 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-subtle"
            >
              {lane}
            </div>
          ))}
        </div>

        {/* Lifelines + messages */}
        <div className="relative" style={{ height: messages.length * ROW_H }}>
          {lanes.map((_, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="absolute top-0 bottom-0 border-l border-dashed border-line-strong"
              style={{ left: `${center(i)}%` }}
            />
          ))}

          {messages.map((m, i) => {
            const top = i * ROW_H;
            if (m.note !== undefined && m.lane) {
              const li = lanes.indexOf(m.lane);
              if (li === -1) return null;
              return (
                <div
                  key={i}
                  className="absolute rounded-lg border border-line bg-elevated px-3 py-2 text-xs leading-5 text-foreground/80"
                  style={{
                    top: top + 10,
                    left: `${li * lanePct}%`,
                    width: `${lanePct}%`,
                  }}
                >
                  <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.08em] text-accent-2">
                    {m.lane}
                  </span>
                  {renderInline(m.note)}
                </div>
              );
            }
            const fi = lanes.indexOf(m.from ?? "");
            const ti = lanes.indexOf(m.to ?? "");
            if (fi === -1 || ti === -1 || fi === ti) return null;
            const left = Math.min(fi, ti);
            const span = Math.abs(ti - fi);
            const forward = fi < ti;
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  top: top + 18,
                  left: `${center(left)}%`,
                  width: `${span * lanePct}%`,
                }}
              >
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-1 top-3 border-t-2 border-line-strong"
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute top-1 text-sm text-subtle ${forward ? "-right-1" : "-left-1"}`}
                  >
                    {forward ? "→" : "←"}
                  </span>
                  <p className="relative -top-4 mx-auto w-max max-w-full px-2 text-center text-[11px] leading-4 text-muted">
                    {renderInline(m.label ?? "")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------- StateFlow ---------- */

function StateChip({
  state,
  note,
}: {
  state: string;
  note?: string;
}) {
  return (
    <span className="flex flex-col items-center">
      <span className="whitespace-nowrap rounded-full border border-line-strong bg-elevated px-3 py-1.5 font-mono text-xs text-foreground">
        {state}
      </span>
      {note ? (
        <span className="mt-1.5 max-w-32 text-center font-mono text-[10px] uppercase tracking-[0.06em] text-accent-2">
          {note}
        </span>
      ) : null}
    </span>
  );
}

function StateGroupRow({ group }: { group: StateGroup }) {
  return (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-subtle">
        {group.label}
      </p>
      <div className="flex flex-wrap items-start gap-x-2 gap-y-4">
        {group.states.map((state, i) => (
          <span key={state} className="flex items-start">
            {i > 0 ? (
              <span aria-hidden="true" className="mx-1 mt-2 text-subtle">
                →
              </span>
            ) : null}
            <StateChip state={state} note={group.notes?.[state]} />
          </span>
        ))}
        {(group.detached ?? []).map((state) => (
          <span key={state} className="flex items-start">
            <span aria-hidden="true" className="mx-3 mt-2 text-line-strong">
              |
            </span>
            <StateChip state={state} />
          </span>
        ))}
      </div>
    </div>
  );
}

function StateFlowDiagram({
  def,
}: {
  def: Extract<DiagramDef, { type: "stateflow" }>;
}) {
  return (
    <div className={frameClass} role="img" aria-label={def.caption ?? "State flows"}>
      <div className="flex flex-col gap-8 p-5">
        {def.groups.map((group) => (
          <StateGroupRow key={group.label} group={group} />
        ))}
      </div>
    </div>
  );
}

/* ---------- EntryCard ---------- */

function EntryCardDiagram({
  def,
}: {
  def: Extract<DiagramDef, { type: "entrycard" }>;
}) {
  return (
    <div className={frameClass} role="img" aria-label={def.caption ?? "Record anatomy"}>
      <div className="grid gap-6 p-5 sm:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            One ledger row records
          </p>
          <ul className="space-y-2">
            {def.fields.map((field) => (
              <li key={field} className="flex gap-3 text-sm leading-6 text-foreground/80">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                {renderInline(field)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            InventoryService methods
          </p>
          <ul className="flex flex-wrap gap-2">
            {def.methods.map((method) => (
              <li
                key={method}
                className="rounded-md border border-line bg-elevated px-2.5 py-1.5 font-mono text-xs text-foreground"
              >
                {method}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {def.note ? (
        <p className="border-t border-line px-5 py-3 text-sm leading-6 text-muted">
          {renderInline(def.note)}
        </p>
      ) : null}
    </div>
  );
}

/* ---------- Events & listeners ---------- */

function EventsDiagram({
  def,
}: {
  def: Extract<DiagramDef, { type: "events" }>;
}) {
  const linkedReactions = new Set(def.links.flatMap((l) => l.reactions));
  const unmappedReactions = def.reactions.filter((r) => !linkedReactions.has(r));

  const rows: { event?: string; reactions: string[] }[] = [
    ...def.events.map((event) => ({
      event,
      reactions: def.links.find((l) => l.event === event)?.reactions ?? [],
    })),
    ...(unmappedReactions.length > 0
      ? [{ reactions: unmappedReactions }]
      : []),
  ];

  return (
    <div className={frameClass} role="img" aria-label={def.caption ?? "Events and listeners"}>
      <div className="p-5">
        <div className="mb-4 hidden grid-cols-[1fr_auto_1fr] gap-4 sm:grid">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            Domain events
          </p>
          <span />
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            Queued reactions
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {rows.map((row, i) => (
            <li
              key={i}
              className="grid grid-cols-1 gap-2 rounded-lg border border-line bg-elevated/50 px-4 py-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4"
            >
              <span className="font-mono text-xs text-foreground">
                {row.event ?? ""}
              </span>
              <span aria-hidden="true" className="hidden text-subtle sm:block">
                {row.reactions.length > 0 ? "→" : ""}
              </span>
              <span className="flex flex-col gap-1 text-sm text-muted">
                {row.reactions.map((r) => (
                  <span key={r}>{renderInline(r)}</span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Dispatcher ---------- */

export function Diagram({ def }: { def: DiagramDef }) {
  const caption = "caption" in def ? def.caption : undefined;
  return (
    <figure>
      {def.type === "flow" ? (
        <FlowDiagram def={def} />
      ) : def.type === "sequence" ? (
        <SequenceDiagram def={def} />
      ) : def.type === "stateflow" ? (
        <StateFlowDiagram def={def} />
      ) : def.type === "entrycard" ? (
        <EntryCardDiagram def={def} />
      ) : (
        <EventsDiagram def={def} />
      )}
      {caption ? <figcaption className={captionClass}>{caption}</figcaption> : null}
    </figure>
  );
}
