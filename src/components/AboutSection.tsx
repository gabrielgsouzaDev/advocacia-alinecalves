import React from 'react';
import { Award, GraduationCap, BookOpen, Scale, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const credentials = [
    {
      title: 'Graduação em Direito',
      desc: 'Universidade Católica de Santos (UniSantos), turma de 2016.',
      icon: GraduationCap,
    },
    {
      title: 'Pós-Graduações Concluídas',
      desc: 'Especialista em Direito Público, Direito Processual Civil e Direito Previdenciário.',
      icon: Award,
    },
    {
      title: 'Pós-Graduação em Andamento',
      desc: 'Direito de Família e Direito Trabalhista pela Faculdade Legale.',
      icon: BookOpen,
    },
    {
      title: 'Pesquisa Acadêmica Institucional',
      desc: 'Ex-pesquisadora do CNPq/PIBIC (Conselho Nacional de Desenvolvimento Científico e Tecnológico).',
      icon: Scale,
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white dark:bg-[#1f1e1d] border-b border-stone-200 dark:border-[#383835] relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Luxury architectural double border with champagne gold */}
              <div className="absolute -inset-3 bg-[#1b3731] dark:bg-[#dfc17b] rounded-3xl transform rotate-1 opacity-10" />
              <div className="absolute -inset-3 bg-[#c5a059] rounded-3xl transform -rotate-1 opacity-20" />
              
              <div className="relative bg-white dark:bg-[#262624] p-3.5 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-stone-200 dark:border-[#383835]">
                <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 dark:bg-[#1a1918] flex items-center justify-center relative group">
                  <img
                    src="/assets/dra-aline.png"
                    alt="Dra. Aline Souza Calves - Advogada OAB/SP 399.132"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b3731]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-xs font-medium">Dra. Aline Souza Calves</p>
                  </div>
                </div>

                <div className="mt-4 text-center pb-2">
                  <h3 className="text-xl font-extrabold text-[#1b3731] dark:text-[#fcfcfb]">Dra. Aline Souza Calves</h3>
                  <p className="text-xs font-semibold text-stone-500 dark:text-[#b0afa9] uppercase tracking-widest mt-0.5 font-mono">
                    Advogada Titular · OAB/SP 399.132
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs bg-[#1b3731]/5 dark:bg-[#dfc17b]/10 text-[#1b3731] dark:text-[#dfc17b] px-3.5 py-1.5 rounded-full font-semibold border border-[#1b3731]/10 dark:border-[#dfc17b]/20">
                    <Shield className="w-3.5 h-3.5 text-[#c5a059] dark:text-[#dfc17b]" /> Atuação em todo o território nacional
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biography & Description Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a9853e] dark:text-[#dfc17b]">
                Advocacia com Rigor Técnico & Humanização
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1b3731] dark:text-[#fcfcfb] tracking-tight leading-tight">
                Dra. Aline Souza Calves
              </h2>
              <p className="text-sm font-semibold text-stone-600 dark:text-[#b0afa9] font-mono">
                Inscrita na Ordem dos Advogados do Brasil sob o nº 399.132
              </p>
            </div>

            <div className="text-stone-700 dark:text-[#d8d7d4] leading-relaxed space-y-4">
              <p className="text-base sm:text-lg">
                Inaugurado há <strong>mais de 8 anos</strong>, o escritório consolidou uma atuação destacada na Baixada Santista e em todo o país, associando advogados especialistas e fornecendo acompanhamento processual artesanal, individualizado e focado em resultados tangíveis.
              </p>
              
              <p className="text-base text-stone-600 dark:text-[#b0afa9]">
                Priorizamos uma advocacia com <strong>atendimento verdadeiramente humanizado, célere e transparente</strong>. Nosso compromisso é defender seus interesses com a máxima probidade e solidez probatória, seja em consultas presenciais ou através de atendimento digital seguro.
              </p>

              <div className="p-4 rounded-xl bg-stone-50 dark:bg-[#262624] border border-stone-200/90 dark:border-[#383835] text-xs text-stone-700 dark:text-[#d8d7d4] flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#c5a059] dark:text-[#dfc17b] shrink-0 mt-0.5" />
                <span>
                  <strong>Áreas de aprofundamento contínuo:</strong> Prática extrajudicial em cartórios (inventários e divórcios ágeis), advocacia consultiva preventiva e direito administrativo de trânsito.
                </span>
              </div>
            </div>

            {/* Qualifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="p-4 rounded-xl bg-stone-50/70 dark:bg-[#262624] border border-stone-200/90 dark:border-[#383835] hover:border-[#2d524a]/40 dark:hover:border-[#dfc17b]/40 hover:bg-white dark:hover:bg-[#2c2b28] transition-all flex gap-3.5"
                  >
                    <div className="p-2.5 rounded-lg bg-[#1b3731]/10 dark:bg-[#dfc17b]/15 text-[#1b3731] dark:text-[#dfc17b] shrink-0 self-start">
                      <Icon className="w-5 h-5 text-[#2d524a] dark:text-[#dfc17b]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 dark:text-[#fcfcfb]">{cred.title}</h4>
                      <p className="text-xs text-stone-600 dark:text-[#b0afa9] mt-1 leading-normal">{cred.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <a
                href="https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1%20Dra.%20Aline,%20gostaria%20de%20conversar%20sobre%20o%20meu%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1b3731] dark:text-[#dfc17b] hover:text-[#a9853e] dark:hover:text-[#f5f5f4] transition-colors group"
              >
                <span>Falar diretamente com a Dra. Aline Souza Calves</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
