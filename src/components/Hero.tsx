import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span className="block mb-2">Ondieki Owen</span>
            <span className="text-gradient">Data Engineer</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transforming complex data into elegant solutions through the intersection of engineering and creativity
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>

          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
