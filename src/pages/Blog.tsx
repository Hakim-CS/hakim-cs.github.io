
import coding from '../videos/coding_page.jpg';

export default function Blog() {
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
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="container mx-auto animate-fadeIn relative z-10">
        <h1 className="text-3xl font-bold mb-8 text-white">Blog</h1>
        <div className="grid gap-6">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-lg border bg-white/80 p-6 card-hover backdrop-blur-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">Blog Post {i}</h2>
                  <p className="text-gray-600">
                    Not ready yet... ^_^🤦‍♂️
                  </p>
                </div>
                <time className="text-sm text-gray-600">Jan {i}, 2024</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
