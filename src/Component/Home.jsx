import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center md:justify-start bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('../assets/Image/heroback.png')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="
          relative z-10 text-white 
          px-4 sm:px-8 md:px-16 lg:px-24 
          max-w-xl
          text-center md:text-left
        "
      >
        {/* Stagger Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {/* Name */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="
              mt-10
              text-3xl sm:text-4xl md:text-5xl lg:text-5xl 
              font-bold leading-tight
            "
          >
            I am <span className="text-blue-500">Elias Dugasa</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9 }}
            className="
              text-lg sm:text-xl md:text-2xl lg:text-3xl 
              font-semibold text-blue-400 
              mb-4 sm:mb-6 
              italic
            "
          >
            Frontend Website Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
            className="
              text-sm sm:text-base md:text-lg lg:text-xl 
              text-gray-200 leading-relaxed 
              max-w-lg
            "
          >
        Welcome to my portfolio! I create visually appealing and user-friendly websites that turn ideas into real digital experiences.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
