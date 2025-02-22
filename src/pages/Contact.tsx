
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="section-padding">
      <div className="container mx-auto max-w-xl animate-fadeIn">
        <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
        
        {/* Social Links */}
        <div className="flex gap-4 mb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span>Instagram</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input placeholder="Your Name" className="bg-card" />
          </div>
          <div>
            <Input type="email" placeholder="Your Email" className="bg-card" />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              className="min-h-[150px] bg-card"
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
