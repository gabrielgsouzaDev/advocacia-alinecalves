import React, { useState } from 'react';
import {
  Home,
  Users,
  Briefcase,
  ShieldAlert,
  FileText,
  Car,
  Lock,
  Landmark,
  ArrowRight,
  CheckCircle2,
  Search,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Area {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  badge?: string;
  items: string[];
}

export const PracticeAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>('imobiliario');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const areas: Area[] = [
    {
      id: 'imobiliario',
      name: 'Direito Imobiliário',
      icon: Home,
      tagline: 'Segurança jurídica para o seu patrimônio imobiliário',
      items: [
        'Ações de usucapião (judicial e extrajudicial)',
        'Regularização completa de imóveis e registros',
        'Contratos e ações de locação comercial e residencial',
        'Ações de despejo e cobrança de aluguéis',
        'Ações de reintegração e manutenção de posse',
        'Consultoria especializada para compra e venda de imóveis',
        'Conflitos e assessoria em condomínios edilícios',
        'Acordos e soluções extrajudiciais em cartório',
      ],
    },
    {
      id: 'previdenciario',
      name: 'Direito Previdenciário',
      icon: Briefcase,
      badge: 'Especialidade',
      tagline: 'Conquiste a melhor aposentadoria e garanta seus benefícios do INSS',
      items: [
        'Planejamento de aposentadoria personalizado com cálculo de tempo',
        'Aposentadoria por idade, tempo de contribuição e especial',
        'Aposentadoria por incapacidade permanente e auxílio por incapacidade temporária',
        'Benefício de Prestação Continuada (BPC / LOAS - Idoso e Autismo/Deficiência)',
        'Pensão por morte e salário-maternidade',
        'Revisão criteriosa de benefícios previdenciários concedidos',
        'Assessoria técnica presencial em perícias médicas do INSS',
        'Simulações previdenciárias e certidões (CTC/CNIS)',
        'Orientações sobre contribuições retroativas em atraso',
      ],
    },
    {
      id: 'familia',
      name: 'Direito de Família',
      icon: Users,
      badge: 'Atendimento Humanizado',
      tagline: 'Soluções sensíveis, seguras e com foco no bem-estar de toda a família',
      items: [
        'Divórcio consensual (rápido em cartório) e divórcio litigioso',
        'Guarda compartilhada e guarda unilateral',
        'Pensão alimentícia: fixação, revisão, exoneração e execução de atrasados',
        'Divisão de bens e partilha em divórcio ou união estável',
        'Regulamentação e alteração de visitas',
        'Inventário judicial e inventário extrajudicial em cartório',
        'Reconhecimento e negatória de paternidade (exame de DNA)',
        'Alienação parental e proteção integral dos filhos',
        'Medidas protetivas de urgência e Lei Maria da Penha',
        'Mediação, conciliação e pactos pré-nupciais',
      ],
    },
    {
      id: 'consumidor',
      name: 'Direito do Consumidor',
      icon: ShieldAlert,
      tagline: 'Defesa incansável contra abusos de empresas, bancos e planos de saúde',
      items: [
        'Ações indenizatórias por negativação indevida (SPC/Serasa)',
        'Cobranças indevidas, golpes digitais e tarifas bancárias abusivas',
        'Produtos com defeito e recusa de garantia/troca pelo fornecedor',
        'Ações contra planos de saúde (negativa de cirurgias, medicamentos ou home care)',
        'Conflitos com companhias aéreas (voo cancelado, atraso e extravio de bagagem)',
        'Serviços públicos essenciais (energia, água, telefonia)',
        'Indenizações integrais por danos morais e materiais',
      ],
    },
    {
      id: 'civel',
      name: 'Direito Cível',
      icon: FileText,
      tagline: 'Contratos precisos, reparações civis e resolução de litígios',
      items: [
        'Elaboração, análise e revisão criteriosa de contratos civis',
        'Ações de rescisão contratual com restituição de valores pagos',
        'Ações de cobrança e execuções de títulos de crédito',
        'Indenizações civis por danos morais, estéticos e patrimoniais',
        'Disputas possessórias e proteção de propriedade',
        'Ações contra seguradoras por negativa de cobertura securitária',
        'Interdição civil, nomeação de curador e tutela',
        'Testamentos, doações e planejamento sucessório patrimonial',
      ],
    },
    {
      id: 'transito',
      name: 'Direito de Trânsito - DETRAN/DER',
      icon: Car,
      tagline: 'Defesa técnica para proteger o seu direito de dirigir',
      items: [
        'Recursos administrativos de multas municipais, estaduais e federais',
        'Processos de suspensão do direito de dirigir (bafômetro, pontos)',
        'Processos de cassação de CNH',
        'Defesas na esfera administrativa (JARI / CETRAN / PRF)',
        'Ações judiciais com pedido liminar para desbloqueio imediato da CNH',
        'Liberação de veículos apreendidos e regularização documental',
      ],
    },
    {
      id: 'criminal',
      name: 'Direito Criminal',
      icon: Lock,
      badge: 'Plantão 24h',
      tagline: 'Defesa especializada 24 horas para situações urgentes',
      items: [
        'Atendimento imediato 24h para prisões em flagrante delito',
        'Acompanhamento presencial em audiências de custódia',
        'Pedidos de liberdade provisória e revogação de prisão preventiva',
        'Impetração de Habeas Corpus perante Tribunais Estaduais e Superiores (STJ/STF)',
        'Acompanhamento em inquéritos policiais e delegacias de polícia',
        'Defesa técnica especializada em processos penais e tribunal do júri',
      ],
    },
    {
      id: 'extrajudicial',
      name: 'Serviços Extrajudiciais',
      icon: Landmark,
      tagline: 'Celeridade e economia sem passar pela morosidade do Judiciário',
      items: [
        'Acompanhamento e representação em Cartórios de Notas e Registro de Imóveis',
        'Escrituras públicas de compra e venda, doação e reconhecimento de união estável',
        'Inventários e divórcios rápidos lavrados em cartório',
        'Elaboração de atas notariais e notificações extrajudiciais probatórias',
        'Consultoria jurídica preventiva empresarial e familiar',
        'Acompanhamento personalizado em audiências e mediações',
      ],
    },
  ];

  const filteredAreas = areas.filter(
    (a) =>
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const activeAreaObj = areas.find((a) => a.id === selectedArea) || areas[0];

  return (
    <section id="atuacao" className="py-20 lg:py-28 bg-[#fbfcfb] dark:bg-[#1f1e1d] border-b border-stone-200 dark:border-[#383835]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1b3731]/5 dark:bg-[#dfc17b]/10 border border-[#1b3731]/15 dark:border-[#dfc17b]/20 text-[#1b3731] dark:text-[#dfc17b] text-xs font-bold uppercase tracking-wider">
            Corpo Jurídico Multidisciplinar
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1b3731] dark:text-[#fcfcfb] tracking-tight">
            ÁREAS DE ATUAÇÃO
          </h2>
          <p className="text-stone-600 dark:text-[#b0afa9] text-sm sm:text-base leading-relaxed">
            Oferecemos suporte jurídico integral com advogados especialistas em cada ramo, assegurando solidez técnica, confidencialidade e respostas céleres.
          </p>

          {/* Quick search input */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 dark:text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Busque por divórcio, usucapião, INSS, multas, contratos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white dark:bg-[#262624] border border-stone-300 dark:border-[#444440] text-stone-900 dark:text-[#f5f5f4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1b3731] dark:focus:ring-[#dfc17b] focus:border-transparent transition-all shadow-xs placeholder:text-stone-400 dark:placeholder:text-stone-500"
              />
            </div>
          </div>
        </div>

        {/* Desktop & Tablet: Interactive 2-Column Bento Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List of Area Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            {filteredAreas.map((area) => {
              const Icon = area.icon;
              const isSelected = area.id === activeAreaObj.id;
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-[#1b3731] dark:bg-[#2d524a] text-white border-[#1b3731] dark:border-[#3d6b61] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] transform translate-x-1'
                      : 'bg-white dark:bg-[#262624] hover:bg-stone-50 dark:hover:bg-[#2e2e2b] text-stone-800 dark:text-[#f5f5f4] border-stone-200 dark:border-[#383835] shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isSelected ? 'bg-white/10 text-[#dfc17b]' : 'bg-[#1b3731]/5 dark:bg-[#dfc17b]/10 text-[#1b3731] dark:text-[#dfc17b]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base leading-snug">{area.name}</p>
                      <p
                        className={`text-xs line-clamp-1 mt-0.5 ${
                          isSelected ? 'text-stone-300 dark:text-stone-200' : 'text-stone-500 dark:text-[#b0afa9]'
                        }`}
                      >
                        {area.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {area.badge && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          isSelected
                            ? 'bg-[#c5a059] dark:bg-[#dfc17b] text-[#1b3731]'
                            : 'bg-[#1b3731]/10 dark:bg-[#dfc17b]/20 text-[#1b3731] dark:text-[#dfc17b]'
                        }`}
                      >
                        {area.badge}
                      </span>
                    )}
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected ? 'text-[#dfc17b] translate-x-1' : 'text-stone-400 dark:text-stone-500'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Area Details Card with AnimatePresence */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAreaObj.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white dark:bg-[#262624] rounded-3xl p-6 sm:p-9 border border-stone-200 dark:border-[#383835] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.2)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#1b3731]/5 dark:bg-[#dfc17b]/5 rounded-bl-full pointer-events-none" />

                <div className="flex items-center gap-4 text-[#1b3731] dark:text-[#fcfcfb]">
                  <div className="p-3 bg-[#1b3731]/5 dark:bg-[#dfc17b]/10 rounded-2xl text-[#1b3731] dark:text-[#dfc17b]">
                    {React.createElement(activeAreaObj.icon, { className: 'w-8 h-8 text-[#1b3731] dark:text-[#dfc17b]' })}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1b3731] dark:text-[#fcfcfb] leading-tight">
                      {activeAreaObj.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#a9853e] dark:text-[#dfc17b] mt-0.5 uppercase tracking-wider">
                      {activeAreaObj.tagline}
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-stone-100 dark:bg-[#383835] my-6" />

                <div>
                  <h4 className="text-xs font-bold text-stone-700 dark:text-[#d8d7d4] uppercase tracking-wider mb-4">
                    Serviços e Demandas Abrangidas com Assessoria Completa:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeAreaObj.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-stone-50 dark:bg-[#20201e] border border-stone-200/70 dark:border-[#383835] flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-[#d8d7d4] hover:border-[#1b3731]/30 dark:hover:border-[#dfc17b]/30 hover:bg-white dark:hover:bg-[#2c2b28] transition-all"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#c5a059] dark:text-[#dfc17b] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation CTA for this area */}
                <div className="mt-8 pt-6 border-t border-stone-100 dark:border-[#383835] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-stone-500 dark:text-[#b0afa9] font-medium">Precisa de orientação jurídica neste ramo?</p>
                    <p className="text-sm font-bold text-[#1b3731] dark:text-[#fcfcfb]">
                      Atendimento direto com a equipe titular
                    </p>
                  </div>

                  <a
                    href={`https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1%20Dra.%20Aline,%20tenho%20d%C3%BAvidas%20sobre%20${encodeURIComponent(
                      activeAreaObj.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1b3731] dark:bg-[#2d524a] hover:bg-[#2d524a] dark:hover:bg-[#3d6b61] text-white font-bold text-sm transition-all shadow-sm hover:shadow-md"
                  >
                    <span>Consultar sobre {activeAreaObj.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#dfc17b]" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
