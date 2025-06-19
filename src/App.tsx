// src/App.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Components
import StarField from './components/StarField';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomeSection setCurrentSection={setCurrentSection} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <div className="App">
      <StarField />
      <Navigation 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection} 
      />
      <motion.main
        key={currentSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="main-content"
      >
        {renderSection()}
      </motion.main>
    </div>
  );
}

export default App;