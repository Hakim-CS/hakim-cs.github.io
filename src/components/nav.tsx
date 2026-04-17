import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";
import { CVModal } from "./cv-modal";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const { pathname } = useLocation();

  const close = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <div className="p-1.5 rounded-md bg-gradient-primary">
              <Code2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-foreground">Hakim</span>
            <span className="text-primary font-mono">.dev</span>
          </Link>

          <button
            className="md:hidden flex items-center text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`nav-link text-sm ${pathname === l.to ? 'text-foreground after:w-full' : ''}`}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => setIsCVModalOpen(true)}
              className="nav-link text-sm cursor-pointer"
            >
              CV
            </button>
            <ThemeToggle />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-xl border-b border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {links.map(l => (
                <Link key={l.to} to={l.to} className="nav-link py-2" onClick={close}>
                  {l.label}
                </Link>
              ))}
              <button
                onClick={() => { setIsCVModalOpen(true); close(); }}
                className="nav-link py-2 text-left cursor-pointer"
              >
                CV
              </button>
              <div className="py-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>

      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </>
  );
}
