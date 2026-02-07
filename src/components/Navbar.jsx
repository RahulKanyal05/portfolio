import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Work", id: "projects" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Basic logic to detect active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, i) => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActive(navItems[i].id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          flex items-center gap-2 p-2 rounded-full border transition-all duration-500
          ${scrolled 
            ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-transparent"}
        `}
      >
        {/* LOGO / INITIALS */}
        <motion.div
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.1 }}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-cyan-500 text-black font-black text-sm cursor-pointer ml-1 mr-4 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
        >
          RK
        </motion.div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-1 relative">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-300
                ${active === item.id ? "text-white" : "text-gray-500 hover:text-gray-200"}
              `}
            >
              <span className="relative z-10">{item.name}</span>
              
              {/* SLIDING HOVER BACKGROUND */}
              <AnimatePresence>
                {hovered === item.id && (
                  <motion.div
                    layoutId="nav-hover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-white/10 rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </AnimatePresence>

              {/* ACTIVE DOT */}
              {active === item.id && (
                <motion.div
                  layoutId="active-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* "HIRE ME" BUTTON - Extra Polish */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("contact")}
          className="ml-4 px-5 py-2 bg-white text-black text-[10px] font-black uppercase rounded-full tracking-tighter hover:bg-cyan-400 transition-colors hidden md:block"
        >
          Let's Talk
        </motion.button>
      </motion.nav>
    </div>
  );
}

export default Navbar;