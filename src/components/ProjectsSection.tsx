// src/components/ProjectsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface WorkExperience {
  title: string;
  company: string;
  description: string[];
}

interface Project {
  title: string;
  description: string;
  tech: string;
  github: string;
  demo: string;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const workExperiences: WorkExperience[] = [
    {
      title: "WEB DEVELOPER",
      company: "Canadian Undergraduate journal of cognitive science",
      description: [
        "• Developed and maintained official website using React, TypeScript, and Tailwind CSS",
        "• Migrated website from WordPress to modern React-based tech stack for improved performance and maintainability",
        "• Built reusable, accessible UI components and page routing system with React Router",
        "• Participated in weekly standups and sprint planning sessions with the editorial and web team",
        "• Managed version control and collaborative development workflows using Git and GitHub"
      ]
    }
    // Add more work experiences here
  ];

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, shopping cart functionality, and payment integration. Features include product catalog, user reviews, and admin dashboard.",
      tech: "React • Node.js • MongoDB • Stripe API",
      github: "https://github.com/simonemotwani/ecommerce-app",
      demo: "https://my-ecommerce-demo.netlify.app"
    },
    {
      title: "Weather Dashboard", 
      description: "A responsive weather application that provides real-time weather data and forecasts. Features location-based weather, interactive maps, and weather alerts.",
      tech: "React • OpenWeatherMap API • Chart.js",
      github: "https://github.com/simonemotwani/weather-dashboard",
      demo: "https://weather-dashboard-demo.netlify.app"
    },
    {
      title: "Task Management System",
      description: "A collaborative project management tool with real-time updates, task assignment, and progress tracking. Built with modern web technologies for optimal performance.",
      tech: "Python • Django • PostgreSQL • WebSocket",
      github: "https://github.com/simonemotwani/task-manager",
      demo: "https://task-manager-demo.herokuapp.com"
    }
  ];

  return (
    <motion.section 
      className="section projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: '1400px', // Increased from 1200px
        margin: '0 auto',
        padding: '3rem' // Increased padding
      }}
    >
      {/* Header with Download Resume button */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '4rem' // Increased spacing
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontSize: '4rem', // Increased from 3rem
            background: 'linear-gradient(45deg, #e056fd, #f39c12)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}
        >
          Experience
        </motion.h2>
        
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'linear-gradient(45deg, #9370DB, #DA70D6)',
            color: 'white',
            padding: '1.2rem 2rem', // Increased padding
            borderRadius: '30px', // Increased border radius
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.2rem', // Increased font size
            boxShadow: '0 6px 20px rgba(147, 112, 219, 0.4)'
          }}
        >
          Download Resume
        </motion.a>
      </div>

      {/* Work Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ marginBottom: '5rem' }} // Increased spacing
      >
        <h3 style={{
          color: '#e056fd',
          fontSize: '2.5rem', // Increased from 2rem
          marginBottom: '3rem', // Increased spacing
          textShadow: '0 0 10px rgba(224, 86, 253, 0.5)'
        }}>
          Work Experience
        </h3>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem' // Increased gap
        }}>
          {workExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
              style={{
                background: 'rgba(26, 11, 46, 0.8)',
                border: '2px solid rgba(224, 86, 253, 0.3)',
                borderRadius: '20px', // Increased border radius
                padding: '3rem', // Increased padding
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                background: 'rgba(224, 86, 253, 0.1)',
                padding: '1rem 1.5rem', // Increased padding
                borderRadius: '12px', // Increased border radius
                display: 'inline-block',
                marginBottom: '1.5rem' // Increased spacing
              }}>
                <h4 style={{
                  color: '#e056fd',
                  fontSize: '1.5rem', // Increased from 1.2rem
                  fontWeight: 'bold',
                  margin: 0
                }}>
                  {experience.company}
                </h4>
              </div>
              
              <h5 style={{
                color: '#ffffff',
                fontSize: '1.3rem', // Increased from 1.1rem
                fontWeight: '600',
                marginBottom: '1.5rem' // Increased spacing
              }}>
                {experience.title}
              </h5>
              
              <div>
                {experience.description.map((point, idx) => (
                  <p key={idx} style={{
                    color: '#f8f8ff',
                    fontSize: '1.2rem', // Increased from 1rem
                    lineHeight: '1.8', // Increased line height
                    margin: '1rem 0' // Increased spacing
                  }}>
                    {point}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>


    </motion.section>
  );
};

export default ProjectsSection;