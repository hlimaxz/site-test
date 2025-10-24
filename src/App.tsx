import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WhatIsAI } from './pages/WhatIsAI';
import { HowItWorks } from './pages/HowItWorks';
import { Applications } from './pages/Applications';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhatIsAI />} />
        <Route path="/como-funciona" element={<HowItWorks />} />
        <Route path="/aplicacoes" element={<Applications />} />
      </Routes>
    </BrowserRouter>;
}