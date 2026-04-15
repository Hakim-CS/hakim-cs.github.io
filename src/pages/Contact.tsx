
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Github, Instagram, Linkedin } from "lucide-react";
import emailjs from '@emailjs/browser';
import photo from '../videos/contact.jpg';

// Initialize EmailJS - Get your public key from emailjs.com
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
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
        to_email: "hakim.nazary@example.com",
        from_name: name,
        from_email: email,
        message: message,
      });
      
      // Clear the form
      setName("");
      setEmail("");
      setMessage("");
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
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
            <a
              href="https://github.com/hakim-cs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <Input 
                placeholder="Your Name" 
                className="bg-white/10 border-white/20 text-white"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/10 border-white/20 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="min-h-[120px] md:min-h-[150px] bg-white/10 border-white/20 text-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
