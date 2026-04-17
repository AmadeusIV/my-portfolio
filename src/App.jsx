import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation / Header could be added here */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-slate-800">Hoang Manh Quan.</h1>
          <nav className="space-x-6 text-sm font-medium text-slate-600">
            <a href="#projects" className="hover:text-blue-600 transition-colors">Dự án</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Liên hệ</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-slate-900 py-8 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Hoang Manh Quan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
