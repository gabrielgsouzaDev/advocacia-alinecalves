import React, { useState } from 'react';
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Zap,
  CheckCircle2,
  X,
  Target,
  ArrowRight,
  DollarSign,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPitchModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const comparisonPoints = [
    {
      metric: 'Primeira Impressão & Autoridade',
      before: 'Página básica em construtor genérico com emojis informais e aspecto amador.',
      after:
        'Identidade jurídica de alto padrão com verde floresta (#1B3731) e dourado nobre (#C5A059), transmitindo autoridade sólida de mais de 8 anos.',
      impact: 'Valor percebido até 3x maior para honorários em causas de média e alta complexidade.',
    },
    {
      metric: 'Conversão & Qualificação no WhatsApp',
      before: 'Botão simples com mensagem genérica ("estou em seu site").',
      after:
        'Assistente Interativo de Triagem Prévia que já entrega ao WhatsApp da Dra. Aline a área exata, o momento processual e os documentos necessários.',
      impact: 'Economiza até 15 minutos por atendimento inicial e tria os clientes antes do contato.',
    },
    {
      metric: 'Segurança & Objeções do Cliente',
      before: 'Sem explicação sobre como funciona a contratação online ou cálculo de honorários.',
      after:
        'Seção "Como Funciona o Atendimento" em 4 passos transparentes + FAQ anti-objeções (atendimento online seguro, prazos e documentos).',
      impact: 'Reduz drasticamente o receio do cliente em contratar advocacia pela internet.',
    },
    {
      metric: 'Conformidade com a OAB (Provimento 205/2021)',
      before: 'Comunicação informal no estilo de rede social.',
      after:
        'Rigor ético impecável, sem mercantilização, com caráter informativo e destaque claro para a inscrição OAB/SP 399.132.',
      impact: 'Zero risco de questionamentos éticos pelo Tribunal de Ética da OAB.',
    },
    {
      metric: 'Performance & Experiência Mobile',
      before: 'Carregamento pesado de scripts do Zyro e dependência de widgets lentos.',
      after:
        'Código ultra-rápido em React + Tailwind com fluidez visual e botões projetados para o polegar no smartphone.',
      impact: 'Mais de 85% das pessoas buscam advogados pelo celular e não desistem por lentidão.',
    },
    {
      metric: 'SEO Local & Recomendação por IAs (ChatGPT, Perplexity, Gemini, Google Maps)',
      before: 'Zero estrutura de dados, sem coordenadas geográficas e invisível para mecanismos modernos de IA.',
      after:
        'Otimização GEO completa: Schema.org Graph (LegalService, OfferCatalog, FAQPage), geolocalização precisa de Praia Grande/SP, rota oficial no Google Maps e conteúdo estruturado para ser citado por IAs generativas.',
      impact: 'O escritório passa a ser citado diretamente quando clientes pesquisam advogados em Praia Grande no Google ou em ferramentas de Inteligência Artificial.',
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-3xl shadow-2xl border border-stone-200 max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#1b3731] text-white p-6 flex items-center justify-between border-b border-[#2d524a]">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 bg-[#c5a059] text-[#1b3731] rounded-2xl shadow-sm">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white leading-tight">
                  Dossiê de Valor: Apresentação para a Dra. Aline Calves
                </h3>
                <p className="text-xs text-[#dfc17b] font-medium">
                  Argumentos e melhorias estratégicas para apresentar e fechar o projeto
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-stone-700">
            <div className="p-4.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed">
              <strong>Resumo para o seu Pitch de Vendas:</strong> O objetivo desta refatoração não foi apenas mudar o visual, mas transformar o site da Dra. Aline em uma <strong>máquina de autoridade jurídica e qualificação de clientes</strong>. Mostre a ela que o site antigo perdia clientes por parecer amador, enquanto este novo posiciona o escritório no patamar dos grandes escritórios de São Paulo.
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                Comparativo Estratégico: O Site Antigo vs. O Novo Site Refatorado
              </h4>

              <div className="space-y-3">
                {comparisonPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 rounded-2xl border border-stone-200 bg-stone-50/70 hover:bg-white hover:border-[#1b3731]/40 transition-all space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm text-stone-900 flex items-center gap-2">
                        <Target className="w-4 h-4 text-[#1b3731]" />
                        <span>{pt.metric}</span>
                      </p>
                      <span className="text-[11px] font-semibold text-[#1b3731] bg-[#1b3731]/10 px-2.5 py-0.5 rounded-full">
                        Impacto Comercial
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl bg-red-50/60 border border-red-100 text-red-950">
                        <strong className="block text-[11px] uppercase tracking-wider text-red-700 mb-1">
                          Como era no site original:
                        </strong>
                        {pt.before}
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-emerald-950">
                        <strong className="block text-[11px] uppercase tracking-wider text-emerald-700 mb-1">
                          Como ficou agora (Melhoria):
                        </strong>
                        {pt.after}
                      </div>
                    </div>

                    <p className="text-[11px] text-stone-600 font-medium pt-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong>Ganho para o escritório:</strong> {pt.impact}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#1b3731] text-white space-y-2">
              <h5 className="font-bold text-sm text-[#dfc17b] flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Sugestão de Proposta Financeira para a Cliente:
              </h5>
              <p className="text-xs text-stone-200/90 leading-relaxed">
                Você pode precificar esta refatoração entre <strong>R$ 2.500 a R$ 4.500</strong> como taxa única de desenvolvimento e implantação, mais uma mensalidade de <strong>R$ 150 a R$ 300/mês</strong> para hospedagem rápida, suporte técnico e atualizações periódicas de artigos da Dra. Aline.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex justify-between items-center text-xs">
            <span className="text-stone-500 font-medium">
              Pronto para ser entregue e publicado
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#1b3731] hover:bg-[#2d524a] text-white font-bold transition-colors cursor-pointer"
            >
              Concluir Visualização
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
