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
    <ol className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {principles.map((principle, i) => (
        <li
          key={principle.title}
          className="flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
        >
          <span className="mb-4 font-mono text-sm text-muted">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {principle.title}
          </h3>
          <p className="mt-3 text-[15px] leading-6 text-muted">{principle.body}</p>
        </li>
      ))}
    </ol>
  );
}
