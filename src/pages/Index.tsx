
import newVid from "../videos/NewVid.mp4";
import { SkillsSection } from "@/components/skills-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
        {/*Background Video */}
        <video 
          className="absolute inset-0 z-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={newVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 z-0" />
        
        {/* Content */}
        <div className="section-padding relative z-10 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl animate-fadeIn">
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm border border-primary/30">
                Backend Engineer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
                <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                  Building Scalable Systems
                </span>
              </h1>
              <p className="text-base md:text-xl text-white/80 mb-8 leading-relaxed">
                Backend developer specializing in high-concurrency systems, microservices architecture, and AI-powered applications. From Go & PostgreSQL to distributed data pipelines and real-time trading bots.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button className="w-full sm:w-auto flex items-center gap-2 text-base" size="lg">
                    View My Projects
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full sm:w-auto text-base" size="lg">
                    Let's Connect
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <SkillsSection />
    </div>
  );
}
