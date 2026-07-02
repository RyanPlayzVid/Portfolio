import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { ParticleField } from "./ParticleField";

export function Hero() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const bgX = useTransform(sx, (v) => `${v * 100}%`);
  const bgY = useTransform(sy, (v) => `${v * 100}%`);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[oklch(0.11_0.015_45)]" />
      <motion.div
        aria-hidden
        style={{ background: `radial-gradient(600px circle at ${bgX.get()} ${bgY.get()}, oklch(0.78 0.13 78 / 0.18), transparent 60%)`, x: useTransform(sx, v => (v - 0.5) * 40), y: useTransform(sy, v => (v - 0.5) * 40) }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, oklch(0.78 0.13 78 / 0.12), transparent 60%)" }} />
      </motion.div>
      <ParticleField density={80} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
          className="mb-6 text-xs tracking-[0.4em] uppercase text-gold/80"
        >
          Creator · Systems Designer · Roblox
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.95] font-light"
        >
          <span className="italic text-gold-soft">Ryan</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="mx-auto mt-6 max-w-xl text-lg md:text-xl text-muted-foreground font-light"
        >
          Building worlds, one system at a time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-primary-foreground shadow-gold transition-all hover:scale-[1.03]"
          >
            <span className="absolute inset-0 rounded-full bg-gold blur-xl opacity-40 group-hover:opacity-70 transition" aria-hidden />
            <span className="relative">Let's build something</span>
          </a>
          <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm text-foreground/80 hover:text-gold hover:border-gold/50 transition">
            See the work →
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60"
      >
        Scroll
      </motion.div>
    </section>
  );
}
