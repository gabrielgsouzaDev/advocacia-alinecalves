import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle, Clock, ShieldCheck, MessageCircle, Lock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: 'Direito Geral',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const formatPhoneNumber = (val: string) => {
    const numbers = val.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      return;
    }

    // Compose message for WhatsApp
    const text = `Olá Dra. Aline Calves! Meu nome é ${formData.name}. Gostaria de atendimento sobre ${formData.area}.\n\nContato: ${formData.phone}\n\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5513996677007&text=${encodeURIComponent(text)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#fbfcfb] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a9853e]">
                Canal Direto de Atendimento
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1b3731] tracking-tight mt-1.5">
                Consulte uma especialista
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
                Estamos prontos para atender você com rigor técnico, absoluto sigilo profissional e a transparência que seu caso exige.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              
              {/* Phone / WhatsApp Card */}
              <motion.a
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                href="https://api.whatsapp.com/send?phone=5513996677007&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-6 rounded-3xl bg-white border border-stone-200 shadow-xs hover:border-[#1b3731] hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="p-3.5 rounded-2xl bg-[#1b3731]/10 text-[#1b3731] group-hover:bg-[#1b3731] group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Telefone & WhatsApp 24h</p>
                  <p className="text-xl font-extrabold text-[#1b3731] tracking-tight font-mono">
                    (13) 99667-7007
                  </p>
                  <p className="text-xs text-emerald-600 font-medium mt-0.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    Atendimento imediato online disponível
                  </p>
                </div>
              </motion.a>

              {/* Address Card */}
              <a
                href="https://maps.app.goo.gl/pJVzdfqF2guKdSyh8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-6 rounded-3xl bg-white border border-stone-200 shadow-xs hover:border-[#1b3731] hover:shadow-md transition-all flex items-start gap-4 group cursor-pointer block"
              >
                <div className="p-3.5 rounded-2xl bg-[#c5a059]/15 text-[#8c6b27] group-hover:bg-[#1b3731] group-hover:text-white transition-colors shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Endereço do Escritório</p>
                  <p className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-[#1b3731] transition-colors leading-snug mt-0.5">
                    Av. Júlio Prestes de Albuquerque, 444
                  </p>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Nova Mirim, Praia Grande/SP · CEP 11717-110
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-[#1b3731] group-hover:text-[#a9853e] transition-colors">
                    <span>Abrir rota no Google Maps</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>

              {/* Horário & Âmbito */}
              <div className="p-4 rounded-2xl bg-[#1b3731]/5 border border-[#1b3731]/10 space-y-1.5 text-xs text-stone-700">
                <div className="flex items-center gap-2 font-bold text-[#1b3731]">
                  <Clock className="w-4 h-4 text-[#c5a059]" /> Plantão 24h em Casos Urgentes
                </div>
                <p>
                  Atendimentos presenciais com agendamento prévio. Consultas virtuais diárias para clientes de qualquer localidade do Brasil.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-stone-200 shadow-[0_15px_35px_-10px_rgba(27,55,49,0.06)]">
              <div className="mb-6 pb-4 border-b border-stone-100">
                <h3 className="text-2xl font-extrabold text-[#1b3731] leading-tight">
                  Dúvidas?
                </h3>
                <p className="text-base font-semibold text-stone-800">
                  Preencha o Formulário de Contato
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  Nossa equipe jurídica responderá com brevidade e sob estrito sigilo ético.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center space-y-4"
                  >
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold text-emerald-950">Mensagem Encaminhada!</h4>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Você foi redirecionado para o WhatsApp da Dra. Aline Souza Calves. Caso a conversa não tenha aberto automaticamente, clique no botão abaixo para prosseguir.
                    </p>
                    <div className="pt-2">
                      <a
                        href="https://api.whatsapp.com/send?phone=5513996677007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Abrir WhatsApp Diretamente</span>
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', area: 'Direito Geral', message: '' });
                      }}
                      className="text-xs text-stone-500 hover:text-stone-800 underline block mx-auto pt-2 cursor-pointer"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        NOME COMPLETO*
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo de Souza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 bg-stone-50/70 border border-stone-300 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1b3731] focus:bg-white transition-all shadow-2xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                          WHATSAPP DE CONTATO*
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(13) 99999-9999"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className="w-full px-4 py-3.5 bg-stone-50/70 border border-stone-300 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1b3731] focus:bg-white transition-all font-mono shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                          ÁREA DO SEU CASO
                        </label>
                        <select
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          className="w-full px-4 py-3.5 bg-stone-50/70 border border-stone-300 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1b3731] focus:bg-white transition-all shadow-2xs"
                        >
                          <option value="Direito Imobiliário">Direito Imobiliário</option>
                          <option value="Direito Previdenciário / INSS">Direito Previdenciário (INSS)</option>
                          <option value="BPC / LOAS">BPC / LOAS (Autismo & Idosos)</option>
                          <option value="Direito de Família / Divórcio">Direito de Família / Divórcio</option>
                          <option value="Direito do Consumidor">Direito do Consumidor</option>
                          <option value="Direito Cível / Contratos">Direito Cível / Contratos</option>
                          <option value="Direito de Trânsito">Direito de Trânsito (DETRAN/DER)</option>
                          <option value="Direito Criminal">Direito Criminal (Urgência 24h)</option>
                          <option value="Serviços Extrajudiciais">Serviços Extrajudiciais em Cartório</option>
                          <option value="Outro Assunto">Outro Assunto</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        DESCREVA RESUMIDAMENTE SUA DÚVIDA*
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Explique o que aconteceu ou qual documento deseja analisar..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 bg-stone-50/70 border border-stone-300 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1b3731] focus:bg-white transition-all resize-none shadow-2xs"
                      />
                    </div>

                    <div className="pt-2">
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#1b3731] hover:bg-[#2d524a] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
                      >
                        <Send className="w-4 h-4 text-[#dfc17b]" />
                        <span>Enviar Mensagem para o Escritório</span>
                      </motion.button>
                      <p className="text-[11px] text-stone-500 text-center mt-3 flex items-center justify-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-[#2d524a]" />
                        <span>Suas informações são estritamente resguardadas pelo sigilo profissional da OAB.</span>
                      </p>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
