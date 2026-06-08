import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import ParticlesBackground from './ParticlesBackground';

function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200 relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
