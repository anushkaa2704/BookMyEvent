import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">Hear from people who have used BookMyEvent to plan their special occasions</p>
        
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="testimonial-text">
              BookMyEvent made my wedding planning so stress-free! I could compare vendors and prices easily, and the EMI option was a lifesaver for my budget.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Priya Sharma" />
              </div>
              <div className="author-details">
                <h4>Priya Sharma</h4>
                <p>Wedding Planning</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-text">
              The corporate event we planned through BookMyEvent was executed perfectly. The platform's coordination features saved us countless hours.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rahul Mehta" />
              </div>
              <div className="author-details">
                <h4>Rahul Mehta</h4>
                <p>Corporate Event</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-text">
              My daughter's birthday party was a huge success, all thanks to BookMyEvent. The decorations, catering, and entertainment were all perfectly arranged.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Sunita Patel" />
              </div>
              <div className="author-details">
                <h4>Sunita Patel</h4>
                <p>Birthday Party</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials