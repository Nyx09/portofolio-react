import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export const HeroSection = () => {
  const navLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Proyek", href: "#projects" },
    { name: "Kontak", href: "mailto:leenelvin9@gmail.com?subject=Kolaborasi%20SDET%20%26%20Frontend%20-%20Niel" },
  ];

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} duration={0.7} className="w-full z-30">
        <header className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.35rem] hover:opacity-70 transition-opacity duration-200 no-underline"
            >
              {link.name}
            </a>
          ))}
        </header>
      </FadeIn>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden flex justify-center items-center z-0 -mt-2 sm:-mt-4 md:-mt-8">
        <FadeIn delay={0.15} y={40} duration={0.8} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m niel
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait Centered Absolutely with Magnetic Physics */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[270px] sm:w-[340px] md:w-[410px] lg:w-[470px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto flex justify-center">
        <FadeIn delay={0.6} y={30} duration={0.8} className="w-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center items-end"
          >
            <div className="relative group flex justify-center items-end">
              <div className="absolute -inset-2 bg-gradient-to-t from-[#B600A8]/20 via-[#7621B0]/10 to-transparent rounded-full blur-2xl opacity-60 pointer-events-none" />
              <img
                src="/niel-avatar.png"
                alt="Niel - SDET & Frontend Developer"
                className="w-[85%] sm:w-[90%] md:w-full h-auto object-contain rounded-3xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] pointer-events-none"
                draggable="false"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20 w-full">
        {/* Left Subtext */}
        <FadeIn delay={0.35} y={20} duration={0.7}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[230px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.75rem, 1.35vw, 1.4rem)' }}
          >
            an sdet & frontend developer driven by robust test automation and modern digital experiences
          </p>
        </FadeIn>

        {/* Right Contact Button */}
        <FadeIn delay={0.5} y={20} duration={0.7}>
          <ContactButton
            href="mailto:leenelvin9@gmail.com?subject=Kolaborasi%20SDET%20%26%20Frontend%20-%20Niel"
            label="Hubungi Saya"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
