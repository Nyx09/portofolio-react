import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ProjectCard } from './ProjectCard';
import { ContactButton } from './ContactButton';
import { Mail } from 'lucide-react';

const PROJECTS = [
  {
    number: "01",
    title: "NexWrap Indonesia",
    category: "E-Commerce & Packaging Solution",
    liveUrl: "https://nexwrap.id/",
    images: {
      col1_1: "/nexwrap/1.png",
      col1_2: "/nexwrap/2.png",
      col2: "/nexwrap/image.png"
    }
  },
  {
    number: "02",
    title: "Verlune by EFFVAL",
    category: "Luxury Fragrance Experience",
    liveUrl: "https://verlune.vercel.app/",
    images: {
      col1_1: "/verlune/1.png",
      col1_2: "/verlune/2.png",
      col2: "/verlune/image.png"
    }
  }
];

export const ProjectsSection = () => {
  const cardsContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-32"
    >
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto w-full mb-14 sm:mb-20">
        <FadeIn delay={0} y={40} duration={0.8} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Proyek
          </h2>
        </FadeIn>
      </div>

      {/* Sticky Stacking Project Cards Container */}
      <div
        ref={cardsContainerRef}
        className="max-w-6xl mx-auto w-full relative pb-20 sm:pb-28"
      >
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - ((PROJECTS.length - 1 - i) * 0.03);
          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
              range={[i * (1 / PROJECTS.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Contact & Footer Area */}
      <div id="contact" className="max-w-5xl mx-auto w-full pt-16 sm:pt-24 border-t border-[#D7E2EA]/15 text-center relative z-20">
        <FadeIn delay={0.1} y={30}>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium block mb-4">
            Mulai Kolaborasi
          </span>
          <h3
            className="hero-heading font-black uppercase tracking-tight leading-none mb-8"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            Mari Bangun Solusi Digital Berkualitas
          </h3>
          <p className="text-[#D7E2EA]/80 font-light max-w-xl mx-auto mb-10 text-sm sm:text-base leading-relaxed">
            Tertarik berdiskusi mengenai Test Automation (Appium/WDIO), Quality Assurance, atau pengembangan Frontend Web (React/Next.js)? Hubungi saya langsung via email!
          </p>
          <div className="flex justify-center mb-16">
            <ContactButton
              href="mailto:leenelvin9@gmail.com?subject=Kolaborasi%20SDET%20%26%20Frontend%20-%20Niel"
              label="Kirim Email Sekarang"
            />
          </div>

          {/* Contact Links & Copyright */}
          <div className="flex flex-wrap justify-between items-center gap-6 pt-10 border-t border-[#D7E2EA]/10 text-xs sm:text-sm text-[#D7E2EA]/50 uppercase tracking-wider">
            <span>&copy; {new Date().getFullYear()} Niel &bull; SDET &amp; Frontend Developer</span>
            <div className="flex items-center gap-6">
              <a
                href="mailto:leenelvin9@gmail.com"
                className="hover:text-white transition-colors duration-200 inline-flex items-center gap-2 text-[#D7E2EA]/80 hover:text-[#D7E2EA]"
              >
                <Mail size={16} />
                <span className="normal-case tracking-normal font-medium">leenelvin9@gmail.com</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProjectsSection;
