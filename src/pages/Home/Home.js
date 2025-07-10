import React from 'react';
// import HeroSlider from '../../components/HeroSlider/HeroSlider'; // Adjust path if needed
import HeroSlider from '../../components/Slider/Slider';
import About from '../../components/About/About';
import Team from '../../components/Team/Team';
import Contact from '../../components/Contact/Contact';
import Services from '../../components/Services/Services';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSlider />
      <About />
      <Services />
      <Team />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default Home;