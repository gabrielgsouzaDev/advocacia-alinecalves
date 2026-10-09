import React from 'react';
import { MapPin, Navigation, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const MapLocation: React.FC = () => {
  const address = 'Av. Júlio Prestes de Albuquerque, 444, Nova Mirim, Praia Grande - SP, 11717-110';
  const googleMapsShortUrl = 'https://maps.app.goo.gl/pJVzdfqF2guKdSyh8';
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}`;

  return (
    <section id="localizacao" className="bg-white border-b border-stone-200">
      {/* Map Bar Header with GEO context */}
      <div className="bg-[#1b3731] text-white py-5 px-4 sm:px-8 border-t border-[#2d524a]/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-start sm:items-center gap-3.5 text-center sm:text-left">
            <div className="p-3 bg-white/10 rounded-2xl text-[#dfc17b] shrink-0 mt-0.5 sm:mt-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                <p className="font-extrabold text-sm sm:text-base leading-snug tracking-tight">
                  Sede em Praia Grande / SP · Baixada Santista
                </p>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#dfc17b]/20 text-[#dfc17b] border border-[#dfc17b]/30">
                  Ponto de Referência Nova Mirim
                </span>
              </div>
              <p className="text-xs text-stone-300 mt-0.5">
                {address}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={googleMapsShortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#1b3731] hover:bg-stone-100 font-bold text-xs transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#a9853e]" />
              <span>Abrir no Google Maps</span>
            </a>
            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#c5a059] hover:bg-[#dfc17b] text-[#1b3731] font-bold text-xs transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Traçar Rota no Waze</span>
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Google Maps with responsive frame */}
      <div className="w-full h-80 sm:h-96 relative bg-stone-100">
        <iframe
          title="Mapa de Localização do Escritório Dra. Aline Calves Advocacia em Praia Grande SP"
          src="https://maps.google.com/maps?q=Av.+J%C3%BAlio+Prestes+de+Albuquerque,+444,+Nova+Mirim,+Praia+Grande+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[10%] contrast-[105%]"
        />

        {/* Floating Quick Action Card on Map */}
        <div className="absolute bottom-4 left-4 sm:left-8 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-lg border border-stone-200/90 max-w-xs hidden sm:block">
          <p className="text-xs font-bold text-[#1b3731] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#a9853e]" />
            Aline Calves Advocacia
          </p>
          <p className="text-[11px] text-stone-600 mt-1 leading-snug">
            Fácil acesso pela Via Expressa Sul e Rodovia Padre Manoel da Nóbrega. Estacionamento nas proximidades.
          </p>
          <a
            href={googleMapsShortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#a9853e] hover:text-[#1b3731] mt-2 transition-colors"
          >
            <span>Ver no Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
