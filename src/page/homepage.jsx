import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';
// import MarqueeSection from '../components/MarqueeSection'; // Uncomment to restore Marquee Section
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';

const Homepage = () => {
  return (
    <div className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit overflow-x-clip">
      <Helmet>
        <title>Niel -- SDET &amp; Frontend Developer</title>
        <meta
          name="description"
          content="Niel -- SDET & Frontend Developer dengan keahlian Test Automation, Quality Assurance, dan Web Development modern."
        />
      </Helmet>

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. MARQUEE SECTION (DISABLED BY USER REQUEST - UNCOMMENT TO RESTORE) */}
      {/* <MarqueeSection /> */}

      {/* 3. ABOUT SECTION */}
      <AboutSection />

      {/* 4. SERVICES SECTION (SDET & FRONTEND) */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION & KONTAK */}
      <ProjectsSection />
    </div>
  );
};

export default Homepage;
