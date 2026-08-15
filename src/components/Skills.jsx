import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    label: "PROGRAMMING",
    title: "Programming Languages",
    skills: ["Python", "Java"],
  },
  {
    number: "02",
    label: "WEB",
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "03",
    label: "DATABASE",
    title: "Database",
    skills: ["SQL", "MySQL"],
  },
  {
    number: "04",
    label: "TOOLS",
    title: "Tools",
    skills: ["GitHub", "Git", "VS Code", "Android Studio", "Power BI"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg-grid" />

      <div className="skills-container">

        {/* HEADER */}
        <ScrollReveal y={60}>
          <div className="skills-header">
            <div className="skills-eyebrow">
              <span>01</span>
              <i />
              SKILLS
            </div>

            <h2>
              What I
              <br />
              <span>work with.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* SKILL CARDS */}
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <ScrollReveal
              key={group.number}
              delay={index * 0.12}
              y={80}
            >
              <article className="skill-card">

                <div className="skill-card-top">
                  <span>↗{group.number}</span>
                  <span>{group.label}</span>
                </div>

                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="skill-card-line" />

              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;