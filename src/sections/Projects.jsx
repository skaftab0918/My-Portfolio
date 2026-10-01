import Section from "./Section";
import Reveal from "../components/Reveal";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";
import { GitHub, LinkedIn, Arrow } from "../components/Icons";
import { projects } from "../data/projects";
import { site } from "../data/site";

const profiles = [
  ["GitHub", "skaftab0918", site.github, GitHub],
  ["LinkedIn", "aftabshaikh-dev", site.linkedin, LinkedIn],
];

export default function Projects() {
  const [first, second, ...rest] = projects;
  return (
    <>
      <Section id="projects" title="Featured Projects" subtitle="A selection of projects I've built using modern web technologies.">
        <div className="flex flex-col gap-8">
          <FeaturedProject project={first} index={0} large />
          <FeaturedProject project={second} index={1} flip />
          <div className="grid gap-8 md:grid-cols-2">
            {rest.map((p, i) => <ProjectCard key={p.id} project={p} index={i + 2} />)}
          </div>
        </div>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-dashed border-line p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <GitHub width={28} height={28} className="mt-1 shrink-0" />
            <div>
              <h3 className="font-display text-xl font-semibold">More projects on GitHub</h3>
              <p className="mt-1 text-muted">I have more experiments, applications and learning projects on GitHub.</p>
            </div>
          </div>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-fg transition-transform hover:-translate-y-0.5 active:scale-95">
            View More Projects <Arrow width={16} height={16} />
          </a>
        </Reveal>
      </Section>

      <section aria-labelledby="online" className="mx-auto max-w-6xl px-5 pb-8">
        <Reveal>
          <h2 id="online" className="font-display text-2xl font-semibold">Find me online</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {profiles.map(([name, handle, href, Icon]) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-line bg-card p-5 transition-colors hover:border-accent/60">
                <span className="grid size-11 place-items-center rounded-full border border-line"><Icon width={22} height={22} /></span>
                <span><span className="block font-medium">{name}</span><span className="text-sm text-muted">{handle}</span></span>
                <Arrow className="ml-auto text-muted transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
