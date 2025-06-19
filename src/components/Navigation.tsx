// src/components/Navigation.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, setCurrentSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className="navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          SM
        </motion.div>
        
        <ul className="nav-links">
          {navItems.map((item) => (
            <motion.li key={item.id}>
              <motion.button
                className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
                onClick={() => setCurrentSection(item.id)}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(100, 255, 218, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.label}
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;