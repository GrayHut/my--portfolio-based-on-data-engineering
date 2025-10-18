import { Code2, Palette, Database } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="glass rounded-2xl p-8 mb-12 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a data engineer who bridges the gap between technical excellence and creative innovation. 
              With a background in both data science and design, I bring a unique perspective to solving complex problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines rigorous data engineering practices with creative problem-solving, 
              resulting in solutions that are not only functional but also elegant and user-friendly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
              <p className="text-muted-foreground">
                Building robust pipelines and scalable data infrastructure
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
              <p className="text-muted-foreground">
                Writing clean, efficient code with best practices
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Vision</h3>
              <p className="text-muted-foreground">
                Designing intuitive solutions with user experience in mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
