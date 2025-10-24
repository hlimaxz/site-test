import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContentCard } from '../components/ContentCard';
import { SparklesIcon, HeartIcon, GraduationCapIcon, TruckIcon, SmileIcon, BriefcaseIcon, RocketIcon } from 'lucide-react';
export function Applications() {
  return <div className="min-h-screen w-full bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center mb-12 animate-fadeInScale">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-6 animate-float">
            <SparklesIcon className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 text-center animate-fadeIn delay-200">
            Aplicações da IA
          </h1>
          <p className="text-white/90 text-lg text-center max-w-2xl animate-fadeIn delay-300">
            Veja onde a IA está transformando o mundo
          </p>
        </div>

        <div className="animate-fadeInUp delay-400">
          <ContentCard className="mb-8 bg-gradient-to-r from-rose-500 to-orange-500 text-white" variant="gradient">
            <p className="text-lg leading-relaxed">
              A Inteligência Artificial está presente em diversas áreas da nossa
              cotidiano.
            </p>
          </ContentCard>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="animate-fadeInUp delay-500">
            <ContentCard icon={<HeartIcon className="w-8 h-8 text-pink-600" />} title="Saúde">
              <ul className="space-y-2 text-sm text-gray-700 mt-3">
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Diagnósticos de doenças através de imagens médicas</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Desenvolvimento de novos medicamentos</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Monitoramento de pacientes</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Cirurgias assistidas por robôs</span>
                </li>
              </ul>
            </ContentCard>
          </div>
          <div className="animate-fadeInUp delay-600">
            <ContentCard icon={<GraduationCapIcon className="w-8 h-8 text-blue-600" />} title="Educação">
              <ul className="space-y-2 text-sm text-gray-700 mt-3">
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Plataformas de ensino personalizadas</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Correção automática de exercícios</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Tutores virtuais disponíveis 24/7</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Tradução de conteúdo educacional</span>
                </li>
              </ul>
            </ContentCard>
          </div>
          <div className="animate-fadeInUp delay-700">
            <ContentCard icon={<TruckIcon className="w-8 h-8 text-emerald-600" />} title="Transporte">
              <ul className="space-y-2 text-sm text-gray-700 mt-3">
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Veículos autônomos</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Otimização de rotas de entrega</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Previsão de tráfego</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Sistemas de estacionamento inteligente</span>
                </li>
              </ul>
            </ContentCard>
          </div>
          <div className="animate-fadeInUp delay-700">
            <ContentCard icon={<SmileIcon className="w-8 h-8 text-violet-600" />} title="Entretenimento">
              <ul className="space-y-2 text-sm text-gray-700 mt-3">
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Recomendações de filmes e músicas</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Criação de conteúdo (imagens, textos, músicas)</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Jogos com NPCs inteligentes</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Efeitos especiais em filmes</span>
                </li>
              </ul>
            </ContentCard>
          </div>
          <div className="animate-fadeInUp delay-800 md:col-span-2">
            <ContentCard icon={<BriefcaseIcon className="w-8 h-8 text-orange-600" />} title="Negócios">
              <ul className="space-y-2 text-sm text-gray-700 mt-3 grid md:grid-cols-2 gap-x-6">
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Atendimento ao cliente com chatbots</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Análise de dados e previsões</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Detecção de fraudes</span>
                </li>
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Automação de processos</span>
                </li>
              </ul>
            </ContentCard>
          </div>
        </div>

        <div className="animate-fadeInScale delay-800">
          <ContentCard className="bg-gradient-to-br from-rose-100 to-orange-100">
            <div className="flex items-start gap-3 mb-4">
              <RocketIcon className="w-8 h-8 text-orange-600 flex-shrink-0" />
              <h3 className="text-lg font-bold text-gray-900">O Futuro da IA</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A IA continuará avançando e se tornará mais presente em nossas
              vidas, ajudando a resolver problemas complexos e melhorando a
              qualidade de vida das pessoas.
            </p>
          </ContentCard>
        </div>
      </main>
      <Footer />
    </div>;
}