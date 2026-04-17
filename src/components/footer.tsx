import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, ArrowUp, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { label: 'GitHub',    href: 'https://github.com/hakim-cs',                   icon: Github },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/hakim-nazary/',     icon: Linkedin },
    { label: 'Instagram', href: 'https://instagram.com/its_hakimn',              icon: Instagram },
    { label: 'Email',     href: 'mailto:hakim.nazari.tech@gmail.com',            icon: Mail },
  ];

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="p-2 rounded-md bg-gradient-primary">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Hakim<span className="text-primary font-mono">.dev</span></span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Backend engineer crafting scalable systems and solving complex problems with code.
            </p>
            <p className="text-muted-foreground text-xs font-mono">📍 Slovenia 🇸🇮</p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm font-mono uppercase tracking-wider">Navigation</h4>
            <div className="space-y-2">
              {quickLinks.map(link => (
                <Link key={link.href} to={link.href} className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm font-mono uppercase tracking-wider">Connect</h4>
            <div className="space-y-2">
              {socialLinks.map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm font-mono uppercase tracking-wider">Let's Talk</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Have a project in mind? Let's collaborate.
            </p>
            <Link to="/contact">
              <Button className="w-full">Get in Touch</Button>
            </Link>
          </div>
        </div>

        <div className="h-px bg-border my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Abdul Hakim Nazary. All rights reserved.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-1 font-mono">
              Built with React · TypeScript · Tailwind
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map(s => {
              const Icon = s.icon;
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                  aria-label={s.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
