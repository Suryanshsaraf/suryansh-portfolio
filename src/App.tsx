import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThreeBackground from './components/ThreeBackground';
import CursorSpotlight from './components/CursorSpotlight';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 3D WebGL Background */}
      <ThreeBackground />

      {/* Global cursor & lighting spotlight */}
      <CursorSpotlight />

      {/* Header / Nav */}
      <Navbar />

      {/* Primary content sections */}
      <main className="mx-auto max-w-7xl z-20 relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
