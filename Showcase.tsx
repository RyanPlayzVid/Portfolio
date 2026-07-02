import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import sequoAsset from "@/assets/sequo.webp.asset.json";
import petalAsset from "@/assets/petal.webp.asset.json";
import washiezAsset from "@/assets/washiez.webp.asset.json";

type Project = {
  id: string;
  title: string;
  tag: string;
  short: string;
  long: string;
  role: string;
  image: string;
  robloxUrl?: string;
};

const projects: Project[] = [
  {
    id: "sequo",
    title: "Sequo Restaurant",
    tag: "Restaurant Sim",
    short: "Serve, grow, and build a restaurant that feels alive.",
    long: "A cozy restaurant simulator where every plate carries a story. I worked on gameplay systems, NPC guests, order flow, and staff tooling that keeps the kitchen humming even at peak hours.",
    role: "Systems · NPCs · Staff Tools",
    image: sequoAsset.url,
    robloxUrl: "https://www.roblox.com/games/117463498715025/Sequo-Restaurant",
  },
  {
    id: "petal",
    title: "Petal Café",
    tag: "Cozy Café",
    short: "A soft, blossoming café where every visit feels warm.",
    long: "Petal Café is a slow-paced, pastel world built around comfort. I focused on UI warmth, cozy interactions, and the little moments that make players want to stay a while longer.",
    role: "UI · Interaction · Warmth",
    image: petalAsset.url,
    robloxUrl: "https://www.roblox.com/games/113129645046440/Petal-Caf",
  },
  {
    id: "washiez",
    title: "Washiez Car Wash",
    tag: "Car Wash Tycoon",
    short: "Suds, shine, and a car wash that actually feels satisfying.",
    long: "Washiez is all about tactile play — pulling in, foaming up, drying off. I contributed to gameplay systems and the moment-to-moment feel that turns a routine into a ritual.",
    role: "Gameplay · Systems · Polish",
    image: washiezAsset.url,
    robloxUrl: "https://www.roblox.com/games/6764533218/Washiez-Car-Wash",
  },
];

export function Showcase() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-32 md:py-44 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 md:mb-24 flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-3">Selected work</p>
              <h2 className="font-display text-4xl md:text-6xl font-light leading-tight max-w-2xl">
                Worlds I've helped bring <span className="italic text-gold-soft">to life</span>.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              A small selection of the games and systems I've contributed to. Each one taught me something.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <button
                onClick={() => setActive(p)}
                className="group relative w-full text-left rounded-2xl overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-gold"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-gold border border-gold/30">{p.tag}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2 group-hover:text-gold transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.short}</p>
                  <span className="inline-flex items-center gap-2 text-xs text-gold/90 tracking-widest uppercase">
                    View more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8 bg-background/80 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-gold/20 shadow-gold"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center text-foreground hover:text-gold hover:border-gold/50 transition"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-8 md:p-10">
                <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-3">{active.tag}</p>
                <h3 className="font-display text-4xl md:text-5xl mb-4">{active.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl">{active.long}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-8">
                  <span className="h-px w-8 bg-gold/50" />
                  <span className="tracking-widest uppercase">{active.role}</span>
                </div>
                <a
                  href={active.robloxUrl ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => { if (!active.robloxUrl) e.preventDefault(); }}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold hover:scale-[1.03] transition"
                >
                  Play on Roblox →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
