"use client";

import { useEffect, useState } from "react";
import type { CaseStudySection } from "@/lib/case-study";

interface CaseStudyNavProps {
  sections: CaseStudySection[];
}

/**
 * Case-study navigation: reading-progress bar, sticky scroll-spy TOC on
 * desktop, and a collapsible "On this page" control on mobile.
 */
export function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scroll-spy: highlight the section whose heading is nearest the top third.
    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: 0 },
    );
    headings.forEach((h) => observer.observe(h));

    // Reading progress.
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  const activeTitle =
    sections.find((s) => s.id === activeId)?.title ?? "On this page";

  return (
    <>
      {/* Reading progress */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-accent transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />

      {/* Mobile collapsible TOC — sticks under the 64px header */}
      <details className="group sticky top-16 z-40 mb-10 rounded-xl border border-line bg-background/95 backdrop-blur lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            On this page
          </span>
          <span className="text-muted">{activeTitle}</span>
          <span
            aria-hidden="true"
            className="text-subtle transition-transform duration-200 group-open:rotate-180"
          >
            ▾
          </span>
        </summary>
        <nav aria-label="On this page" className="border-t border-line px-4 py-3">
          <ol className="flex flex-col gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={section.id === activeId ? "true" : undefined}
                  className={`block py-1 text-sm transition-colors ${
                    section.id === activeId
                      ? "font-medium text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </details>

      {/* Desktop sticky rail */}
      <aside className="hidden lg:block">
        <nav
          aria-label="On this page"
          className="sticky top-24"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            On this page
          </p>
          <ol className="flex flex-col gap-1 border-l border-line">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={section.id === activeId ? "true" : undefined}
                  className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                    section.id === activeId
                      ? "border-accent font-medium text-accent"
                      : "border-transparent text-muted hover:border-line-strong hover:text-foreground"
                  }`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>
    </>
  );
}
