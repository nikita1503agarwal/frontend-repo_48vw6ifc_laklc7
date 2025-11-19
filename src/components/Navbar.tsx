import React from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 ring-1 ring-white/30 shadow shadow-cyan-500/30" />
              <span className="text-white font-semibold tracking-tight group-hover:text-cyan-300 transition-colors">MyPortfolio</span>
            </a>
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="ml-3 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition">
                Hire Me
              </a>
            </nav>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open && (
            <nav className="md:hidden border-t border-white/10 px-4 py-3 grid gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="mt-1 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold text-center">Hire Me</a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
