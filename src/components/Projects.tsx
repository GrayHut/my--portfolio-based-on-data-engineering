import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Real-time Analytics Pipeline",
      description: "Built a scalable data pipeline processing millions of events per day using Apache Kafka and Spark, reducing processing time by 60%.",
      tags: ["Python", "Kafka", "Spark", "AWS"],
      gradient: "from-primary to-secondary",
    },
    {
      title: "Data Visualization Platform",
      description: "Created an interactive dashboard platform enabling stakeholders to explore complex datasets with custom visualizations.",
      tags: ["React", "D3.js", "Python", "PostgreSQL"],
      gradient: "from-secondary to-accent",
    },
    {
      title: "ML Pipeline Automation",
      description: "Designed and implemented automated ML pipelines with MLflow, cutting model deployment time from days to hours.",
      tags: ["MLflow", "Docker", "Airflow", "Python"],
      gradient: "from-accent to-primary",
    },
    {
      title: "Cloud Data Warehouse",
      description: "Architected a cloud-native data warehouse solution handling 10TB+ of data with optimized query performance.",
      tags: ["Snowflake", "Airflow", "SQL"],
      gradient: "from-primary via-secondary to-accent",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 w-full rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
                
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                    onClick={() => {window.open("https://github.com/", "_blank");}}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
