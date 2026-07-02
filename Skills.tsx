import { Reveal } from "./Reveal";

const crafts = [
  { label: "Gameplay Systems", note: "Loops that feel good to repeat" },
  { label: "NPC Behavior", note: "Characters that feel present" },
  { label: "UI Design", note: "Warm, readable, out of the way" },
  { label: "Staff Tooling", note: "Tools that make ops effortless" },
  { label: "Economy Design", note: "Progression that respects time" },
  { label: "World Building", note: "Spaces that invite you in" },
  { label: "Scripting", note: "Clean logic under the surface" },
  { label: "Playtesting", note: "Iteration with real players" },
];

export function Skills() {
  return (
    <section id="craft" className="relative py-32 md:py-44 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-3">The craft</p>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
              What I bring to the <span className="italic text-gold-soft">table</span>.
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {crafts.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.05}>
              <div className="group relative rounded-xl border border-border bg-card/50 p-6 h-full transition-all hover:border-gold/50 hover:bg-card hover:-translate-y-1">
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-3 h-8 w-8 rounded-full border border-gold/40 flex items-center justify-center text-gold text-xs group-hover:animate-[pulse-gold_1.5s_ease-out_infinite]">
                  ◆
                </div>
                <div className="font-display text-lg text-foreground mb-1">{c.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{c.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
