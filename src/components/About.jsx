import { motion } from "framer-motion";

const strengths = [
  "Problem Solving",
  "Analytical Thinking",
  "Communication",
  "Teamwork",
  "Quick Learning",
  "UI/UX",
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030712] px-6 py-32 sm:px-10 lg:px-16 lg:py-40"
    >
      {/* Subtle glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cyan-500/[0.05] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-sm font-semibold tracking-[0.4em] text-cyan-400">
              01
            </span>

            <span className="h-px w-10 bg-cyan-400/40" />

            <span className="text-sm uppercase tracking-[0.3em] text-gray-500">
              About
            </span>
          </div>

          <h2 className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
            Building with{" "}
            <span className="text-gray-500">
              curiosity, logic
            </span>{" "}
            <span className="text-gray-500">& creativity.</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="mt-20 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">

          {/* About card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10 lg:p-12"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600">
                A little about me
              </p>

              <span className="text-xl text-cyan-400">✦</span>
            </div>

            <p className="mt-10 max-w-3xl text-xl leading-9 text-gray-200 sm:text-2xl">
              I'm a B.Tech Information Technology student focused on building
              practical digital experiences through software development and
              thoughtful design.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-gray-500">
              I enjoy turning ideas into usable products — from responsive web
              applications and real-world service platforms to intelligent
              systems that solve practical problems.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-500">
              My approach combines analytical thinking, problem solving,
              communication and continuous learning with a strong interest in
              both development and UI/UX design.
            </p>

            {/* Strengths */}
            <div className="mt-10 border-t border-white/[0.07] pt-8">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gray-600">
                Strengths
              </p>

              <div className="flex flex-wrap gap-2">
                {strengths.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-sm text-gray-400 transition-colors duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
              Education
            </p>

            {/* College */}
            <div className="mt-12">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-cyan-400">
                  2022 — 2026
                </span>

                <span className="text-xs text-gray-600">
                  01
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold leading-snug text-white">
                B.Tech Information Technology
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Agni College of Technology
              </p>

              <div className="mt-6 flex items-end gap-3">
                <span className="text-4xl font-bold tracking-tight text-white">
                  79%
                </span>

                <span className="pb-1 text-xs uppercase tracking-wider text-gray-600">
                  Academic Score
                </span>
              </div>
            </div>

            <div className="my-10 h-px bg-white/[0.08]" />

            {/* School */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  2021 — 2022
                </span>

                <span className="text-xs text-gray-600">
                  02
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-snug text-white">
                Higher Secondary School
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                St. Joseph's Higher Secondary School
              </p>

              <p className="mt-5 text-sm text-gray-400">
                HSC — <span className="text-white">67%</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex flex-col gap-4 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-7 text-gray-600">
            Currently exploring the intersection of{" "}
            <span className="text-gray-300">
              software engineering × product design.
            </span>
          </p>

          <span className="text-sm text-gray-700">
            Chennai, India · 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default About;