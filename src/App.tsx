/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AccessibilityProvider } from './context/AccessibilityContext.tsx';
import { AccessibilityBar } from './components/AccessibilityBar.tsx';
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

export default function App() {
  return (
    <AccessibilityProvider>
      <div className="min-h-screen flex flex-col bg-[#fbfcfb] dark:bg-[#1f1e1d] text-[#1b3731] dark:text-[#ececec] selection:bg-[#1b3731] dark:selection:bg-[#dfc17b] selection:text-[#dfc17b] dark:selection:text-[#1b3731] pb-16 lg:pb-0 transition-colors duration-300">
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

        {/* Barra de Acessibilidade Flutuante Sutil (Modo Escuro Claude + Ajuste de Fonte) */}
        <AccessibilityBar />

        {/* Botão de WhatsApp Flutuante apenas para Telas Desktop */}
        <FloatingWhatsApp />
      </div>
    </AccessibilityProvider>
  );
}
