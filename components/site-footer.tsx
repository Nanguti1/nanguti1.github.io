import Link from "next/link";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await getYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-subtle">
          © {year} Kevin Wanyonyi. Engineering portfolio.
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <Link
                href="/projects"
                className="text-muted transition-colors hover:text-foreground"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-muted transition-colors hover:text-foreground"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Nanguti1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
