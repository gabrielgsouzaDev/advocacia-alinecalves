import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Não resido em Praia Grande/SP. Posso ser atendido 100% online?',
      answer:
        'Sim! Atendemos clientes em todo o território nacional e brasileiros residentes no exterior. Os processos judiciais e a maioria dos atos notariais hoje tramitam de forma totalmente eletrônica. Assinaturas de contratos e procurações são feitas digitalmente pelo celular com total validade jurídica e fé pública.',
    },
    {
      question: 'Como são calculados e fixados os honorários advocatícios?',
      answer:
        'Os honorários são fixados com total transparência e rigor ético, tomando como referência a Tabela de Honorários da OAB/SP. Antes de qualquer contratação, apresentamos uma proposta detalhada contendo a forma de pagamento, prazos estimados e condições, sem qualquer custo oculto.',
    },
    {
      question: 'O que acontece se meu benefício (LOAS ou aposentadoria) já foi negado pelo INSS?',
      answer:
        'A negativa administrativa do INSS não é a palavra final. Temos vasta experiência em ajuizar ações na Justiça Federal para reverter o indeferimento. Além de buscar a concessão do benefício, exigimos o pagamento de todos os valores retroativos devidos desde o dia em que o requerimento foi protocolado.',
    },
    {
      question: 'O divórcio consensual pode ser realizado diretamente em cartório?',
      answer:
        'Sim. Quando o casal está em consenso sobre a partilha de bens e não há filhos menores ou incapazes, o divórcio extrajudicial pode ser lavrado em cartório de notas em poucos dias úteis. Havendo filhos menores, formalizamos o acordo consensual em juízo de maneira muito mais célere que um divórcio litigioso.',
    },
    {
      question: 'Como funciona o plantão 24h para casos criminais e urgências?',
      answer:
        'Situações emergenciais — como prisões em flagrante, audiências de custódia imediatas, cumprimento de mandados ou prazos judiciais fatais — contam com advogado especializado de plantão para atuação e atendimento prioritário imediato 24 horas por dia.',
    },
    {
      question: 'Quais documentos básicos devo apresentar na primeira consulta?',
      answer:
        'De início, basta um documento oficial com foto (RG ou CNH), comprovante de endereço recente e os papéis específicos do seu caso (ex: carteira de trabalho para INSS, certidão de casamento para divórcio, ou contrato do imóvel para usucapião). Se não tiver tudo em mãos, orientamos como obter.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-[#1f1e1d] border-b border-stone-200 dark:border-[#383835]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1b3731]/5 dark:bg-[#dfc17b]/10 border border-[#1b3731]/15 dark:border-[#dfc17b]/20 text-[#1b3731] dark:text-[#dfc17b] text-xs font-bold uppercase tracking-wider">
            Esclarecimentos Prévios
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1b3731] dark:text-[#fcfcfb] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-600 dark:text-[#b0afa9] text-sm sm:text-base leading-relaxed">
            Respostas diretas e transparentes para as dúvidas mais comuns dos nossos clientes antes da primeira consulta.
          </p>
        </div>

        {/* Accordion List with AnimatePresence */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 dark:border-[#383835] overflow-hidden transition-all bg-stone-50/60 dark:bg-[#262624] hover:bg-white dark:hover:bg-[#2c2b28] hover:border-[#1b3731]/30 dark:hover:border-[#dfc17b]/30 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-stone-900 dark:text-[#fcfcfb] leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`p-1.5 rounded-full shrink-0 ${
                      isOpen
                        ? 'bg-[#1b3731] dark:bg-[#dfc17b] text-white dark:text-[#1b3731]'
                        : 'bg-stone-200 dark:bg-[#383835] text-stone-700 dark:text-[#dfc17b]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-stone-600 dark:text-[#d8d7d4] leading-relaxed border-t border-stone-200/60 dark:border-[#383835]">
                        <p className="pt-3.5">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Small reassurance footer */}
        <div className="mt-12 p-6 rounded-3xl bg-[#1b3731]/5 dark:bg-[#262624] border border-[#1b3731]/15 dark:border-[#383835] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm font-bold text-[#1b3731] dark:text-[#fcfcfb]">
              Sua dúvida não foi listada aqui?
            </p>
            <p className="text-xs text-stone-600 dark:text-[#b0afa9] mt-0.5">
              Fale diretamente com nossa equipe e tire suas dúvidas sem qualquer compromisso.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1,%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20espec%C3%ADfica."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#1b3731] dark:bg-[#2d524a] hover:bg-[#2d524a] dark:hover:bg-[#3d6b61] text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            Tirar Dúvida no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
