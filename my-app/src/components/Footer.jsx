import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>BookMyEvent</h3>
            <p>CRAFTING UNFORGETTABLE MOMENTS</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Wedding Planning</a></li>
              <li><a href="#">Birthday Parties</a></li>
              <li><a href="#">Corporate Events</a></li>
              <li><a href="#">Social Gatherings</a></li>
              <li><a href="#">Venue Booking</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 123 Event Street, Mumbai</li>
              <li><i className="fas fa-phone"></i> +91 98765 43210</li>
              <li><i className="fas fa-envelope"></i> info@bookmyevent.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 BookMyEvent. All rights reserved. | Anushka, Sakshi, Sumit, Vardhan</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer