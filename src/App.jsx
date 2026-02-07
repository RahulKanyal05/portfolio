import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


// Import all your components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
// import CustomCursor from "./components/CustomCursor";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // High-end easing curve
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Smooth scroll on touch devices can feel laggy, better to keep it native
      touchMultiplier: 2,
      infinite: false,
    });

    // 2. Integration with RequestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 3. Cleanup
    return () => {
      lenis.destroy();
    };
  }, [isLoading]); // Re-init after loader disappears

  return (
    <div className="bg-[#050505] text-white antialiased">
      {/* <CustomCursor /> */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" finishLoading={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
            
            {/* Custom Footer */}
            <footer className="py-10 text-center text-gray-600 text-[10px] tracking-widest uppercase border-t border-white/5">
               Designed & Engineered by Rahul Kanyal © 2026
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;