import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';
import { SEO } from "@/components/seo";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const RECEIVING_EMAIL = import.meta.env.VITE_RECEIVING_EMAIL || "hakim.nazari.tech@gmail.com";

const socials = [
  { label: "GitHub",    href: "https://github.com/hakim-cs",            icon: Github,    handle: "@hakim-cs" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/hakim-nazary/", icon: Linkedin, handle: "hakim-nazary" },
  { label: "Instagram", href: "https://instagram.com/its_hakimn",       icon: Instagram, handle: "@its_hakimn" },
  { label: "Email",     href: "mailto:hakim.nazari.tech@gmail.com",     icon: Mail,      handle: "hakim.nazari.tech@gmail.com" },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      toast({
        title: "Configuration needed",
        description: "Please set up EmailJS environment variables to send messages.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: RECEIVING_EMAIL,
        from_name: name,
        from_email: email,
        message: message,
      });
      setName(""); setEmail(""); setMessage("");
      toast({ title: "Message sent!", description: "Thanks — I'll get back to you soon." });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact | Hakim Nazary"
        description="Get in touch with Hakim Nazary — backend engineer. Available for collaborations, freelance and full-time opportunities."
        path="/contact"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-12 bg-gradient-primary rounded-full" />
              <span className="text-primary text-sm font-mono font-semibold tracking-wider uppercase">
                // Contact
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gradient mb-3">
              Let's build something
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Have a project, role or idea you'd like to discuss? I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Sidebar */}
            <aside className="md:col-span-2 space-y-3">
              <div className="card-elevated p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-mono uppercase tracking-wider">Location</span>
                </div>
                <p className="text-foreground font-semibold">Slovenia 🇸🇮</p>
                <p className="text-sm text-muted-foreground mt-1">Open to remote worldwide</p>
              </div>

              {socials.map(s => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-elevated p-4 flex items-center gap-3 group"
                  >
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-foreground font-semibold text-sm">{s.label}</div>
                      <div className="text-xs font-mono text-muted-foreground truncate">{s.handle}</div>
                    </div>
                  </a>
                );
              })}
            </aside>

            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 card-elevated p-6 md:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
                  Name
                </label>
                <Input id="name" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
                  Email
                </label>
                <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell me about your project or opportunity…" className="min-h-[160px]" value={message} onChange={e => setMessage(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full shadow-glow" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
