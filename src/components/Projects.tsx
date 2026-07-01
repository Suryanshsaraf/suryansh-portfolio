import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Brain, Cpu, ExternalLink, Layers, ShieldCheck } from 'lucide-react';

interface Project {
  title: string;
  role: string;
  timeline: string;
  environment: string;
  language: string;
  tech: string[];
  summary: string;
  details: string[];
  icon: React.ReactNode;
  github?: string;
}

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

const Projects: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const projectsData: Project[] = [
    {
      title: 'Broke But Thriving',
      role: 'Design & Development',
      timeline: 'Feb 2026 - April 2026',
      environment: 'VS Code',
      language: 'Python, JavaScript',
      tech: ['LSTM', 'MLP', 'Gradient Boosting', 'Llama 3', 'FastAPI', 'React'],
      summary: 'A multi-model machine learning system predicting personal expenditures and high-spending risk.',
      details: [
        'Built predictive models (LSTM, MLP, Gradient Boosting) to forecast spending trends.',
        'Integrated a local LLM Copilot (Llama 3) via FastAPI to enable natural language expense logging.',
        'Implemented function-calling structures enabling the AI agent to query budgets, run financial simulations, and offer recommendations.',
      ],
      icon: <Brain className="h-6 w-6 text-cyan-400" />,
      github: 'https://github.com/Suryanshsaraf',
    },
    {
      title: 'Market Telemetry AI',
      role: 'Ideation & Microservices Architecting',
      timeline: 'March 2026 - April 2026',
      environment: 'VS Code',
      language: 'Python, JavaScript, SQL',
      tech: ['Apache Kafka', 'FastAPI', 'Redis', 'PostgreSQL', 'Prometheus', 'Grafana', 'Docker'],
      summary: 'Real-time stock market analytics platform utilizing an event-driven microservices structure.',
      details: [
        'Engineered an ingestion pipeline using Apache Kafka to buffer and stream live market tickers.',
        'Leveraged FastAPI and Redis key-value caching to deliver low-latency web sockets to the client.',
        'Constructed Dockerized microservices monitored via Prometheus alerts and Grafana dashboards.',
      ],
      icon: <AreaChart className="h-6 w-6 text-indigo-400" />,
      github: 'https://github.com/Suryanshsaraf',
    },
    {
      title: 'RAG Pipeline with RBAC & Monitoring',
      role: 'Backend & Security Ideation',
      timeline: 'May 2026 - July 2026',
      environment: 'VS Code',
      language: 'Python, SQL',
      tech: ['FastAPI', 'LangChain', 'Chroma DB', 'JWT RBAC', 'NeMo Guardrails', 'Prometheus', 'Grafana'],
      summary: 'Enterprise-grade Retrieval-Augmented Generation pipeline with access controls and guardrails.',
      details: [
        'Integrated LangChain with Chroma vector database to ingest, index, and query internal markdown structures.',
        'Enforced Role-Based Access Control (RBAC) via JWT middleware to prevent unauthorized data retrieval.',
        'Deployed guardrails for prompt injection defense, paired with Prometheus/Grafana metrics monitoring.',
      ],
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
      github: 'https://github.com/Suryanshsaraf',
    },
    {
      title: 'HSRP Vehicle Plate Recognition',
      role: 'CV Research Intern',
      timeline: 'May 2025 - June 2025',
      environment: 'Veermata Jijabai Institute of Tech (VJTI)',
      language: 'Python',
      tech: ['YOLO', 'OpenCV', 'Roboflow', 'PyTorch'],
      summary: 'Computer Vision model detecting High Security Registration Plates (HSRP) from traffic streams.',
      details: [
        'Trained and optimized custom YOLOv8 models to isolate license plate regions under varying lighting conditions.',
        'Processed real-time traffic recordings using OpenCV frame filtration to maximize identification reliability.',
        'Managed annotated training batches via Roboflow and optimized inference latency on GPU instances.',
      ],
      icon: <Cpu className="h-6 w-6 text-pink-400" />,
      github: 'https://github.com/Suryanshsaraf',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 90, damping: 14 },
    },
  };

  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 lg:px-24">
      {/* Background radial effects */}
      <div className="ambient-blob absolute top-[20%] left-[-10%] h-[450px] w-[450px] bg-purple-600/5" />

      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="mb-16 flex flex-col items-start">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-mono mb-2">
            / 02. Engineering Labs
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected Works
          </h2>
          <div className="mt-2 h-1 w-20 rounded bg-cyan-500/50" />
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="rounded-2xl glassmorphic border border-white/5 p-8 relative flex flex-col justify-between overflow-hidden group interactive-card hover:border-cyan-500/30 transition-all duration-300"
              data-cursor-text={selectedIdx === idx ? 'CLOSE' : 'VIEW'}
              onClick={() => setSelectedIdx(selectedIdx === idx ? null : idx)}
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                    {project.icon}
                  </div>
                  <span className="text-xs text-slate-500 font-mono">{project.timeline}</span>
                </div>

                {/* Info */}
                <h3 className="font-display font-bold text-xl text-white mt-6 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-cyan-400 font-mono mt-1 mb-4">{project.role}</p>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Expandable Panel */}
                <AnimatePresence initial={false}>
                  {selectedIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden border-t border-white/5 pt-4 mb-4"
                    >
                      <h4 className="text-xs font-bold text-slate-200 font-mono mb-2 uppercase tracking-wide">
                        Implementation Details
                      </h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs text-slate-400 leading-relaxed flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer containing Tech tags & Github */}
              <div className="z-10 mt-6 pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded bg-indigo-950/40 border border-indigo-500/10 px-2 py-0.5 text-[10px] font-mono text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center space-x-1.5">
                    <Layers className="h-3.5 w-3.5" />
                    <span>{project.language}</span>
                  </span>
                  
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevent card accordion from toggling
                      className="flex items-center space-x-1 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-white/5"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span>Code</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
