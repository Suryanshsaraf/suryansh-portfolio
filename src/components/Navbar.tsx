import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail } from 'lucide-react';
import MagneticButton from './MagneticButton';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighters
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPos = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'py-4 glassmorphic-nav shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-md'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div 
          className="flex cursor-pointer items-center space-x-2 font-display text-xl font-bold tracking-tight text-white interactive-card"
          data-cursor-text="RESET"
          onClick={() => scrollToSection('home')}
        >
          <Code2 className="h-6 w-6 text-cyan-400" />
          <span>Suryansh<span className="text-cyan-400">.</span>Saraf</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 rounded-full bg-white/5 p-1 border border-white/10 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative rounded-full px-5 py-2 font-display text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/5"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <MagneticButton>
            <a
              href="https://github.com/Suryanshsaraf"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-cyan-400 transition-all"
              data-cursor-text="GITHUB"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://www.linkedin.com/in/suryansh-saraf/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-cyan-400 transition-all"
              data-cursor-text="LINKEDIN"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="mailto:suryanshsaraf8@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-cyan-400 transition-all"
              data-cursor-text="EMAIL"
            >
              <Mail className="h-5 w-5" />
            </a>
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
