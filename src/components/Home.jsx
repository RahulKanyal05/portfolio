import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const name = "Rahul Kanyal";

// Utility for Magnetic effect
const MagneticButton = ({ children, className }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.4);
    y.set(middleY * 0.4);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Spotlight effect for the grid
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.15), transparent 80%)`
  );

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden px-4">
      
      {/* 1. DYNAMIC GRID SYSTEM */}
      <motion.div 
        style={{ background }}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 text-center">
        
        {/* 2. CHARACTER-LEVEL ANIMATION */}
        <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold tracking-tight text-white flex justify-center overflow-hidden">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 100, rotate: 25, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.04,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className={`inline-block whitespace-pre ${char === " " ? "w-[0.3em]" : ""}`}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* 3. FLOATING SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 text-gray-500 font-mono text-sm md:text-base uppercase tracking-[0.3em]"
        >
          Creative Engineer / <span className="text-cyan-500">System Architect</span>
        </motion.p>

        {/* 4. MAGNETIC ACTIONS */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
          <MagneticButton className="relative group cursor-pointer">
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden block">
              <motion.span className="relative z-10">Start Project</motion.span>
            </span>
          </MagneticButton>

          <MagneticButton className="group cursor-pointer">
            <span className="text-gray-400 group-hover:text-white transition-colors duration-300 flex items-center gap-2 font-medium">
              Check Archives
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
          </MagneticButton>
        </div>

        {/* 5. INTERACTIVE TECH STACK */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 flex gap-6 justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          {["React", "Framer", "GLSL", "Node"].map((tech) => (
            <span key={tech} className="text-[10px] font-black tracking-widest border-b border-white/20 pb-1 italic">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* REFINED DECORATION: SVG Path animation */}
      <svg className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none" viewBox="0 0 1440 320">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          fill="none"
          stroke="url(#grad)"
          strokeWidth="2"
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}

export default Home;