import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Crafting Unforgettable Moments</h1>
        <p>BookMyEvent transforms your vision into an unforgettable celebration of love</p>
        <button className="btn-hero">Explore Our Services</button>
        
        <div className="stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-text">EVENTS PLANNED</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">12+</div>
            <div className="stat-text">YEARS EXPERIENCE</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-text">CITIES COVERED</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero