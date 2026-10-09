import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1,%20estou%20em%20seu%20Site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.';

  return (
    /* Only visible on tablet and desktop (md:flex) to avoid collision with mobile bottom bar */
    <aside aria-label="Atendimento Rápido" className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-3">
      {/* Tooltip bubble on desktop */}
      <motion.a
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md text-[#1b3731] px-4 py-2.5 rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.12)] border border-stone-200 text-xs font-bold hover:shadow-xl transition-all"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span>Plantão Jurídico WhatsApp 24h</span>
      </motion.a>

      {/* Button with gentle breathing effect */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Dra. Aline Calves"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-3px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <img
          src="/assets/whats-icon.png"
          alt="WhatsApp"
          className="w-8 h-8 object-contain relative z-10"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <MessageCircle className="w-7 h-7 relative z-10 hidden" />
      </motion.a>
    </aside>
  );
};
