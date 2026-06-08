import { 
  Layout, Code, Paintbrush, FileCode, ServerCog, ArrowLeftRight, 
  Database, Key, GitBranch, Send, Coffee, Binary, Palette, 
  Cpu, FileCode2, Braces, Table2 
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { icon: Coffee, name: 'Java' },
      { icon: Binary, name: 'Python' },
      { icon: FileCode2, name: 'C' },
      { icon: Braces, name: 'C++' },
      { icon: Code, name: 'JavaScript (ES6+)' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { icon: Layout, name: 'React.js' },
      { icon: Paintbrush, name: 'Tailwind CSS' },
      { icon: FileCode, name: 'HTML5 / CSS3' },
      { icon: Palette, name: 'UI/UX Design' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { icon: ServerCog, name: 'Node.js' },
      { icon: ArrowLeftRight, name: 'Express.js' },
      { icon: Database, name: 'MongoDB' },
      { icon: Table2, name: 'SQL' },
      { icon: Cpu, name: '.NET' },
      { icon: Key, name: 'JWT Auth' },
    ],
  },
  {
    title: 'Tools & Concepts',
    skills: [
      { icon: GitBranch, name: 'Git & GitHub' },
      { icon: Send, name: 'Postman' },
      { icon: Binary, name: 'Data Structures & Algorithms' },
    ],
  },
];

export default function Skills() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="border-white/5 border-t py-16 sm:py-20 md:py-24 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-10 sm:mb-12 md:mb-16 opacity-0 animate-fade-in-up text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-medium tracking-tight text-white mb-3 sm:mb-4">
            Tech Stack
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-manrope font-light text-neutral-400">
            The tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills by Category */}
        <div ref={contentRef} className="space-y-8 sm:space-y-10 md:space-y-12 opacity-0 animate-fade-in-up delay-200">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xs sm:text-sm font-space-grotesk font-semibold tracking-widest uppercase text-neutral-500 mb-4 sm:mb-6 border-b border-white/5 pb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  const isHovered = hoveredSkill === `${idx}-${skillIdx}`;
                  return (
                    <div
                      key={skillIdx}
                      onMouseEnter={() => setHoveredSkill(`${idx}-${skillIdx}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`
                        relative px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border 
                        bg-neutral-900/50 text-neutral-300 font-manrope font-normal 
                        text-xs sm:text-sm md:text-base flex items-center gap-2 
                        transition-all duration-300 cursor-default overflow-hidden
                        ${isHovered 
                          ? 'border-orange-500/60 text-white shadow-lg shadow-orange-500/10 scale-[1.02]' 
                          : 'border-white/10 hover:border-orange-500/30'
                        }
                      `}
                    >
                      {/* Animated background glow */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                      />
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-colors duration-300 ${isHovered ? 'text-orange-400' : ''}`} />
                      <span className="relative z-10 truncate">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
