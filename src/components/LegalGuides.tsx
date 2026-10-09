import React, { useState } from 'react';
import { HeartHandshake, CheckCircle2, ShieldCheck, MessageCircle, FileCheck, ArrowRight, Scale, Clock, AlertCircle, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const LegalGuides: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'loas' | 'divorcio'>('loas');

  return (
    <section id="orientacoes" className="py-20 lg:py-28 bg-white dark:bg-[#1f1e1d] border-b border-stone-200 dark:border-[#383835]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1b3731]/5 dark:bg-[#dfc17b]/10 border border-[#1b3731]/15 dark:border-[#dfc17b]/20 text-[#1b3731] dark:text-[#dfc17b] text-xs font-bold uppercase tracking-wider">
            Orientação Jurídica & Cidadania
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1b3731] dark:text-[#fcfcfb] tracking-tight">
            Artigos e Guias Informativos
          </h2>
          <p className="text-stone-600 dark:text-[#b0afa9] text-sm sm:text-base leading-relaxed">
            Esclareça dúvidas essenciais sobre os seus direitos com informações técnicas, fundamentadas e de fácil compreensão elaboradas pelo nosso escritório.
          </p>

          {/* Tab Selector */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 bg-stone-100 dark:bg-[#262624] rounded-2xl border border-stone-200 dark:border-[#383835] max-w-md w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab('loas')}
                className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'loas'
                    ? 'bg-[#1b3731] dark:bg-[#2d524a] text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                <ShieldCheck className={`w-4 h-4 ${activeTab === 'loas' ? 'text-[#dfc17b]' : ''}`} />
                <span>LOAS para Autistas (TEA)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('divorcio')}
                className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'divorcio'
                    ? 'bg-[#1b3731] dark:bg-[#2d524a] text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                <HeartHandshake className={`w-4 h-4 ${activeTab === 'divorcio' ? 'text-[#dfc17b]' : ''}`} />
                <span>Divórcio Consensual</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'loas' ? (
            <motion.div
              key="loas"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-stone-50/80 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Graphic Card Image */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative max-w-sm rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-white group">
                    <img
                      src="/assets/card-loas.png"
                      alt="LOAS para Autistas - Aline Calves Advocacia"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-3.5 bg-white text-center border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#1b3731]">
                      <span>Benefício BPC / LOAS</span>
                      <span className="text-[#a9853e] font-mono text-[11px]">Lei 8.742/93</span>
                    </div>
                  </div>
                </div>

                {/* Text & Requirements Content */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold border border-blue-200/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-700" /> Amparo Social & Inclusão
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1b3731] leading-tight">
                    Conheça o Benefício BPC/LOAS para Pessoas com Autismo (TEA)
                  </h3>

                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    O <strong>Benefício de Prestação Continuada (BPC/LOAS)</strong> assegura um salário mínimo mensal para pessoas com Transtorno do Espectro Autista que comprovem vulnerabilidade social. O recurso é essencial para viabilizar terapias, fonoaudiologia, medicamentos e acompanhamento contínuo.
                  </p>

                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 space-y-3 shadow-xs">
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      Requisitos Legais para Concessão:
                    </h4>

                    <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                        <div>
                          <strong>1. Laudo Médico Multidisciplinar:</strong> Diagnóstico de Transtorno do Espectro Autista com indicação do CID e relatório das limitações no cotidiano.
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                        <div>
                          <strong>2. Renda Familiar Per Capita:</strong> Renda de até 1/4 do salário mínimo por pessoa da família, com possibilidade legal de abater gastos com tratamentos e saúde.
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                        <div>
                          <strong>3. Inscrição Ativa no CadÚnico:</strong> Registro no Cadastro Único atualizado no CRAS do seu município.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-blue-50/80 border border-blue-200 rounded-xl text-xs text-blue-950 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>Pedido indeferido pelo INSS?</strong> A via judicial com assessoria jurídica especializada frequentemente reverte a decisão e garante o pagamento retroativo desde a data do primeiro protocolo.
                    </span>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1%20Dra.%20Aline,%20gostaria%20de%20orienta%C3%A7%C3%A3o%20sobre%20o%20BPC/LOAS%20para%20Autismo."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1b3731] hover:bg-[#2d524a] text-white font-bold text-sm transition-all shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-[#dfc17b]" />
                      <span>Solicitar Análise de BPC/LOAS</span>
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          ) : (
            <motion.div
              key="divorcio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-stone-50/80 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Graphic Card Image */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative max-w-sm rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-white group">
                    <img
                      src="/assets/card-divorcio.png"
                      alt="Divórcio Consensual - Aline Calves Advocacia"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-3.5 bg-white text-center border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#1b3731]">
                      <span>Dissolução Matrimonial</span>
                      <span className="text-[#a9853e] font-mono text-[11px]">Via Extrajudicial</span>
                    </div>
                  </div>
                </div>

                {/* Text & Requirements Content */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-200/60">
                    <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" /> Respeito Mútuo & Celeridade
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1b3731] leading-tight">
                    Divórcio Consensual: Agilidade e Solução Extrajudicial em Cartório
                  </h3>

                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    O <strong>divórcio consensual</strong> permite que o encerramento do casamento ocorra de forma pacífica, com partilha equilibrada do patrimônio e sem o desgaste emocional e financeiro de um litígio judicial arrastado.
                  </p>

                  {/* Vantagens */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-[#1b3731] mb-1">
                        <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                        <span>Menor Desgaste</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-normal">
                        Preserva o diálogo civilizado e o equilíbrio dos filhos.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-[#1b3731] mb-1">
                        <Clock className="w-4 h-4 text-[#c5a059]" />
                        <span>Celeridade Total</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-normal">
                        Lavrado em cartório de notas em poucos dias úteis.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-[#1b3731] mb-1">
                        <Scale className="w-4 h-4 text-[#c5a059]" />
                        <span>Custos Otimizados</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-normal">
                        Custas e honorários significativamente menores.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2 text-xs sm:text-sm text-stone-700 shadow-xs">
                    <p className="font-bold text-stone-900">Como funciona o procedimento prático:</p>
                    <p>
                      Com o acordo entre as partes, redigimos a minuta contendo a partilha de bens e eventuais pensões. Havendo filhos menores, homologamos o acordo judicialmente com parecer célere do Ministério Público. A presença de advogado é obrigatória pela Lei Federal 11.441/07.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1%20Dra.%20Aline,%20gostaria%20de%20orienta%C3%A7%C3%A3o%20sobre%20Div%C3%B3rcio%20Consensual."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1b3731] hover:bg-[#2d524a] text-white font-bold text-sm transition-all shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-[#dfc17b]" />
                      <span>Iniciar Procedimento Consensual</span>
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
