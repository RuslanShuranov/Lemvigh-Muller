import React from 'react';
import './App.scss';
import StoryList from '@components/StoryList/StoryList';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <StoryList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
