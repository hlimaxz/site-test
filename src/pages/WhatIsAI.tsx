import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContentCard } from '../components/ContentCard';
import { BrainCircuitIcon, LightbulbIcon, SparklesIcon, HelpCircleIcon, BookOpenIcon } from 'lucide-react';
export function WhatIsAI() {
  return <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center mb-12 animate-fadeInScale">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-6 animate-float">
            <BrainCircuitIcon className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 text-center animate-fadeIn delay-200">
            O que é Inteligência Artificial?
          </h1>
          <p className="text-white/90 text-lg text-center max-w-2xl animate-fadeIn delay-300">
            Descubra o mundo fascinante da IA de forma simples
          </p>
        </div>

        <div className="animate-fadeInUp delay-400">
          <ContentCard className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white" variant="gradient">
            <p className="text-lg leading-relaxed">
              Inteligência Artificial (IA) é a capacidade de máquinas e
              computadores realizarem tarefas que normalmente requerem
              inteligência humana.
            </p>
          </ContentCard>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="animate-slideInLeft delay-500">
            <ContentCard icon={<LightbulbIcon className="w-8 h-8 text-blue-600" />} title="Definição Simples" description="IA são programas de computador que podem aprender, raciocinar e tomar decisões de forma similar aos humanos, mas de maneira automatizada." />
          </div>
          <div className="animate-slideInRight delay-600">
            <ContentCard icon={<SparklesIcon className="w-8 h-8 text-cyan-600" />} title="Exemplos do Dia a Dia">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Assistentes virtuais como Siri e Alexa</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Recomendações da Netflix e Spotify</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Filtros de spam em emails</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Tradutores automáticos</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Carros autônomos</span>
                </li>
              </ul>
            </ContentCard>
          </div>
        </div>

        <div className="animate-fadeInUp delay-700">
          <ContentCard icon={<HelpCircleIcon className="w-8 h-8 text-blue-600" />} title="Por que é Importante?" description="A IA está revolucionando a forma como vivemos e trabalhamos, tornando processos mais rápidos, eficientes e acessíveis para todos." className="mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="animate-fadeInUp delay-800">
            <ContentCard icon={<BookOpenIcon className="w-8 h-8 text-blue-600" />} title="Como a IA aprende?" description="A IA aprende analisando grandes quantidades de dados e identificando padrões para realizar suas decisões de longo prazo." />
          </div>
          <div className="animate-fadeInUp delay-800">
            <ContentCard icon={<SparklesIcon className="w-8 h-8 text-cyan-600" />} title="O que é aprendizado de máquina?" description="É uma área da IA que permite que os computadores aprendam com dados, sem serem programados diretamente para cada tarefa. Chamado de 'Machine Learning'." />
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}