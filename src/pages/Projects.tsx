
export default function Projects() {
  return (
    <div className="section-padding">
      <div className="container mx-auto animate-fadeIn">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 card-hover glass"
            >
              <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
              <p className="text-muted-foreground">
                A brief description of this amazing project and its key features.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
