import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContentCard } from '../components/ContentCard';
import { CpuIcon, DatabaseIcon, BrainCircuitIcon, ZapIcon, CheckCircleIcon } from 'lucide-react';
export function HowItWorks() {
  return <div className="min-h-screen w-full bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center mb-12 animate-fadeInScale">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-6 animate-float">
            <CpuIcon className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 text-center animate-fadeIn delay-200">
            Como a IA Funciona?
          </h1>
          <p className="text-white/90 text-lg text-center max-w-2xl animate-fadeIn delay-300">
            Entenda o processo por trás da inteligência artificial
          </p>
        </div>

        <div className="animate-fadeInUp delay-400">
          <ContentCard className="mb-8 bg-gradient-to-r from-emerald-500 to-blue-500 text-white" variant="gradient">
            <p className="text-lg leading-relaxed">
              A IA funciona através de algoritmos e dados que permitem que
              computadores aprendam padrões e tomem decisões.
            </p>
          </ContentCard>
        </div>

        <div className="space-y-6 mb-8">
          <div className="animate-slideInLeft delay-500">
            <ContentCard icon={<DatabaseIcon className="w-8 h-8 text-emerald-600" />} title="1. Aprendizado de Máquina" description="Os computadores analisam grandes quantidades de dados e identificam padrões. Quanto mais dados, melhor será aprendizado." />
          </div>
          <div className="animate-slideInRight delay-600">
            <ContentCard icon={<BrainCircuitIcon className="w-8 h-8 text-blue-600" />} title="2. Treinamento" description="É a IA é 'treinada' com exemplos. Por exemplo, para reconhecer gatos, mostramos milhares de fotos de gatos até que ela aprenda a identificá-los." />
          </div>
          <div className="animate-slideInLeft delay-700">
            <ContentCard icon={<ZapIcon className="w-8 h-8 text-teal-600" />} title="3. Processamento" description="Após o treinamento, a IA processa novas informações e toma decisões baseadas no que aprendeu." />
          </div>
        </div>

        <div className="animate-fadeInUp delay-800">
          <ContentCard className="bg-gradient-to-br from-emerald-100 to-blue-100">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon className="w-8 h-8 text-emerald-600 flex-shrink-0" />
              <h3 className="text-lg font-bold text-gray-900">Exemplo Prático</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Imagine ensinar uma criança a reconhecer frutas:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white rounded-lg p-4 transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  1
                </div>
                <p className="text-gray-700 text-sm">
                  Você mostra várias maçãs e diz "isso é uma maçã"
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-lg p-4 transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  2
                </div>
                <p className="text-gray-700 text-sm">
                  A criança observa características: redonda, vermelha, com
                  cabinho
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-lg p-4 transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  3
                </div>
                <p className="text-gray-700 text-sm">
                  Quando vê uma nova maçã, ela reconhece pelas padrões aprendidos
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-lg p-4 transition-all duration-300 hover:translate-x-2 hover:shadow-lg">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  4
                </div>
                <p className="text-gray-700 text-sm">
                  A IA funciona de forma similar, mas com milhões de exemplos e
                  muito mais rápido!
                </p>
              </div>
            </div>
          </ContentCard>
        </div>
      </main>
      <Footer />
    </div>;
}