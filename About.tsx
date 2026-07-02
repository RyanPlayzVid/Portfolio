import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[oklch(0.22_0.03_60)] to-[oklch(0.16_0.02_50)] border border-gold/20 shadow-gold">
            <div className="absolute inset-0 bg-radial-gold opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display italic text-[10rem] text-gold/80" style={{ textShadow: "0 0 60px oklch(0.78 0.13 78 / 0.5)" }}>R</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              <span>Est. 2024</span>
              <span>Canada</span>
            </div>
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">A quick hello</p>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
              I'm <span className="italic text-gold-soft">Ryan</span>, and I love making things people enjoy.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed max-w-xl">
              <p>
                Seventeen, based in Canada. I've always loved creating — whether it's building games, designing systems, or just making something that puts a smile on someone's face.
              </p>
              <p>
                Roblox is my canvas. I build gameplay systems, NPC behavior, UI, and staff tooling — restaurant sims, car washes, and anything that feels alive when you walk into it.
              </p>
              <p className="text-foreground/90">
                I'm all about growth, real connections, and building things that actually matter.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
