import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import GlowingBorder from "./GlowingBorder";

const experiences = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "Maxgen Technologies Pvt Ltd",
    location: "Ahmedabad, Gujarat",
    duration: "6 Months",
    period: "2025-2026",
    description: [
      "Worked on full-stack web development projects using MERN stack",
      "Collaborated with senior developers to build scalable web applications",
      "Participated in code reviews and implemented best coding practices",
      "Gained hands-on experience with React.js, Node.js, and MongoDB",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
];

export default function Experience() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section
      id="experience"
      className="border-white/5 border-t py-16 sm:py-20 md:py-24 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-10 sm:mb-12 md:mb-16 opacity-0 animate-fade-in-up text-center sm:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-medium tracking-tight text-white mb-2 sm:mb-4">
            Experience
          </h2>
          <p className="text-sm sm:text-lg md:text-xl font-manrope font-light text-neutral-400">
            Professional journey and growth in the tech industry.
          </p>
        </div>

        {/* Experience Cards */}
        <div
          ref={contentRef}
          className="space-y-6 sm:space-y-8 opacity-0 animate-fade-in-up delay-200"
        >
          {experiences.map((exp) => (
            <GlowingBorder key={exp.id}>
              <div className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-orange-500/30 transition-all duration-300 group">
                {/* Company Badge */}
                <div className="absolute -top-3 left-4 sm:left-8">
                  <div className="px-3 sm:px-4 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full">
                    <span className="text-[10px] sm:text-xs font-space-grotesk font-medium text-orange-400 uppercase tracking-wider">
                      Internship
                    </span>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 pt-4">
                  {/* Left - Main Info */}
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-space-grotesk font-medium text-white mb-1 sm:mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl font-manrope font-light text-orange-400">
                        {exp.company}
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-2 sm:gap-4 text-neutral-400 font-manrope font-light text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-manrope font-light text-neutral-400"
                        >
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-orange-500 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right - Technologies */}
                  <div className="lg:w-56 xl:w-64 space-y-3 sm:space-y-4">
                    <h4 className="text-xs sm:text-sm font-space-grotesk font-semibold tracking-widest uppercase text-neutral-500">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm text-neutral-300 bg-white/5 border border-white/10 rounded-lg font-manrope font-light hover:border-orange-500/50 hover:text-white transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-orange-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </GlowingBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
