import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrainCircuitIcon } from 'lucide-react';
export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [{
    path: '/',
    label: 'O que é IA?'
  }, {
    path: '/como-funciona',
    label: 'Como Funciona'
  }, {
    path: '/aplicacoes',
    label: 'Aplicações'
  }];

  return <header className={`w-full px-6 py-4 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="flex items-center gap-2 animate-fadeIn">
        <BrainCircuitIcon className="w-8 h-8 text-white animate-float" />
        <span className="text-white font-bold text-lg">GH Company</span>
        <span className="text-white/80 ml-2">IA Explicada</span>
      </div>
      <nav className="flex items-center gap-6">
        {navLinks.map((link, index) => <Link key={link.path} to={link.path} className={`text-white transition-all duration-300 hover:opacity-100 hover:scale-110 hover:-translate-y-0.5 animate-fadeIn delay-${(index + 1) * 100} ${location.pathname === link.path ? 'opacity-100 font-semibold border-b-2 border-white' : 'opacity-80'}`}>
            {link.label}
          </Link>)}
      </nav>
    </header>;
}