import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'An absolute pro. Turned complex ideas into a delightful experience with top-tier performance.',
    name: 'Alex Johnson',
    role: 'Product Lead, FintechCo'
  },
  {
    quote: 'A rare blend of design taste and engineering rigor. Our users loved the new UI.',
    name: 'Priya Sharma',
    role: 'Founder, HealthX'
  },
  {
    quote: 'Consistently delivers pixel-perfect work and communicates clearly throughout.',
    name: 'Diego Santos',
    role: 'CTO, NovaLabs'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white text-center"
        >
          Testimonials
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-2xl bg-slate-900/60 border border-white/10 p-6"
            >
              <p className="text-slate-200">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-400">
                <span className="font-semibold text-white">{t.name}</span> · {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
