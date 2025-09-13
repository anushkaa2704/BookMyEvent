import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">From intimate gatherings to grand celebrations, we provide everything you need to make your event memorable</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-ring"></i>
            </div>
            <h3>Weddings</h3>
            <p>Complete wedding planning with the best vendors for your special day</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-birthday-cake"></i>
            </div>
            <h3>Birthdays</h3>
            <p>Make birthdays special with customized themes and party planning</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>Corporate Events</h3>
            <p>Professional event planning for conferences, seminars, and corporate parties</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services