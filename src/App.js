import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Learn from './components/Learn';
import Quiz from './components/Quiz';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes using the <Route> component */}
        <Route exact path="/" element={<Home/>} />
        <Route path="/learn" element={<Learn/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/responsiveAppBar" element={<ResponsiveAppBar/>} />


        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
