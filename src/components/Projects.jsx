import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "AI Interview Simulator",
    description:
      "AI-powered interview platform that analyzes resumes, generates role-specific questions, and provides real-time feedback to improve interview performance.",
    tech: ["Next.js", "JavaScript", "AI APIs", "Tailwind", "firebase", "Rozarpay API"],
    link: "https://ai-interviewer-ruby.vercel.app/",
    github: null,
  },
  {
    title: "PDF Chat Application",
    description:
      "Intelligent document analysis system enabling users to upload PDFs and interact through AI-powered summarization and contextual Q&A.",
    tech: ["Streamlit", "LangChain", "Google AI", "Python"],
    link: null,
    github: "https://github.com/RahulKanyal05/ChatWithMulktiplePDF",
  },
  {
    title: "Personal Portfolio",
    description:
      "Modern, responsive portfolio website showcasing projects and technical expertise with smooth animations and optimal performance.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://rahulkanyal.dev",
    github: "https://github.com/RahulKanyal05",
  },
];

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-200 mb-4">
            Featured Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world applications solving real problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              {/* Card glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />

              {/* Card content */}
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full flex flex-col group-hover:border-cyan-500/50 transition-all duration-300">
                {/* Project number badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800/60 border border-gray-700/50 rounded-md text-cyan-400 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold rounded-lg text-center text-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                    >
                      Live Demo →
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`${
                        project.link ? "w-12" : "flex-1"
                      } px-4 py-2.5 bg-gray-800/60 border border-gray-700 text-gray-300 font-semibold rounded-lg text-center text-sm hover:bg-gray-700/60 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center`}
                    >
                      {project.link ? (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      ) : (
                        "View Code →"
                      )}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Want to see more?</p>
          <motion.a
            href="https://github.com/RahulKanyal05"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border-2 border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
          >
            View All Projects on GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;