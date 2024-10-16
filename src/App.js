// // 1

// import React, { useRef } from 'react';
// import './app.css';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';
// import About from './Components/About/About';
// import Destinations from './Components/Destinations/Destinations';
// import Contact from './Components/Contact/Contact';
// import BookingForm from './Components/BookingForm/BookingForm';  // Import BookingForm

// const App = () => {
//   // Create refs for each section
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const destinationsRef = useRef(null);
//   const contactRef = useRef(null);
//   const bookingRef = useRef(null);  // Ref for booking form

//   return (
//     <>
//       {/* Pass the refs to Navbar */}
//       <Navbar 
//         homeRef={homeRef} 
//         aboutRef={aboutRef} 
//         destinationsRef={destinationsRef} 
//         contactRef={contactRef} 
//         bookingRef={bookingRef}  // Add booking ref
//       />
//       {/* Assign the refs to each section */}
//       <div ref={homeRef}>
//         <Home />
//       </div>
//       <div ref={destinationsRef}>
//         <Destinations />
//       </div>
     
      
//       <div ref={bookingRef}>
//         <BookingForm />  {/* Booking form section */}
//       </div>
//       <div ref={aboutRef}>
//         <About />
//       </div>
      
     
//       <div ref={contactRef}>
//         <Contact />
//       </div>
//     </>
//   );
// };

// export default App;
  

// 2

import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Destinations from './Components/Destinations/Destinations';
import Contact from './Components/Contact/Contact';
import BookingForm from './Components/BookingForm/BookingForm';

const App = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const destinationsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <Navbar 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        destinationsRef={destinationsRef} 
        contactRef={contactRef} 
      />
      <Routes>
        <Route path="/" element={
          <>
            <div ref={homeRef}>
              <Home />
            </div>
            <div ref={destinationsRef}>
              <Destinations />
            </div>
            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={contactRef}>
              <Contact />
            </div>
          </>
        } />
        <Route path="/booking" element={<BookingForm />} /> {/* Booking Form Route */}
      </Routes>
    </Router>
  );
};

export default App;


