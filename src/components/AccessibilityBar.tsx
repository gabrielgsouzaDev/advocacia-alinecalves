import React, { useState } from 'react';
import { Sun, Moon, Plus, Minus, Type } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext.tsx';
import { motion, AnimatePresence } from 'motion/react';

export const AccessibilityBar: React.FC = () => {
  const { theme, toggleTheme, textSize, increaseTextSize, decreaseTextSize } = useAccessibility();
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      aria-label="Controles de Acessibilidade"
      className="fixed z-40 bottom-20 lg:bottom-24 right-3 sm:right-6 pointer-events-auto"
    >
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/90 dark:bg-[#20201e]/90 backdrop-blur-md border border-stone-200/90 dark:border-stone-700/80 shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all">
        {/* Toggle Dark / Light Mode */}
        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
          className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-stone-700 dark:text-stone-300 hover:text-[#c5a059] dark:hover:text-[#dfc17b] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-[#dfc17b] transition-transform hover:rotate-45" />
          ) : (
            <Moon className="w-4 h-4 text-stone-700 transition-transform hover:-rotate-12" />
          )}
        </button>

        <span className="w-px h-4 bg-stone-200 dark:bg-stone-700 mx-0.5" />

        {/* Desktop / Expanded Font size controls */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={decreaseTextSize}
            disabled={textSize === 'sm'}
            aria-label="Diminuir tamanho da fonte"
            title="Diminuir fonte (-)"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-stone-600 dark:text-stone-300 hover:text-[#c5a059] dark:hover:text-[#dfc17b] hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-xs font-bold cursor-pointer"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>

          <span
            className="px-1 text-[10px] sm:text-[11px] font-bold text-stone-500 dark:text-stone-400 select-none flex items-center gap-0.5"
            title="Nível de tamanho da fonte"
          >
            <Type className="w-3 h-3 text-[#c5a059]" />
            <span className="uppercase text-[9px] font-mono">
              {textSize === 'sm' ? '90%' : textSize === 'lg' ? '115%' : '100%'}
            </span>
          </span>

          <button
            onClick={increaseTextSize}
            disabled={textSize === 'lg'}
            aria-label="Aumentar tamanho da fonte"
            title="Aumentar fonte (+)"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-stone-600 dark:text-stone-300 hover:text-[#c5a059] dark:hover:text-[#dfc17b] hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-xs font-bold cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
