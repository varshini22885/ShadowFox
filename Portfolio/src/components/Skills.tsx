import React, { useState } from "react";
import { SKILLS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Palette, Users, Star } from "lucide-react";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Skills", icon: Star },
    { id: "technical", label: "Technical", icon: Code },
    { id: "creative", label: "Creative", icon: Palette },
    { id: "soft", label: "Soft Skills", icon: Users },
  ];

  const filteredSkills = activeCategory === "all" 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateY: 15,
      transition: {
        duration: 0.3
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${(level / 5) * 100}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "technical":
        return "from-blue-500 to-indigo-600";
      case "creative":
        return "from-pink-500 to-purple-600";
      case "soft":
        return "from-green-500 to-emerald-600";
      default:
        return "from-indigo-500 to-purple-600";
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-indigo-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-indigo-200 dark:bg-indigo-900/30 rounded-full filter blur-xl opacity-60"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 dark:bg-purple-900/30 rounded-full filter blur-xl opacity-60"
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            My Skills
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            My professional abilities and expertise across different domains.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex flex-wrap justify-center bg-white dark:bg-gray-900 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm md:text-base rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={activeCategory === category.id ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent size={18} />
                  </motion.div>
                  {category.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${skill.name}`}
                className="group relative p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                layout
              >
                {/* Animated background gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)}`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {skill.name}
                  </motion.h3>
                  
                  <div className="relative">
                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-3">
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full relative`}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={skillBarVariants}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: index * 0.2 
                          }}
                        />
                      </motion.div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Beginner</span>
                      <motion.div 
                        className="flex gap-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < skill.level 
                                ? `bg-gradient-to-r ${getCategoryColor(skill.category)}` 
                                : "bg-gray-300 dark:bg-gray-600"
                            }`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: 1.8 + i * 0.1,
                              type: "spring",
                              stiffness: 500,
                              damping: 30
                            }}
                            whileHover={{ scale: 1.5 }}
                          />
                        ))}
                      </motion.div>
                      <span className="text-gray-500 dark:text-gray-400">Expert</span>
                    </div>
                  </div>
                </div>

                {/* Hover effect particles */}
                <motion.div 
                  className="absolute top-2 right-2 w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Floating skill count indicator */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              key={filteredSkills.length}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredSkills.length}
            </motion.span>
            <span className="text-gray-600 dark:text-gray-400">
              {activeCategory === "all" ? "Total Skills" : `${categories.find(c => c.id === activeCategory)?.label} Skills`}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;