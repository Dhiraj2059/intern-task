import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide slide-1">
          <div className="slide-content">
            <h1>Digital Marketing Experts</h1>
            <p>A unique blend of creative, editorial, digital and technical experts obsessed with getting quantifiable results.</p>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
        <div className="slide slide-2">
          <div className="slide-content">
            <h1>Web Development Solutions</h1>
            <p>We build websites of all types as per the requirements of our clients with seamless user experience.</p>
            <button className="cta-button">Our Services</button>
          </div>
        </div>
        <div className="slide slide-3">
          <div className="slide-content">
            <h1>Logo & Branding</h1>
            <p>User experience (UX) and interface (UI) design goes beyond the appearance of a product.</p>
            <button className="cta-button">Contact Us</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;