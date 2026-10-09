/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustPillars } from './components/TrustPillars.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { PracticeAreas } from './components/PracticeAreas.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { CaseDiagnostic } from './components/CaseDiagnostic.tsx';
import { LegalGuides } from './components/LegalGuides.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { ContactFormSection } from './components/ContactFormSection.tsx';
import { GeoAuthoritySection } from './components/GeoAuthoritySection.tsx';
import { MapLocation } from './components/MapLocation.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { MobileBottomNav } from './components/MobileBottomNav.tsx';
import { ClientPitchModal } from './components/ClientPitchModal.tsx';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [pitchOpen, setPitchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfcfb] text-[#1b3731] selection:bg-[#1b3731] selection:text-[#dfc17b] pb-16 lg:pb-0">
      {/* Header com navegação direta e nomes curtos */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner com autoridade jurídica */}
        <Hero />

        {/* 4 Pilares Institucionais de Confiança e Segurança */}
        <TrustPillars />

        {/* Perfil & Credenciais da Titular Dra. Aline Souza Calves */}
        <AboutSection />

        {/* 8 Áreas de Atuação Especializadas com Busca e Abas */}
        <PracticeAreas />

        {/* Como Funciona o Atendimento em 4 Etapas Transparentes */}
        <HowItWorks />

        {/* Assistente Interativo de Triagem Prévia do Caso */}
        <CaseDiagnostic />

        {/* Artigos e Orientações Jurídicas (LOAS & Divórcio) */}
        <LegalGuides />

        {/* Dúvidas Frequentes (FAQ) */}
        <FAQSection />

        {/* Formulário de Contato e Dúvidas com Validação */}
        <ContactFormSection />

        {/* Autoridade Regional, Jurisdição e Otimização GEO / IA */}
        <GeoAuthoritySection />

        {/* Localização e Mapa Integrado de Praia Grande/SP */}
        <MapLocation />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Menu Inferior Estilo App Mobile (Thumb Navigation) */}
      <MobileBottomNav />

      {/* Botão de WhatsApp Flutuante apenas para Telas Desktop */}
      <FloatingWhatsApp />

      {/* Botão Discreto para o Desenvolvedor acessar o Dossiê Comercial */}
      <aside aria-label="Acesso ao Dossiê Comercial" className="fixed bottom-20 lg:bottom-6 left-4 sm:left-6 z-40">
        <button
          onClick={() => setPitchOpen(true)}
          className="flex items-center gap-2 bg-[#1b3731]/95 hover:bg-[#1b3731] text-white text-[11px] sm:text-xs font-semibold px-3.5 py-2 rounded-full shadow-[0_10px_25px_-5px_rgba(27,55,49,0.3)] border border-[#c5a059]/40 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Ver argumentos comerciais e comparativo antes vs. depois para apresentar à Dra. Aline"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#dfc17b]" />
          <span className="hidden sm:inline">Dossiê de Apresentação Comercial</span>
          <span className="sm:hidden">Dossiê</span>
        </button>
      </aside>

      {/* Modal com Dossiê Comercial e Comparativo */}
      <ClientPitchModal isOpen={pitchOpen} onClose={() => setPitchOpen(false)} />
    </div>
  );
}
