import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Web Development</h3>
            <p>We build websites that not only look great & work fast but that perform well with a seamless user experience and quantifiable results.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile App Development</h3>
            <p>Create powerful, responsive mobile applications that deliver exceptional user experiences across all platforms and devices.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>SEO Optimization</h3>
            <p>Improve your online visibility and drive more relevant traffic to your website with our comprehensive SEO strategies.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3>UI/UX Design</h3>
            <p>User experience (UX) and interface (UI) design goes beyond the appearance of a product. We design meaningful connections.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Digital Marketing</h3>
            <p>The best form of marketing doesn't feel like marketing. We provide a custom-made framework that enhances your online presence and sales.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3>Chat Bots Development</h3>
            <p>Automate customer interactions with intelligent chatbots that provide instant responses and improve customer satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;