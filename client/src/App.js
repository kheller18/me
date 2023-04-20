import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from  '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setLoading(false);
  };

  useEffect(() => {
    const imgs = [
      '../media/travel/spain_me.jpg'
    ];

    cacheImages(imgs);
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header toggleTheme={toggleTheme} />
        <div className='App-body'>
          {loading ?
          <div>
            <FontAwesomeIcon icon={faSpinner} spin />
          </div>
          :
          <Routes>
            <Route path='/' exact element={<Landing />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/projects' exact element={<Projects />} />
            <Route path='/contact' exact element={<Contact />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          }
        </div>
      </div>
    </Router>
  );
};

export default App;
