import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header';
import HomePage from './components/pages/home/HomePage';
import Footer from './components/layout/Footer';
function App() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <Header />
      </header>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
