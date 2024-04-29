import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
function App() {
  
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <About/>
      <Testimonials/>
    </div>
  );
}

export default App;
