import ThemeToggle from '@components/ThemeToggle/ThemeToggle';
import ThemeGuidePopup from '@components/ThemeGuidePopup/ThemeGuidePopup';
import React from 'react';

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header__content">
        <h1>Hacker News Stories</h1>
        <div className="theme-toggle-container">
          <ThemeToggle />
          <ThemeGuidePopup />
        </div>
      </div>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
