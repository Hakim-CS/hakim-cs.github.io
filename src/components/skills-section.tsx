import { Code2, Database, Wrench, Zap } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    icon: string;
    color: string;
  }>;
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "Go", icon: "🐹", color: "from-blue-600 to-blue-400" },
        { name: "Python", icon: "🐍", color: "from-yellow-600 to-yellow-400" },
        { name: "Java (OOP)", icon: "☕", color: "from-orange-600 to-orange-400" },
        { name: "REST APIs", icon: "🔌", color: "from-purple-600 to-purple-400" },
      ]
    },
    {
      title: "Database & Data",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-blue-400" },
        { name: "MS SQL", icon: "🗄️", color: "from-red-600 to-red-400" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git & GitHub", icon: "🐙", color: "from-gray-700 to-gray-500" },
        { name: "Docker", icon: "🐋", color: "from-blue-500 to-blue-300" },
        { name: "VS Code", icon: "💻", color: "from-blue-600 to-cyan-400" },
      ]
    },
    {
      title: "Soft Skills",
      icon: <Zap className="h-6 w-6" />,
      skills: [
        { name: "Problem Solving", icon: "🧩", color: "from-green-600 to-green-400" },
        { name: "Collaboration", icon: "🤝", color: "from-pink-600 to-pink-400" },
        { name: "Adaptability", icon: "🎯", color: "from-indigo-600 to-indigo-400" },
      ]
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-background/95 to-background">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Skills</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-white/70 text-lg font-light">
            A comprehensive toolkit built through real-world projects and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="group animate-fadeIn"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl p-6 md:p-8 border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                    <div className="text-primary">{category.icon}</div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="group/skill animate-fadeIn"
                      style={{ animationDelay: `${0.05 * skillIdx}s` }}
                    >
                      <div className={`relative h-24 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 cursor-default`}>
                        <div className="h-full w-full rounded-xl bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-2 group-hover/skill:bg-black/30 transition-all">
                          <span className="text-3xl md:text-4xl">{skill.icon}</span>
                          <p className="text-xs md:text-sm font-semibold text-white text-center px-1 line-clamp-2">
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: "15+", label: "Technologies" },
            { stat: "4", label: "Languages" },
            { stat: "5+", label: "Projects" },
            { stat: "100%", label: "Passion" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center animate-fadeIn p-4 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              style={{ animationDelay: `${0.1 + 0.05 * idx}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
                {item.stat}
              </div>
              <div className="text-white/70 text-sm md:text-base font-light mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
