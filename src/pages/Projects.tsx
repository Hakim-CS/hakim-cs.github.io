
import coding from '../videos/coding.jpg'
import project1 from '../videos/project1.png'
import project2 from '../videos/project2.png'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Crypto Trading Platform",
      description: "A web-based cryptocurrency trading platform where users can buy and sell crypto, follow market news, track portfolios, and analyze market trends in real-time. Built with React, Chart.js, and cryptocurrency APIs.",
      tags: ["Web3", "Blockchain", "React", "Trading"],
      link: "https://preview--crypto-sweep.lovable.app/",
      image: project1
    },
    {
      id: 2,
      title: "Habit Tracker",
      description: "A web-based habit tracker application built with Streamlit, designed to help you build better routines through visualization and progress tracking. Access it from any device with a web browser!",
      tags: ["Python", "Streamlit", "Data Visualization", "Productivity"],
      link: "https://track-habit.streamlit.app/",
      image: project2
    },
    {
      id: 3,
      title: "Smart Home Dashboard",
      description: "A comprehensive IoT dashboard that centralizes control of all your smart home devices. Features real-time data visualization, automation rules, and voice commands integration.",
      tags: ["IoT", "React", "TypeScript", "WebSockets"],
      link: ""
    }
  ];

  return (
    <div className="relative min-h-screen pt-16 md:pt-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${coding})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-black/70 z-0" />
      
      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="container mx-auto animate-fadeIn relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-white">Projects</h1>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border bg-black/50 p-4 sm:p-6 card-hover glass backdrop-blur-sm"
              >
                {project.image && (
                  <div className="mb-4 overflow-hidden rounded-md h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-white/80 mb-4">
                  {project.description}
                </p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block mt-4 text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
