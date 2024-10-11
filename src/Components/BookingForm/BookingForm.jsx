import React from 'react';
import './BookingForm.css';

const BookingForm = () => {
  return (
    <div className="booking-form-container">
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
