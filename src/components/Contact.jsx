import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

// --- MAGNETIC COMPONENT FOR LINKS ---
const MagneticLink = ({ children, href }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
      target="_blank"
      rel="noreferrer"
      className="group relative flex items-center justify-between p-8 border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
    >
      {children}
    </motion.a>
  );
};

function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const contactLinks = [
    { label: "Email", val: "rahulkanyal838@gmail.com", href: "mailto:rahulkanyal838@gmail.com" },
    { label: "GitHub", val: "RahulKanyal05", href: "https://github.com/RahulKanyal05" },
    { label: "LinkedIn", val: "Rahul Kanyal", href: "https://linkedin.com/in/rahulkanyal" }, // Added for polish
    { label: "Phone", val: "+91 9045134621", href: "tel:+919045134621" },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] flex flex-col justify-center overflow-hidden"
    >
      {/* 1. BACKGROUND TEXT MARQUEE */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none opacity-[0.03] select-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[20vw] font-black whitespace-nowrap uppercase italic"
        >
          LET'S TALK • LET'S TALK • LET'S TALK • LET'S TALK • 
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 2. HEADER SIDE */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl font-black text-white leading-tight uppercase italic tracking-tighter">
                Ready to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Elevate?
                </span>
              </h2>
              <p className="mt-8 text-gray-400 text-lg max-w-sm leading-relaxed">
                Currently open for freelance opportunities and full-time roles in <span className="text-white">Product Engineering.</span>
              </p>
              
              <div className="mt-12">
                <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-2">// Current Location</div>
                <div className="text-white text-xl">Uttarakhand, India</div>
              </div>
            </motion.div>
          </div>

          {/* 3. INTERACTIVE LINK LIST */}
          <div className="lg:col-span-7 border-t border-white/10 lg:border-t-0">
            {contactLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                <MagneticLink href={link.href}>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-tighter mb-1">{link.label}</span>
                    <span className="text-xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {link.val}
                    </span>
                  </div>
                  <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300">
                    <span className="text-white group-hover:text-black transition-colors">↗</span>
                  </div>
                </MagneticLink>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. FOOTER CREDITS */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-mono tracking-widest uppercase"
        >
          <div>© 2026 RAHUL KANYAL — ALL RIGHTS RESERVED</div>
          <div>BUILT WITH REACT, NODE & PASSION FOR CODE</div>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-white">Back to Top</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;