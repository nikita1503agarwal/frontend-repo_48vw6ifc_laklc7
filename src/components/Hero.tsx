import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
              >
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Your Name</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-4 text-lg text-slate-300 max-w-xl"
              >
                I craft delightful digital experiences focused on performance, accessibility, and clean design.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-8 flex gap-3"
              >
                <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition">
                  View Projects
                </a>
                <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
                  Contact Me
                </a>
              </motion.div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/60 to-slate-900" />
    </section>
  );
}
