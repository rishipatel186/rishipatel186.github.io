import { ArrowRight, Download, Sparkles } from "lucide-react";
import Magnet from "./Magnet";
import ShinyText from "./ShinyText";
import ShuffleText from "./ShuffleText";

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // Create a link to download CV
    const link = document.createElement("a");
    link.href = "/PATEL_RISHABH_RESUME.pdf";
    link.download = "Rishabh_Patel_Resume.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <header className="min-h-screen flex flex-col overflow-hidden pt-14 sm:pt-16 px-4 sm:px-6 relative items-center justify-center">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-orange-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] bg-orange-400/10 rounded-full blur-[60px] pointer-events-none animate-float delay-500"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950 pointer-events-none"></div>

      {/* The Ring Graphics with rotation animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[450px] md:w-[600px] lg:w-[700px] h-[320px] sm:h-[450px] md:h-[600px] lg:h-[700px] rounded-full border border-orange-500/20 shadow-[0_0_80px_rgba(249,115,22,0.15)] opacity-40 pointer-events-none animate-spin-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[420px] md:w-[570px] lg:w-[670px] h-[300px] sm:h-[420px] md:h-[570px] lg:h-[670px] rounded-full border border-white/5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[390px] md:w-[540px] lg:w-[640px] h-[280px] sm:h-[390px] md:h-[540px] lg:h-[640px] rounded-full border border-orange-500/10 pointer-events-none animate-spin-reverse"></div>

      {/* Content */}
      <div className="max-w-5xl z-10 relative flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6 text-center opacity-0 animate-fade-in-up">
        {/* Profile Picture */}
        <div className="relative mb-2 sm:mb-4 flex items-center justify-center">
          {/* Animated border rings - centered around the image */}
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-2 border-orange-500/40 animate-profile-spin-slow"></div>
          <div className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border border-orange-400/25 animate-profile-spin-reverse"></div>
          <div className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full border border-orange-300/15 animate-pulse"></div>
          <div className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border border-dashed border-orange-500/10 animate-profile-spin-slow"></div>

          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 sm:border-4 border-orange-500/50 shadow-[0_0_60px_rgba(249,115,22,0.4)] relative animate-glow-pulse z-10 bg-neutral-800">
            <img
              src="/profile.jpg"
              alt="Rishabh Patel"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent pointer-events-none"></div>
          </div>
          {/* Status indicator */}
          <div className="absolute bottom-0 right-1/4 sm:bottom-0 sm:right-1/4 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-4 border-neutral-950 flex items-center justify-center z-20">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          </div>
        </div>

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm opacity-0 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-space-grotesk font-medium tracking-widest uppercase text-neutral-400">
            Available for Hire
          </span>
        </div>

        {/* Main Heading with Shiny Text Effect */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space-grotesk font-semibold tracking-tighter leading-[1.1]">
          <ShinyText className="block">RISHABH</ShinyText>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mt-1">
            PATEL
          </span>
        </h1>

        {/* Subtitle with Shuffle Text */}
        <div className="max-w-md sm:max-w-xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl font-manrope font-light text-neutral-400 leading-relaxed opacity-0 animate-fade-in-up delay-200 px-2">
          <ShuffleText
            text="Full-Stack Developer & UI/UX Enthusiast"
            className="text-white font-medium"
            duration={1500}
          />
          <p className="mt-2 text-xs sm:text-sm md:text-base">
            Building performance-driven web applications with the{" "}
            <span className="text-orange-400 font-medium">MERN Stack</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2 sm:pt-4 opacity-0 animate-fade-in-up delay-300 w-full max-w-sm sm:max-w-none">
          <Magnet strength={0.15}>
            <button
              onClick={() => handleScroll("skills")}
              className="group w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-neutral-950 rounded-full font-space-grotesk font-medium text-xs sm:text-sm hover:bg-neutral-100 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              View Skills
            </button>
          </Magnet>
          <Magnet strength={0.15}>
            <button
              onClick={handleDownloadCV}
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-orange-500 text-white font-space-grotesk font-medium text-xs sm:text-sm hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] active:scale-95"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Download CV
            </button>
          </Magnet>
          <Magnet strength={0.15}>
            <button
              onClick={() => handleScroll("contact")}
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 text-white font-space-grotesk font-medium text-xs sm:text-sm hover:bg-white/5 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 active:scale-95"
            >
              Contact Me
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </Magnet>
        </div>
      </div>
    </header>
  );
}
