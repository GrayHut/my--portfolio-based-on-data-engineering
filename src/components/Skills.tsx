const Skills = () => {
  const skillCategories = [
    {
      title: "Data Engineering",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "Apache Spark", level: 85 },
        { name: "Airflow", level: 80 },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 75 },
        { name: "Terraform", level: 80 },
      ],
    },
    {
      title: "Creative & Design",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Data Visualization", level: 90 },
        { name: "Figma", level: 80 },
        { name: "React", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="glass rounded-xl p-6 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gradient">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 0.1}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
