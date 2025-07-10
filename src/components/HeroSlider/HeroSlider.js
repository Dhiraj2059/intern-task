import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link for routing
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: 'https://source.unsplash.com/random/1600x900/?technology',
      title: 'Innovative Solutions',
      description: 'We create cutting-edge digital experiences that transform businesses',
      cta: 'Learn More',
      url: '/about'
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random/1600x900/?business',
      title: 'Strategic Development',
      description: 'Custom software solutions tailored to your business needs',
      cta: 'Our Services',
      url: '/services'
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/random/1600x900/?digital',
      title: 'Digital Excellence',
      description: 'Elevate your brand with our comprehensive digital services',
      cta: 'Contact Us',
      url: '/contact'
    }
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-slider">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <Link to={slide.url} className="cta-button">{slide.cta}</Link> {/* ✅ Use Link */}
            </div>
          </div>
        ))}
      </div>
      
      <div className="slider-controls">
        {slides.map((slide, index) => (
          <button 
            key={slide.id}
            className={`control-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
