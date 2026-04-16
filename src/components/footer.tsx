import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, ArrowUp, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/hakim-cs',
      icon: Github,
      color: 'hover:text-white hover:bg-gray-700'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hakim-nazary/',
      icon: Linkedin,
      color: 'hover:text-white hover:bg-blue-600'
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/its_hakimn',
      icon: Instagram,
      color: 'hover:text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600'
    },
    {
      label: 'Email',
      href: 'mailto:hakim.nazari.tech@gmail.com',
      icon: Mail,
      color: 'hover:text-white hover:bg-red-600'
    },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-black/95 to-black/90 border-t border-white/10">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">

            {/* Brand Column */}
            <div className="animate-fadeIn col-span-1 md:col-span-1">
              <Link to="/" className="inline-block mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary/60">
                    <Code2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">Hakim</span>
                </div>
              </Link>
              <p className="text-white/70 text-sm font-light leading-relaxed mb-4">
                Backend engineer crafting scalable systems and solving complex problems with code.
              </p>
              <p className="text-white/60 text-xs">
                Based in Slovenia 🇸🇮
              </p>
            </div>

            {/* Quick Links */}
            <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    → {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="mailto:hakim.nazari.tech@gmail.com"
                  className="block text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                >
                  → Send Email
                </a>
                <a
                  href="https://github.com/hakim-cs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                >
                  → View Code
                </a>
                <a
                  href="https://www.linkedin.com/in/hakim-nazary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                >
                  → LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-white font-semibold mb-4">Let's Connect</h4>
              <p className="text-white/70 text-sm font-light mb-4">
                Have a project in mind? Let's collaborate and create something amazing.
              </p>
              <Link to="/contact">
                <Button className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left */}
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm font-light">
                © {currentYear} Abdul Hakim Nazari. All rights reserved.
              </p>
              <p className="text-white/50 text-xs mt-2">
                Designed & built using React, TypeScript & Tailwind CSS
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg bg-white/10 border border-white/20 text-white/70 transition-all duration-300 hover:border-white/40 ${social.color} transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-lg bg-white/10 border border-white/20 text-white/70 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Back to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
