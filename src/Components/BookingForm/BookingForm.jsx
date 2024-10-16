// import React from 'react';
// import './BookingForm.css';


// import Aos from 'aos'
// import 'aos/dist/aos.css'

// const BookingForm = () => {
//   return (
//     <div className="booking-form-container">
//       <form className="booking-form">
//         <h2 data-aos="fade-down" >Book Your Tour</h2>
//         <div className="form-group">
//           <label  >Name:</label>
//           <input   type="text" placeholder="Enter your name" />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" placeholder="Enter your email" />
//         </div>
//         <div className="form-group">
//           <label>Date of Tour:</label>
//           <input type="date" />
//         </div>
//         <div className="form-group">
//           <label>Destination:</label>
//           <input type="text" placeholder='Your Destination' />
//         </div>
//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;


import React from 'react';
import './BookingForm.css';
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const BookingForm = () => {
  const navigate = useNavigate(); // Hook to access the navigate function

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="booking-form-container">
      <div className="close-icon" onClick={handleClose}>
        <AiOutlineClose size={24} /> {/* Close icon */}
      </div>
      <form className="booking-form">
        <h2>Book Your Tour</h2>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Date of Tour:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Destination:</label>
          <input type="text" placeholder='Your Destination' />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
