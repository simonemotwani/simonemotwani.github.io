// src/components/ProjectsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tech: string;
  github: string;
  demo: string;
}

const ProjectsSection: React.FC = () => {
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
    },
    {
      title: "Social Media Analytics",
      description: "A data visualization dashboard that analyzes social media metrics and trends. Includes interactive charts, real-time data processing, and custom reporting features.",
      tech: "React • D3.js • Python • Flask",
      github: "https://github.com/simonemotwani/social-analytics",
      demo: "https://social-analytics-demo.vercel.app"
    },
    {
      title: "Portfolio Website",
      description: "This very website! A responsive portfolio showcasing my projects and skills, built with React and featuring smooth animations and a dark space theme.",
      tech: "React • TypeScript • Framer Motion",
      github: "https://github.com/simonemotwani/simonemotwani.github.io",
      demo: "https://simonemotwani.github.io"
    },
    {
      title: "Recipe Finder App",
      description: "A mobile-first recipe application that helps users discover new recipes based on available ingredients. Features include recipe search, favorites, and meal planning.",
      tech: "React Native • Firebase • Spoonacular API",
      github: "https://github.com/simonemotwani/recipe-finder",
      demo: "https://expo.dev/@simonemotwani/recipe-finder"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <motion.section 
      className="section projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>
      
      <motion.div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <div className="project-placeholder">
              Project Screenshot
            </div>
            {/* Uncomment when you have project images */}
            {/* 
            <img 
              src={`/project-${index + 1}.jpg`} 
              alt={`${project.title} screenshot`}
              className="project-image"
            />
            */}
            
            <h3>{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
            <p className="project-description">{project.description}</p>
            
            <div className="project-links">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;