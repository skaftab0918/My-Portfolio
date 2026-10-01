import { site } from "../data/site";
import { GitHub, LinkedIn, Mail } from "../components/Icons";

const ico = "grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_1fr]">
        <div className="hero-in flex flex-col items-start gap-6">
          <p className="text-muted">Hi, I'm {site.name}.</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">I build modern web experiences.</h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted">Frontend Developer focused on React.js and MERN Stack development. I build responsive, practical and user-friendly web applications.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-accent px-6 py-3 font-medium text-accent-fg transition-transform hover:-translate-y-0.5 active:scale-95">View My Work</a>
            <a href="#contact" className="rounded-full border border-line px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent">Let's Connect</a>
          </div>
          <div className="flex gap-3">
            <a className={ico} href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHub /></a>
            <a className={ico} href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
            <a className={ico} href={`mailto:${site.email}`} aria-label="Email"><Mail /></a>
          </div>
        </div>

        <div className="hero-in hidden lg:block" aria-hidden="true">
          <div className="rotate-1 overflow-hidden rounded-2xl border border-line bg-card shadow-2xl shadow-black/20">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="size-2.5 rounded-full bg-line" /><span className="size-2.5 rounded-full bg-line" /><span className="size-2.5 rounded-full bg-line" />
              <span className="ml-3 font-mono text-xs text-muted">aftab.js</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-muted"><code>
{`const aftab = {
  role: "Frontend / MERN Developer",
  stack: ["React", "Node", "MongoDB"],
  based: "Mumbai, India",
  lookingFor: "Entry-level role",
};

aftab.build()`}<span className="caret" /></code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
