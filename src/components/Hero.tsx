/** Hero component: dynamic visual welcome banner and catchphrase */
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Brain, Sparkles, Terminal } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        damping: 16,
        stiffness: 100,
      },
    },
  };

  const titleWordReveal = (text: string) => {
    return text.split(' ').map((word, wordIdx) => (
      <span key={wordIdx} className="inline-block overflow-hidden mr-3">
        <motion.span
          className="inline-block"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            delay: wordIdx * 0.1 + 0.3,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {word}
        </motion.span>
      </span>
    ));
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20"
    >
      {/* Ambient background glowing circles */}
      <div className="ambient-blob absolute top-[20%] left-[10%] h-[350px] w-[350px] bg-indigo-600/10" />
      <div className="ambient-blob absolute bottom-[20%] right-[10%] h-[400px] w-[400px] bg-cyan-600/10" />

      <div className="mx-auto max-w-7xl w-full z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-400 uppercase font-mono shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>AI & Data Science Engineer</span>
          </motion.div>

          {/* Heading */}
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl leading-[1.05] max-w-5xl">
            {titleWordReveal('Suryansh Saraf')}
          </h1>

          {/* Subtitle / Catchphrase */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl font-sans text-lg text-slate-400 md:text-xl leading-relaxed font-light"
          >
            Engineering the intelligence layer of tomorrow. Specializing in{' '}
            <span className="text-white font-medium">Deep Learning</span>,{' '}
            <span className="text-white font-medium">Real-time Data Pipelines</span>, and{' '}
            <span className="text-white font-medium">Secure RAG Agents</span>. Turning data into decisions.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4 items-center"
          >
            <MagneticButton>
              <button
                onClick={scrollToAbout}
                className="flex items-center space-x-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 px-8 py-4 font-display font-medium text-white shadow-[0_4px_25px_rgba(6,182,212,0.3)] hover:shadow-[0_4px_35px_rgba(6,182,212,0.5)] transition-all cursor-pointer"
                data-cursor-text="EXPLORE"
              >
                <span>View Portfolio</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center space-x-2 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 font-display font-medium text-slate-200 hover:text-white transition-all"
                data-cursor-text="TALK"
              >
                <span>Get in touch</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Tech keywords ticker or cards */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 pt-12 text-slate-500 text-sm font-mono border-t border-white/5 w-full max-w-4xl"
          >
            <div className="flex items-center space-x-2">
              <Brain className="h-4 w-4 text-cyan-400" />
              <span>Machine Learning & NLP</span>
            </div>
            <div className="flex items-center space-x-2">
              <Terminal className="h-4 w-4 text-indigo-400" />
              <span>Event-Driven Microservices</span>
            </div>
            <div className="flex items-center space-x-2 flex-grow justify-end hidden md:flex">
              <span className="text-xs text-slate-600">Based in Mumbai, IN</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Mouse scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase mb-2">Scroll Down</span>
        <div className="h-9 w-5 rounded-full border-2 border-slate-400 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-2 w-2 rounded-full bg-cyan-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
