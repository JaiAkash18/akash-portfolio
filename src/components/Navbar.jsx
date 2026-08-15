import { motion } from "framer-motion";

const navItems = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "EXPERIENCE",
    href: "#internship",
  },
  {
    label: "TRAINING",
    href: "#training",
  },
  {
    label: "SKILLS",
    href: "#skills",
  },
  {
    label: "PROJECTS",
    href: "#projects",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];

function Navbar() {
  return (
    <motion.header
      className="navbar-wrapper"
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      <nav className="navbar">

        {/* LOGO */}

        <a
          href="#home"
          className="navbar-logo"
        >
          <span>JAI</span>
          <strong>AKASH</strong>
        </a>


        {/* LINKS */}

        <div className="navbar-links">

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar-link"
            >
              {item.label}
            </a>
          ))}

        </div>


        {/* CTA */}

        <a
          href="#contact"
          className="navbar-cta"
        >
          LET'S TALK

          <span>↗</span>
        </a>

      </nav>

    </motion.header>
  );
}

export default Navbar;