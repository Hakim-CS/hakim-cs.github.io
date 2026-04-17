import { Code2, Database, Wrench, Zap } from 'lucide-react';
import {
  SiGo, SiPython, SiPostgresql, SiDocker, SiGit, SiGithub,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

interface Skill {
  name: string;
  icon: React.ReactNode;
}
interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const ICON_CLS = "h-7 w-7 md:h-8 md:w-8";

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-5 w-5" />,
      skills: [
        { name: "Go",        icon: <SiGo className={ICON_CLS} style={{ color: '#00ADD8' }} /> },
        { name: "Python",    icon: <SiPython className={ICON_CLS} style={{ color: '#3776AB' }} /> },
        { name: "Java",      icon: <FaJava className={ICON_CLS} style={{ color: '#E76F00' }} /> },
        { name: "REST APIs", icon: <TbApi className={ICON_CLS} style={{ color: 'hsl(var(--primary))' }} /> },
      ],
    },
    {
      title: "Database & Data",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className={ICON_CLS} style={{ color: '#336791' }} /> },
        { name: "MS SQL",     icon: <FaDatabase className={ICON_CLS} style={{ color: '#CC2927' }} /> },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: "Git",    icon: <SiGit className={ICON_CLS} style={{ color: '#F05032' }} /> },
        { name: "GitHub", icon: <SiGithub className={ICON_CLS} style={{ color: 'hsl(var(--foreground))' }} /> },
        { name: "Docker", icon: <SiDocker className={ICON_CLS} style={{ color: '#2496ED' }} /> },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Zap className="h-5 w-5" />,
      skills: [
        { name: "Problem Solving", icon: <span className="text-2xl">🧩</span> },
        { name: "Collaboration",   icon: <span className="text-2xl">🤝</span> },
        { name: "Adaptability",    icon: <span className="text-2xl">🎯</span> },
      ],
    },
  ];

  return (
    <section className="relative section-padding bg-background">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-1 w-12 bg-gradient-primary rounded-full" />
            <span className="text-primary text-sm font-mono font-semibold tracking-wider uppercase">
              // Skills
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg">
            A toolkit built through real-world projects and continuous learning.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="card-elevated p-6 md:p-8 animate-fadeIn"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  {cat.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">{cat.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/40 hover:bg-muted transition-all duration-300 cursor-default"
                  >
                    {skill.icon}
                    <p className="text-xs md:text-sm font-medium text-foreground text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: "15+", label: "Technologies" },
            { stat: "4",   label: "Languages" },
            { stat: "5+",  label: "Projects" },
            { stat: "100%", label: "Passion" },
          ].map((item, idx) => (
            <div
              key={item.label}
              className="text-center p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${0.05 * idx}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold font-mono text-gradient-primary">
                {item.stat}
              </div>
              <div className="text-muted-foreground text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
