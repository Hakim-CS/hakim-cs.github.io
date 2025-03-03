
import coding from '../videos/coding.jpg'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Crypto Sweeper",
      description: "A blockchain analysis tool that scans wallets for leftover cryptocurrency and helps users recover forgotten funds. Built with React, Ethers.js, and Web3 integration.",
      tags: ["Web3", "Blockchain", "React", "DApp"]
    },
    {
      id: 2,
      title: "Project 2",
      description: "Upcoming...👨‍💻(❁´◡`❁)"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Upcoming...👨‍💻(❁´◡`❁)"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
