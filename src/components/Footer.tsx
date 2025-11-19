import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-400 hover:text-white">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-white">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
