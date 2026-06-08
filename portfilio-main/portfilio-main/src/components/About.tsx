import { Code2, Zap, Server, Smartphone } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Codes',
    description: 'Maintainable, modular, and efficient codebases adhering to best practices.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized load times and smooth interactions for better UX.',
  },
  {
    icon: Server,
    title: 'API Driven',
    description: 'Robust RESTful APIs ensuring seamless data communication.',
  },
  {
    icon: Smartphone,
    title: 'Responsive',
    description: 'Pixel-perfect designs that work flawlessly across all devices.',
  },
];

export default function About() {
  const textRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="about" className="border-white/5 border-t py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <div ref={textRef} className="space-y-5 sm:space-y-6 md:space-y-8 opacity-0 animate-fade-in-scale text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-medium tracking-tight text-white leading-tight">
            Engineering the future of{' '}
            <span className="text-orange-500 block sm:inline">Web Development</span>
          </h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-manrope font-light text-neutral-400 leading-relaxed">
            <p>
              I am a MCA student with a deep-rooted passion for computer science and full-stack
              development. My journey is defined by a relentless pursuit of clean code and
              scalable architectures.
            </p>
            <p>
              Specializing in the MERN stack (MongoDB, Express, React, Node.js), I transform
              complex problem statements into intuitive, high-performance web solutions. I bridge
              the gap between backend logic and frontend elegance.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div ref={gridRef} className="grid grid-cols-2 gap-3 sm:gap-4 opacity-0 animate-fade-in-scale delay-200">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-orange-500/10 transition-colors">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-300 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl font-space-grotesk font-medium text-white mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-neutral-500 font-manrope font-light line-clamp-2 sm:line-clamp-none">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
