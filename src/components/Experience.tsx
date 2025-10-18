import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Senior Data Engineer",
      organization: "Tech Innovation Corp",
      period: "2022 - Present",
      description: "Leading data infrastructure initiatives and mentoring junior engineers. Built scalable pipelines processing billions of events.",
    },
    {
      type: "work",
      title: "Data Engineer",
      organization: "DataFlow Solutions",
      period: "2020 - 2022",
      description: "Designed and implemented ETL pipelines, optimized database performance, and collaborated with cross-functional teams.",
    },
    {
      type: "education",
      title: "M.S. Computer Science",
      organization: "Tech University",
      period: "2018 - 2020",
      description: "Specialized in Data Science and Machine Learning. Thesis on distributed computing systems.",
    },
    // {
    //   type: "work",
    //   title: "Junior Data Analyst",
    //   organization: "Analytics First",
    //   period: "2017 - 2018",
    //   description: "Analyzed complex datasets, created reports and visualizations, automated data collection processes.",
    // },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            <span className="text-gradient">Experience</span> & Education
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background" />

                  <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-3 mb-2">
                      {exp.type === "work" ? (
                        <Briefcase className="w-5 h-5 text-primary mt-1" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-secondary mt-1" />
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.organization}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed ml-8">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
