import { motion } from "framer-motion";

const items = [
  "FULL STACK DEVELOPMENT",
  "UI/UX DESIGN",
  "WEB DEVELOPMENT",
  "MOBILE APP DEVELOPMENT",
  "FRONTEND DEVELOPMENT",
  "SPRING BOOT",
  "WEB TECHNOLOGIES",
];

function Marquee() {
  return (
    <section className="marquee-section">
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div className="marquee-item" key={`${item}-${index}`}>
            <span>{item}</span>
            <b>●</b>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Marquee;