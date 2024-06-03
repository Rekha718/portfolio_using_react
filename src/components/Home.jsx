
import React from 'react';
import '../styles/home.css';
import portfolioImage from '../assets/portfolio-image.jpg'; 

const Home = () => {
  return (
    <section id="home" className="home">
      <img src={portfolioImage} alt="Portfolio" className="portfolio-image" />
      <h1>Welcome to My Portfolio</h1>
      <p>I am a Web Developer.</p>
    </section>
  );
};

export default Home;
