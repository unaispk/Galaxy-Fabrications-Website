import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact-desc">
          Have a question or want to work together? Leave us a message!
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-info-item">
              <strong>Address</strong>
              <span>Kayanna Bazar, Perambra</span>
            </div>
            <div className="contact-info-item">
              <strong>Phone</strong>
              <span>+91 9645565657</span>
            </div>
            <div className="contact-info-item">
              <strong>Email</strong>
              <span>info@galaxyfabrications.com</span>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-input" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-input" placeholder="Your Email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-input" rows="5" placeholder="Your Message" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn" aria-label="Send Message">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
