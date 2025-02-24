
import coding from '../videos/coding.jpg'
export default function Projects() {
  return (
    <div className="relative min-h-screen section-padding">
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
      <div className="container mx-auto animate-fadeIn relative z-10">
        <h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border bg-black/50 p-6 card-hover glass backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">Project {i}</h3>
              <p className="text-white/80">
                Upcoming...👨‍💻(❁´◡`❁)
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
