import { useState } from 'react';
import { Mail, Github, Instagram, Send } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contentRef = useScrollReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation
    if (formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-t from-orange-900/10 to-transparent pointer-events-none"></div>

      <div ref={contentRef} className="z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 relative opacity-0 animate-fade-in-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-space-grotesk font-medium tracking-tight text-white mb-4 sm:mb-6 leading-tight">
          Let's build something <br className="hidden sm:block" /> amazing together
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-manrope font-light text-neutral-400 mb-8 sm:mb-10 md:mb-12 px-2">
          Have a project in mind or want to discuss the latest tech? I'm currently available for
          freelance projects and internships.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-sm sm:max-w-md mx-auto space-y-3 sm:space-y-4 text-left mb-10 sm:mb-12 md:mb-16"
        >
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-manrope font-medium text-neutral-400 mb-1.5 sm:mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all font-manrope"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-manrope font-medium text-neutral-400 mb-1.5 sm:mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none font-manrope"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 sm:py-4 bg-white text-neutral-950 rounded-lg font-space-grotesk font-medium text-sm sm:text-base hover:bg-neutral-100 transition-colors duration-200 mt-4 sm:mt-6 flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            {isSubmitted ? '✓ Message Sent!' : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          <a
            href="mailto:jp0578171@gmail.com"
            className="p-3 sm:p-4 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:border-orange-500/30 transition-all duration-200 group active:scale-95"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-orange-500 transition-colors" />
          </a>
          <a
            href="https://github.com/rishipatel186"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:border-orange-500/30 transition-all duration-200 group active:scale-95"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-orange-500 transition-colors" />
          </a>
          <a
            href="https://instagram.com/patel_rishi_186"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:border-orange-500/30 transition-all duration-200 group active:scale-95"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-orange-500 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
