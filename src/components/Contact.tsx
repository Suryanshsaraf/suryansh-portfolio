import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000); // Reset success banner after 5s
    }, 1500);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 90, damping: 14 },
    },
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 lg:px-24">
      {/* Background blobs */}
      <div className="ambient-blob absolute top-[10%] left-[20%] h-[350px] w-[350px] bg-cyan-600/5" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-mono mb-2">
            / 04. Transmission
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get In Touch
          </h2>
          <div className="mt-2 h-1 w-20 rounded bg-cyan-500/50" />
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Contact Details Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 flex flex-col justify-between rounded-2xl glassmorphic border border-white/5 p-8 relative overflow-hidden group interactive-card"
            data-cursor-text="CONTACT"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="space-y-8 relative z-10">
              <div>
                <h3 className="font-display font-bold text-2xl text-white">Let's build something epic</h3>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  Have an open role, an ML project idea, or a research initiative that needs solving? Let's connect and discuss collaboration opportunities.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:suryanshsaraf8@gmail.com"
                  className="flex items-center space-x-4 text-slate-300 hover:text-cyan-400 transition-colors group/item"
                >
                  <div className="rounded-xl bg-white/5 p-3 border border-white/10 group-hover/item:border-cyan-500/30 transition-colors">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">Email</span>
                    <span className="text-sm font-semibold">suryanshsaraf8@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+919082299383"
                  className="flex items-center space-x-4 text-slate-300 hover:text-cyan-400 transition-colors group/item"
                >
                  <div className="rounded-xl bg-white/5 p-3 border border-white/10 group-hover/item:border-cyan-500/30 transition-colors">
                    <Phone className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">Phone</span>
                    <span className="text-sm font-semibold">+91 90822 99383</span>
                  </div>
                </a>

                <div className="flex items-center space-x-4 text-slate-300">
                  <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold">Navi Mumbai, Maharashtra, IN</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5 text-[10px] font-mono text-slate-500 relative z-10">
              © {new Date().getFullYear()} SURYANSH SARAF. ALL RIGHTS RESERVED.
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 rounded-2xl glassmorphic border border-white/5 p-8 relative overflow-hidden group interactive-card"
            data-cursor-text="WRITE"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all font-sans cursor-text"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all font-sans cursor-text"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Message Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all font-sans cursor-text"
                />
              </div>

              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-4 text-emerald-400 text-xs font-mono flex items-center space-x-2 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Message dispatched successfully! I will get back to you shortly.</span>
                </motion.div>
              )}

              <div className="pt-2">
                <MagneticButton>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center space-x-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 px-8 py-3.5 font-display font-medium text-white shadow-[0_4px_25px_rgba(6,182,212,0.25)] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    <Send className="h-4 w-4" />
                  </button>
                </MagneticButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
