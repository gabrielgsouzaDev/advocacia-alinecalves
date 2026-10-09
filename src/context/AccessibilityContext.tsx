import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type TextSize = 'sm' | 'md' | 'lg';

interface AccessibilityContextType {
  theme: Theme;
  toggleTheme: () => void;
  textSize: TextSize;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
  resetTextSize: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state with local persistence
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('ac_theme') as Theme;
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Text size state: sm (compact / 95%), md (default 100%), lg (ampliado 110%)
  const [textSize, setTextSize] = useState<TextSize>(() => {
    if (typeof window !== 'undefined') {
      const savedSize = localStorage.getItem('ac_text_size') as TextSize;
      if (savedSize === 'sm' || savedSize === 'md' || savedSize === 'lg') return savedSize;
    }
    return 'md';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('ac_theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-size-sm', 'text-size-md', 'text-size-lg');
    root.classList.add(`text-size-${textSize}`);
    localStorage.setItem('ac_text_size', textSize);
  }, [textSize]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const increaseTextSize = () => {
    setTextSize((prev) => {
      if (prev === 'sm') return 'md';
      if (prev === 'md') return 'lg';
      return 'lg';
    });
  };

  const decreaseTextSize = () => {
    setTextSize((prev) => {
      if (prev === 'lg') return 'md';
      if (prev === 'md') return 'sm';
      return 'sm';
    });
  };

  const resetTextSize = () => {
    setTextSize('md');
  };

  return (
    <AccessibilityContext.Provider
      value={{
        theme,
        toggleTheme,
        textSize,
        increaseTextSize,
        decreaseTextSize,
        resetTextSize,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
