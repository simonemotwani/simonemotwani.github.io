// src/components/AboutSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  // const skills = [
  //   'React', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 
  //   'MongoDB', 'PostgreSQL', 'Git', 'CSS/SCSS', 'HTML5',
  //   'Express.js', 'REST APIs', 'Responsive Design'
  // ];

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

  return (
    <motion.section 
      className="section about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: '1400px', // Increased from 1100px
        margin: '0 auto',
        textAlign: 'left',
        padding: '2rem' // Add some padding
      }}
    >
      <div style={{
        display: 'flex',
        gap: '6rem', // Increased gap
        alignItems: 'flex-start'
      }}>
        {/* Text content - takes most of the space */}
        <div style={{ flex: '2' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: '5rem', // Increased from 3rem
              background: 'linear-gradient(45deg, #e056fd, #f39c12)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '3rem', // Increased spacing
              textAlign: 'center'
            }}
          >
            About Me
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '2rem', // Increased from 1.2rem
              color: '#f8f8ff',
              lineHeight: '2', // Increased line height
              marginBottom: '2.5rem', // Increased spacing
              textShadow: '0 0 5px rgba(255, 255, 255, 0.2)'
            }}
          >
            I'm a third-year computer science student with a strong interest in networking (the computer science kind, not people - they're terrifying). 
            I'm also passionate about systems programming and web development. Check out my expereince for details!
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: '2rem', // Increased from 1.2rem
              color: '#f8f8ff',
              lineHeight: '2', // Increased line height
              marginBottom: '4rem', // Increased spacing
              textShadow: '0 0 5px rgba(255, 255, 255, 0.2)'
            }}
          >
            That covers the school and work life. Outside of that, I'm pretty adventurous and love water activities like jet skiing and parasailing. 
            Fun fact: I don't actually know how to swim, so I just hope my life jacket does its job. 
            I also go hiking sometimes, mostly because it's free and I've already spent my money on water activities.
          </motion.p>

          
        </div>

        {/* Photo - separate column on the right */}
        <motion.div 
          className="profile-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            flex: '0 0 300px', // Increased from 400px
            alignSelf: 'flex-start',
            marginLeft: '2rem'
          }}
        >
          {/* <div 
            className="profile-placeholder"
            style={{
              width: '400px', // Increased from 400px
              height: '400px', // Increased from 400px
              borderRadius: '50%',
              background: 'rgba(100, 255, 218, 0.1)',
              border: '2px dashed #64ffda',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64ffda',
              fontWeight: 'bold',
              fontSize: '1.2rem' // Increased font size
            }}
          >
            <span>Your Photo Here</span>
          </div> */}
          {/* Uncomment when you have a real image */}
          
          <img 
            src="/images/photo.jpg" 
            alt="Simone is standing near a lake in black t-shirt and white joggers" 
            style={{
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #64ffda',
              boxShadow: '0 0 30px rgba(100, 255, 218, 0.3)'
            }}
          />
         
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;