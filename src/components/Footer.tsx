import React from 'react';
import { BrainCircuitIcon } from 'lucide-react';
export function Footer() {
  return <footer className="w-full px-6 py-12 flex items-center justify-between">
      <span className="text-white text-2xl font-light">GH Company</span>
      <div className="flex items-center gap-3">
        <BrainCircuitIcon className="w-16 h-16 text-white" />
        <div className="text-white">
          <div className="text-3xl font-bold">GH</div>
          <div className="text-sm tracking-wider">COMPANY</div>
        </div>
      </div>
    </footer>;
}