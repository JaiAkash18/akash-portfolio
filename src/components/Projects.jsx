import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "REAL-TIME APPLICATION",
    title: "SMART COLLEGE BUS",
    title2: "TRACKING APP",

    description:
      "Developed an intelligent college bus tracking application focused on improving student transportation safety and convenience through real-time location monitoring and efficient route management. Designed a user-friendly interface that helps students and administrators access tracking and route-related information through a simple and seamless experience.",

    technologies: [
      "REAL-TIME TRACKING",
      "ROUTE MANAGEMENT",
      "USER INTERFACE",
      "TRANSPORTATION",
    ],

    highlights: [
      "Real-time location monitoring",
      "Efficient route management",
      "Student-focused tracking experience",
    ],
  },

  {
    number: "02",
    category: "MACHINE LEARNING & AI",
    title: "HAZARDOUS AGROCHEMICALS",
    title2: "SCENT DETECTION SYSTEM",

    description:
      "Designed an AI-assisted hazardous scent detection system aimed at improving safety in agricultural and rural environments. The project combines machine learning concepts with gas sensor technology to identify harmful agrochemical exposure at an early stage and support safer working and environmental conditions.",

    technologies: [
      "MACHINE LEARNING",
      "ARTIFICIAL INTELLIGENCE",
      "GAS SENSOR",
      "HAZARD DETECTION",
    ],

    highlights: [
      "AI-assisted hazard detection",
      "Gas sensor technology",
      "Early identification of harmful exposure",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="selected-projects">

      <div className="selected-projects-grid" />
      <div className="selected-projects-glow" />

      <div className="selected-projects-container">

        {/* HEADER */}

        <motion.div
          className="selected-projects-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="selected-projects-eyebrow">
            <span>04</span>
            <i />
            SELECTED PROJECTS
          </div>

          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>
        </motion.div>


        {/* PROJECTS */}

        <div className="selected-projects-list">

          {projects.map((project, index) => (

            <motion.article
              key={project.number}
              className="selected-project-card"

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* TOP */}

              <div className="selected-project-top">

                <span className="selected-project-number">
                  {project.number}
                </span>

                <span className="selected-project-category">
                  {project.category}
                </span>

              </div>


              {/* TITLE */}

              <div className="selected-project-title-row">

                <h3>
                  {project.title}
                  <br />
                  <span>{project.title2}</span>
                </h3>

                <div className="selected-project-arrow">
                  ↗
                </div>

              </div>


              {/* CONTENT */}

              <div className="selected-project-info">

                <div className="selected-project-description">

                  <p>
                    {project.description}
                  </p>

                </div>


                <div className="selected-project-highlights">

                  <div className="selected-project-label">
                    KEY HIGHLIGHTS
                  </div>

                  {project.highlights.map(
                    (highlight) => (
                      <div
                        className="selected-project-highlight"
                        key={highlight}
                      >
                        <span>✓</span>
                        <p>{highlight}</p>
                      </div>
                    )
                  )}

                </div>

              </div>


              {/* BOTTOM */}

              <div className="selected-project-bottom">

                <div className="selected-project-tech">

                  <div className="selected-project-label">
                    TECHNOLOGIES / FOCUS
                  </div>

                  <div className="selected-project-tech-list">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>


                <div className="selected-project-status">
                  <span />
                  COMPLETED
                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* FOOTER */}

        <div className="selected-projects-footer">
          <span>SELECTED WORK</span>

          <i />

          <span>MORE PROJECTS COMING SOON</span>
        </div>

      </div>
    </section>
  );
}

export default Projects;