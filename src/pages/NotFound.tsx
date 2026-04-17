import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Terminal } from "lucide-react";
import { SEO } from "@/components/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background bg-grid">
      <SEO title="404 — Not Found | Hakim Nazary" description="The page you are looking for does not exist." path={location.pathname} />
      <div className="text-center px-4 max-w-lg">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-mono rounded-full glass-dark text-destructive border border-destructive/30">
          <Terminal className="h-3 w-3" />
          ERR_NOT_FOUND
        </div>
        <h1 className="text-7xl md:text-9xl font-bold font-mono text-gradient-primary mb-4">404</h1>
        <p className="text-xl text-foreground font-semibold mb-2">Page not found</p>
        <p className="text-muted-foreground mb-8 font-mono text-sm">
          <span className="text-primary">$</span> cat {location.pathname} → No such file or directory
        </p>
        <Link to="/">
          <Button size="lg" className="gap-2 shadow-glow">
            <Home className="h-4 w-4" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
