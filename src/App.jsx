import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(1000px_400px_at_50%_10%,rgba(56,189,248,0.10),transparent)]" />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
