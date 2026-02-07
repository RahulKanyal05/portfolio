import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "AI Interview Simulator",
    description:
      "Built an AI-based interview platform that analyzes resumes, generates role-specific questions, and provides real-time feedback.",
    tech: ["React", "JavaScript", "AI APIs"],
    result: "Improved interview practice efficiency for users.",
    link: "https://ai-interviewer-ruby.vercel.app/",
  },
  {
    title: "PDF Chat Application",
    description:
      "Developed a system that allows users to upload PDFs and interact with them using AI-powered summarization and Q&A.",
    tech: ["Streamlit", "LangChain", "Google AI"],
    result: "Reduced time required to extract key information from documents.",
    link: "https://github.com/RahulKanyal05/ChatWithMulktiplePDF",
  },
  {
    title: "Personal Portfolio",
    description:
      "Designed and deployed a responsive portfolio website to showcase projects and skills.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    result: "Created a professional online presence for job applications.",
    link: "https://github.com/RahulKanyal05",
  },
];

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2 font-semibold">
                  TECH STACK
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4 pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-500 mb-1 font-semibold">
                  RESULT
                </p>
                <p className="text-gray-300 text-sm">{project.result}</p>
              </div>


              <a href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto px-6 py-2 bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500 text-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300 text-center"
              >
                View →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;