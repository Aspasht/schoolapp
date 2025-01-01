import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface SlideInProps extends MotionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
}

export function SlideIn({ 
  children, 
  direction = 'left', 
  delay = 0,
  ...props 
}: SlideInProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: direction === 'left' ? -50 : 50 
      }}
      animate={{ 
        opacity: 1, 
        x: 0 
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 1.02, 0.73, 0.99],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}