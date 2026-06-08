import { ExternalLink, Github, ShoppingCart, MessageSquare, LayoutDashboard } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import TiltCard from './TiltCard';
import ShuffleText from './ShuffleText';

const projects = [
  {
    id: 1,
    title: 'Ott Platform',
    description: 'Full-stack OTT application with user authentication, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    icon: ShoppingCart,
    demoUrl: '#',
    codeUrl: 'https://github.com/rishipatel186',
  },
  {
    id: 2,
    title: 'Real-time Chat App',
    description:
      'Instant messaging application utilizing Socket.io for low-latency communication and persistent message history.',
    tags: ['Socket.io', 'Express', 'React'],
    icon: MessageSquare,
    demoUrl: '#',
    codeUrl: 'https://github.com/rishipatel186',
  },
  {
    id: 3,
    title: 'Task Management SaaS',
    description:
      'Productivity tool for teams with Kanban boards, drag-and-drop interfaces, and activity tracking.',
    tags: ['MERN', 'Tailwind', 'Redux'],
    icon: LayoutDashboard,
    demoUrl: '#',
    codeUrl: 'https://github.com/rishipatel186',
  },
];

export default function Projects() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="projects" className="border-white/5 border-t py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-6 opacity-0 animate-fade-in-up text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-medium tracking-tight text-white mb-2 sm:mb-4">
              Selected Work
            </h2>
            <p className="text-sm sm:text-lg md:text-xl font-manrope font-light text-neutral-400">
              <ShuffleText 
                text="Showcasing proficiency in full-stack development." 
                duration={1200}
                className="font-manrope"
              />
            </p>
          </div>
          <a
            href="https://github.com/rishipatel186"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-neutral-400 hover:text-white flex items-center gap-2 transition-colors font-manrope"
          >
            View GitHub <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 opacity-0 animate-fade-in-up delay-200">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <TiltCard key={project.id} maxTilt={6}>
                <article
                  className="group rounded-xl sm:rounded-2xl bg-neutral-900 border border-white/10 overflow-hidden hover:border-orange-500/30 transition-all duration-300 flex flex-col h-full relative"
                >
                {/* Project Image */}
                <div className="h-32 sm:h-40 md:h-48 w-full bg-gradient-to-br from-neutral-800 to-neutral-900 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid opacity-30"></div>
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-neutral-700 group-hover:text-orange-500 transition-colors duration-300 z-10" />
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-grow p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-space-grotesk font-medium text-white mb-2 sm:mb-3">
                    <ShuffleText text={project.title} duration={800} className="font-space-grotesk" />
                  </h3>
                  <p className="flex-grow text-xs sm:text-sm md:text-base font-manrope font-light text-neutral-400 mb-4 sm:mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-neutral-300 bg-white/5 rounded font-manrope font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 sm:gap-4 mt-auto">
                    <button className="flex-1 py-2 sm:py-3 rounded-lg bg-white text-neutral-950 font-space-grotesk font-medium text-xs sm:text-sm hover:bg-neutral-100 transition-colors duration-200 flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      Demo
                    </button>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 sm:py-3 rounded-lg border border-white/20 text-white font-space-grotesk font-medium text-xs sm:text-sm hover:bg-white/5 transition-colors duration-200 flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </article>
            </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
