import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 60,
  duration = 0.8,
}) {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      });
    } else {
      controls.start({
        opacity: 0,
        y,
        filter: "blur(8px)",
        transition: {
          duration: 0.45,
          ease: [0.4, 0, 1, 1],
        },
      });
    }
  }, [inView, controls, delay, y, duration]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y,
        filter: "blur(8px)",
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;