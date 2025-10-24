import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrainCircuitIcon } from 'lucide-react';
export function Header() {
  const location = useLocation();
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
  return <header className="w-full px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <BrainCircuitIcon className="w-8 h-8 text-white" />
        <span className="text-white font-bold text-lg">GH Company</span>
        <span className="text-white/80 ml-2">IA Explicada</span>
      </div>
      <nav className="flex items-center gap-6">
        {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-white transition-opacity hover:opacity-100 ${location.pathname === link.path ? 'opacity-100 font-semibold' : 'opacity-80'}`}>
            {link.label}
          </Link>)}
      </nav>
    </header>;
}