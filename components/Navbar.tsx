
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-extrabold tracking-tight text-indigo-600">
          {PORTFOLIO_DATA.name.split(' ')[0]}<span className="text-slate-900">.dev</span>
        </a>
        <div className="hidden md:flex gap-8 items-center font-medium">
          <a href="#about" className="hover:text-indigo-600 transition-colors">O mne</a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors">Zručnosti</a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projekty</a>
          <a href="#contact" className="px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg">
            Kontaktuj ma
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
