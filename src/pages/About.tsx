
import photo from '../videos/me.jpeg'
import { Code2, Zap, Globe, Target } from 'lucide-react'

export default function About() {
  const technologies = ['Go', 'PostgreSQL', 'Microservices', 'Concurrency']
  const languages = [
    { name: 'Uzbek' },
    { name: 'English' },
    { name: 'Turkish' },
    { name: 'Persian' }
  ]

  return (
    <div className="relative min-h-screen pt-16 md:pt-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${photo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 z-0" />

      <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Header with Animation */}
          <div className="animate-fadeIn mb-8 md:mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">About</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Hi, I'm Hakim
              </span>
            </h1>
            <p className="text-white/60 text-lg">Backend Engineer • Systems Architect • Problem Solver</p>
          </div>

          {/* Main Content with Staggered Animations */}
          <div className="space-y-6 md:space-y-8">
            {/* Intro Card */}
            <div className="group animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-xl p-6 md:p-8 border border-white/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
                  I'm a <span className="font-semibold text-white">final-year Computer Engineering student</span> currently expanding my technical perspective through an academic exchange in <span className="font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Slovenia</span>. My primary focus is on <span className="font-semibold text-white">backend development</span> and building <span className="font-semibold text-white">high-concurrency systems</span>.
                </p>
              </div>
            </div>

            {/* Technical Expertise Card */}
            <div className="group animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-primary/10 via-white/5 to-transparent rounded-xl p-6 md:p-8 border border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Technical Expertise</h3>
                </div>
                
                <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-4 font-light">
                  I specialize in <span className="text-primary font-semibold">Go</span>, <span className="text-primary font-semibold">PostgreSQL</span>, and <span className="text-primary font-semibold">containerized microservices</span>. My work includes:
                </p>
                
                <ul className="space-y-3 mb-6">
                  {[
                    'Engineering low-latency trading bot components',
                    'Developing AI-based finance tracker for thesis',
                    'Implementing concurrent data pipelines'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <span className="text-primary text-xl mt-0.5 group-hover/item:translate-x-1 transition-transform">→</span>
                      <span className="text-white/80 group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/40 hover:bg-primary/30 hover:border-primary/60 transition-all duration-300 cursor-default transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="group animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-xl p-6 md:p-8 border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Philosophy</h3>
                </div>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
                  I'm driven by the challenge of designing <span className="font-semibold text-white">scalable, efficient solutions</span>. Complex architectural and data engineering problems inspire me to build systems that perform at scale while maintaining clarity and maintainability.
                </p>
              </div>
            </div>

            {/* Languages Card */}
            <div className="group animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-xl p-6 md:p-8 border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Languages & Global Perspective</h3>
                </div>
                
                <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 font-light">
                  I'm <span className="font-semibold text-white">fluent in four languages</span>, thriving in international, collaborative environments where diverse perspectives drive innovation.
                </p>

                {/* Language Bars */}
                <div className="space-y-4">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="group/lang">
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{lang.name}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transform origin-left transition-all duration-700 ease-out"
                          style={{
                            width: '0%',
                            animation: `slideIn 0.8s ease-out ${0.1 * idx}s forwards`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="group animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-xl p-6 md:p-8 border border-primary/40 backdrop-blur-sm hover:border-primary/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6 text-primary animate-pulse" />
                  <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                    Let's Build Something Exceptional
                  </p>
                </div>
                <p className="text-white/80 font-light">
                  I'm always interested in collaborating on challenging problems that push the boundaries of what's possible in backend systems and data engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
