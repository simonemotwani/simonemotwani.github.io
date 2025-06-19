// src/components/HomeSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const HomeSection: React.FC = () => {
  return (
    <motion.section 
      className="section home-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          style={{ fontSize: '3rem', marginBottom: '4rem',  marginTop: '-7rem', whiteSpace: 'nowrap' }}
        >
          Hey! I am glad to have to here
        </motion.h2>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          Welcome to my portfolio

        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
          style={{ fontSize: '2rem',marginBottom: '4rem', lineHeight: '1.8' }}
        >
          My name is Simone and I am a computer science student at sfu and let me show what I have been up-to recently
        </motion.p>
        
        <motion.a
          href="#projects"
          className="cta-button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05,
            y: -3
          }}
          whileTap={{ scale: 0.95 }}
          
          style={{ 
            padding: '1.5rem 3rem', 
            fontSize: '2rem',
            borderRadius: '40px'
          }}
        >
          Explore my work
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HomeSection;