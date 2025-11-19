import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-30" />
            <div className="relative rounded-3xl bg-slate-900/60 border border-white/10 p-8">
              <h2 className="text-3xl font-bold text-white">About Me</h2>
              <p className="mt-4 text-slate-300">
                I'm a creative developer with a passion for crafting immersive web experiences. I combine design and code to build fast, accessible, and beautiful interfaces.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-slate-400">Experience</p>
                  <p className="font-semibold text-white">5+ Years</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-slate-400">Location</p>
                  <p className="font-semibold text-white">Remote / On-site</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-slate-400">Focus</p>
                  <p className="font-semibold text-white">Frontend · Motion</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-slate-400">Stack</p>
                  <p className="font-semibold text-white">React · TypeScript</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <p>
              I thrive at the intersection of design and engineering. My work blends micro-interactions, bold typography, and thoughtful motion to make interfaces feel alive.
            </p>
            <p>
              When I'm not coding, you can find me sketching concepts, learning about 3D on the web, or enjoying long walks with a good playlist.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
