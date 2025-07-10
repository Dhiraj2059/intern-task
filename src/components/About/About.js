import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>WHO WE ARE</h3>
            <p>A unique blend of creative, editorial, digital and technical experts obsessed with getting quantifiable results.</p>
            
            <h3>WHAT WE DO</h3>
            <p>Converge at the intersection of technology and human behavior. We capitalize on the perks of data-driven marketing.</p>
            
            <h3>WHY DO WE DO IT</h3>
            <p>Passion for excellence drives us. Curiosity keeps us alive.</p>
          </div>
          <div className="about-services">
            <div className="service-card">
              <h4>Digital Marketing</h4>
              <p>The best form of marketing doesn't feel like marketing. We provide a custom-made framework that enhances your online presence and sales.</p>
            </div>
            <div className="service-card">
              <h4>Development</h4>
              <p>We build websites that not only look great & work fast but that perform well with a seamless user experience and quantifiable results.</p>
            </div>
            <div className="service-card">
              <h4>Logo & Branding</h4>
              <p>User experience (UX) and interface (UI) design goes beyond the appearance of a product. We design meaningful connections between companies and customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;