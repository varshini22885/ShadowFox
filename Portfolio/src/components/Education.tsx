import React from "react";
import { EDUCATION } from "../constants";
import { GraduationCap, Calendar, Percent } from "lucide-react";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="education"
      className="py-20 bg-indigo-50 dark:bg-gray-800 relative"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <motion.div 
            className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            My academic journey and qualifications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-indigo-200 dark:border-gray-700">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  className="mb-12 last:mb-0 relative"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="absolute -left-[41px] w-20 h-20 bg-white dark:bg-gray-900 rounded-full border-4 border-indigo-200 dark:border-gray-700 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap size={32} className="text-indigo-600 dark:text-indigo-400" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="ml-8 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {edu.institution}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      {edu.percentage && (
                        <motion.div 
                          className="flex items-center text-gray-700 dark:text-gray-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Percent size={16} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                          <span>{edu.percentage}</span>
                        </motion.div>
                      )}
                      
                      <motion.div 
                        className="flex items-center text-gray-700 dark:text-gray-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar size={16} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                        <span>{edu.year}</span>
                      </motion.div>
                    </div>
                    
                    {edu.description && (
                      <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;