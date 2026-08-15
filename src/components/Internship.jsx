import { motion } from "framer-motion";

function Internship() {
  return (
    <section id="internship" className="internship-section">
      <div className="internship-container">

        {/* HEADER */}
        <motion.div
          className="internship-header"
          initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="internship-eyebrow">
            <span>04</span>
            <i />
            INTERNSHIP
          </div>

          <h2>
            Learning through
            <br />
            <span>experience.</span>
          </h2>
        </motion.div>

        {/* INTERNSHIP CARD */}
        <motion.article
          className="internship-card"
          initial={{
            opacity: 0,
            y: 90,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* NUMBER */}
          <div className="internship-number">
            01
          </div>

          {/* MAIN CONTENT */}
          <div className="internship-main">

            <span className="internship-label">
              FULL STACK DEVELOPMENT
            </span>

            <h3>
              Full Stack Web Developer Intern
            </h3>

            <p className="internship-company">
              Altruisty, Chennai
            </p>

            <p className="internship-description">
              Worked as a Full Stack Web Developer Intern,
              developing and maintaining responsive web applications.
              Collaborated with the development team to improve
              website performance, functionality, and user experience.
              Worked on database integration, debugging, and
              implementing scalable web solutions during the internship.
              </p>
            

          </div>

          {/* META */}
          <div className="internship-meta">
            <span>DEC 2024 — JAN 2025</span>
            <strong>01</strong>
          </div>

        </motion.article>

      </div>
    </section>
  );
}

export default Internship;