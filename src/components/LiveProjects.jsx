import { motion } from "framer-motion";
import "./LiveProjects.css";
import homeImage from "../assets/kumaran-home.png";
import bookingImage from "../assets/kumaran-booking.png";

function LiveProjects() {
  return (
    <section
      id="live-projects"
      className="live-projects-section"
    >
      {/* Background */}
      <div className="live-projects-grid" />

      <div className="live-projects-glow" />

      <div className="live-projects-container">

        {/* HEADER */}

        <motion.div
          className="live-projects-header"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="live-projects-eyebrow">
            <span>03</span>
            <i />
            LIVE PROJECT
          </div>

          <h2>
            Built for
            <br />
            <span>real users.</span>
          </h2>
        </motion.div>


        {/* PROJECT INFO */}

        <motion.div
          className="live-project-info"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          <div>
            <span className="live-project-number">
              01 / LIVE
            </span>

            <h3>
              Kumaran
              <br />
              Home Service
            </h3>
          </div>

          <div className="live-project-description">
            <p>
              A responsive home service booking website
              designed for customers to book electrical,
              plumbing, house wiring, and AC services
              online.
            </p>

            <div className="live-project-tech">
              <span>PYTHON</span>
              <span>FLASK</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
              <span>WHATSAPP</span>
            </div>
          </div>
        </motion.div>


        {/* SCREENSHOT SHOWCASE */}

        <div className="live-project-showcase">

          {/* Main Home Page */}

          <motion.div
            className="live-image-main"
            initial={{
              opacity: 0,
              x: -80,
              rotate: -2,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
            }}
          >
            <div className="live-image-label">
              <span>01</span>
              HOME PAGE
            </div>

            <img
              src={homeImage}
              alt="Kumaran Home Service Home Page"
            />
          </motion.div>


          {/* Booking Page */}

          <motion.div
            className="live-image-booking"
            initial={{
              opacity: 0,
              x: 80,
              y: 80,
              rotate: 3,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -12,
            }}
          >
            <div className="live-image-label">
              <span>02</span>
              BOOKING PAGE
            </div>

            <img
              src={bookingImage}
              alt="Kumaran Home Service Booking Page"
            />
          </motion.div>

        </div>


        {/* BOTTOM ACTION */}

        <motion.div
          className="live-project-bottom"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
        >
          <div className="live-status">
            <span />
            LIVE & DEPLOYED
          </div>

          <a
            href="https://kumaran-home-service-live-1.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-project-button"
          >
            VIEW LIVE WEBSITE
            <span>↗</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default LiveProjects;