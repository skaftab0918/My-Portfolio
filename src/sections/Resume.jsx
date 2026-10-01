import Reveal from "../components/Reveal";
import { site } from "../data/site";

export default function Resume() {
  return (
    <section aria-labelledby="resume" className="mx-auto max-w-6xl px-5 py-10">
      <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-card p-8 sm:flex-row sm:items-center sm:p-10">
        <div className="max-w-xl">
          <h2 id="resume" className="font-display text-2xl font-semibold sm:text-3xl">Want to know more about me?</h2>
          <p className="mt-2 text-muted">Download my resume to learn more about my education, skills and projects.</p>
        </div>
        <a href={site.resume} download className="rounded-full bg-accent px-6 py-3 font-medium text-accent-fg transition-transform hover:-translate-y-0.5 active:scale-95">Download Resume</a>
      </Reveal>
    </section>
  );
}
