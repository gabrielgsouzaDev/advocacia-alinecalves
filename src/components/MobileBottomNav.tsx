import React, { useState, useEffect } from 'react';
import { Home, Scale, FileCheck, UserCheck, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const MobileBottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const whatsappUrl =
    'https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1,%20estou%20em%20seu%20Site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sobreEl = document.getElementById('sobre');
      const atuacaoEl = document.getElementById('atuacao');
      const triagemEl = document.getElementById('triagem');

      if (triagemEl && scrollY >= triagemEl.offsetTop - 200) {
        setActiveTab('triagem');
      } else if (atuacaoEl && scrollY >= atuacaoEl.offsetTop - 200) {
        setActiveTab('atuacao');
      } else if (sobreEl && scrollY >= sobreEl.offsetTop - 200) {
        setActiveTab('sobre');
      } else {
        setActiveTab('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Navegação Rápida Mobile"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-stone-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-1.5 transition-all"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 items-center justify-items-center">
        {/* 1. Início */}
        <a
          href="#inicio"
          onClick={() => setActiveTab('inicio')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors ${
            activeTab === 'inicio' ? 'text-[#1b3731]' : 'text-stone-400 hover:text-stone-700'
          }`}
        >
          <Home className={`w-5 h-5 ${activeTab === 'inicio' ? 'text-[#1b3731] stroke-[2.4]' : ''}`} />
          <span className={`text-[10px] mt-0.5 font-bold ${activeTab === 'inicio' ? 'text-[#1b3731]' : 'font-medium'}`}>
            Início
          </span>
        </a>

        {/* 2. Sobre */}
        <a
          href="#sobre"
          onClick={() => setActiveTab('sobre')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors ${
            activeTab === 'sobre' ? 'text-[#1b3731]' : 'text-stone-400 hover:text-stone-700'
          }`}
        >
          <UserCheck className={`w-5 h-5 ${activeTab === 'sobre' ? 'text-[#1b3731] stroke-[2.4]' : ''}`} />
          <span className={`text-[10px] mt-0.5 font-bold ${activeTab === 'sobre' ? 'text-[#1b3731]' : 'font-medium'}`}>
            Sobre
          </span>
        </a>

        {/* 3. Triagem (Centro em Destaque) */}
        <a
          href="#triagem"
          onClick={() => setActiveTab('triagem')}
          className="flex flex-col items-center justify-center py-0.5 px-2 relative -top-2"
        >
          <div className="w-11 h-11 rounded-full bg-[#1b3731] text-[#dfc17b] flex items-center justify-center shadow-md border-2 border-white transform active:scale-95 transition-transform">
            <FileCheck className="w-5 h-5 text-[#dfc17b]" />
          </div>
          <span className="text-[10px] mt-0.5 font-extrabold text-[#1b3731]">
            Triagem
          </span>
        </a>

        {/* 4. Atuação */}
        <a
          href="#atuacao"
          onClick={() => setActiveTab('atuacao')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors ${
            activeTab === 'atuacao' ? 'text-[#1b3731]' : 'text-stone-400 hover:text-stone-700'
          }`}
        >
          <Scale className={`w-5 h-5 ${activeTab === 'atuacao' ? 'text-[#1b3731] stroke-[2.4]' : ''}`} />
          <span className={`text-[10px] mt-0.5 font-bold ${activeTab === 'atuacao' ? 'text-[#1b3731]' : 'font-medium'}`}>
            Atuação
          </span>
        </a>

        {/* 5. WhatsApp Direto */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-emerald-600 hover:text-emerald-700"
        >
          <div className="relative">
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <MessageCircle className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-[10px] mt-0.5 font-bold text-emerald-700">
            Plantão
          </span>
        </a>
      </div>
    </nav>
  );
};
