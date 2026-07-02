import { useState } from "react";
import { Reveal } from "./Reveal";

const tiles = [
  { label: "Email", value: "ryanplayzvidyt@gmail.com", href: "mailto:ryanplayzvidyt@gmail.com", note: "Best for anything longform" },
  { label: "Discord", value: "novaryaan", href: null, note: "For quick back-and-forth" },
  { label: "Roblox", value: "ryaan1233", href: "https://www.roblox.com/users/profile?username=ryaan1233", note: "Come say hi in-world" },
];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (v: string) => {
    navigator.clipboard?.writeText(v);
    setCopied(v);
    setTimeout(() => setCopied(null), 1600);
  };

  return (
    <section id="contact" className="relative py-32 md:py-44 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-3">Say hello</p>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
              Or find me <span className="italic text-gold-soft">here</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {tiles.map((t, i) => {
            const Wrapper: any = t.href ? "a" : "button";
            return (
              <Reveal key={t.label} delay={i * 0.08}>
                <Wrapper
                  {...(t.href ? { href: t.href, target: t.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : { onClick: () => copy(t.value), type: "button" })}
                  className="group relative block w-full text-left rounded-2xl border border-border bg-card/60 p-8 transition-all hover:border-gold/50 hover:bg-card hover:-translate-y-1 hover:shadow-gold"
                >
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold/80 mb-3">{t.label}</div>
                  <div className="font-display text-2xl mb-3 group-hover:text-gold transition-colors break-all">{t.value}</div>
                  <div className="text-sm text-muted-foreground mb-6">{t.note}</div>
                  <span className="inline-flex items-center gap-2 text-xs text-muted-foreground group-hover:text-gold transition">
                    {t.href ? "Open" : copied === t.value ? "Copied ✓" : "Copy"}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
