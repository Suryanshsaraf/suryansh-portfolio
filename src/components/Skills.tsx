/** Skills component: graphical list of tech stack metrics */
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Terminal } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[]; // Level out of 100 for visual bars
  color: string;
}

const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Core Languages',
      icon: <Code className="h-5 w-5 text-cyan-400" />,
      color: 'from-cyan-500/20 to-cyan-500/0',
      skills: [
        { name: 'Python', level: 92 },
        { name: 'SQL', level: 88 },
        { name: 'HTML & CSS', level: 80 },
        { name: 'C / C++', level: 75 },
      ],
    },
    {
      title: 'Databases',
      icon: <Database className="h-5 w-5 text-indigo-400" />,
      color: 'from-indigo-500/20 to-indigo-500/0',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Cpu className="h-5 w-5 text-purple-400" />,
      color: 'from-purple-500/20 to-purple-500/0',
      skills: [
        { name: 'FastAPI', level: 88 },
        { name: 'TensorFlow', level: 78 },
        { name: 'PyTorch / YOLO', level: 80 },
        { name: 'LangChain', level: 82 },
        { name: 'OpenCV', level: 80 },
      ],
    },
    {
      title: 'Software & Tools',
      icon: <Terminal className="h-5 w-5 text-pink-400" />,
      color: 'from-pink-500/20 to-pink-500/0',
      skills: [
        { name: 'Docker', level: 82 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code & CLI', level: 95 },
        { name: 'Tableau & Power BI', level: 78 },
        { name: 'Android Studio', level: 70 },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 90, damping: 14 },
    },
  };

  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 lg:px-24">
      {/* Background blobs */}
      <div className="ambient-blob absolute bottom-0 right-[-10%] h-[400px] w-[400px] bg-indigo-600/5" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-mono mb-2">
            / 03. Engine Specs
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical Stack
          </h2>
          <div className="mt-2 h-1 w-20 rounded bg-cyan-500/50" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="rounded-2xl glassmorphic border border-white/5 p-6 relative overflow-hidden group interactive-card hover:border-cyan-500/30 transition-all duration-300"
              data-cursor-text="SKILLS"
            >
              {/* Top ambient color glow */}
              <div className={`absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b ${cat.color} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg bg-white/5 p-2 border border-white/10">
                    {cat.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-md tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-slate-500">{skill.level}%</span>
                      </div>
                      
                      {/* Custom progress track */}
                      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: sIdx * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
