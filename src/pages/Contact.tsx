
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

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
