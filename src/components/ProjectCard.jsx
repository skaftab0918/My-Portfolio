import Reveal from "./Reveal";
import { Preview, Badges, Features, Actions } from "./FeaturedProject";

// Medium card (projects 3 and 4)
export default function ProjectCard({ project: p, index }) {
  return (
    <Reveal as="article" className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors hover:border-accent/60">
      <Preview project={p} className="m-3 mb-0" />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="font-mono text-xs text-muted">Project {String(index + 1).padStart(2, "0")} · {p.category}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
        </div>
        <p className="text-muted">{p.description}</p>
        <Features items={p.features} />
        <Badges tech={p.tech} />
        <Actions project={p} className="mt-auto pt-2" />
      </div>
    </Reveal>
  );
}
