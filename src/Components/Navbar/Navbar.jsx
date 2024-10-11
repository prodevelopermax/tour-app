// import React, {useState} from 'react'
// import './Navbar.css'
// import { MdOutlineTravelExplore } from "react-icons/md";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { TbGridDots } from "react-icons/tb";

// const Navbar = () => {
//   const [active, setActive] = useState('navBar')
//   const showNav = () =>{
    
//     setActive('navBar activeNavbar')
//   }
//   const removeNavbar = () =>{
    
//     setActive('navBar ')
//   }



//   return (
//     <setion className="navBarsection">
//       <header className="header flex">
//            <div className="logoDiv">
//             <a href="#" className="logo flex">
//                 <h1><MdOutlineTravelExplore className='icons'/>Tours</h1>
//             </a>
//            </div>
//            <div className={active}>
//             <ul className="navLists flex">
//                  <li className="navItems">
//                   <a href="" className="navLinks">Home</a>
//                  </li>
//                  <li className="navItems">
//                   <a href="" className="navLinks">About</a>
//                  </li>
//                  <li className="navItems">
//                   <a href="" className="navLinks">Destinations</a>
//                  </li>
//                  <li className="navItems">
//                   <a href="" className="navLinks">Contact</a>
//                  </li>
                

//                  <button className="btn">
//                   <a href="#">Book Now</a>
//                  </button>
//             </ul>

//             <div onClick={removeNavbar} className="closeNavbars" >
//             <AiFillCloseCircle className='icon' />
//             </div>
//            </div>
           
//            <div onClick={showNav} className="toggleNavbar">
//            <TbGridDots  className='icon'/>
//            </div>
//       </header>
//     </setion>
//   )
// }

// export default Navbar
  
  

// MODIFIED COAD

import React, { useState } from 'react';
import './Navbar.css';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = ({ homeRef, aboutRef, destinationsRef, contactRef,bookingRef  }) => {
  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNavbar = () => {
    setActive('navBar');
  };

  


  // Scroll function for each section
  const scrollToSection = (ref, e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const offset = 100; // Adjust this based on your header height
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth' // Smooth scrolling
    });
    removeNavbar(); // Close the navbar after clicking a link
  };

  return (
    <section className="navBarsection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore className='icons' />Tours</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItems">
              <a href="#" className="navLinks" onClick={(e) => scrollToSection(homeRef, e)}>Home</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLinks" onClick={(e) => scrollToSection(aboutRef, e)}>About</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLinks" onClick={(e) => scrollToSection(destinationsRef, e)}>Destinations</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLinks" onClick={(e) => scrollToSection(contactRef, e)}>Contact</a>
            </li>
            {/* <button className="btn">
              <a href="#">Book Now</a>
            </button> */}
           
          <button className="btn">
          <a href="#" onClick={(e) => scrollToSection(bookingRef, e)}>Book Now</a>
        </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbars">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  );
};

export default Navbar;


