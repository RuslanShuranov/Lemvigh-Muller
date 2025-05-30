import React from 'react';
import './App.scss';
import StoryList from '@components/StoryList/StoryList';
import Footer from '@components/Footer/Footer';
import ThemeToggle from '@components/ThemeToggle/ThemeToggle';
import ThemeGuidePopup from '@components/ThemeGuidePopup/ThemeGuidePopup';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__content">
          <h1>Hacker News Stories</h1>
          <div className="theme-toggle-container">
            <ThemeToggle />
            <ThemeGuidePopup />
          </div>
        </div>
      </header>
      <main className="app-main">
        <StoryList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
