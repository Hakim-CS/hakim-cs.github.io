import photo from '../videos/me.jpeg'
export default function About() {
  return (
<div className="relative min-h-screen section-padding">
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


    <div className="section-padding">
      <div className="container mx-auto max-w-4xl animate-fadeIn">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg text-muted-foreground">
          👋 Hi, I’m <strong>Hakim</strong>, a studying <em>computer engineering</em> with a strong interest in web development, databases, and system security. I enjoy building interactive and efficient applications using React, ASP.NET Core, and various backend technologies.
          <br></br>
Currently, I’m preparing for the <em>TOEFL iBT</em> to expand my global opportunities.

Beyond coding, I have experience as a translator and love sharing my knowledge and learning new skill every day.
          <br />
          <br />
          <br />
🚀 Let’s connect and create something amazing!
          </p>
        </div>
      </div>
    </div>
</div>
  );
}
