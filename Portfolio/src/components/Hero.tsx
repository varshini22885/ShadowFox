import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const floatingElements = Array.from({ length: 6 }, (_, i) => i);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-200 to-blue-200 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles */}
        {floatingElements.map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10 relative">
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-middle"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center justify-center lg:justify-center gap-2 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-indigo-600 dark:text-indigo-400" size={24} />
            </motion.div>
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">Welcome to my portfolio</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span 
              className="block text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hi, I'm{" "}
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400"
              initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(99, 102, 241, 0.5)"
              }}
            >
              Sri Varshini
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:justify-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            An independent and creative{" "}
            <motion.span 
              className="font-semibold text-indigo-600 dark:text-indigo-400"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              B.Tech student
            </motion.span>{" "}
            skilled in programming, design, and artistic crafts.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-middle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.a
              href="#portfolio"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">View Portfolio</span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 rounded-xl border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 font-semibold transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-indigo-600 dark:bg-indigo-400"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Contact Me</span>
            </motion.a>
          </motion.div>

          {/* Social proof indicators */}
          <motion.div 
            className="flex items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span></span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <span></span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Animated rings around profile */}
            <motion.div 
              className="absolute inset-0 w-80 h-80 md:w-96 md:h-96"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-4 border-2 border-indigo-200 dark:border-indigo-800 rounded-full opacity-30" />
              <div className="absolute inset-8 border-2 border-purple-200 dark:border-purple-800 rounded-full opacity-40" />
              <div className="absolute inset-12 border-2 border-emerald-200 dark:border-emerald-800 rounded-full opacity-30" />
            </motion.div>

            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-emerald-600/20 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 0, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-emerald-600 rounded-full p-1"
                animate={{ rotate: [0, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full p-2">
                  <motion.div 
                    className="relative w-full h-full overflow-hidden rounded-full shadow-2xl"
                    whileHover={{ 
                      boxShadow: "0 25px 50px rgba(99, 102, 241, 0.3)"
                    }}
                  >
                    <motion.img
                      src="https://i.postimg.cc/XqLX1d19/my-profile-image.jpg"
                      alt="Geddada Sri Varshini"
                      className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Overlay gradient on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating skill badges */}
            <motion.div 
              className="absolute -top-4 -right-4 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-indigo-600 dark:text-indigo-400"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Frontend Dev
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-purple-600 dark:text-purple-400"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              Creative Designer
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group"
        aria-label="Scroll down"
        animate={{ y: [0, 0, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div 
          className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-shadow duration-300"
          whileHover={{ 
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            y: -2
          }}
        >
          <ArrowDown className="text-indigo-600 dark:text-indigo-400" size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;