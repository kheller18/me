import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from  '@fortawesome/free-solid-svg-icons';
import './App.css';

export const ThemeContext = createContext();

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
    console.log(srcArray);
    setLoading(false);
  };

  useEffect(() => {
    const imgs = [
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/travel/gondola_me.jpg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/cooking/burger.jpeg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/cooking/blueberry_icecream.jpeg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/cooking/pizza_oven_cropped.png',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/cooking/ravioli.png',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/travel/gondola.jpeg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/travel/goats.jpeg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/travel/luzern_me.jpeg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/travel/florence.jpeg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/music/gallows.jpeg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/music/lady_lady.jpeg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/music/passion_pain_demon_slayin.png',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/music/time_for_a_change.jpeg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/music/vincent.jpeg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/music/vbnd.jpeg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/teams/mariners.png',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/teams/seahawks.png',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/teams/kraken.png',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/teams/sounders.png',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/teams/sonics.png',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/teams/storm.png',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/sportsbook.png',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/stuffswap.png',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/chefify2.jpg',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/verdant_earth.png',
      'https://keenanwebsite.s3.us-west-2.amazonaws.com/media/projects/fitness.png',
    ];

    cacheImages(imgs);
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
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
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            }
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
