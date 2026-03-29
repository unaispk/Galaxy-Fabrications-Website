import React from 'react';
import '../styles/About.css';
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        
        <div className="about-image-wrapper">
          <img 
            src={aboutImg} 
            alt="Galaxy Fabrications Workshop Facility" 
            className="about-image"
          />
        </div>
        
        <div className="about-content">
          <h2>About Galaxy Fabrications</h2>
          
          <p>
            With years of experience in the metalwork industry, Galaxy Fabrications has built 
            a reputation for delivering high-quality, precision-engineered metal products. 
            From structural steelwork to bespoke architectural elements, our team combines 
            traditional craftsmanship with state-of-the-art machinery.
          </p>
          <p>
            Our core mission is to provide reliable, durable, and highly customized solutions 
            for both commercial and residential projects. We believe in transparency, 
            dedication, and exceeding our clients' expectations on every build.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Exp.</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Focus</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
