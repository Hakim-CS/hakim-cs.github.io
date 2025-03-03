
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold">
          Portfolio
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-lg border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link py-2" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="nav-link py-2" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/projects" className="nav-link py-2" onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="/blog" className="nav-link py-2" onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/contact" className="nav-link py-2" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
