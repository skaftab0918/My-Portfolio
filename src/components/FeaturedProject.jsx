import Reveal from "./Reveal";
import { GitHub, External } from "./Icons";

export function Badges({ tech }) {
  return <ul className="flex flex-wrap gap-1.5">{tech.map((t) => <li key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted">{t}</li>)}</ul>;
}

export function Features({ items }) {
  return (
    <ul className="grid gap-1.5 text-sm sm:grid-cols-2">
      {items.map((f) => <li key={f} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />{f}</li>)}
    </ul>
  );
}

export function Actions({ project: p, className = "" }) {
  const base = "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-transform active:scale-95";
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className={`${base} bg-accent text-accent-fg hover:-translate-y-0.5`}>Live Demo <External width={15} height={15} /></a>}
      <a href={p.github} target="_blank" rel="noopener noreferrer" className={`${base} border border-line hover:border-accent hover:text-accent`}><GitHub width={15} height={15} /> View Code</a>
    </div>
  );
}

// Browser-window frame. Shows the screenshot if p.image is set, otherwise a clearly labelled placeholder.
export function Preview({ project: p, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-bg ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-line" /><span className="size-2.5 rounded-full bg-line" /><span className="size-2.5 rounded-full bg-line" />
        <span className="ml-3 truncate rounded bg-card px-2 py-0.5 font-mono text-[11px] text-muted">{p.live ? p.live.replace(/^https?:\/\//, "").replace(/\/$/, "") : "localhost:5173"}</span>
      </div>
      <div className="aspect-[16/10] overflow-hidden">
        {p.image
          ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
          : <div className="grid size-full place-items-center p-6 text-center">
              <div><p className="font-display text-lg text-muted">{p.title}</p>
              <p className="mt-1 font-mono text-xs text-muted/70">Add screenshot: public/projects/{p.id}.png</p></div>
            </div>}
      </div>
    </div>
  );
}

// Large case study (projects 1 and 2). `flip` alternates the preview side on desktop.
export default function FeaturedProject({ project: p, index, flip = false, large = false }) {
  return (
    <Reveal as="article" className="group grid items-center gap-8 rounded-3xl border border-line bg-card p-5 transition-colors hover:border-accent/60 sm:p-8 lg:grid-cols-2 lg:gap-12">
      <Preview project={p} className={`${flip ? "lg:order-2" : ""} transition-transform duration-500 group-hover:-translate-y-1`} />
      <div className="flex flex-col gap-5">
        <p className="font-mono text-xs text-muted">Project {String(index + 1).padStart(2, "0")} · {p.category}</p>
        <h3 className={`font-display font-semibold tracking-tight ${large ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}>{p.title}</h3>
        <p className="text-lg leading-relaxed text-muted">{p.description}</p>
        {p.note && <p className="border-l-2 border-accent pl-4 text-sm text-muted">{p.note}</p>}
        <Features items={p.features} />
        <Badges tech={p.tech} />
        <Actions project={p} />
      </div>
    </Reveal>
  );
}
