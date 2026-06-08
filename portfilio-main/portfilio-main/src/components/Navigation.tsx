import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = Math.min((scrollTop / (documentHeight - windowHeight)) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent">
      <div 
        className="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/50"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ${
          isScrolled
            ? 'border-white/10 bg-neutral-950/98 backdrop-blur-xl shadow-lg shadow-orange-500/5'
            : 'border-transparent bg-neutral-950/40 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo with animated dot */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></div>
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping opacity-75"></div>
            </div>
            <span className="text-lg sm:text-xl font-space-grotesk font-bold tracking-tight text-white group-hover:text-orange-500 transition-all duration-300">
              RP
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 lg:px-5 py-2.5 text-sm lg:text-base font-manrope font-medium transition-all duration-300 group rounded-lg ${
                  activeSection === item.id
                    ? 'text-orange-500 bg-orange-500/10'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-300 rounded-full ${
                  activeSection === item.id ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                }`}></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="hidden md:flex items-center gap-2 px-6 lg:px-7 py-3 text-sm font-space-grotesk font-semibold text-neutral-950 bg-gradient-to-r from-white to-neutral-100 rounded-full hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 group border border-white/20"
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>

          {/* Mobile Menu Button with animation */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:text-orange-500 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 active:scale-95"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Animated progress bar */}
        <ScrollProgress />
      </nav>

      {/* Mobile Menu Overlay with enhanced animations */}
      <div
        className={`fixed inset-0 z-40 bg-neutral-950/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Glowing orb effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative flex flex-col items-center justify-center h-full gap-2 px-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative text-3xl font-space-grotesk font-semibold text-white hover:text-orange-500 transition-all duration-300 py-3 group"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s`,
              }}
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="relative mt-8 px-10 py-4 text-lg font-space-grotesk font-semibold text-neutral-950 bg-white rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/40 overflow-hidden group"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
              transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s`,
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </>
  );
}
