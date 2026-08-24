import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    number: "01",
    title: "Test Automation & Framework",
    description: "Merancang, mengembangkan, dan memelihara automated test scripts multi-platform menggunakan Appium, WebdriverIO (WDIO), JavaScript/TypeScript, dan Cucumber BDD untuk efisiensi pengujian yang maksimal.",
    features: [
      "Mobile Automation (Android & iOS via Appium)",
      "Web E2E Testing (WebdriverIO & Playwright)",
      "BDD Testing Framework (Cucumber)",
      "Cross-browser & Multi-device Execution"
    ]
  },
  {
    number: "02",
    title: "Frontend Web Development",
    description: "Membangun antarmuka web modern, interaktif, responsif, dan ultra-cepat menggunakan ekosistem React, Next.js, TypeScript, Tailwind CSS, dan Framer Motion dengan standar performa kelas atas.",
    features: [
      "Modern React & Next.js Architecture",
      "Interactive Motion & UI/UX Design",
      "Fully Responsive & Mobile-First Layout",
      "Clean, Scalable & Maintainable Code"
    ]
  },
  {
    number: "03",
    title: "End-to-End Quality Assurance",
    description: "Eksekusi pengujian komprehensif mulai dari Functional Testing, Regression, Negative Scenarios, hingga pelacakan defect/bug secara sistematis dan penyusunan dokumen User Acceptance Test (UAT).",
    features: [
      "Test Plan, Test Cases & Scenario Design",
      "Defect Lifecycle Management & Reporting",
      "Regression & Functional Verification",
      "Dokumentasi User Acceptance Test (UAT)"
    ]
  },
  {
    number: "04",
    title: "Continuous Integration & Testing",
    description: "Mengintegrasikan otomatisasi pengujian ke dalam pipeline CI/CD (GitHub Actions / GitLab CI) untuk mendeteksi regresi seawal mungkin dan menjamin kelancaran rilis aplikasi.",
    features: [
      "Automated Test Execution in CI Pipeline",
      "Nightly & Pre-Release Regression Runs",
      "Test Report Dashboard & Slack Alerts",
      "Fast Feedback Cycle for Developers"
    ]
  },
  {
    number: "05",
    title: "Web Performance & UI Optimization",
    description: "Audit performa web menyeluruh, optimasi Core Web Vitals, SEO teknis, aksesibilitas (a11y), dan penjaminan kualitas kode frontend berstandar tinggi tanpa bug visual.",
    features: [
      "Core Web Vitals Optimization",
      "Frontend Bug Hunting & UI Fixes",
      "SEO & Metadata Engineering",
      "Lighthouse Score 95+ Tuning"
    ]
  }
];

export const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex flex-col justify-center px-4 sm:px-8 md:px-12 py-24 sm:py-32 bg-[#0C0C0C]"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="w-full text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium block mb-3">
            Keahlian &amp; Kapabilitas
          </span>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 10vw, 130px)' }}
          >
            Skill
          </h2>
        </FadeIn>

        {/* Services Accordion List */}
        <div className="space-y-4 sm:space-y-5">
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={service.number} delay={index * 0.08} y={30} duration={0.6}>
                <div
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white/[0.04] border-[#B600A8]/40 shadow-[0_10px_30px_rgba(182,0,168,0.15)]'
                      : 'bg-white/[0.015] border-white/10 hover:border-white/20 hover:bg-white/[0.025]'
                  }`}
                >
                  {/* Header Button */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left cursor-pointer select-none group"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-mono text-sm sm:text-base font-medium text-[#B600A8] opacity-80">
                        {service.number}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide text-[#D7E2EA] group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/10 text-[#D7E2EA] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#B600A8]/20 border-[#B600A8]/40' : 'group-hover:border-white/30'
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {/* Expandable Body */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-white/5 mt-2">
                      <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed mb-5 max-w-3xl">
                        {service.description}
                      </p>

                      {/* Feature Pills */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {service.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA]/90 font-light"
                          >
                            <CheckCircle2 size={14} className="text-[#B600A8] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
