import { Reveal } from "@/components/reveal";

const principles = [
  {
    title: "Business workflows first",
    body: "Systems are shaped around real operational workflows — orders, policies, claims, stock movements — rather than generic CRUD screens.",
  },
  {
    title: "Backend and frontend as one system",
    body: "Laravel backends and React/Inertia or Next.js frontends are designed together, with clear boundaries around APIs, validation, and authorization.",
  },
  {
    title: "Integrations handled deliberately",
    body: "Payment providers, email, and third-party APIs are integrated with explicit status tracking and records — not treated as fire-and-forget calls.",
  },
  {
    title: "Data integrity",
    body: "Financial and inventory data is protected with database transactions, ledgers, and audit trails where the domain requires them.",
  },
  {
    title: "Testing and operations",
    body: "Automated tests cover critical business rules, and production systems include scheduled jobs, monitoring, and backup routines.",
  },
  {
    title: "Maintainability",
    body: "Modular structure, consistent conventions, and readable code so the systems can be extended by teams, not just their author.",
  },
];

export function Approach() {
  return (
    <div>
      <p className="mb-12 max-w-2xl text-lg leading-8 text-muted">
        The work on this portfolio is built the way the systems it documents
        are built — around real workflows, explicit boundaries, and
        engineering decisions that can be defended.
      </p>
      <ol className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {principles.map((principle, i) => (
          <Reveal key={principle.title} delay={(i % 2) * 80}>
            <li className="group relative border-l border-line-strong pl-6 transition-colors hover:border-line-strong">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-line-strong bg-background transition-colors group-hover:bg-elevated" aria-hidden="true" />
              <span className="mb-2 block font-mono text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{principle.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
