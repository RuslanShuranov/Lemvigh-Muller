import React from 'react';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__content">
          <h1>Hacker News Stories</h1>
        </div>
      </header>
      <main className="app-main">
        <div className="app-main__content">Content</div>
      </main>
      <footer className="app-footer">Footer</footer>
    </div>
  );
};

export default App;
