export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl text-gold">R<span className="text-foreground/60">.</span></span>
          <span>Made with care in Canada</span>
        </div>
        <div className="text-xs tracking-widest uppercase">© {new Date().getFullYear()} Ryan</div>
      </div>
    </footer>
  );
}
