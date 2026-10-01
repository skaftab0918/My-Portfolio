import { useState } from "react";
import Section from "./Section";
import Reveal from "../components/Reveal";
import { site } from "../data/site";
import { GitHub, LinkedIn, Mail } from "../components/Icons";

const field = "w-full rounded-xl border border-line bg-bg px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent";

export default function Contact() {
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  // Plug a service in here (EmailJS, Resend via your own server, Formspree...).
  // For Formspree/Basin-style endpoints, just set site.formEndpoint in src/data/site.js.
  async function sendMessage(data) {
    if (!site.formEndpoint) throw new Error("not-configured");
    const res = await fetch(site.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
    if (!res.ok) throw new Error("failed");
  }

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ type: "sending", msg: "Sending…" });
    try {
      await sendMessage(data);
      form.reset();
      setStatus({ type: "ok", msg: "Message sent. Thank you!" });
    } catch (err) {
      setStatus({ type: "error", msg: err.message === "not-configured"
        ? `This form isn't connected yet, so nothing was sent. Please email ${site.email} directly.`
        : "Your message wasn't sent. Please try again or email me directly." });
    }
  }

  const links = [[Mail, "Email", `mailto:${site.email}`, site.email], [GitHub, "GitHub", site.github, "skaftab0918"], [LinkedIn, "LinkedIn", site.linkedin, "aftabshaikh-dev"]];

  return (
    <Section id="contact" title="Let's build something together." subtitle="I'm currently looking for entry-level opportunities in Frontend Development, React.js and MERN Stack development.">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal as="ul" className="flex flex-col gap-3">
          {links.map(([Icon, name, href, label]) => (
            <li key={name}>
              <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4 transition-colors hover:border-accent/60">
                <span className="grid size-10 place-items-center rounded-full border border-line"><Icon width={20} height={20} /></span>
                <span><span className="block font-medium">{name}</span><span className="break-all text-sm text-muted">{label}</span></span>
              </a>
            </li>
          ))}
        </Reveal>

        <Reveal as="form" onSubmit={onSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 text-sm">Name<input name="name" required autoComplete="name" className={field} placeholder="Your name" /></label>
          <label className="flex flex-col gap-1.5 text-sm">Email<input name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" /></label>
          <label className="flex flex-col gap-1.5 text-sm">Message<textarea name="message" required rows={5} className={field} placeholder="How can I help?" /></label>
          <button type="submit" disabled={status.type === "sending"} className="self-start rounded-full bg-accent px-6 py-3 font-medium text-accent-fg transition-transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-60">Send Message</button>
          <p role="status" aria-live="polite" className={`text-sm ${status.type === "error" ? "text-red-400" : "text-muted"}`}>{status.msg}</p>
        </Reveal>
      </div>
    </Section>
  );
}
