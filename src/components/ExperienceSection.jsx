import React from 'react';
import { FadeIn } from './FadeIn';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const EXPERIENCES = [
  {
    company: "DANA Indonesia",
    role: "SDET Intern",
    period: "Jan 2024 - Sep 2024",
    location: "Jakarta, Indonesia",
    logo: "/dana.png",
    points: [
      "Designing, developing, and maintaining automated test scripts using Appium and WDIO to validate front-end functionalities across multiple platforms and devices.",
      "Collaborating closely with developers, product managers, and stakeholders to define test strategies that align with agile practices.",
      "Performing detailed analysis of test results, identifying defects, and resolving issues promptly with the development team.",
      "Continuously improving test automation frameworks and processes to enhance efficiency, coverage, and reliability."
    ]
  },
  {
    company: "PT. Mandiri Utama Finance",
    role: "Application Tester Intern",
    period: "Feb 2022 - Feb 2023",
    location: "Jakarta, Indonesia",
    logo: "/muf.png",
    points: [
      "Conducted website and mobile application testing based on predefined usage scenarios.",
      "Successfully implemented testing projects to meet company requirements.",
      "Compiled User Acceptance Test (UAT) documents to ensure developed systems meet user needs.",
      "Created clear and user-friendly usage guides to assist users in navigating applications and websites."
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-28 max-w-6xl mx-auto w-full"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} duration={0.8} className="w-full text-center mb-16 sm:mb-20">
        <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium block mb-3">
          Career Journey
        </span>
        <h2
          className="hero-heading font-black uppercase tracking-tight leading-none text-center"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      {/* Experience Cards */}
      <div className="flex flex-col gap-8 sm:gap-12">
        {EXPERIENCES.map((exp, index) => (
          <FadeIn key={exp.company} delay={index * 0.15} y={30} duration={0.7}>
            <div className="rounded-[30px] sm:rounded-[40px] border border-white/10 bg-[#121212]/80 backdrop-blur-md p-6 sm:p-8 md:p-10 hover:border-white/20 transition-all duration-300 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  {exp.logo && (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 p-2 flex items-center justify-center overflow-hidden border border-white/10 shrink-0">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                      {exp.company}
                    </h3>
                    <p className="text-sm sm:text-base text-[#B600A8] font-medium flex items-center gap-1.5 mt-0.5">
                      <Briefcase size={14} />
                      {exp.role}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#D7E2EA]/60">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="pt-6 space-y-3">
                {exp.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] mt-2.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}

        {/* Education Card */}
        <FadeIn delay={0.3} y={30} duration={0.7}>
          <div className="rounded-[30px] sm:rounded-[40px] border border-white/10 bg-[#121212]/80 backdrop-blur-md p-6 sm:p-8 md:p-10 hover:border-white/20 transition-all duration-300 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 p-2 flex items-center justify-center overflow-hidden border border-white/10 shrink-0 text-white">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                    Universitas Bina Nusantara
                  </h3>
                  <p className="text-sm sm:text-base text-[#BBCCD7] font-medium mt-0.5">
                    Bachelor of Information System (S.Kom)
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#D7E2EA]/60">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  Sep 2019 - Nov 2023
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 text-white font-medium text-xs">
                  GPA: 3.42 / 4.00
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExperienceSection;
