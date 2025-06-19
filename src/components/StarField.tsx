// src/components/StarField.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  brightness: number;
  animationDelay: number;
  duration: number;
  color: string;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  animationDelay: number;
}

const StarField: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate nebula-themed starfield
    const generateStars = () => {
      const newStars: Star[] = [];
      
      // Bright white stars scattered throughout
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 0.3, // Mix of tiny and medium stars
          brightness: Math.random() * 0.6 + 0.4,
          color: '#ffffff',
          animationDelay: Math.random() * 3,
          duration: Math.random() * 1.5 + 0.8
        });
      }
      
      // Purple-tinted stars in nebula regions
      for (let i = 150; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.5 + 0.8,
          brightness: Math.random() * 0.5 + 0.3,
          color: '#DA70D6',
          animationDelay: Math.random() * 2,
          duration: Math.random() * 1.2 + 0.6
        });
      }
      
      // Bright blue-white stars
      for (let i = 200; i < 250; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 0.3,
          brightness: Math.random() * 0.4 + 0.6,
          color: '#E6E6FA',
          animationDelay: Math.random() * 2.5,
          duration: Math.random() * 1 + 0.5
        });
      }

      // Large bright stars
      for (let i = 250; i < 270; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 5 + 3, // Large stars (3-8px)
          brightness: Math.random() * 0.8 + 0.6,
          color: '#FFE5B4', // Warm white
          animationDelay: Math.random() * 2,
          duration: Math.random() * 2 + 1.5
        });
      }

      // Better spaced Big Dipper constellation:
        const positions = [
        {x: 15, y: 20},  // Upper left
        {x: 85, y: 15},  // Upper right
        {x: 30, y: 40},  // Middle left
        {x: 70, y: 35},  // Middle right
        {x: 20, y: 70},  // Lower left
        {x: 80, y: 80},  // Lower right
        // {x: 50, y: 60}   // Lower center
        ];

        positions.forEach((pos, idx) => {
        newStars.push({
            id: 1000 + idx,
            x: pos.x,
            y: pos.y,
            size: 25,
            brightness: 0.9,
            color: '#87CEEB',
            animationDelay: idx * 0.2,
            duration: 10
        });
        });
      
      setStars(newStars);
    };

    // Generate more frequent shooting stars
    const generateShootingStars = () => {
      const newShootingStars: ShootingStar[] = [];
      for (let i = 0; i < 4; i++) {
        newShootingStars.push({
          id: i,
          startX: Math.random() * 100,
          startY: Math.random() * 80,
          animationDelay: Math.random() * 5
        });
      }
      setShootingStars(newShootingStars);
    };

    generateStars();
    generateShootingStars();

    const interval = setInterval(generateShootingStars, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="star-field">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: star.color,
            borderRadius: '50%',
            boxShadow: `0 0 ${star.size * 8}px ${star.color}`,
            opacity: star.brightness
          }}
          animate={{
            opacity: [star.brightness * 0.2, star.brightness, star.brightness * 0.2],
            scale: [0.8, 1.6, 0.8]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.animationDelay,
            ease: "easeInOut"
          }}
        />
      ))}

      {shootingStars.map((shootingStar) => (
        <motion.div
          key={`shooting-${shootingStar.id}`}
          className="shooting-star"
          style={{
            left: `${shootingStar.startX}%`,
            top: `${shootingStar.startY}%`,
            background: 'linear-gradient(45deg, #ffffff, #DA70D6, transparent)',
            boxShadow: '0 0 10px #ffffff, 0 0 20px #DA70D6'
          }}
          animate={{
            x: [0, 600],
            y: [0, -300],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: shootingStar.animationDelay,
            ease: "easeOut",
            repeatDelay: 4
          }}
        />
      ))}
    </div>
  );
};

export default StarField;