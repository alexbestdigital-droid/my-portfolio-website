import { Youtube, Twitter } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stats", label: "Stats" },
  { href: "#academy", label: "Academy" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <a
          href="#"
          className="font-bold text-lg tracking-[-0.03em] text-text-primary"
          aria-label="Alex Best Digital home"
        >
          Alex Best Digital<span className="text-accent">.</span>
        </a>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.youtube.com/@AlexBestDigital"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-text-primary transition-colors hover:text-accent"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="text-text-primary transition-colors hover:text-accent"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-border pt-6 text-center">
        <p className="text-sm text-text-secondary">
          © 2025 Alex Best Digital. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-text-secondary">
          Built with Next.js · Powered by AI
        </p>
      </div>
    </footer>
  );
}
