import Section from "./Section";
import Reveal from "../components/Reveal";

const points = [
  ["Education", "MCA graduate from the University of Mumbai."],
  ["Focus", "Frontend and MERN development, with a strong interest in React.js and modern frontend."],
  ["Hands-on work", "Academic and personal projects built from scratch."],
  ["Comfortable with", "API integration, authentication, databases and real-time features."],
  ["Right now", "Looking for an entry-level Frontend / React / MERN opportunity."],
];

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="text-xl leading-relaxed sm:text-2xl">I'm a fresher who learns by building. I enjoy turning ideas into working web apps and connecting a clean interface to real data.</p>
        </Reveal>
        <Reveal as="dl" className="divide-y divide-line border-y border-line">
          {points.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="text-muted">{k}</dt><dd>{v}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
