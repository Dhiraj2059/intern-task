import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
        <FaLinkedin />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialLinks;