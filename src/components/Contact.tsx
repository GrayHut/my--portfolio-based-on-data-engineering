import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:ondiekiowen99@gmail.com", color: "text-primary" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/owen-ondieki-a925b818b", color: "text-secondary" },
    { icon: Github, label: "GitHub", href: "https://github.com/GrayHut", color: "text-accent" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "text-primary" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Open to discussing new projects, creative ideas or opportunities & being part of your vision.
          </p>

          <div className="glass rounded-2xl p-8 mb-12 animate-fade-in">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <link.icon className={`w-6 h-6 ${link.color}`} />
                    </div>
                    <span className="text-sm font-medium">{link.label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white"
            onClick={() => window.location.href = "mailto:contact@example.com"}
          >
            <Mail className="w-5 h-5 mr-2" />
            email me
          </Button>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © Portfolio Built By Owen Ondieki....
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
