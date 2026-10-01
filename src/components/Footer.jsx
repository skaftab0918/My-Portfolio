import { site } from "../data/site";
import { GitHub, LinkedIn, Mail } from "./Icons";
export default function Footer() {
  const l = "text-muted transition-colors hover:text-fg";
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="text-sm text-muted">{site.title}</p>
        </div>
        <div className="flex gap-4">
          <a className={l} href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHub /></a>
          <a className={l} href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
          <a className={l} href={`mailto:${site.email}`} aria-label="Email"><Mail /></a>
        </div>
        <p className="text-sm text-muted">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
