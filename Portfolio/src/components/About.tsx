import React from "react";
import { Code, Palette, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-indigo-50 to-transparent dark:from-gray-800 dark:to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-8"
            variants={itemVariants}
            whileInView={{ width: [0, 80] }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300"
            variants={itemVariants}
          >
            Get to know me, my background, and what drives me.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="space-y-6 text-gray-700 dark:text-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              I'm an introvert, but I see that as a strength because it helps me focus and work on projects independently. 
              I know programming languages like C, C++, Java, Python, and I like coding, debugging and coming up with creative solutions. And i'm a frontend developer.
            </motion.p>
            <motion.p variants={itemVariants}>
              Apart from programming, I am also proficient with Canva design and I have an excellent eye for creativity and aesthetics. 
              I am an independent worker. By this I mean I just work better when I can figure things out on my own without having to depend on others.
            </motion.p>
            <motion.p variants={itemVariants}>
              Currently, I am interning at <b>ShadowFox Virtual Internship Program</b> and have experience as a <b>Canva designer</b>.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.div 
              className="p-6 bg-indigo-50 dark:bg-gray-800 rounded-lg text-center"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-12 h-12 mx-auto bg-indigo-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Code className="text-indigo-600 dark:text-indigo-400" size={24} />
              </motion.div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Developer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Skilled in multiple programming languages</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-indigo-50 dark:bg-gray-800 rounded-lg text-center"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-12 h-12 mx-auto bg-indigo-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Palette className="text-indigo-600 dark:text-indigo-400" size={24} />
              </motion.div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Designer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Proficient with Canva and creative design</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-indigo-50 dark:bg-gray-800 rounded-lg text-center"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-12 h-12 mx-auto bg-indigo-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <UserCheck className="text-indigo-600 dark:text-indigo-400" size={24} />
              </motion.div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Independent</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Self-motivated problem solver</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;