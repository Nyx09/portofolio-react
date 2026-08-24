import React from 'react';
import { motion } from 'framer-motion';

export const LiveProjectButton = ({ href = "#", onClick, label = "Lihat Demo", className = "" }) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer inline-flex items-center justify-center select-none ${className}`}
    >
      {label}
    </motion.button>
  );

  if (href && !onClick) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block no-underline">
        {content}
      </a>
    );
  }

  return content;
};

export default LiveProjectButton;
