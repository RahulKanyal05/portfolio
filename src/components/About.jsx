import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Git & GitHub",
    "REST APIs",
    "Responsive Design",
    "Problem Solving",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-12"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am a <span className="text-cyan-400 font-semibold">self-taught developer</span> from Uttarakhand, India, with strong skills in JavaScript and React. 
            I have built projects including an AI Interview Simulator and a PDF Chat Application.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I focus on writing clean code, learning modern tools, and improving problem-solving ability. 
            I'm passionate about creating user-friendly web experiences that solve real problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-200">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-cyan-400 font-medium hover:bg-gray-700/80 hover:border-cyan-500 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;