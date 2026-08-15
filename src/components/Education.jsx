import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education" className="education-section">

      <div className="education-container">

        {/* SECTION HEADER */}
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="education-eyebrow">
            <span>03</span>
            <i />
            EDUCATION
          </div>

          <h2>
            Learning with
            <br />
            <span>purpose.</span>
          </h2>
        </motion.div>

        {/* EDUCATION CONTENT */}
        <div className="education-list">

          {/* B.TECH */}
          <motion.article
            className="education-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="education-number">
              01
            </div>

            <div className="education-main">
              <span className="education-label">
                UNDERGRADUATE
              </span>

              <h3>
                B.Tech Information Technology
              </h3>

              <p className="education-institute">
                Agni College of Technology
              </p>

              <p className="education-description">
                Building a strong foundation in software development,
                information technology, problem-solving, and modern
                digital technologies.
              </p>
            </div>

            <div className="education-meta">
              <span>2022 — 2026</span>
              <strong>79%</strong>
            </div>
          </motion.article>


          {/* HIGHER SECONDARY */}
          <motion.article
            className="education-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="education-number">
              02
            </div>

            <div className="education-main">
              <span className="education-label">
                HIGHER SECONDARY
              </span>

              <h3>
                Higher Secondary School
              </h3>

              <p className="education-institute">
                St. Joseph's Higher Secondary School
              </p>

              <p className="education-description">
                Completed higher secondary education with a focus on
                developing analytical thinking, discipline, and
                academic fundamentals.
              </p>
            </div>

            <div className="education-meta">
              <span>2021 — 2022</span>
              <strong>67%</strong>
            </div>
          </motion.article>

        </div>

      </div>

    </section>
  );
}

export default Education;