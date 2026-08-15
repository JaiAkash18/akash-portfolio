import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function ProfessionalSummary() {
  return (
    <section id="about" className="summary-section">

      <div className="summary-container">

        {/* SECTION LABEL */}
        <ScrollReveal y={30}>
          <div className="summary-label">
            <span>02</span>
            <i></i>
            PROFESSIONAL SUMMARY
          </div>
        </ScrollReveal>

        {/* BIG HEADING */}
        <div className="summary-heading">

          <motion.h2
            initial={{
              opacity: 0,
              y: 100,
              filter: "blur(12px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.35,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Building with
            <br />
            <span>logic & purpose.</span>
          </motion.h2>

        </div>

        {/* RED LINE */}
        <ScrollReveal y={20} delay={0.15}>
          <div className="summary-line">
            <span></span>
          </div>
        </ScrollReveal>

        {/* CONTENT */}
        <div className="summary-content">

          <ScrollReveal y={70} delay={0.2}>
            <p className="summary-lead">
              Motivated and detail-oriented Information Technology
              professional with strong problem-solving and analytical
              skills, passionate about building a successful career
              in software development.
            </p>
          </ScrollReveal>

          <ScrollReveal y={60} delay={0.3}>
            <p>
              Skilled in Java, Python, SQL, HTML, CSS, JavaScript,
              and software development fundamentals with the ability
              to quickly adapt to new technologies and environments.
            </p>
          </ScrollReveal>

          <ScrollReveal y={60} delay={0.4}>
            <p>
              Possesses strong communication, teamwork, and time
              management skills with a commitment to continuous
              learning, productivity, and delivering quality work.
            </p>
          </ScrollReveal>

        </div>

        {/* BOTTOM META */}
        <ScrollReveal y={30} delay={0.5}>
          <div className="summary-footer">
            <span>JAI AKASH</span>
            <span>INFORMATION TECHNOLOGY</span>
          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}

export default ProfessionalSummary;