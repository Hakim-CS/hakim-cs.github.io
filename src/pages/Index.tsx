import { SkillsSection } from "@/components/skills-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Terminal, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/seo";

export default function Index() {
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
        description="Backend engineer specializing in Go, PostgreSQL, microservices and high-concurrency systems. Building scalable, AI-powered applications."
        path="/"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-gradient-hero">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* Glow */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-mono rounded-full glass-dark text-primary border border-primary/30">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for opportunities
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
                Building{" "}
                <span className="text-gradient-primary">scalable systems</span>{" "}
                that quietly handle the load.
              </h1>

              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                I'm <span className="text-foreground font-semibold">Hakim</span> — a backend engineer focused on Go, PostgreSQL, microservices and AI-powered applications. From low-latency trading bots to distributed data pipelines.
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

            {/* Right: terminal mockup */}
            <div className="animate-fadeIn hidden lg:block" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-30" />
                <div className="relative card-elevated bg-card/80 backdrop-blur-xl overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-primary/70" />
                    </div>
                    <div className="flex-1 text-center text-xs font-mono text-muted-foreground flex items-center justify-center gap-2">
                      <Terminal className="h-3 w-3" />
                      hakim@portfolio:~
                    </div>
                  </div>
                  {/* Terminal body */}
                  <div className="p-6 font-mono text-sm leading-relaxed">
                    <div className="text-muted-foreground">$ <span className="text-primary">whoami</span></div>
                    <div className="text-foreground mb-3">abdul-hakim-nazary</div>

                    <div className="text-muted-foreground">$ <span className="text-primary">cat</span> stack.json</div>
                    <pre className="text-foreground mb-3 text-xs">{`{
  "languages": ["Go", "Python", "Java"],
  "databases": ["PostgreSQL", "MS SQL"],
  "tools": ["Docker", "Git", "REST"],
  "focus": "high-concurrency systems"
}`}</pre>

                    <div className="text-muted-foreground">$ <span className="text-primary">echo</span> $STATUS</div>
                    <div className="text-primary flex items-center">
                      <Sparkles className="h-3 w-3 mr-1.5" />
                      shipping_things
                      <span className="cursor-blink ml-1">▋</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />
    </div>
  );
}
