import React from 'react';
import { motion } from 'framer-motion';
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-30 mask-image-fade"
        style={{
          WebkitMaskImage:
          'radial-gradient(circle at center, black, transparent 80%)'
        }} />
      

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-cyan/20 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
      

      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neon-purple/20 blur-[150px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }} />
      

      <motion.div
        className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-neon-pink/10 blur-[100px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5
        }} />
      
    </div>);

}