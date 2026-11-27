"use client";

import { CopyButton } from "@/components/copy-button";
import { siteConfig } from "@/lib/site-config";

function Arrow({ external }: { external?: boolean }) {
  return external ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 3h7v7M13 3 4.5 11.5" />
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

interface LedgerRowProps {
  label: string;
  value: string;
  href: string;
  ariaLabel: string;
  external?: boolean;
  copyValue?: string;
}

function LedgerRow({
  label,
  value,
  href,
  ariaLabel,
  external = false,
  copyValue,
}: LedgerRowProps) {
  return (
    <li className="group relative border-b border-line last:border-b-0 focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent">
      <a
        href={href}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="absolute inset-0"
      />
      <div className="pointer-events-none grid min-h-12 grid-cols-[80px_minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 sm:grid-cols-[96px_minmax(0,1fr)_auto]">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-subtle transition-colors group-hover:text-muted">
          {label}
        </span>
        <span className="truncate text-base font-medium text-foreground transition-colors group-hover:text-accent">
          {value}
        </span>
        <span className="flex items-center gap-3">
          {copyValue ? (
            <CopyButton
              value={copyValue}
              label={`Copy ${label.toLowerCase()}`}
              className="pointer-events-auto rounded px-1 py-1 text-xs font-medium text-subtle transition-colors hover:text-foreground"
            />
          ) : null}
          <span className="text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
            <Arrow external={external} />
          </span>
        </span>
      </div>
    </li>
  );
}

function stripProtocol(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function ContactLedger() {
  const { phone, linkedin, github, website, whatsapp } = siteConfig.contact;
  return (
    <ul className="overflow-hidden rounded-2xl border border-line-strong bg-elevated">
      {phone ? (
        <LedgerRow
          label="Phone"
          value={phone.display}
          href={phone.href}
          ariaLabel={`Call Kevin Wanyonyi on ${phone.display}`}
          copyValue={phone.display}
        />
      ) : null}
      {linkedin ? (
        <LedgerRow
          label="LinkedIn"
          value={stripProtocol(linkedin)}
          href={linkedin}
          ariaLabel="Kevin Wanyonyi on LinkedIn (opens in new tab)"
          external
        />
      ) : null}
      <LedgerRow
        label="GitHub"
        value={stripProtocol(github)}
        href={github}
        ariaLabel="Kevin Wanyonyi on GitHub (opens in new tab)"
        external
      />
      {website ? (
        <LedgerRow
          label="Website"
          value={stripProtocol(website)}
          href={website}
          ariaLabel="Kevin Wanyonyi's personal website (opens in new tab)"
          external
        />
      ) : null}
      {whatsapp ? (
        <LedgerRow
          label="WhatsApp"
          value={whatsapp.display}
          href={whatsapp.href}
          ariaLabel="Message Kevin Wanyonyi on WhatsApp"
          external
        />
      ) : null}
    </ul>
  );
}
