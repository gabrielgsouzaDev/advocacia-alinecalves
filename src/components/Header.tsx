import React from 'react';
import { Phone, MessageCircle, Shield, Clock } from 'lucide-react';

export const Header: React.FC = () => {
  const whatsappUrl =
    'https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1,%20estou%20em%20seu%20Site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.';

  return (
    <>
      {/* Top emergency announcement bar */}
      <div className="bg-[#1b3731] text-stone-200 text-xs py-2 px-4 border-b border-[#2d524a]/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="flex items-center gap-1.5 font-medium text-[#dfc17b]">
              <Clock className="w-3.5 h-3.5" /> Atendimento Humanizado & Plantão 24h
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-stone-300">
              Praia Grande/SP e Todo o Brasil (Online & Presencial)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-300 font-mono text-[11px] bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
              <Shield className="w-3 h-3 text-[#dfc17b]" /> OAB/SP 399.132
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <a
              href="tel:13996677007"
              className="hidden sm:flex items-center gap-1.5 text-[#dfc17b] hover:text-white transition-colors font-semibold tracking-wide"
            >
              <Phone className="w-3 h-3" /> (13) 99667-7007
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/90 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Name */}
            <a href="#inicio" className="flex items-center gap-3.5 group">
              <div className="relative h-13 w-auto flex items-center">
                <img
                  src="/assets/logo.png"
                  alt="Aline Calves Advocacia Logo"
                  className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg text-[#1b3731] dark:text-[#ececec] tracking-tight leading-tight group-hover:text-[#2d524a] dark:group-hover:text-[#dfc17b] transition-colors">
                  Aline Calves
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#a9853e] dark:text-[#dfc17b] uppercase">
                  Advocacia & Consultoria
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Compact, 1-word clear labels */}
            <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-stone-700 dark:text-stone-300">
              <a href="#inicio" className="hover:text-[#1b3731] dark:hover:text-[#dfc17b] transition-colors relative py-1 group">
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#sobre" className="hover:text-[#1b3731] dark:hover:text-[#dfc17b] transition-colors relative py-1 group">
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#atuacao" className="hover:text-[#1b3731] dark:hover:text-[#dfc17b] transition-colors relative py-1 group">
                Atuação
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#triagem" className="text-[#2d524a] dark:text-[#dfc17b] hover:text-[#1b3731] transition-colors relative py-1 group flex items-center gap-1 font-bold">
                Triagem
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#contato" className="hover:text-[#1b3731] dark:hover:text-[#dfc17b] transition-colors relative py-1 group">
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </a>
            </nav>

            {/* Action CTA for Desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 bg-[#1b3731] hover:bg-[#2d524a] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4 text-[#dfc17b]" />
                <span>Consulta WhatsApp</span>
              </a>
            </div>

            {/* Mobile Header Quick Tap (Call / WhatsApp direct action) */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-[11px] uppercase tracking-wide shadow-xs active:scale-95 transition-all"
                aria-label="WhatsApp direto"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Plantão</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
