import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-6xl text-gold"
            style={{ textShadow: "0 0 40px oklch(0.78 0.13 78 / 0.5)" }}
          >
            R
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
