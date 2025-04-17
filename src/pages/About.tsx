
import photo from '../videos/me.jpeg'
export default function About() {
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
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="container mx-auto max-w-4xl animate-fadeIn relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-white">About Me</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg text-white/90">
              👋 Hi, I'm <strong>Hakim</strong>, a studying <em>computer engineering</em> with a strong interest in web development, databases, and system security. I enjoy building interactive and efficient applications using React, ASP.NET Core, and various backend technologies.
              <br></br>
              Currently, I'm preparing for the <em>TOEFL iBT</em> to expand my global opportunities.

              <br />
              <br />
              <br />
              🚀 Let's connect and create something amazing!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
