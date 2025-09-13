import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <i className="fas fa-crown"></i>
            BookMyEvent
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="auth-buttons">
            <button className="btn btn-login">Login</button>
            <button className="btn btn-quote">Get Quotes</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header