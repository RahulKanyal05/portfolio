import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth Skew Effect on Scroll
  const scrollSkew = useTransform(scrollYProgress, [0, 0.5, 1], [0, -2, 0]);
  const smoothSkew = useSpring(scrollSkew, { stiffness: 100, damping: 30 });

  const skills = [
    "JavaScript", "React.js", "Tailwind", "Node.js", 
    "TypeScript", "Python", "SQL", "Framer Motion"
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] py-32 px-6 overflow-hidden"
    >
      <motion.div 
        style={{ skewY: smoothSkew }}
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        
        {/* 1. THE HERO BIO: Masked Text Reveal */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <h2 className="text-cyan-500 font-mono tracking-[0.4em] uppercase text-sm mb-4">
              // Discover
            </h2>
            <div className="overflow-hidden">
              <motion.h3 
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black text-white leading-[0.9]"
              >
                CODE IS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                  MY CANVAS.
                </span>
              </motion.h3>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl text-gray-400 leading-relaxed max-w-xl border-l-2 border-cyan-500/30 pl-6"
          >
            I'm Rahul Kanyal, an engineer from the hills of Uttarakhand who builds 
            high-performance interfaces. I don't just write code; I orchestrate 
            digital experiences that feel alive.
          </motion.p>
        </div>

        {/* 2. THE INTERACTIVE STATS: Floating Bento */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {[
            { label: "Projects", val: "10+", delay: 0.4 },
            { label: "Commits", val: "500+", delay: 0.5 },
            { label: "Exp.", val: "10y", delay: 0.6 },
            { label: "Coffee", val: "∞", delay: 0.7 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: stat.delay, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, backgroundColor: "rgba(34, 211, 238, 0.1)" }}
              className="aspect-square bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col items-center justify-center group cursor-pointer transition-colors"
            >
              <span className="text-3xl md:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">
                {stat.val}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 3. THE TECH ECOSYSTEM: Drifting Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="lg:col-span-12 mt-12 p-10 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[3rem] relative overflow-hidden"
        >
          <h4 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
            The Arsenal <div className="h-[1px] w-20 bg-cyan-500/50" />
          </h4>

          <div className="flex flex-wrap gap-4 relative z-10">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3 + i, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.2, color: "#22d3ee", borderColor: "#22d3ee" }}
                className="px-8 py-3 border border-white/10 rounded-2xl bg-black text-gray-400 text-sm font-bold uppercase tracking-tighter cursor-crosshair transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>

          {/* Background Text Decor */}
          <div className="absolute -bottom-10 -right-10 text-[15rem] font-black text-white/[0.02] pointer-events-none select-none">
            SKILLS
          </div>
        </motion.div>
      </motion.div>

      {/* Side Decorative Progress Bar */}
      <motion.div 
        style={{ scaleY: scrollYProgress }}
        className="fixed right-4 top-1/4 w-[2px] h-1/2 bg-cyan-500 origin-top hidden md:block"
      />
    </section>
  );
}

export default About;