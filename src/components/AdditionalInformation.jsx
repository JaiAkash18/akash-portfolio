import { motion } from "framer-motion";

const informationGroups = [
  {
    number: "01",
    title: "Certification",
    items: [
      "NPTEL - The Joy Of Computing In Python",
      "NPTEL - Soft Skills",
      "Infosys Spring Board",
    ],
  },
  {
    number: "02",
    title: "Languages",
    items: ["English", "Tamil"],
  },
  {
    number: "03",
    title: "Soft Skills",
    items: [
      "Communication Skills",
      "Problem Solving",
      "Presentation Skills",
      "Teamwork",
      "Time Management",
      "Quantative Aptitude",
      "Quick Learning",
      "Analytical Thinking",
      "Logical Reasoning",
    ],
  },
  {
    number: "04",
    title: "Achievements",
    items: [
      "Participated in the IDE Bootcamp, Trichy to enhance startup development and innovation skills",
      "Participated and secured 5th Place in the project expo (UXPLORERS)",
      "Participated in the Inter Business competition",
      "Published a research paper on an Machine Learning and AI-Based Hazardous Agrochemicals Scent Detection System",
    ],
  },
];

function AdditionalInformation() {
  return (
    <section
      id="additional-information"
      className="additional-section"
    >
      <div className="additional-grid" />

      <div className="additional-container">

        {/* HEADER */}

        <motion.div
          className="additional-header"
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="additional-eyebrow">
            <span>06</span>
            <i />
            ADDITIONAL INFORMATION
          </div>

          <h2>
            More
            <br />
            <span>about me.</span>
          </h2>
        </motion.div>


        {/* CARDS */}

        <div className="additional-grid-cards">

          {informationGroups.map((group, index) => (
            <motion.article
              key={group.number}
              className="additional-card"
              initial={{
                opacity: 0,
                y: 70,
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
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
              }}
            >
              <div className="additional-card-top">
                <span>↗{group.number}</span>
                <span>{group.title}</span>
              </div>

              <div className="additional-items">
                {group.items.map((item) => (
                  <motion.div
                    key={item}
                    className="additional-item"
                    whileHover={{
                      x: 6,
                    }}
                  >
                    <span className="additional-dot" />
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="additional-card-line" />
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default AdditionalInformation;