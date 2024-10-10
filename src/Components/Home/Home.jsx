import React,{useEffect} from 'react'
import './Home.css'
import akes from '../../Assets/akes.mp4'
import { GrLocation } from "react-icons/gr";

import { BsListTask } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {
   useEffect(()=>{
     Aos.init({duration:2000})
   },[])
  




  
  
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={require('../../Assets/akes.mp4')} muted autoPlay loop type="akes/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
          Vacation Packages
          </span>
          <h1 data-aos="fade-up" className="homeTittle">
          Unlock Your Travel Dreams
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Discover Your Next Adventure</label>
            <div className="input flex">
              <input type="text"  placeholder='Search Your Destination Place .....'/>
              <GrLocation className='icon' />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select Your Date</label>
            <div className="input flex">
              <input type="date"  />
              
            </div>
          </div>

          <div className="priceInput">
             <div className="label_total flex">
              <label htmlFor="price">Max Price</label>
              <h3 className="total">$7000</h3>
          </div>
          <div className="input flex">
          <input className='range'
                type="range"
                max="7000"
                min="1000"
                />
          </div>
          </div>

          {/* <div className="searchOption flex">
          <HiFilter className='icon'/>
          <span>More Filters</span>
          </div> */}
        </div>
       
       <div data-aos="fade-down" className="homeFooterIcons flex">
        <div className="right icon">
        <BsListTask className='icon'/>
        <FaTwitter className='icon' />
        
        </div>
        <div className="left icon">
        <FaFacebookF className='icon'/>
        <FiInstagram  className='icon'/>
        </div>
        
       </div>



      </div>
      

    </section>
  )
}

export default Home
