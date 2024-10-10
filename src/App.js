
import React, { useRef } from 'react';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Destinations from './Components/Destinations/Destinations';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';



const App = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const destinationsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      {/* Pass the refs to Navbar */}
      <Navbar 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        destinationsRef={destinationsRef} 
        contactRef={contactRef} 
      />
      {/* Assign the refs to the section components */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={destinationsRef}>
        <Destinations />
      </div>
      
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default App;





