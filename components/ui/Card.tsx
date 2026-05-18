import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  glass = false,
}) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';
  const glassStyles = glass ? 'glass-effect' : 'bg-[#1a1a1a] border border-gray-800';
  const hoverStyles = hover ? 'hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]' : '';
  
  return (
    <motion.div
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
