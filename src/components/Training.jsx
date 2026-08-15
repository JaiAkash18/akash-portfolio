import { motion } from "framer-motion";

function Training() {
  return (
    <section id="training" className="training-section">
      <div className="training-container">

        {/* HEADER */}
        <motion.div
          className="training-header"
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
          <div className="training-eyebrow">
            <span>06</span>
            <i />
            TRAINING
          </div>

          <h2>
            Growing through
            <br />
            <span>learning.</span>
          </h2>
        </motion.div>

        {/* TRAINING CARD */}
        <motion.article
          className="training-card"
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
          <div className="training-number">
            01
          </div>

          <div className="training-main">
            <span className="training-label">
              CAMPUS TO TECHNICAL CAREERS
            </span>

            <h3>
              Campus to Technical Careers Training Program
            </h3>

            <p className="training-company">
              TNSIF &amp; Capgemini
            </p>

            <p className="training-description">
              Successfully completed training in Java Full Stack
              technologies, including Core Java, Spring Boot,
              Angular, SQL, and Git.
            </p>

            <p className="training-description">
              Developed practical knowledge of web application
              development, database integration, and software
              development best practices.
            </p>

            <p className="training-description">
              Strengthened communication, collaboration,
              problem-solving, and professional workplace skills
              through structured soft-skills training.
            </p>
          </div>

          <div className="training-meta">
            <span>JUNE 2025</span>
            <strong>01</strong>
          </div>
        </motion.article>

      </div>
    </section>
  );
}

export default Training;