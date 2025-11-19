import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white text-center"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-slate-900/60 border border-white/10 p-6"
          >
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input required className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" required className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Message</label>
                <textarea required rows={5} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Tell me about your project..." />
              </div>
              <button className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition w-fit">
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-2xl bg-slate-900/60 border border-white/10 p-6"
          >
            <h3 className="text-white font-semibold text-lg">Let's build something great</h3>
            <p className="mt-2 text-slate-300">I'm open to freelance, consulting, and full-time opportunities.</p>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">Email: you@example.com</div>
              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">Location: Worldwide</div>
              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">Timezone: UTC±0</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
