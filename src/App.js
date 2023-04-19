import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Quiz from './components/Quiz';
import Learn from './components/Learn';

<div className="App">  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
          <Route path="/quiz" element={<Quiz />} />
      </Routes>
</div>

export default App
