const ITEMS = [
  "Go", "PostgreSQL", "Docker", "REST APIs", "Python", "Concurrency",
  "Microservices", "Java", "Git", "MS SQL", "AI Research", "Linux",
];

export function TechTicker() {
  return (
    <div className="relative border-y border-border bg-card/40 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee py-3">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
            {ITEMS.map((item) => (
              <span
                key={`${dup}-${item}`}
                className="mx-6 text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap"
              >
                {item}
                <span className="ml-6 text-primary/60">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
