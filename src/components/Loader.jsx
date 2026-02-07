import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loader({ finishLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Non-linear counter for realism
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 500); // Small buffer before exit
          return 100;
        }
        // Random increment to make it feel like "loading assets"
        const diff = Math.random() * 15;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050505] text-white"
    >
      <div className="relative overflow-hidden p-10">
        {/* BIG PERCENTAGE COUNTER */}
        <motion.h1 
          className="text-[15vw] md:text-[10vw] font-black italic tracking-tighter leading-none"
        >
          {Math.floor(progress)}%
        </motion.h1>

        {/* SUBTITLE REVEAL */}
        <div className="flex items-center gap-4 mt-4">
          <div className="h-[1px] w-12 bg-cyan-500" />
          <p className="text-xs font-mono uppercase tracking-[0.5em] text-gray-500">
            {progress < 100 ? "Syncing Architecture..." : "System Ready"}
          </p>
        </div>
      </div>

      {/* DECORATIVE GRID FOR THE LOADER */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* BAR PROGRESS (Bottom screen) */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        className="absolute bottom-0 left-0 h-1 bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
      />
    </motion.div>
  );
}

export default Loader;