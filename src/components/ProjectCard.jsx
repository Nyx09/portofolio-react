import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';

export const ProjectCard = ({
  project,
  index,
  totalCards = 3,
  range = [0, 1],
  targetScale = 1,
  progress,
}) => {
  const cardContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className="h-[85vh] min-h-[580px] flex items-center justify-center sticky"
      style={{
        top: `calc(5.5rem + ${index * 28}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden will-change-transform transform-gpu origin-top"
      >
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {/* Project Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none tracking-tighter"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
            >
              {project.number}
            </span>

            {/* Category & Project Name */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                {project.category}
              </span>
              <h3
                className="font-black uppercase text-[#D7E2EA] tracking-tight leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.8vw, 2.2rem)' }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          {/* Live Project Button */}
          <div>
            <LiveProjectButton href={project.liveUrl || "#"} />
          </div>
        </div>

        {/* Bottom Two-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 w-full">
          {/* Left Column (40% width - 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#1A1A1A] border border-white/10"
              style={{ height: 'clamp(130px, 15vw, 210px)' }}
            >
              <motion.img
                style={{ scale: imageScale }}
                src={project.images.col1_1}
                alt={`${project.title} Preview 1`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#1A1A1A] border border-white/10"
              style={{ height: 'clamp(160px, 20vw, 290px)' }}
            >
              <motion.img
                style={{ scale: imageScale }}
                src={project.images.col1_2}
                alt={`${project.title} Preview 2`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (60% width - 7 cols) */}
          <div className="md:col-span-7 w-full h-[260px] sm:h-[340px] md:h-full min-h-[260px] md:min-h-[420px] overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#1A1A1A] border border-white/10">
            <motion.img
              style={{ scale: imageScale }}
              src={project.images.col2}
              alt={`${project.title} Main Showcase`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
