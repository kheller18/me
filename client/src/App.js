import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`App ${theme}`}>
      <Header setTheme={setTheme} />
      <Routes>
        <Route path='/' exact element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
