import Reveal from "../components/Reveal";
export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-20 sm:py-28 ${className}`}>
      <Reveal className="mb-12 max-w-2xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  );
}
