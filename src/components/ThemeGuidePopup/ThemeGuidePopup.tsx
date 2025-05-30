import React, { useState, useEffect } from 'react';
import { useTheme } from '@hooks/useTheme';
import './ThemeGuidePopup.scss';

const ThemeGuidePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Check if the user has seen the popup before
    const hasSeenPopup = localStorage.getItem('hasSeenThemeGuide');

    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark that the user has seen the popup
    localStorage.setItem('hasSeenThemeGuide', 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="theme-guide-popup">
      <div className="theme-guide-popup__content">
        <button className="theme-guide-popup__close" onClick={handleClose}>
          ×
        </button>
        <div className="theme-guide-popup__icon">
          {theme === 'light' ? '🌙' : '☀️'}
        </div>
        <p className="theme-guide-popup__message">
          Click here to toggle between light and dark mode!
        </p>
        <button className="theme-guide-popup__button" onClick={handleClose}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default ThemeGuidePopup;
