import React from 'react';
import { ShieldCheck, MessageCircle, Clock, Award, MapPin, CheckCircle2, ArrowRight, FileCheck, Scale } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const whatsappUrl =
    'https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1,%20estou%20em%20seu%20Site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.';

  return (
    <section id="inicio" className="relative bg-gradient-to-b from-[#fbfcfb] via-[#f5f7f6] to-[#ecf0ee] dark:from-[#1f1e1d] dark:via-[#222220] dark:to-[#1c1b1a] pt-10 pb-16 lg:py-24 overflow-hidden border-b border-stone-200 dark:border-[#383835]">
      {/* Subtle luxury ambient radial glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#c5a059]/10 dark:bg-[#c5a059]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[600px] h-[600px] rounded-full bg-[#1b3731]/5 dark:bg-[#2d524a]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b3731]/5 dark:bg-[#dfc17b]/10 border border-[#1b3731]/15 dark:border-[#dfc17b]/25 text-[#1b3731] dark:text-[#dfc17b] text-xs font-bold tracking-wide shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#a9853e] dark:text-[#dfc17b]" />
              <span className="uppercase tracking-wider text-[11px]">Atendimento Humanizado & Plantão Jurídico 24h</span>
            </div>

            {/* Main Title with text-balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b3731] dark:text-[#fcfcfb] leading-[1.15] tracking-tight text-balance">
              Está enfrentando algum problema jurídico?
              <span className="block text-[#a9853e] dark:text-[#dfc17b] text-2xl sm:text-3xl lg:text-4xl mt-2.5 font-bold">
                Soluções ágeis, estratégicas e com total sigilo.
              </span>
            </h1>

            {/* Core Body Paragraph */}
            <p className="text-stone-700 dark:text-[#d8d7d4] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              No nosso escritório, unimos o rigor técnico da advocacia de excelência a um atendimento próximo e transparente. Atuamos com seriedade, firmeza e total comprometimento para resguardar o seu patrimônio, sua família e seus direitos.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#2d524a] dark:text-[#e0ded8] font-semibold text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#a9853e] dark:text-[#dfc17b] shrink-0" />
              <span>Atendimento presencial em Praia Grande/SP e digital seguro para todo o Brasil.</span>
            </div>

            {/* CTA Block */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <motion.a
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  whileTap={{ y: 0 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base tracking-wide shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] transition-all w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Falar com a Advogada no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  whileTap={{ y: 0 }}
                  href="#triagem"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-[#1b3731]/30 dark:border-[#444440] bg-white dark:bg-[#262624] hover:bg-stone-50 dark:hover:bg-[#2e2e2b] text-[#1b3731] dark:text-[#f5f5f4] font-bold text-sm tracking-wide shadow-xs transition-colors w-full sm:w-auto"
                >
                  <FileCheck className="w-4 h-4 text-[#a9853e] dark:text-[#dfc17b]" />
                  <span>Fazer Triagem do Caso Online</span>
                </motion.a>
              </div>

              <p className="text-xs text-stone-500 dark:text-[#b0afa9] flex items-center justify-center lg:justify-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2d524a] dark:text-[#dfc17b]" />
                Sigilo e prerrogativas profissionais assegurados pela Lei Federal 8.906/94 (Estatuto da OAB).
              </p>
            </div>

            {/* Key Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-stone-200 dark:border-[#383835] max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="font-extrabold text-2xl lg:text-3xl text-[#1b3731] dark:text-[#fcfcfb] tabular-nums tracking-tight">+8 Anos</p>
                <p className="text-xs text-stone-600 dark:text-[#b0afa9] font-semibold mt-0.5">De Experiência</p>
              </div>
              <div className="text-center lg:text-left border-x border-stone-200 dark:border-[#383835] px-3">
                <p className="font-extrabold text-2xl lg:text-3xl text-[#1b3731] dark:text-[#fcfcfb] font-mono tracking-tight">OAB/SP</p>
                <p className="text-xs text-stone-600 dark:text-[#b0afa9] font-semibold font-mono mt-0.5">399.132</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-extrabold text-2xl lg:text-3xl text-[#1b3731] dark:text-[#fcfcfb] tabular-nums tracking-tight">24h</p>
                <p className="text-xs text-stone-600 dark:text-[#b0afa9] font-semibold mt-0.5">Plantão Urgente</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Anchor & Office Plate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Luxury gold & emerald ambient backdrop border */}
              <div className="absolute -inset-2.5 bg-gradient-to-tr from-[#c5a059] via-[#2d524a] to-[#1b3731] rounded-3xl opacity-20 blur-md transform -rotate-1" />
              
              <div className="relative bg-white dark:bg-[#262624] p-3.5 rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] border border-stone-200/90 dark:border-[#383835] overflow-hidden group">
                {/* Office Facade Plate */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 dark:bg-[#1a1918]">
                  <img
                    src="/assets/placa.png"
                    alt="Placa do Escritório Aline Calves Advocacia"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <a
                    href="https://maps.app.goo.gl/pJVzdfqF2guKdSyh8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-5 group/addr hover:from-black/95 transition-all"
                    title="Ver localização no Google Maps"
                  >
                    <p className="text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 group-hover/addr:text-[#dfc17b] transition-colors">
                      <MapPin className="w-4 h-4 text-[#dfc17b] shrink-0 group-hover/addr:scale-125 transition-transform" />
                      <span>Av. Júlio Prestes de Albuquerque, 444 · Nova Mirim, Praia Grande/SP</span>
                    </p>
                  </a>
                </div>

                {/* Micro trust credentials strip */}
                <div className="mt-3.5 p-3 bg-stone-50 dark:bg-[#20201e] rounded-xl border border-stone-200/60 dark:border-[#383835] flex items-center justify-between text-xs text-stone-700 dark:text-[#d8d7d4]">
                  <span className="flex items-center gap-1.5 font-semibold text-[#1b3731] dark:text-[#dfc17b]">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] dark:text-[#dfc17b]" />
                    Atendimento Online & Presencial
                  </span>
                  <span className="text-[#a9853e] dark:text-[#dfc17b] font-bold uppercase tracking-wider text-[11px]">
                    Praia Grande & Brasil
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Gold Separator Stripe with elegant shimmer */}
      <div className="w-full h-2 gold-shimmer mt-14 shadow-inner" />
    </section>
  );
};
