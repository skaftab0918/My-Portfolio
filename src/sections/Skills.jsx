import Section from "./Section";
import Reveal from "../components/Reveal";
import { skills } from "../data/site";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="The technologies I work with.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <Reveal key={group} className="rounded-2xl border border-line bg-card p-6">
            <h3 className="mb-4 font-display text-xl font-semibold">{group}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((s) => (
                <li key={s} className="cursor-default rounded-lg border border-line px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent">{s}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
