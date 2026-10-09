import React from 'react';
import { MessageSquare, FileSearch, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Contato Inicial & Escuta Atenta',
      description:
        'Você entra em contato pelo WhatsApp ou formulário. Ouvimos sua situação com atenção humanizada e identificamos as urgências preliminares.',
    },
    {
      number: '02',
      icon: FileSearch,
      title: 'Análise Técnica & Documental',
      description:
        'Examinamos contratos, certidões ou negativas do INSS com estrito rigor probatório para mapear a via jurídica mais célere.',
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Estratégia & Contrato Transparente',
      description:
        'Apresentamos o plano de ação (extrajudicial em cartório ou judicial) e o contrato claro de honorários conforme as normas da OAB/SP.',
    },
    {
      number: '04',
      icon: CheckCircle2,
      title: 'Acompanhamento Contínuo',
      description:
        'Atuação firme nos tribunais e cartórios, com relatórios constantes para você sempre acompanhar cada andamento com tranquilidade.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-white dark:bg-[#1f1e1d] border-b border-stone-200 dark:border-[#383835] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1b3731]/5 dark:bg-[#dfc17b]/10 border border-[#1b3731]/15 dark:border-[#dfc17b]/20 text-[#1b3731] dark:text-[#dfc17b] text-xs font-bold uppercase tracking-wider">
            Processo de Trabalho Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1b3731] dark:text-[#fcfcfb] tracking-tight">
            Como Funciona o Nosso Atendimento
          </h2>
          <p className="text-stone-600 dark:text-[#b0afa9] text-sm sm:text-base leading-relaxed">
            Eliminamos a incerteza e o juridiquês. Conheça as etapas claras desde a sua primeira dúvida até o desfecho favorável da sua causa.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative bg-stone-50/70 dark:bg-[#262624] hover:bg-white dark:hover:bg-[#2c2b28] rounded-3xl p-7 border border-stone-200 dark:border-[#383835] hover:border-[#1b3731]/30 dark:hover:border-[#dfc17b]/30 transition-all duration-300 shadow-xs hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-3xl font-black text-[#c5a059] dark:text-[#dfc17b]">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-[#1b3731]/5 dark:bg-[#dfc17b]/10 text-[#1b3731] dark:text-[#dfc17b] border border-stone-200/80 dark:border-[#383835]">
                      <Icon className="w-5 h-5 text-[#2d524a] dark:text-[#dfc17b]" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 dark:text-[#fcfcfb] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-[#b0afa9] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/60 dark:border-[#383835] flex items-center gap-2 text-xs text-[#1b3731] dark:text-[#dfc17b] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] dark:text-[#dfc17b]" />
                  <span>Atendimento sem rodeios</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <motion.div
          whileHover={{ scale: 1.005, transition: { duration: 0.2 } }}
          className="mt-14 bg-gradient-to-r from-[#1b3731] via-[#24453e] to-[#1b3731] dark:from-[#223934] dark:via-[#2a453f] dark:to-[#223934] text-white rounded-3xl p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-[#2d524a]/80 dark:border-[#3d6b61]"
        >
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-[#dfc17b]">
              Precisa de orientação jurídica imediata?
            </h4>
            <p className="text-xs sm:text-sm text-stone-200/90 max-w-xl">
              Nossa equipe atende online para todo o Brasil e presencialmente em nosso escritório na Praia Grande/SP.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1,%20gostaria%20de%20iniciar%20meu%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#c5a059] hover:bg-[#dfc17b] text-[#1b3731] font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg shrink-0 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Falar com o Escritório Agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
