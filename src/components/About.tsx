import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, Calendar, MapPin, Users } from 'lucide-react';

const About: React.FC = () => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 lg:px-24">
      {/* Ambient backgrounds */}
      <div className="ambient-blob absolute top-[40%] right-[5%] h-[350px] w-[350px] bg-cyan-700/5" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-mono mb-2">
            / 01. Origin Story
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Origin &amp; Experience
          </h2>
          <div className="mt-2 h-1 w-20 rounded bg-cyan-500/50" />
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main Info Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 rounded-2xl glassmorphic p-8 border border-white/5 relative overflow-hidden group interactive-card"
            data-cursor-text="SURYANSH"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center space-x-3 text-cyan-400">
                <BookOpen className="h-6 w-6" />
                <h3 className="font-display text-xl font-bold text-white">Education</h3>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-100">
                  B.Tech in Artificial Intelligence &amp; Data Science
                </h4>
                <p className="text-cyan-400 text-sm font-medium mt-1">
                  SVKM's NMIMS University, Navi Mumbai (2023 - 2027)
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  Currently pursuing a rigorous curriculum centered on Machine Learning, Computer Vision, Database Systems, and Event-Driven Pipelines.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center space-x-1.5 bg-white/5 rounded-full px-3 py-1">
                    <Award className="h-3.5 w-3.5 text-cyan-400" />
                    <span>GPA: 2.78 / 4.0</span>
                  </span>
                  <span className="flex items-center space-x-1.5 bg-white/5 rounded-full px-3 py-1">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Thane, India</span>
                  </span>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6">
                <div className="flex items-center space-x-3 text-indigo-400 mb-4">
                  <Award className="h-6 w-6" />
                  <h3 className="font-display text-xl font-bold text-white">Certifications</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-400 font-sans">
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-400 mr-1.5">⚡</span>
                    <div>
                      <span className="text-slate-200 font-medium">Google Cloud Career Launchpad Program</span>
                      <span className="text-xs text-slate-500 block">April 2026</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-400 mr-1.5">⚡</span>
                    <div>
                      <span className="text-slate-200 font-medium">AWS Academy Graduate</span>
                      <span className="text-xs text-slate-500 block">Cloud Architecting - Training Badge (March 2026)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Experience & Leadership Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 rounded-2xl glassmorphic p-8 border border-white/5 relative overflow-hidden group interactive-card"
            data-cursor-text="ROLES"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              {/* Internships Section */}
              <div>
                <div className="flex items-center space-x-3 text-cyan-400 mb-4">
                  <Briefcase className="h-6 w-6" />
                  <h3 className="font-display text-xl font-bold text-white">Internships</h3>
                </div>

                <div className="relative pl-6 border-l-2 border-cyan-500/30">
                  <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="text-xs text-slate-500 font-mono flex items-center space-x-1">
                    <Calendar className="h-3 w-3 mr-1" /> May 2025 - June 2025
                  </span>
                  <h4 className="text-md font-semibold text-slate-200 mt-1">Research Intern</h4>
                  <p className="text-xs text-cyan-400 font-mono">Veermata Jijabai Institute of Technology (VJTI) Matunga</p>
                  <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                    Worked on the HSRP project to detect and recognize vehicle license plates from real-time traffic footage. Trained and optimized computer vision models using YOLOv8, RoboFlow, and OpenCV.
                  </p>
                </div>
              </div>

              {/* Leadership Section */}
              <div className="border-t border-white/5 pt-6">
                <div className="flex items-center space-x-3 text-indigo-400 mb-4">
                  <Users className="h-6 w-6" />
                  <h3 className="font-display text-xl font-bold text-white">Leadership Roles</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-indigo-500/30">
                    <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-indigo-400" />
                    <span className="text-xs text-slate-500 font-mono flex items-center space-x-1">
                      <Calendar className="h-3 w-3 mr-1" /> July 2025 - March 2026
                    </span>
                    <h4 className="text-md font-semibold text-slate-200 mt-1">Infinix AI&amp;ML Club Co-Head</h4>
                    <p className="text-xs text-indigo-400 font-mono">STME, NMIMS Navi Mumbai</p>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                      Led AI/ML technical workshops, community engagement, and hosted industry professionals from IBM, Browser Stack, and Xenvolt.AI.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-indigo-500/30">
                    <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-indigo-400" />
                    <span className="text-xs text-slate-500 font-mono flex items-center space-x-1">
                      <Calendar className="h-3 w-3 mr-1" /> Aug 2023 - March 2024
                    </span>
                    <h4 className="text-md font-semibold text-slate-200 mt-1">Microsoft Student Learn Ambassador</h4>
                    <p className="text-xs text-indigo-400 font-mono">NMIMS Navi Mumbai</p>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                      Organized Ignite 6.0, the flagship Techfest, coordinating multi-session technical events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Competitions Section */}
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Echelon 1.0 & 2.0',
              org: 'STME Hackathons',
              desc: 'Competed in flagship hackathons, building prototype solutions in compressed timelines.',
              icon: '🏆',
              date: 'Jan 2026',
            },
            {
              title: 'HACKX 3.0',
              org: 'GDGOC NMIMS',
              desc: 'Engineered innovative AI products under a 24-hour hackathon environment.',
              icon: '💡',
              date: 'Feb 2025',
            },
            {
              title: 'Smart India Hackathon',
              org: 'Govt. of India',
              desc: 'Participated in solving national problem statements with advanced tech models.',
              icon: '⚙️',
              date: 'Sep 2024',
            },
          ].map((comp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="rounded-xl glassmorphic p-6 border border-white/5 relative group hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{comp.icon}</div>
              <span className="text-[10px] font-mono text-cyan-400">{comp.date}</span>
              <h4 className="font-display font-bold text-white text-lg mt-1">{comp.title}</h4>
              <p className="text-xs text-slate-500 font-mono mb-2">{comp.org}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{comp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
