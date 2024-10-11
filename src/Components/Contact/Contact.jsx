import React,{useEffect} from 'react'
import './Contact.css'

import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'



const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className='footer'>
    <div className="videoDiv">
    <video src="/assets/footervideo.mp4" muted autoPlay loop />

    </div>

    <div className="secContent container">
      <div className="contactDiv">
     {/* <div data-aos="fade-up" className="text">
      <small>KEEP IN TOUCH</small>
      <h2>Travel With Us</h2>
     </div> */}
     {/* <div className="inputDiv flex">
      <input data-aos="fade-up" type="email" name="email" id="email" placeholder='Enter Email Address'/>
     <button data-aos="fade-up" className='btn flex'>
      Send <FiSend  className='icon'/>
      </button>
        </div> */}
      </div>
      <div className="footerCard flex">
          <div className="footerIntro flex">
              
                <div className="logoDiv">
                  <a href="#" className='logo flex'>
                  <MdOutlineTravelExplore className='icon' />Tours
                  </a>
                </div>
                <div data-aos="fade-up" className="footerPargraph">
                Tours is a dedicated website offering a variety of guided travel experiences in scenic destinations. From adventure and filled excursions to cultural explorations, Tours provides travelers with expertly curated itineraries that highlight  the  best attractions and hidden gems of each location.
                </div>
                <div  data-aos="fade-up"className="footerSocials flex">
                <AiOutlineTwitter className='icon' />
                <AiFillInstagram  className='icon'/>
                <AiFillYoutube className='icon' />
                <FaTripadvisor  className='icon'/>

                </div>
              
          </div>

       <div  className="footerLinks grid">
        <div data-aos="fade-up " data-aos-duration='3000' className="linkGroups">
           <span className="groupTittle">
            OUR AGENCY
           </span>
           <li className="footerList flex">
           <FiChevronRight className='icon'/>
           services
           </li>
           <li className="footerList flex">
           <FiChevronRight className='icon'/>
           Insurance
           </li>
           <li className="footerList flex">
           <FiChevronRight className='icon'/>
           Tourism
           </li>
           <li className="footerList flex">
           <FiChevronRight className='icon'/>
           Payments
           </li>
        </div>
       


       
        <div data-aos="fade-up" data-aos-duration='4000' className="linkGroups">
           <span className="groupTittle">
            PARTNERS
           </span>
           <li className="footerList flex">
           <FiChevronRight className='icon'/>
           Booking
           </li>
           <li className="footerList flex">
           <FiChevronRight className='icon'/>
           Rental Cars
           </li>
           <li className="footerList flex">
           <FiChevronRight className='icon'/>
           TripAdvisor
           </li>
           <li className="footerList flex">
           <FiChevronRight className='icon'/>
           HostelWorld
           </li>
        </div>
       

       
        <div  data-aos="fade-up" data-aos-duration='5000' className="linkGroups">
           <span className="groupTittle">
            LAST MINUITE
           </span>
           <li className="footerList flex">
           <FiChevronRight className='icon'/>
           London
           </li>
           <li className="footerList flex">
           <FiChevronRight className='icon'/>
           Korean
           </li>
           <li className="footerList flex">
           <FiChevronRight className='icon'/>
           UAE
           </li>
           <li className="footerList flex">
           <FiChevronRight className='icon'/>
           Indonesia
           </li>
        </div>
       </div>
       <div className="footerDiv flex">
         <small>BEST TRAVEL WEBSITE</small>
         <small>COPYRIGHTS RESERVED-2024</small>
       </div>
       

      </div>
    </div>
   </section>
  )
}

export default Contact
