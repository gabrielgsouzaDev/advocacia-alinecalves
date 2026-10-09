import React from 'react';
import { ShieldCheck, Scale, Award, Lock, Users, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const TrustPillars: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Sigilo Profissional & LGPD',
      desc: 'Todas as consultas e documentos contam com proteção legal estrita das prerrogativas da advocacia e legislação de dados.',
    },
    {
      icon: Award,
      title: 'Mais de 8 Anos de Atuação',
      desc: 'Escritório estabelecido com advogados associados especializados, aliando tradição jurídica e celeridade tecnológica.',
    },
    {
      icon: Scale,
      title: 'Transparência de Honorários',
      desc: 'Propostas formais fundamentadas na Tabela da OAB/SP, sem surpresas, com termos contratuais 100% claros.',
    },
    {
      icon: Clock,
      title: 'Plantão 24h em Urgências',
      desc: 'Atendimento prioritário ininterrupto para flagrantes penais, audiências de custódia e prazos processuais fatais.',
    },
  ];

  return (
    <section className="py-12 bg-[#1b3731] text-white border-y border-[#2d524a]/60 relative overflow-hidden">
      {/* Subtle luxury ambient texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-[#c5a059]/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-[#2d524a]/80 text-[#dfc17b] shrink-0 border border-white/10 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-stone-100 leading-snug mb-1 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-300/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
