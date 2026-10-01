import { useEffect, useState } from "react";
import { site } from "../data/site";
import { GitHub, Sun, Moon } from "./Icons";

const links = ["Home", "About", "Skills", "Projects", "Journey", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const toggleTheme = () => {
    const next = !dark; setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"}`}>
      <nav aria-label="Main" className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 ${scrolled ? "h-14" : "h-[4.5rem]"}`}>
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">{site.name}</a>

        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-fg">{l}</a></li>)}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:text-fg">
            {dark ? <Sun /> : <Moon />}
          </button>
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hidden size-9 place-items-center rounded-full text-muted transition-colors hover:text-fg sm:grid"><GitHub /></a>
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="hidden rounded-full border border-line px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent sm:inline-block">Resume</a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu" className="grid size-9 place-items-center md:hidden">
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-fg transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-fg transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-fg transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      <div className={`grid overflow-hidden transition-all duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <ul className="min-h-0 px-5">
          {links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block border-t border-line py-3 text-muted hover:text-fg">{l}</a></li>)}
          <li><a href={site.resume} target="_blank" rel="noopener noreferrer" className="block border-t border-line py-3 text-accent">Resume</a></li>
        </ul>
      </div>
    </header>
  );
}
