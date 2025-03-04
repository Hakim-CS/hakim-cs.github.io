
import newVid from "../videos/NewVid.mp4";

export default function Index() {
  return (
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
      <div className="absolute inset-0 bg-black/50 z-0" />
      
      {/* Content */}
      <div className="section-padding relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fadeIn">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary backdrop-blur-sm">
              Welcome
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Creative Developer & Designer
            </h1>
            <p className="text-base md:text-xl text-white/80">
              I craft modern digital experiences with a focus on simplicity and functionality.
              Let's bring your ideas to life through clean, beautiful design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
