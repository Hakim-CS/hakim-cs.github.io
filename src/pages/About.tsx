import photo from '../videos/me.jpeg';
import { Code2, Zap, Globe, Target } from 'lucide-react';
import { SEO } from '@/components/seo';

export default function About() {
  const technologies = ['Go', 'PostgreSQL', 'Microservices', 'Concurrency'];
  const languages = [
    { name: 'Uzbek',   level: 100 },
    { name: 'English', level: 95 },
    { name: 'Turkish', level: 85 },
    { name: 'Persian', level: 90 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About | Hakim Nazary — Backend Engineer"
        description="Final-year Computer Engineering student & backend engineer. Building high-concurrency systems with Go, PostgreSQL and microservices."
        path="/about"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 grid md:grid-cols-[auto_1fr] gap-8 items-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0">
              <div className="absolute -inset-2 bg-gradient-primary rounded-full blur opacity-30" />
              <img
                src={photo}
                alt="Hakim Nazary"
                className="relative w-full h-full object-cover rounded-full border-2 border-border"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                <div className="h-1 w-12 bg-gradient-primary rounded-full" />
                <span className="text-primary text-sm font-mono font-semibold tracking-wider uppercase">
                  // About
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gradient mb-2 text-center md:text-left">
                Hi, I'm Hakim
              </h1>
              <p className="text-muted-foreground text-lg text-center md:text-left">
                Backend Engineer • Systems Architect • Problem Solver
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Intro */}
            <div className="card-elevated p-6 md:p-8">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                I'm a <span className="font-semibold text-foreground">final-year Computer Engineering student</span> currently expanding my technical perspective through an academic exchange in <span className="font-semibold text-primary">Slovenia</span>. My primary focus is <span className="font-semibold text-foreground">backend development</span> and building <span className="font-semibold text-foreground">high-concurrency systems</span>.
              </p>
            </div>

            {/* Technical */}
            <div className="card-elevated p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary"><Code2 className="h-5 w-5" /></div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Technical Expertise</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                I specialize in <span className="text-primary font-semibold">Go</span>, <span className="text-primary font-semibold">PostgreSQL</span> and <span className="text-primary font-semibold">containerized microservices</span>. My work includes:
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  'Engineering low-latency trading bot components',
                  'Developing AI-based finance tracker for thesis',
                  'Implementing concurrent data pipelines',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80">
                    <span className="text-primary font-mono mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {technologies.map(tech => (
                  <span key={tech} className="text-xs font-mono px-3 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="card-elevated p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary"><Zap className="h-5 w-5" /></div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Philosophy</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                I'm driven by the challenge of designing <span className="font-semibold text-foreground">scalable, efficient solutions</span>. Complex architectural and data engineering problems inspire me to build systems that perform at scale while staying clear and maintainable.
              </p>
            </div>

            {/* Languages */}
            <div className="card-elevated p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary"><Globe className="h-5 w-5" /></div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Languages & Global Perspective</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                I'm <span className="font-semibold text-foreground">fluent in four languages</span>, thriving in international, collaborative environments where diverse perspectives drive innovation.
              </p>
              <div className="space-y-4">
                {languages.map(lang => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{lang.name}</span>
                      <span className="text-muted-foreground font-mono text-sm">{lang.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-700"
                        style={{ width: `${lang.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="card-elevated p-6 md:p-8 bg-primary/5 border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <Target className="h-6 w-6 text-primary" />
                <p className="text-lg md:text-xl font-bold text-foreground">
                  Let's Build Something Exceptional
                </p>
              </div>
              <p className="text-foreground/80">
                I'm always interested in collaborating on challenging problems that push the boundaries of backend systems and data engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
