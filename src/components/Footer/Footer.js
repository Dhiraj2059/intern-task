import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Test Task</h3>
            <p>A unique blend of creative, editorial, digital and technical experts obsessed with getting quantifiable results.</p>
          </div>
          
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#team">Our Team</Link></li>
              <li><Link to="/#contact">Contact Us</Link></li>
              <li><Link to="/api-page">API Demo</Link></li>
            </ul>
          </div>
          
          {/* <div className="footer-section services">
            <h3>Our Services</h3>
            <ul>
              <li>Digital Marketing</li>
              <li>Website Development</li>
              <li>Social Engine Marketing</li>
              <li>Chat Bots Development</li>
              <li>Graphic & UI-UX Design</li>
            </ul>
          </div> */}
          
          <div className="footer-section contact">
            <h3>Contact Info</h3>
            <p><i className="address-icon"></i> Lalitpur, Nepal</p>
            <p><i className="email-icon"></i> info@dhirajran0307@gmail.com</p>
            <p><i className="phone-icon"></i> +977 9847435111</p>
            <p><i className="github-icon"></i> https://github.com/Dhiraj2059</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dhiraj Rana TaskTest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;