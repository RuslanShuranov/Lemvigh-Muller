import React from 'react';
import { useTheme } from '@hooks/useTheme';
import './ThemeToggle.scss';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <span className="theme-toggle__icon">🌙</span>
      ) : (
        <span className="theme-toggle__icon">☀️</span>
      )}
    </button>
  );
};

export default ThemeToggle;
