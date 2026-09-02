import { useEffect, useRef } from "react";
import { SkillsSection } from "@/components/skills-section";
import { TypingTerminal } from "@/components/typing-terminal";
import { TechTicker } from "@/components/tech-ticker";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/seo";

export default function Index() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const stats = [
    { value: "5+", label: "Projects Shipped" },
    { value: "4", label: "Languages Spoken" },
    { value: "15+", label: "Technologies" },
    { value: "∞", label: "Curiosity" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul Hakim Nazary",
    jobTitle: "Backend Engineer",
    url: "https://hakim.lovable.app",
    sameAs: [
      "https://github.com/hakim-cs",
      "https://www.linkedin.com/in/hakim-nazary/",
    ],
    knowsAbout: ["Go", "PostgreSQL", "Microservices", "Distributed Systems", "AI"],
  };

  return (
    <div className="bg-background">
      <SEO
        title="Hakim Nazary | Backend Engineer & Systems Architect"
        description="Computer Engineering graduate and backend engineer interning at TU Dresden in AI research & digital transformation. Seeking backend engineering opportunities."
        path="/"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-gradient-hero noise"
      >
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* Mouse-tracked phosphor glow */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 20%) var(--my, 30%), hsl(var(--primary) / 0.14), transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-[11px] font-mono uppercase tracking-[0.18em] rounded-none border-l-2 border-primary bg-primary/10 text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Seeking backend engineering opportunities
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
                Building{" "}
                <span className="relative inline-block text-gradient-primary">
                  scalable systems
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-primary opacity-60" />
                </span>{" "}
                that quietly handle the load.
              </h1>

              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                I'm <span className="text-foreground font-semibold">Hakim</span> — a Computer Engineering graduate and backend engineer currently interning at <span className="text-foreground font-semibold">TU Dresden</span> in AI research & digital transformation. I build with Go, PostgreSQL, microservices and AI-powered systems, and I'm open to new opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link to="/projects">
                  <Button size="lg" className="w-full sm:w-auto gap-2 shadow-glow">
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Let's Talk
                  </Button>
                </Link>
                <a href="https://github.com/hakim-cs" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="ghost" className="w-full sm:w-auto gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 max-w-lg">
                {stats.map((s) => (
                  <div key={s.label} className="border-l-2 border-primary/40 pl-3">
                    <div className="text-xl md:text-2xl font-bold text-foreground font-mono">
                      {s.value}
                    </div>
                    <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: live terminal */}
            <div className="animate-fadeIn hidden lg:block" style={{ animationDelay: "0.2s" }}>
              <TypingTerminal />
            </div>
          </div>
        </div>
      </section>

      <TechTicker />

      {/* Skills Section */}
      <SkillsSection />
    </div>
  );
}
