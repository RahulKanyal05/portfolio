import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div style={{ y, opacity }} className="max-w-5xl mx-auto z-10">
        {/* Name with subtle glow */}
        <div className="relative mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl font-black relative"
          >
            <span className="absolute inset-0 text-cyan-500/20 blur-xl">
              Rahul Kanyal
            </span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative text-gray-200"
            >
              Rahul Kanyal
            </motion.span>
          </motion.h1>
        </div>

        {/* Professional subtitle with typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <motion.p 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
            className="text-2xl md:text-3xl font-mono text-gray-400 overflow-hidden whitespace-nowrap"
          >
            <span className="text-cyan-400">&gt;</span> Crafting seamless user experiences
          </motion.p>
        </motion.div>

        {/* Skill tags with stagger */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 1.2
              }
            }
          }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {["React", "TypeScript", "Tailwind", "Framer Motion", "Next.js"].map((skill, i) => (
            <motion.span
              key={skill}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
              className="px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-full text-sm text-cyan-400 backdrop-blur-sm cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA buttons with better interactions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 overflow-hidden rounded-lg font-semibold"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform group-hover:scale-105" />
            <span className="relative text-black flex items-center gap-2">
              Resume
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          <motion.button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 relative group overflow-hidden rounded-lg font-semibold"
          >
            <span className="absolute inset-0 border-2 border-cyan-500 rounded-lg" />
            <span className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative text-cyan-400 group-hover:text-black transition-colors duration-300">
              View Work
            </span>
          </motion.button>
        </motion.div>

        {/* Mouse scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;