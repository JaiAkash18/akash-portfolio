import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 2,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 1,
    suffix: "",
    label: "Internship",
  },
  {
    value: 2,
    suffix: "+",
    label: "Certifications",
  },
  {
    value: 2,
    suffix: "+",
    label: "Website Built",
  },
  {
    value: 2,
    suffix: "",
    label: "Patent Published",
  },
];

function Counter({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let startTime = null;
    const duration = value >= 1000 ? 1500 : 1200;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out
      const eased =
        1 - Math.pow(1 - progress, 4);

      setCount(
        Math.floor(eased * value)
      );

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [start, value]);

  return (
    <>
      {count}
      <span>{suffix}</span>
    </>
  );
}

function TrainingStats() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.35,
  });

  return (
    <section
      ref={sectionRef}
      className="training-stats"
    >
      <div className="training-stats-grid">

        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="training-stat"

            initial={{
              opacity: 0,
              y: 70,
              scale: 0.94,
              filter: "blur(8px)",
            }}

            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: 70,
                    scale: 0.94,
                    filter: "blur(8px)",
                  }
            }

            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* NUMBER */}
            <div className="training-stat-number">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                start={isInView}
              />
            </div>

            {/* LABEL */}
            <div className="training-stat-label">
              {stat.label}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default TrainingStats;