"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after a premium cinematic delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ocean-950 text-sand-100"
        >
          {/* Subtle floating gold gradients behind text */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sand-300/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-sunset-500/10 blur-3xl" />

          {/* Animated outline branding */}
          <div className="relative overflow-hidden flex flex-col items-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-2 tracking-[0.3em] font-light text-sand-300 text-xs sm:text-sm uppercase"
            >
              LAKESHIDE RESORT
            </motion.div>

            <h1 className="relative font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-[0.2em] uppercase select-none text-transparent stroke-text">
              KAMARIYA
              <style jsx>{`
                .stroke-text {
                  -webkit-text-stroke: 1px rgba(244, 239, 230, 0.4);
                }
              `}</style>
              {/* Gold fill animation overlay */}
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
                className="absolute left-0 top-0 text-sand-100 overflow-hidden whitespace-nowrap"
                style={{
                  WebkitTextStroke: "1px transparent",
                  textShadow: "0 0 30px rgba(244, 239, 230, 0.3)",
                }}
              >
                KAMARIYA
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
              className="w-24 h-[1px] bg-sunset-500 my-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="text-sand-200/80 font-light text-sm sm:text-base tracking-[0.1em]"
            >
              ALAKOL • AKSHI
            </motion.p>
          </div>

          {/* Minimal loading indicator at the bottom */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-ocean-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-sand-200 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
