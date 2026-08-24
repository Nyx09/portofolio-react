import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Character = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-[#D7E2EA]"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

const Word = ({ word, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / word.length;

  return (
    <span className="inline-block whitespace-nowrap">
      {word.split('').map((char, i) => {
        const charStart = range[0] + i * step;
        const charEnd = range[0] + (i + 1) * step;
        return (
          <Character
            key={i}
            char={char}
            progress={progress}
            range={[charStart, charEnd]}
          />
        );
      })}
    </span>
  );
};

export const AnimatedText = ({
  text = "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!",
  className = "",
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalWords = words.length;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] mx-auto flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em] ${className}`}
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
    >
      {words.map((word, i) => {
        const start = i / totalWords;
        const end = (i + 1) / totalWords;
        return (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

export default AnimatedText;
