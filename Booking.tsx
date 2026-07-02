import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

export function Booking() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (document.querySelector("script[data-calendly]")) return;
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.dataset.calendly = "1";
    document.body.appendChild(s);
  }, []);

  return (
    <section id="booking" className="relative py-32 md:py-44 px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-3">Grab a slot</p>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
              Let's <span className="italic text-gold-soft">actually</span> talk.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Thirty minutes, no pressure. Bring an idea, a rough sketch, or just say hi.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden border border-gold/25 bg-card shadow-gold">
            <div className="absolute inset-0 bg-radial-gold opacity-40 pointer-events-none" />
            <div
              ref={ref}
              className="calendly-inline-widget relative"
              data-url="https://calendly.com/ryanplayzvidyt/30min?background_color=0f0b07&text_color=f5ecd7&primary_color=e8be6e&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "720px" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
