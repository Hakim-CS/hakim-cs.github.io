
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Instagram, Linkedin } from "lucide-react";
import photo from '../videos/contact.jpg';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="relative min-h-screen pt-16 md:pt-20">
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

      <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="container mx-auto max-w-xl animate-fadeIn relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-white">Get in Touch</h1>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-4 mb-6 md:mb-8">
            <a
              href="https://instagram.com/its_hakimn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hakim-nazary/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <Input placeholder="Your Name" className="bg-white/10 border-white/20 text-white" required />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" className="bg-white/10 border-white/20 text-white" required />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="min-h-[120px] md:min-h-[150px] bg-white/10 border-white/20 text-white"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
