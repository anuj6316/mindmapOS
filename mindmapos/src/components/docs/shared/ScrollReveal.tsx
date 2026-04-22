import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up', 
  distance = 20,
  duration = 0.6 
}: ScrollRevealProps) {
  const getInitialProps = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: distance };
      case 'down': return { opacity: 0, y: -distance };
      case 'left': return { opacity: 0, x: distance };
      case 'right': return { opacity: 0, x: -distance };
      default: return { opacity: 0, y: distance };
    }
  };

  return (
    <motion.div
      initial={getInitialProps()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
    >
      {children}
    </motion.div>
  );
}
