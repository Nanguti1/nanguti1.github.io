"use client";

import { useState } from "react";

interface ContactMethodCardProps {
  label: string;
  value: string;
  href: string;
  ariaLabel: string;
  external?: boolean;
  copyValue?: string;
}

export function ContactMethodCard({
  label,
  value,
  href,
  ariaLabel,
  external = false,
  copyValue,
}: ContactMethodCardProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="group flex items-stretch rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-accent">
      <a
        href={href}
        aria-label={ariaLabel}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="flex min-w-0 flex-1 items-center gap-4 p-6"
      >
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
          {label}
        </span>
        <span className="min-w-0 flex-1 truncate text-base font-medium text-foreground transition-colors group-hover:text-accent">
          {value}
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 text-xl text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
        >
          →
        </span>
      </a>
      {copyValue ? (
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${label.toLowerCase()}`}
          className="shrink-0 border-l border-line px-4 text-xs font-medium text-subtle transition-colors hover:text-foreground"
        >
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      ) : null}
    </div>
  );
}
