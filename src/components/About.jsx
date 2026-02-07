import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "JavaScript", category: "language" },
    { name: "React.js", category: "framework" },
    { name: "Tailwind CSS", category: "styling" },
    { name: "Node.js", category: "backend" },
    { name: "TypeScript", category: "language" },
    { name: "Python", category: "language" },
    { name: "SQL", category: "database" },
    { name: "Git & GitHub", category: "tools" },
    { name: "REST APIs", category: "backend" },
    { name: "Responsive Design", category: "frontend" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-200 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                A developer from Uttarakhand, India, specializing in{" "}
                <span className="text-cyan-400 font-semibold">JavaScript</span> and{" "}
                <span className="text-cyan-400 font-semibold">React</span>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I've built production-ready applications including an AI Interview Simulator
                and a PDF Chat Application, focusing on clean architecture and intuitive UX.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Driven by curiosity and a commitment to continuous learning, I solve
                complex problems through elegant, maintainable code.
              </p>
            </div>

            {/* Stats or Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
                <div className="text-sm text-gray-400">Years Coding</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
                <div className="text-sm text-gray-400">Live Appications</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Learning Mode</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-200 text-center">
            Technical Stack
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-3 justify-center"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <span className="relative block px-5 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 font-medium group-hover:bg-gray-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300 cursor-default">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;