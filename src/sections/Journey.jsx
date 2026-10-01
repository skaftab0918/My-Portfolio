import Section from "./Section";
import Reveal from "../components/Reveal";

const steps = [
  { when: "2023–2025", title: "MCA — University of Mumbai", body: "CGPA: 8.15" },
  { when: "Building with React & MERN", title: "Academic and personal projects", body: "Developed multiple projects involving frontend development, APIs, authentication, databases and real-time functionality." },
  { when: "Currently", title: "Open to opportunities", body: "Looking for an entry-level Frontend / React / MERN opportunity." },
];

export default function Journey() {
  return (
    <Section id="journey" title="My Development Journey">
      <ol className="relative ml-2 border-l border-line">
        {steps.map((s) => (
          <Reveal as="li" key={s.when} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-mono text-sm text-accent">{s.when}</p>
            <h3 className="mt-1 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-1 max-w-xl text-muted">{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
