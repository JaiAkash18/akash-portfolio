import { motion } from "framer-motion";
import heroImage from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="hero-grid" />

      <div className="hero-glow" />

      <div className="hero-bg-text">
        JA
      </div>


      {/* =================================================
          CUSTOM CURSOR
      ================================================= */}

     


      {/* =================================================
          MAIN HERO
      ================================================= */}

      <div className="hero-container">


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="hero-content">

          {/* EYEBROW */}

          <motion.div
            className="hero-eyebrow"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="red-dot" />
            <span className="red-dot second-dot" />

            HELLO! I'M
          </motion.div>


          {/* NAME */}

          <div className="hero-name-mask">

            <motion.h1
              className="hero-name"
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              JAI AKASH<span>.</span>
            </motion.h1>

          </div>


          {/* ROLE */}

          <motion.h2
            className="hero-role"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Full Stack Developer{" "}
            <span>&amp;</span>{" "}
            UI/UX
            <br />
            Designer
          </motion.h2>


          {/* DESCRIPTION */}

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
          >
            Highly motivated Information Technology professional
            with strong analytical thinking, problem-solving,
            communication, teamwork, and adaptability.
          </motion.p>


          {/* POINTS */}

          <motion.div
            className="hero-points"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.65,
            }}
          >

            <div>
              <span>✓</span>
              Strong problem-solving skills
            </div>

            <div>
              <span>✓</span>
              Responsive web development
            </div>

            <div>
              <span>✓</span>
              UI/UX focused digital experiences
            </div>

          </motion.div>


          {/* BUTTONS */}

          <motion.div
            className="hero-buttons"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
          >

            <a
              href="/Jai-Akash-Resume.pdf"
              download="Jai-Akash-Resume.pdf"
              className="hero-btn primary"
            >
              DOWNLOAD RESUME

              <span className="btn-arrow">
                ↓
              </span>
            </a>


            <a
              href="#projects"
              className="hero-btn secondary"
            >
              VIEW PROJECTS

              <span className="btn-arrow">
                ↗
              </span>
            </a>

          </motion.div>

        </div>


        {/* =================================================
            RIGHT VISUAL
        ================================================= */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >


          {/* ROTATING RING */}

          <motion.div
            className="hero-circle"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          />


          {/* PHOTO */}

          <motion.div
            className="hero-photo-wrap"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <img
              src={heroImage}
              alt="Jai Akash"
              className="hero-photo"
            />

            

          </motion.div>


          {/* =================================================
              FLOATING PILL — TOP
          ================================================= */}

          <motion.div
            className="floating-pill pill-top"
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.7,
            }}
          >

            <span />

            <div>
              <small>FOCUS</small>
              <strong>FULL STACK</strong>
            </div>

          </motion.div>


          {/* =================================================
              FLOATING PILL — LEFT
          ================================================= */}

          <motion.div
            className="floating-pill pill-left"
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1.15,
              duration: 0.7,
            }}
          >

            <span />

            UI / UX DESIGN

          </motion.div>


          {/* =================================================
              FLOATING PILL — RIGHT
          ================================================= */}

          <motion.div
            className="floating-pill pill-right"
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1.3,
              duration: 0.7,
            }}
          >

            <span />

            INFORMATION TECHNOLOGY

          </motion.div>


          {/* =================================================
              PHOTO LABEL
          ================================================= */}

          <motion.div
            className="photo-label"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.45,
              duration: 0.7,
            }}
          >

            <span>JAI AKASH</span>

            <small>
              DEVELOPER
            </small>

          </motion.div>

        </motion.div>

      </div>


      {/* =================================================
          BOTTOM STATUS
      ================================================= */}

      <motion.div
        className="hero-status"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.4,
          duration: 0.8,
        }}
      >

        <span>
          AVAILABLE FOR OPPORTUNITIES
        </span>

        <div className="status-line">
          <i />
        </div>

        <span>
          BASED IN INDIA
        </span>

        <div className="status-line">
          <i />
        </div>

        <span>
          OPEN TO WORK
        </span>

      </motion.div>

    </section>
  );
}

export default Hero;