import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "AI Interview Simulator",
    description: "Analyzing resumes and generating role-specific questions with real-time feedback. Built for the modern job market.",
    tech: ["Next.js", "AI APIs", "Firebase", "Razorpay"],
    link: "https://ai-interviewer-ruby.vercel.app/",
    github: null,
  },
  {
    title: "PDF Chat Application",
    description: "Intelligent document analysis using LangChain. Upload and interact with multiple PDFs through contextual Q&A.",
    tech: ["Python", "LangChain", "Streamlit", "Google AI"],
    link: null,
    github: "https://github.com/RahulKanyal05/ChatWithMulktiplePDF",
  },
  {
    title: "Medical Image Analyzer",
    description: "AI-based system for analyzing medical images to assist in early detection and visualization of abnormalities.",
    tech: ["Python", "Deep Learning", "OpenCV", "TensorFlow"],
    link: null,
    github: "https://github.com/RahulKanyal05/AI-Assisted-Medical-Image-Analyzer",
  },
  {
    title: "YouTube Video Transcriber",
    description: "Automated tool to extract, transcribe, and summarize YouTube videos using speech-to-text and NLP models.",
    tech: ["Python", "APIs", "NLP", "Speech Recognition"],
    link: null,
    github: "https://github.com/RahulKanyal05/youtube-transcriber",
  },
  {
    title: "AI Research Internship Project",
    description: "Worked on generative AI and multimodal systems during internship at Insignia Consultancy Solution.",
    tech: ["Python", "AI Models", "Data Processing", "Wav2Lip"],
    link: null,
    github: null,
  },
  {
    title: "Personal Portfolio",
    description: "The very site you're looking at. High-performance animations and 3D interactions built with Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://portfolio-alpha-seven-b97eiupdnx.vercel.app/",
    github: null,
  },
];

// --- 3D TILT CARD COMPONENT ---
const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative h-[450px] w-full rounded-3xl bg-white/[0.02] border border-white/10 p-8 cursor-grab active:cursor-grabbing group overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/[0.03] select-none group-hover:text-cyan-500/10 transition-colors">
        0{index + 1}
      </div>

      <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="h-full flex flex-col">
        <h3 className="text-3xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tighter">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-500">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4">
          {project.link && (
            <a href={project.link} target="_blank" className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-cyan-400 transition-colors uppercase">
              Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" className="px-6 py-2 border border-white/20 text-white text-xs font-bold rounded-full hover:bg-white/10 transition-colors uppercase">
              Source
            </a>
          )}
        </div>
      </div>

      {/* Interactive Flare */}
      <motion.div
        className="absolute inset-0 z-[-1] bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </motion.div>
  );
};

function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <section id="projects" ref={containerRef} className="relative min-h-screen bg-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER SECTION */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-cyan-500" />
            <span className="text-cyan-500 font-mono text-xs uppercase tracking-[0.4em]">Portfolio</span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic">
            Featured <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
              Work.
            </span>
          </h2>
        </div>

        {/* 3D GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* FOOTER CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mt-24 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <p className="text-gray-500 font-mono text-sm tracking-tighter uppercase">
            // More experiments available on secondary archives
          </p>
          <a href="https://github.com/RahulKanyal05" className="text-white font-bold group flex items-center gap-2">
            GITHUB REPOSITORY <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;