import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-grid" />

      <div className="contact-glow" />

      <div className="contact-container">

        {/* HEADER */}

        <motion.div
          className="contact-header"
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
          <div className="contact-eyebrow">
            <span>07</span>
            <i />
            CONTACT
          </div>

          <h2>
            Let's build
            <br />
            <span>something.</span>
          </h2>

          <p>
            Have an opportunity, project, or idea?
            Let's connect and create something meaningful.
          </p>
        </motion.div>


        {/* CONTACT CONTENT */}

        <div className="contact-content">

          {/* EMAIL */}

          <motion.a
            href="mailto:akashjai852@gmail.com"
            className="contact-card"
            initial={{
              opacity: 0,
              y: 50,
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
              delay: 0.1,
            }}
          >
            <div>
              <small>EMAIL</small>
              <strong>
                akashjai852@gmail.com
              </strong>
            </div>

            <span>↗</span>
          </motion.a>


          {/* PHONE */}

          <motion.a
            href="tel:+918220500857"
            className="contact-card"
            initial={{
              opacity: 0,
              y: 50,
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
              delay: 0.2,
            }}
          >
            <div>
              <small>PHONE</small>
              <strong>
                +91 8220500857
              </strong>
            </div>

            <span>↗</span>
          </motion.a>


          {/* LINKEDIN */}

          <motion.a
            href="https://www.linkedin.com/in/jaiakashl"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            initial={{
              opacity: 0,
              y: 50,
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
              delay: 0.3,
            }}
          >
            <div>
              <small>LINKEDIN</small>
              <strong>
                /jaiakashl
              </strong>
            </div>

            <span>↗</span>
          </motion.a>


          {/* GITHUB */}

          <motion.a
            href="https://github.com/jaiakash18"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            initial={{
              opacity: 0,
              y: 50,
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
              delay: 0.4,
            }}
          >
            <div>
              <small>GITHUB</small>
              <strong>
                /jaiakash18
              </strong>
            </div>

            <span>↗</span>
          </motion.a>

        </div>


        {/* FOOTER */}

        <motion.div
          className="contact-footer"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <span>
            JAI AKASH
          </span>

          <div />

          <span>
            INFORMATION TECHNOLOGY · 2026
          </span>
        </motion.div>

      </div>

    </section>
  );
}
{/* LINKEDIN */}

<motion.a
  href="https://www.linkedin.com/in/jaiakashl/"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
  initial={{
    opacity: 0,
    y: 50,
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
    delay: 0.3,
  }}
>
  <div>
    <small>LINKEDIN</small>
    <strong>/jaiakashl</strong>
  </div>

  <span>↗</span>
</motion.a>


{/* GITHUB */}

<motion.a
  href="https://github.com/JaiAkash18"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
  initial={{
    opacity: 0,
    y: 50,
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
    delay: 0.4,
  }}
>
  <div>
    <small>GITHUB</small>
    <strong>/JaiAkash18</strong>
  </div>

  <span>↗</span>
</motion.a>

export default Contact;