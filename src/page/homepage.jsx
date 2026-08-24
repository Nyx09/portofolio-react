import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';
import MarqueeSection from '../components/MarqueeSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';

const Homepage = () => {
  return (
    <div className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit overflow-x-clip">
      <Helmet>
        <title>Niel -- Jasa Landing Page Ringan</title>
        <meta
          name="description"
          content="Niel -- Web Creator & spesialis pembuatan landing page ringan, modern, cepat, dan berkonversi tinggi."
        />
      </Helmet>

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection />

      {/* 4. SERVICES SECTION (JASA LANDING PAGE RINGAN) */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION & KONTAK */}
      <ProjectsSection />
    </div>
  );
};

export default Homepage;
