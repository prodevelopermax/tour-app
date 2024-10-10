import React,{useEffect} from 'react'
import './About.css'
import cus from '../../Assets/cus.jpg'
import hi from '../../Assets/hi.png'
import moun from '../../Assets/moun.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'





const About = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className=" aboutSectionn">
      <div className="secContainer">
     <h3 data-aos="fade-up" className="tittle">
      Why Tours?
     </h3>

     <div className="mainContent container grid">
      <div data-aos="fade-up" className="singleItem">
        <img src={moun} alt="image" />
        <h3  >50+ Mountaines</h3>

        <p>Building stronger muscles and bones. Improving your sense of balance. Improving your heart health. Decreasing the risk of certain respiratory problems.</p>
      </div>
     
      <div data-aos="fade-up" className="singleItem">
        <img src={hi} alt="image" />
        <h3>100+ Hikings</h3>

        <p>Building stronger muscles and bones. Improving your sense of balance. Improving your heart health. Decreasing the risk of certain respiratory problems.</p>
      </div>

      <div data-aos="fade-up" className="singleItem">
        <img src={cus} alt="image" />
        <h3>2000+ Customers</h3>

        <p>Building stronger muscles and bones. Improving your sense of balance. Improving your heart health. Decreasing the risk of certain respiratory problems.</p>
      </div>


    
     </div>
     </div>
    </section>
  )
}

export default About
