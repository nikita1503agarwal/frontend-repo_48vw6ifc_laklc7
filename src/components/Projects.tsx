import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Dashboard',
    desc: 'A real-time analytics dashboard with smooth micro-interactions and stunning data viz.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3D Portfolio',
    desc: 'Immersive 3D experience powered by Spline and WebGL with buttery-smooth transitions.',
    tags: ['Spline', 'Three.js', 'React'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Design System',
    desc: 'A scalable UI library with tokens, components, and usage guidelines.',
    tags: ['Design', 'Figma', 'Storybook'],
    image: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNpZ24lMjBTeXN0ZW18ZW58MHwwfHx8MTc2MzUxNjkwNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white text-center"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-white/5 transition"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href="#" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition"><Globe size={16}/> Live</a>
                  <a href="#" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition"><Github size={16}/> Code</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
