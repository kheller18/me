import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header toggleTheme={toggleTheme} />
        <div className='App-body'>
          <Routes>
            <Route path='/' exact element={<Landing />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/projects' exact element={<Projects />} />
            <Route path='/contact' exact element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
