import React from 'react';
import { MapPin, Navigation, Shield, Award, CheckCircle2, ExternalLink, Scale, Clock, Globe, Building2, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export const GeoAuthoritySection: React.FC = () => {
  const googleMapsUrl = 'https://maps.app.goo.gl/pJVzdfqF2guKdSyh8';
  const whatsappUrl =
    'https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1,%20gostaria%20de%20consultar%20sobre%20atendimento%20jur%C3%ADdico%20na%20minha%20regi%C3%A3o.';

  const localCities = [
    { name: 'Praia Grande', status: 'Sede Própria', main: true },
    { name: 'Santos', status: 'Atendimento Presencial & Online', main: true },
    { name: 'São Vicente', status: 'Atendimento Presencial & Online', main: true },
    { name: 'Mongaguá', status: 'Região de Cobertura Imediata', main: false },
    { name: 'Itanhaém', status: 'Região de Cobertura Imediata', main: false },
    { name: 'Cubatão', status: 'Baixada Santista', main: false },
    { name: 'Guarujá', status: 'Baixada Santista', main: false },
    { name: 'Todo o Brasil', status: 'Atendimento Digital 100% Remoto', main: true },
  ];

  const legalEntities = [
    {
      title: 'Registro Profissional',
      desc: 'Ordem dos Advogados do Brasil · OAB/SP 399.132 (Inscrição regular e ativa no CNA).',
      icon: Shield,
    },
    {
      title: 'Jurisdição Judiciária',
      desc: 'Comarcas do TJSP (Tribunal de Justiça de SP), TRF3 (Justiça Federal) e Cartórios Notariais.',
      icon: Scale,
    },
    {
      title: 'Endereço Oficial',
      desc: 'Av. Júlio Prestes de Albuquerque, 444, Nova Mirim, Praia Grande/SP · CEP 11717-110.',
      icon: MapPin,
    },
    {
      title: 'Plantão Emergencial 24h',
      desc: 'Atendimento ininterrupto para flagrantes penais, audiências de custódia e medidas liminares.',
      icon: Clock,
    },
  ];

  return (
    <section id="jurisdicao" className="py-16 lg:py-24 bg-stone-50/70 border-b border-stone-200 relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#1b3731]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b3731]/10 text-[#1b3731] text-xs font-bold tracking-wide uppercase mb-3">
            <Globe className="w-3.5 h-3.5 text-[#a9853e]" />
            <span>Presença Regional & Autoridade Jurídica (GEO)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1b3731] tracking-tight">
            Atendimento Estruturado em Praia Grande, Baixada Santista e Todo o Brasil
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Estrutura física completa para consultas presenciais com fácil acesso e suporte tecnológico seguro para processos 100% digitais em qualquer localidade do país.
          </p>
        </div>

        {/* 4 Authority Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {legalEntities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs hover:border-[#1b3731]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-[#1b3731]/10 text-[#1b3731] mb-3">
                    <Icon className="w-5 h-5 text-[#a9853e]" />
                  </div>
                  <h3 className="font-bold text-sm text-[#1b3731] mb-1.5">{item.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regional Cities & Geo Matrix */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#a9853e] flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#a9853e]" />
                Área de Abrangência Direta
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#1b3731] tracking-tight">
                Pólos de Atuação Presencial e Digital
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Nossos clientes contam com atendimento ágil em todas as comarcas da Baixada Santista e Litoral Sul de São Paulo, além de representação digital com assinatura eletrônica e tramitação online em tribunais de todo o Brasil.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1b3731] hover:bg-[#2d524a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#dfc17b]" />
                  <span>Ver Endereço no Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-300" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-300 hover:border-[#1b3731] bg-white text-[#1b3731] font-bold text-xs transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#a9853e]" />
                  <span>Consultar Viabilidade</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {localCities.map((city, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border text-center transition-all ${
                      city.main
                        ? 'bg-[#1b3731]/5 border-[#1b3731]/20 shadow-xs'
                        : 'bg-stone-50 border-stone-200/80 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <MapPin className={`w-3.5 h-3.5 ${city.main ? 'text-[#a9853e]' : 'text-stone-400'}`} />
                      <p className={`text-xs font-bold ${city.main ? 'text-[#1b3731]' : 'text-stone-800'}`}>
                        {city.name}
                      </p>
                    </div>
                    <p className="text-[10px] text-stone-500 leading-tight">
                      {city.status}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Geo Assurance */}
              <div className="mt-4 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Processos 100% eletrônicos no TJSP, TRF3 e INSS com acompanhamento via WhatsApp.</span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#1b3731] hover:text-[#a9853e] flex items-center gap-1 shrink-0"
                >
                  <span>Link Oficial Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
