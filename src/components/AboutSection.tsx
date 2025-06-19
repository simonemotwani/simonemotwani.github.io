// src/components/AboutSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 
    'MongoDB', 'PostgreSQL', 'Git', 'CSS/SCSS', 'HTML5',
    'Express.js', 'REST APIs', 'Responsive Design'
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <motion.section 
      className="section about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-content">
        <motion.div className="about-text">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate Computer Science student with a love for creating innovative web applications. 
            My journey in tech started with curiosity about how websites work and has evolved into a 
            dedication to building meaningful digital experiences.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I enjoy solving complex problems through code and am always excited to learn new technologies. 
            When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source 
            projects, or working on personal projects that challenge my skills.
          </motion.p>
          
          <motion.div 
            className="skills-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3>Technical Skills</h3>
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(100, 255, 218, 0.3)"
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="profile-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Replace this placeholder with your actual image */}
          <div className="profile-placeholder">
            <span>Your Photo Here</span>
          </div>
          {/* Uncomment and use this when you have a real image */}
          {/* 
          <img 
            src="/path-to-your-image.jpg" 
            alt="Simone Motwani - Profile" 
            className="profile-image"
          />
          */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;