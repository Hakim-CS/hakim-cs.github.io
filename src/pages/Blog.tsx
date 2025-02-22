
export default function Blog() {
  return (
    <div className="section-padding">
      <div className="container mx-auto animate-fadeIn">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <div className="grid gap-6">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 card-hover"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Blog Post {i}</h2>
                  <p className="text-muted-foreground">
                    An interesting article about development, design, and technology.
                  </p>
                </div>
                <time className="text-sm text-muted-foreground">Jan {i}, 2024</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
