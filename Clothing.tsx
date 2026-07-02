import { Reveal } from "./Reveal";

type Design = {
  id: string;
  title: string;
  tag: string;
  gradient: string;
};

const description =
  "Custom clothing designs for Roblox avatars. Streetwear, techwear, and aesthetic fits.";

const designs: Design[] = [
  {
    id: "streetwear",
    title: "Streetwear Series",
    tag: "Everyday drip",
    gradient:
      "radial-gradient(120% 80% at 20% 15%, hsl(38 60% 55% / 0.35), transparent 55%), radial-gradient(90% 70% at 85% 90%, hsl(20 40% 25% / 0.6), transparent 60%), linear-gradient(160deg, #1a120a 0%, #0a0705 100%)",
  },
  {
    id: "techwear",
    title: "Techwear Line",
    tag: "Utility · Form",
    gradient:
      "radial-gradient(100% 70% at 80% 20%, hsl(40 70% 60% / 0.28), transparent 55%), radial-gradient(120% 80% at 10% 85%, hsl(0 0% 6%), transparent 60%), linear-gradient(140deg, #14100c 0%, #06050a 100%)",
  },
  {
    id: "aesthetic",
    title: "Aesthetic Fits",
    tag: "Soft · Editorial",
    gradient:
      "radial-gradient(110% 80% at 30% 30%, hsl(32 55% 65% / 0.32), transparent 55%), radial-gradient(90% 70% at 90% 90%, hsl(20 30% 20% / 0.55), transparent 60%), linear-gradient(200deg, #1b130b 0%, #0a0705 100%)",
  },
];

export function Clothing() {
  return (
    <section id="clothing" className="relative py-32 md:py-44 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 md:mb-24 flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-3">
                Wearables
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-light leading-tight max-w-2xl">
                Clothing <span className="italic text-gold-soft">Designs</span>.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              Pieces made to be worn — small runs, personal drops, and one-off fits
              for the avatars that live in these worlds.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {designs.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.08}>
              <div className="group relative w-full text-left rounded-2xl overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-gold">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ background: d.gradient }}
                    aria-hidden
                  />
                  {/* subtle stitched frame */}
                  <div className="absolute inset-4 rounded-xl border border-gold/15 pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl md:text-7xl text-gold/40 select-none tracking-tight">
                      {d.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-gold border border-gold/30">
                    {d.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.25em] uppercase text-muted-foreground/80">
                    Coming soon
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2 group-hover:text-gold transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
