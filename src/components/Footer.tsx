import React from 'react';
import { Phone, MapPin, Mail, Shield, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1b3731] text-stone-200 border-t border-[#2d524a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Identity & OAB */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="Aline Calves Advocacia Logo"
                className="h-11 w-auto object-contain brightness-110"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-extrabold text-base text-white">Aline Calves</p>
                <p className="text-[10px] text-[#dfc17b] font-bold tracking-widest uppercase">
                  Advocacia & Consultoria
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              Atendimento jurídico com excelência, ética e dedicação personalizada há mais de 8 anos. Atuação presencial na Baixada Santista e digital para todo o território nacional.
            </p>

            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg bg-white/5 text-stone-200 font-mono border border-white/10">
              <Shield className="w-3.5 h-3.5 text-[#dfc17b]" />
              <span>OAB/SP 399.132</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#dfc17b]">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Dra. Aline Souza Calves
                </a>
              </li>
              <li>
                <a href="#atuacao" className="hover:text-white transition-colors">
                  Todas as Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona o Atendimento
                </a>
              </li>
              <li>
                <a href="#triagem" className="hover:text-white transition-colors">
                  Triagem Online do Caso
                </a>
              </li>
              <li>
                <a href="#orientacoes" className="hover:text-white transition-colors">
                  Guias LOAS & Divórcio
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Formulário & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Principais Ramos */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#dfc17b]">
              Ramos de Atuação
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>Direito Imobiliário & Usucapião</li>
              <li>Direito Previdenciário (INSS & BPC)</li>
              <li>Direito de Família & Sucessões</li>
              <li>Direito do Consumidor & Indenizações</li>
              <li>Direito Cível & Contratos</li>
              <li>Direito de Trânsito (DETRAN/DER)</li>
              <li>Direito Criminal (Atendimento 24h)</li>
              <li>Serviços Extrajudiciais em Cartório</li>
            </ul>
          </div>

          {/* Col 4: Contato Direto */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#dfc17b]">
              Contato & Local
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#dfc17b] shrink-0" />
                <span className="font-bold text-white text-sm font-mono">(13) 99667-7007</span>
              </p>
              <a
                href="https://maps.app.goo.gl/pJVzdfqF2guKdSyh8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 leading-relaxed hover:text-white transition-colors group"
                title="Abrir endereço no Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#dfc17b] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>
                  Av. Júlio Prestes de Albuquerque, 444, Nova Mirim, Praia Grande/SP, 11717-110
                </span>
              </a>
              <div className="pt-2">
                <a
                  href="https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1,%20estou%20no%20site%20e%20gostaria%20de%20atendimento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp 24h</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line matching original exact text */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center space-y-2 text-xs text-stone-400">
          <p className="font-semibold text-stone-300">
            Copyright © 2025 Todos os direitos reservados · Aline Calves Advocacia
          </p>
          <p>
            Desenvolvido por{' '}
            <a
              href="http://lojalogoadvogado.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dfc17b] hover:underline"
            >
              lojalogoadvogado.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
