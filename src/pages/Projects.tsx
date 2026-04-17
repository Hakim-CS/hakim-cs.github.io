import { useState, useMemo } from 'react';
import { ExternalLink, Star, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/seo';
import project1 from '../videos/project1.png';
import project2 from '../videos/project2.png';
import project3 from '../videos/project3.png';
import aiFinance from '../videos/ai_finance.png';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Aura Finance — AI Finance Tracker",
    description: "A comprehensive AI-powered personal finance management system with intelligent spending insights, automated expense tracking, and predictive budgeting. Features receipt OCR, voice input, LSTM-based budget forecasting and group expense splitting.",
    tags: ["React", "TypeScript", "TensorFlow.js", "PostgreSQL", "Node.js", "AI/ML"],
    link: "https://github.com/Hakim-CS/AI_Finance",
    github: "https://github.com/Hakim-CS/AI_Finance",
    image: aiFinance,
    featured: true,
  },
  {
    id: 2,
    title: "Crypto Trading Platform",
    description: "Web-based cryptocurrency trading platform where users can buy, sell, follow market news, track portfolios and analyze trends in real-time.",
    tags: ["React", "Web3", "Trading", "Chart.js"],
    link: "https://crypto-sweep.netlify.app/",
    image: project1,
  },
  {
    id: 3,
    title: "Habit Tracker",
    description: "A web-based habit tracker built with Streamlit, designed to help build better routines through visualization and progress tracking.",
    tags: ["Python", "Streamlit", "Data Visualization", "Productivity"],
    link: "https://track-habit.streamlit.app/",
    image: project2,
  },
  {
    id: 4,
    title: "Pollify — Real-time Voting",
    description: "Real-time polling and voting application where users can create polls and gather votes instantly. Live results, multiple voting options and shareable links.",
    tags: ["React", "Real-time", "Firebase", "Collaborative"],
    link: "https://e-poll.netlify.app",
    image: project3,
  },
];

export default function Projects() {
  const allTags = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))],
    []
  );
  const [filter, setFilter] = useState("All");

  const featured = projects.find(p => p.featured);
  const others = projects.filter(p =>
    !p.featured && (filter === "All" || p.tags.includes(filter))
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Projects | Hakim Nazary"
        description="Selected projects: AI finance tracker, crypto trading platform, real-time voting app and more — built with Go, React, PostgreSQL and AI/ML."
        path="/projects"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-1 w-12 bg-gradient-primary rounded-full" />
            <span className="text-primary text-sm font-mono font-semibold tracking-wider uppercase">
              // Projects
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gradient mb-3">
            Selected Work
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of projects spanning AI, real-time systems, finance and developer tools.
          </p>
        </div>

        {/* Featured */}
        {featured && (
          <div className="mb-12 card-elevated overflow-hidden group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-video md:aspect-auto overflow-hidden bg-muted">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  <Star className="h-3 w-3 fill-current" />
                  Featured
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={featured.link} target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2">
                      View Project <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                  {featured.github && (
                    <a href={featured.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2">
                        <Github className="h-4 w-4" /> Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all ${
                filter === tag
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map(project => (
            <article
              key={project.id}
              className="card-elevated overflow-hidden group flex flex-col"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow transition-colors"
                >
                  View Project <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {others.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No projects match this filter.
          </p>
        )}
      </div>
    </div>
  );
}
