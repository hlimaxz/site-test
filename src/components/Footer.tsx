import React from 'react';
import { BrainCircuitIcon } from 'lucide-react';
export function Footer() {
  return <footer className="w-full px-6 py-12 flex items-center justify-between border-t border-white/10 mt-12">
      <span className="text-white text-2xl font-light animate-fadeIn transition-opacity hover:opacity-70">
        GH Company
      </span>
      <div className="flex items-center gap-3 animate-fadeIn delay-200">
        <BrainCircuitIcon className="w-16 h-16 text-white animate-pulse-soft" />
        <div className="text-white transition-transform hover:scale-105 duration-300">
          <div className="text-3xl font-bold">GH</div>
          <div className="text-sm tracking-wider">COMPANY</div>
        </div>
      </div>
    </footer>;
}