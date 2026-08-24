import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { CheckCircle2 } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    "Appium & WDIO Automation",
    "React & Next.js Development",
    "End-to-End Quality Assurance",
    "CI/CD Pipeline & Automated Testing",
    "User Acceptance Testing (UAT)",
    "Clean Code & High Performance",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 py-24 overflow-hidden bg-[#0C0C0C]"
    >
      {/* 4 Corner 3D Decorative Floating Elements */}
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] opacity-75"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Shape Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] opacity-75"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] opacity-75"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Object"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] opacity-75"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Tentang Saya
          </h2>
        </FadeIn>

        {/* Spacing between Heading and Animated Text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Character-by-character Animated Paragraph */}
        <AnimatedText
          text="Lulusan Sistem Informasi Bina Nusantara dengan pengalaman sebagai SDET di DANA Indonesia dan Application Tester di Mandiri Utama Finance. Saya menggabungkan keahlian Test Automation (Appium, WDIO) dan Frontend Development (React, Next.js, Tailwind) untuk menghadirkan produk digital berkualitas tinggi, andal, dan berkinerja cepat."
        />

        {/* Highlight Badges */}
        <FadeIn delay={0.15} y={20} duration={0.7} className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-2xl">
          {highlights.map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm bg-white/5 border border-white/10 text-[#D7E2EA]/90 font-light backdrop-blur-sm"
            >
              <CheckCircle2 size={13} className="text-[#B600A8]" />
              {item}
            </span>
          ))}
        </FadeIn>

        {/* Spacing between Badges and CTA */}
        <div className="h-12 sm:h-16 md:h-20" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20} duration={0.7}>
          <ContactButton
            href="mailto:leenelvin9@gmail.com?subject=Kolaborasi%20SDET%20%26%20Frontend%20-%20Niel"
            label="Kirim Pesan"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
