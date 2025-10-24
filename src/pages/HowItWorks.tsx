import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContentCard } from '../components/ContentCard';
import { CpuIcon, DatabaseIcon, BrainCircuitIcon, ZapIcon, CheckCircleIcon } from 'lucide-react';
export function HowItWorks() {
  return <div className="min-h-screen w-full bg-gradient-to-br from-green-500 via-teal-500 to-blue-600">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-6">
            <CpuIcon className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 text-center">
            Como a IA Funciona?
          </h1>
          <p className="text-white/90 text-lg text-center max-w-2xl">
            Entenda o processo por trás da inteligência artificial
          </p>
        </div>
        {/* Process Overview */}
        <ContentCard className="mb-8 bg-gradient-to-r from-green-500 to-blue-500 text-white" variant="gradient">
          <p className="text-lg leading-relaxed">
            A IA funciona através de algoritmos e dados que permitem que
            computadores aprendam padrões e tomem decisões.
          </p>
        </ContentCard>
        {/* Three Steps */}
        <div className="space-y-6 mb-8">
          <ContentCard icon={<DatabaseIcon className="w-8 h-8 text-green-600" />} title="1. Aprendizado de Máquina" description="Os computadores analisam grandes quantidades de dados e identificam padrões. Quanto mais dados, melhor será aprendizado." />
          <ContentCard icon={<BrainCircuitIcon className="w-8 h-8 text-blue-600" />} title="2. Treinamento" description="É a IA é 'treinada' com exemplos. Por exemplo, para reconhecer gatos, mostramos milhares de fotos de gatos até que ela aprenda a identificá-los." />
          <ContentCard icon={<ZapIcon className="w-8 h-8 text-purple-600" />} title="3. Processamento" description="Após o treinamento, a IA processa novas informações e toma decisões baseadas no que aprendeu." />
        </div>
        {/* Practical Example */}
        <ContentCard className="bg-gradient-to-br from-green-100 to-blue-100">
          <div className="flex items-start gap-3 mb-4">
            <CheckCircleIcon className="w-8 h-8 text-green-600 flex-shrink-0" />
            <h3 className="text-lg font-bold text-gray-900">Exemplo Prático</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Imagine ensinar uma criança a reconhecer frutas:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-white rounded-lg p-4">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                1
              </div>
              <p className="text-gray-700 text-sm">
                Você mostra várias maçãs e diz "isso é uma maçã"
              </p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-lg p-4">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                2
              </div>
              <p className="text-gray-700 text-sm">
                A criança observa características: redonda, vermelha, com
                cabinho
              </p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-lg p-4">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                3
              </div>
              <p className="text-gray-700 text-sm">
                Quando vê uma nova maçã, ela reconhece pelas padrões aprendidos
              </p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-lg p-4">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                4
              </div>
              <p className="text-gray-700 text-sm">
                A IA funciona de forma similar, mas com milhões de exemplos e
                muito mais rápido!
              </p>
            </div>
          </div>
        </ContentCard>
      </main>
      <Footer />
    </div>;
}