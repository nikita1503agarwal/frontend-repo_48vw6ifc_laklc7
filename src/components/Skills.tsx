import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Zap, Cpu, PenTool, TestTube } from 'lucide-react';

const skills = [
  { icon: <Layout />, title: 'UI Engineering', items: ['React', 'Next.js', 'Tailwind', 'Shadcn UI'] },
  { icon: <Code2 />, title: 'TypeScript', items: ['Types', 'Generics', 'Zod', 'tRPC'] },
  { icon: <Zap />, title: 'Motion', items: ['Framer Motion', 'GSAP', 'Lottie'] },
  { icon: <Cpu />, title: 'Backend', items: ['Node', 'FastAPI', 'MongoDB'] },
  { icon: <PenTool />, title: 'Design', items: ['Figma', 'Prototyping', 'Design Systems'] },
  { icon: <TestTube />, title: 'Quality', items: ['Testing', 'Accessibility', 'Perf'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white text-center"
        >
          Skills
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 hover:bg-white/5 transition group"
            >
              <div className="h-11 w-11 inline-grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-900 shadow shadow-cyan-500/30">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <div className="mt-2 text-slate-300 text-sm space-y-1">
                {s.items.map((it) => (
                  <div key={it} className="">• {it}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
