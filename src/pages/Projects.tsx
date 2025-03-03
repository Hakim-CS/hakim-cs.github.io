
import coding from '../videos/coding.jpg'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Crypto Sweep",
      description: "A blockchain analysis tool that scans wallets for leftover cryptocurrency and helps users recover forgotten funds. Built with React, Ethers.js, and Web3 integration.",
      tags: ["Web3", "Blockchain", "React", "DApp"],
      link: "https://preview--crypto-sweep.lovable.app/"
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "A cutting-edge web application that uses machine learning to generate stunning images from text prompts. Leverages OpenAI's DALL-E API with a React frontend and Node.js backend.",
      tags: ["AI", "Machine Learning", "React", "Node.js"],
      link: "https://ai-image-generator.example.com"
    },
    {
      id: 3,
      title: "Smart Home Dashboard",
      description: "A comprehensive IoT dashboard that centralizes control of all your smart home devices. Features real-time data visualization, automation rules, and voice commands integration.",
      tags: ["IoT", "React", "TypeScript", "WebSockets"],
      link: "https://smart-home-dashboard.example.com"
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
