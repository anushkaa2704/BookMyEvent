import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Planning your event with BookMyEvent is simple and hassle-free</p>
        
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose Service</h3>
            <p>Select from our wide range of event services</p>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <h3>Customize Package</h3>
            <p>Tailor the package to fit your needs and budget</p>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <h3>Make Payment</h3>
            <p>Secure payment with EMI options available</p>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <h3>Enjoy Event</h3>
            <p>Sit back and enjoy your perfectly planned event</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks