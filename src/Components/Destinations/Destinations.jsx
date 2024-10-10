import React,{useEffect} from 'react'
import './Destinations.css'
import { HiLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import africa from '../../Assets/africa.jpg'
import karachiii from '../../Assets/karachiii.jpg'
import china from '../../Assets/china.jpg'
import dubai from '../../Assets/dubai.jpg'
import india from '../../Assets/india.jpg'
import indonesia from '../../Assets/indonesia.jpg'
import korea from '../../Assets/korea.jpg'
import maldives from '../../Assets/maldives.jpg'
import Mexico from '../../Assets/mexico.jpg'
import baliii from '../../Assets/baliii.jpg'
import usa from '../../Assets/usa.jpg'
import uk from '../../Assets/uk.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const data = [
  {
    id: 1,
    imgSrc: africa,
    destTitle: "Safari in Serengeti",
    location: "Africa",
    fees: "$1500",
    description: "Experience the wildlife of Africa like never before in the Serengeti National Park. This vast ecosystem is home to millions of animals, including the famous Big Five: lions, elephants, buffalo, leopards, and rhinoceros. With guided tours that take you through the breathtaking landscapes, you can witness the Great Migration, where thousands of wildebeest and zebras traverse the plains in search of greener pastures. "
  },
  {
    id: 2,
    imgSrc: karachiii,
    destTitle: "Bali",
    location: "Indonesia",
    fees: "$900",
    description: "Bali is a tropical paradise renowned for its beautiful beaches, vibrant nightlife, and rich culture. From the serene rice terraces of Ubud to the iconic surf beaches of Kuta, there's something for everyone. Explore ancient temples like Tanah Lot and Uluwatu, indulge in world-class dining, or relax at luxurious spas. Don't miss the chance to participate in a traditional Balinese cooking class or watch a mesmerizing Kecak dance performance as the sun sets over the ocean."

  },
  {
    id: 3,
    imgSrc: indonesia,
    destTitle: "Jakarta",
    location: "Indonesia",
    fees: "$800",
    description: "Jakarta, the bustling capital of Indonesia, is a vibrant city filled with energy and diversity. Discover the blend of traditional and modern influences as you explore historic sites such as the National Monument and the old town of Kota Tua. Sample delicious street food, shop at bustling markets, and visit the city's numerous museums. Jakarta is also a gateway to beautiful nearby islands, offering stunning beaches and lush landscapes."

  },
  {
    id: 4,
    imgSrc: china,
    destTitle: "Great Wall of China",
    location: "China",
    fees: "$1300",
    description: "The Great Wall of China is one of the most iconic structures in the world, stretching over 13,000 miles across diverse landscapes. Visit sections like Badaling and Mutianyu, where you can hike along the ancient stones and marvel at the breathtaking views. Learn about the history of this incredible feat of engineering and its significance in Chinese culture. While in Beijing, explore other attractions such as the Forbidden City, Tiananmen Square, and the Summer Palace."

  },
  {
    id: 5,
    imgSrc: dubai,
    destTitle: "Dubai",
    location: "UAE",
    fees: "$2000",
    description: "Dubai is a dazzling metropolis that offers a unique blend of luxury and tradition. From the stunning Burj Khalifa, the tallest building in the world, to the bustling souks and rich cultural heritage, there's plenty to explore. Enjoy shopping in world-class malls, relax on pristine beaches, and experience thrilling adventures like desert safaris and indoor skiing. Don't miss the breathtaking fountain show at the Burj Khalifa and savor the diverse culinary scene that features global cuisine."

  },
  {
    id: 6,
    imgSrc: baliii,
    destTitle: "Karachi",
    location: "Pakistan",
    fees: "$700",
    description: "Karachi, Pakistan's largest city, is a melting pot of cultures and traditions. Explore its rich history at landmarks like Mohatta Palace and Quaid-e-Azam's Mausoleum. The city boasts a vibrant arts scene, bustling markets, and some of the best street food you'll ever taste. Enjoy the beautiful coastline along the Arabian Sea, and don't forget to visit the historic Clifton Beach and the iconic Manora Island. Karachi is a city of contrasts where modernity meets tradition."

  },
  {
    id: 7,
    imgSrc:india ,
    destTitle: "Taj Mahal",
    location: "India",
    fees: "$1200",
    description: "The Taj Mahal is a UNESCO World Heritage site and one of the most recognizable monuments in the world. This exquisite mausoleum, built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, showcases stunning Mughal architecture and intricate craftsmanship. Visit at sunrise or sunset to witness the monument bathed in golden light, and explore the beautiful gardens surrounding it. Agra, home to the Taj Mahal, also offers other historical sites like Agra Fort and Fatehpur Sikri."
  },
  {
    id: 8,
    imgSrc: Mexico,
    destTitle: "Cancún",
    location: "Mexico",
    fees: "$1400",
    description: "Cancún is famous for its stunning beaches, crystal-clear waters, and vibrant nightlife. Whether you want to relax on the beach, explore ancient Mayan ruins, or indulge in water sports, Cancún has it all. Visit nearby attractions such as the Mayan ruins of Tulum and Chichen Itza, or enjoy a day at the underwater museum, MUSA. The lively Hotel Zone offers a plethora of dining and entertainment options, making Cancún a perfect getaway for all kinds of travelers."

  },
  {
    id: 9,
    imgSrc: maldives,
    destTitle: "Maldives",
    location: "Indian Ocean",
    fees: "$2500",
    description: "The Maldives is a breathtaking tropical destination made up of over 1,000 islands, famous for its stunning overwater bungalows and pristine beaches. Enjoy world-class snorkeling and diving in the vibrant coral reefs, where you can encounter exotic marine life. Relax in luxurious resorts that offer spa treatments and private beaches, and indulge in gourmet dining experiences. The Maldives is the perfect place for romance, relaxation, and adventure in a stunning natural setting."

  },
  {
    id: 10,
    imgSrc: usa,
    destTitle: "New York City",
    location: "USA",
    fees: "$1500",
    description: "New York City, often called 'The Big Apple', is a vibrant metropolis known for its iconic landmarks and diverse culture. Visit Times Square, Central Park, and the Statue of Liberty, and immerse yourself in the world-renowned art scene at museums like the Metropolitan Museum of Art and MoMA. Enjoy a Broadway show, explore eclectic neighborhoods, and indulge in culinary delights from around the world. NYC is a city that never sleeps, offering endless activities and experiences."

  },
  {
    id: 11,
    imgSrc: uk,
    destTitle: "London",
    location: "United Kingdom",
    fees: "$1600",
    description: "London is a historic city that combines modern attractions with rich cultural heritage. Explore iconic landmarks such as the Tower of London, Buckingham Palace, and the British Museum. Stroll along the River Thames and enjoy the vibrant atmosphere of markets like Borough Market and Camden Market. Experience the arts at the West End, and savor traditional British cuisine in charming pubs. London is a melting pot of cultures, offering something for every traveler."
  },
  {
    id: 12,
    imgSrc: korea,
    destTitle: "Seoul",
    location: "South Korea",
    fees: "$1300",
    description: "Seoul is a dynamic city where traditional culture meets cutting-edge technology. Visit historic palaces like Gyeongbokgung and Changdeokgung, and explore vibrant neighborhoods such as Myeongdong and Hongdae. Experience the unique flavors of Korean cuisine, from street food to fine dining. Don't miss the opportunity to explore the bustling markets and try local delicacies. Seoul's nightlife is equally captivating, with countless bars and clubs offering a taste of modern Korean culture."
  }
];


const Destinations = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])





  return (
    <section className=" main container section">
           <div className="secTittle">
            <h3  data-aos="fade-right"className="tittle">
              Most Visited Destinations
            </h3>
           </div>

           <div className="secContent grid">
                  {
                    data.map(({id,imgSrc,destTitle,location,fees,description})=>{
                       return(
                        <div   key={id} data-aos="fade-up" className="singleDestination">
                        <div className="imgDiv">
                          <img src={imgSrc} alt="destTitle" />
                        </div>
                        <div className="cardInfo">
                          <h4 className="destTittle">{destTitle}</h4>
                         <span className="continent flex">
                         <HiLocationMarker className='icon'/>
                         <span className="name">{location}</span>
                         </span>
                         <div className="fees">
                          <h5>{fees}</h5>
                         </div>
                         <div className="desc">
                          <p>{description}</p>
                         </div>
                         <button className='btn flex'>
                          DETAILS  <LuClipboardCheck  className='icon' />
                         </button>
                        </div>
                        
                        </div>
                       )
                    }
                  )
                  }
           </div>
    </section>
  )
}

export default Destinations
