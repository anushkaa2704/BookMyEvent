import React from 'react'
import './CTA.css'

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to Plan Your Event?</h2>
        <p>Join thousands of satisfied customers who have celebrated their special moments with BookMyEvent</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Get Started Now</button>
          <button className="btn btn-outline">Request a Quote</button>
        </div>
      </div>
    </section>
  )
}

export default CTA