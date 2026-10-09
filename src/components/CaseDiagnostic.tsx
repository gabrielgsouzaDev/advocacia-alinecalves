import React, { useState } from 'react';
import {
  FileCheck,
  Send,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DiagnosticOption {
  id: string;
  label: string;
  recommendedDocs: string[];
}

export const CaseDiagnostic: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>('previdenciario');
  const [currentStatus, setCurrentStatus] = useState<string>('novo_pedido');
  const [preferredFormat, setPreferredFormat] = useState<string>('online');

  const areas: Record<string, DiagnosticOption> = {
    previdenciario: {
      id: 'previdenciario',
      label: 'Previdenciário (Aposentadoria / INSS / BPC LOAS)',
      recommendedDocs: [
        'Extrato previdenciário do Meu INSS (CNIS atualizado)',
        'Carteira de Trabalho física ou digital completa',
        'Laudos e relatórios médicos multidisciplinares (para LOAS, invalidez ou auxílio)',
        'Documento com foto (RG ou CNH) e comprovante de residência recente',
      ],
    },
    imobiliario: {
      id: 'imobiliario',
      label: 'Direito Imobiliário (Usucapião, Contratos ou Regularização)',
      recommendedDocs: [
        'Matrícula imobiliária atualizada ou certidão de ônus e ações',
        'Contrato particular de compra e venda / cessão de direitos possessórios',
        'Comprovantes de posse mansa e pacífica (contas de luz, IPTU antigos)',
        'Documentos pessoais de todos os titulares',
      ],
    },
    familia: {
      id: 'familia',
      label: 'Direito de Família (Divórcio, Pensão, Guarda ou Inventário)',
      recommendedDocs: [
        'Certidão de casamento ou escritura pública de união estável',
        'Certidões de nascimento dos filhos comuns',
        'Relação descritiva de bens e dívidas a partilhar (imóveis, veículos)',
        'Comprovantes de gastos ordinários dos filhos (para fixação/revisão de alimentos)',
      ],
    },
    consumidor: {
      id: 'consumidor',
      label: 'Direito do Consumidor (Negativação, Bancos ou Planos de Saúde)',
      recommendedDocs: [
        'Comprovante da inscrição indevida (extrato SPC/Serasa) ou extrato bancário',
        'Contratos, faturas e comprovantes de quitação contestados',
        'Protocolos de reclamação perante SAC, Ouvidoria ou Procon',
        'Negativa formal por escrito expedida pelo plano de saúde (se aplicável)',
      ],
    },
    transito: {
      id: 'transito',
      label: 'Direito de Trânsito (Suspensão de CNH ou Multas)',
      recommendedDocs: [
        'Notificação oficial de autuação ou penalidade do DETRAN/DER/PRF',
        'Cópia da CNH e CRLV do veículo autuado',
        'Prontuário completo de infrações',
      ],
    },
    criminal: {
      id: 'criminal',
      label: 'Direito Criminal (Plantão de Urgência 24 Horas)',
      recommendedDocs: [
        'Número do boletim de ocorrência ou inquérito policial (se houver)',
        'Localização exata da delegacia de polícia ou vara de custódia',
        'Contato direto de familiar responsável',
      ],
    },
  };

  const statuses = [
    { id: 'novo_pedido', label: 'Quero dar entrada em um novo pedido / ação' },
    { id: 'negado', label: 'Já recebi uma negativa ou indeferimento oficial' },
    { id: 'prazo', label: 'Recebi intimação / notificação e há prazo processual em curso' },
    { id: 'preventivo', label: 'Desejo consulta preventiva, parecer ou elaboração de contrato' },
  ];

  const currentAreaObj = areas[selectedArea] || areas.previdenciario;

  const generateWhatsappMessage = () => {
    const statusLabel =
      statuses.find((s) => s.id === currentStatus)?.label || currentStatus;
    const formatText =
      preferredFormat === 'online' ? '100% Online' : 'Presencial em Praia Grande/SP';

    const text = `Olá Dra. Aline Calves! Realizei a triagem prévia no site:\n\n*Área:* ${currentAreaObj.label}\n*Situação:* ${statusLabel}\n*Formato de Preferência:* ${formatText}\n\nGostaria de agendar uma análise para o meu caso.`;

    return `https://api.whatsapp.com/send?phone=5513996677007&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="triagem" className="py-20 lg:py-28 bg-[#fbfcfb] border-b border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#8c6b27] text-xs font-bold uppercase tracking-wider">
            Assistente Interativo de Triagem Prévia
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1b3731] tracking-tight">
            Descubra o Caminho Jurídico para o Seu Caso
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Selecione as informações fundamentais em 3 etapas para receber um direcionamento sob medida e saber quais documentos já deve providenciar.
          </p>
        </div>

        {/* Wizard Box with motion container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-[0_15px_40px_-10px_rgba(27,55,49,0.08)] max-w-4xl mx-auto"
        >
          
          <div className="space-y-9">
            {/* Step 1: Área */}
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1b3731] text-white flex items-center justify-center font-mono text-[10px]">1</span>
                  Qual é a matéria da sua necessidade?
                </label>
                <span className="text-[11px] font-semibold text-[#a9853e]">Etapa 1 de 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {Object.keys(areas).map((key) => {
                  const item = areas[key];
                  const isSelected = selectedArea === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedArea(key)}
                      className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#1b3731] text-white border-[#1b3731] shadow-sm transform -translate-y-0.5'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200/90'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 ${
                            isSelected ? 'text-[#dfc17b]' : 'text-stone-300'
                          }`}
                        />
                        <span className="line-clamp-2 leading-snug">{item.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Situação */}
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1b3731] text-white flex items-center justify-center font-mono text-[10px]">2</span>
                  Qual é o momento atual da demanda?
                </label>
                <span className="text-[11px] font-semibold text-[#a9853e]">Etapa 2 de 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {statuses.map((st) => {
                  const isSelected = currentStatus === st.id;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setCurrentStatus(st.id)}
                      className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#1b3731] text-white border-[#1b3731] shadow-sm transform -translate-y-0.5'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200/90'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 ${
                            isSelected ? 'text-[#dfc17b]' : 'text-stone-300'
                          }`}
                        />
                        <span className="leading-snug">{st.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Formato */}
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1b3731] text-white flex items-center justify-center font-mono text-[10px]">3</span>
                  Como prefere ser atendido?
                </label>
                <span className="text-[11px] font-semibold text-[#a9853e]">Etapa 3 de 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPreferredFormat('online')}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                    preferredFormat === 'online'
                      ? 'bg-[#1b3731] text-white border-[#1b3731] shadow-sm'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200/90'
                  }`}
                >
                  <p className="font-bold text-sm">Atendimento 100% Online</p>
                  <p className="text-xs opacity-80 mt-1 leading-relaxed">
                    Via WhatsApp ou videoconferência segura, válido para qualquer cidade do Brasil.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPreferredFormat('presencial')}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                    preferredFormat === 'presencial'
                      ? 'bg-[#1b3731] text-white border-[#1b3731] shadow-sm'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200/90'
                  }`}
                >
                  <p className="font-bold text-sm">Presencial em Praia Grande/SP</p>
                  <p className="text-xs opacity-80 mt-1 leading-relaxed">
                    Em nosso escritório na Av. Júlio Prestes de Albuquerque, 444, Nova Mirim.
                  </p>
                </button>
              </div>
            </div>

            {/* Result Box: Document Checklist & Action */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedArea + currentStatus + preferredFormat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-[#1b3731] flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#a9853e]" />
                    <span>Checklist de Documentos Recomendados para a 1ª Análise:</span>
                  </h4>
                  <span className="text-[11px] font-mono text-stone-500 bg-white px-2.5 py-0.5 rounded-full border border-stone-200">
                    {currentAreaObj.recommendedDocs.length} itens sugeridos
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentAreaObj.recommendedDocs.map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-stone-200/80 text-xs text-stone-700 flex items-start gap-2.5 shadow-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span className="leading-snug">{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-stone-500 text-center sm:text-left">
                    Não tem todos os papéis no momento? Não se preocupe, orientamos a obtenção durante a consulta.
                  </p>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={generateWhatsappMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar Triagem pelo WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
